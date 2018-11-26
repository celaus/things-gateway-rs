
mod users;
use std::collections::BTreeMap;
use std::sync::{Arc, RwLock};

use actix_web::{dev, fs, middleware, server, App, ws, HttpRequest, HttpResponse, Result};

use actix::*;
use crate::users::UserService;

struct UserCountHandler(UserService);

impl<S> dev::Handler<S> for UserCountHandler {
    type Result = HttpResponse;

    /// Handle request
    fn handle(&self, req: &HttpRequest<S>) -> Self::Result {
        let count = self.0.user_count();


        HttpResponse::Ok()
        .content_type("application/json")
        .json(count)
    }
}

fn ping(req: &HttpRequest) -> Result<HttpResponse> {
    Ok(HttpResponse::NoContent().into())
}




struct Ws;

impl Actor for Ws {
    type Context = ws::WebsocketContext<Self>;
}

/// Handler for ws::Message message
impl StreamHandler<ws::Message, ws::ProtocolError> for Ws {

    fn handle(&mut self, msg: ws::Message, ctx: &mut Self::Context) {
        match msg {
            ws::Message::Ping(msg) => ctx.pong(&msg),
            ws::Message::Text(text) => ctx.text(text),
            ws::Message::Binary(bin) => ctx.binary(bin),
            _ => (),
        }
    }
}



fn main() {
    ::std::env::set_var("RUST_LOG", "actix_web=info");
    ::std::env::set_var("RUST_BACKTRACE", "1");
    env_logger::init();

    let user_db = Arc::new(RwLock::new(BTreeMap::default()));

    let sys = actix::System::new("static_index");

    server::new(move || {
        let user_db_clone = user_db.clone();
        App::new()
            .middleware(middleware::Logger::default())
            .resource("/logs", |r| r.f(|req| ws::start(req, Ws)))
            .resource("/ping", |r| r.f(ping))
            .resource("/users/count", |r| r.h(UserCountHandler(UserService::with_db(user_db_clone))))
	        .handler(
                "/",
                fs::StaticFiles::new("./build/static/").unwrap().index_file("index.html")
            )
    }).bind("127.0.0.1:8000")
        .expect("Can not start server on given IP/Port")
        .start();

    println!("Started http server: 127.0.0.1:8000");
    let _ = sys.run();
}