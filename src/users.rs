use std::collections::BTreeMap;
use std::sync::{Arc, RwLock};

type User = (String, String); 

pub struct UserService {
    db: Arc<RwLock<BTreeMap<usize, User>>>
}

impl UserService {
    pub fn new() -> UserService {
        UserService { db: Arc::new(RwLock::new(BTreeMap::default())) }
    }

    pub fn with_db(db: Arc<RwLock<BTreeMap<usize, User>>>) -> UserService {
        UserService { db: db }
    }

    pub fn user_count(&self) -> usize {
        self.db.read().unwrap().len()
    }

    pub fn add(&mut self, user: User) -> usize {
        let user_id: usize =  { 
            
            // This is terrible. 
            let mut id: usize = rand::random::<usize>();
            while self.db.read().unwrap().contains_key(&id) {
                id = rand::random::<usize>();
            }
            id
        };

            
        self.db.write().unwrap().insert(user_id, user);
        user_id
    }
}