/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/js/api.js":
/*!**************************!*\
  !*** ./static/js/api.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Temporary API for interacting with the server.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


var API = {
  jwt: localStorage.getItem('jwt'),
  isLoggedIn: function isLoggedIn() {
    return !!this.jwt;
  },

  /**
     * The default options to use with fetching API calls
     * @return {Object}
     */
  headers: function headers() {
    var headers = {
      Accept: 'application/json'
    };

    if (this.jwt) {
      headers.Authorization = `Bearer ${this.jwt}`;
    }

    return headers;
  },
  userCount: function userCount() {
    var opts = {
      headers: {
        Accept: 'application/json'
      }
    };
    return fetch('/users/count', opts).then(function (res) {
      return res.json();
    }).then(function (body) {
      return body.count;
    });
  },
  assertJWT: function assertJWT() {
    if (!this.jwt) {
      throw new Error('No JWT go login..');
    }
  },
  verifyJWT: function verifyJWT() {
    var opts = {
      headers: {
        Authorization: `Bearer ${API.jwt}`,
        Accept: 'application/json'
      }
    };
    return fetch('/things/', opts).then(function (res) {
      return res.ok;
    });
  },
  createUser: function createUser(name, email, password) {
    var opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    };
    return fetch('/users/', opts).then(function (res) {
      if (!res.ok) {
        throw new Error('Repeating signup not permitted');
      }

      return res.json();
    }).then(function (body) {
      var jwt = body.jwt;
      localStorage.setItem('jwt', jwt);
      API.jwt = jwt;
    });
  },
  getUser: function getUser(id) {
    var opts = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API.jwt}`
      }
    };
    return fetch(`/users/${encodeURIComponent(id)}`, opts).then(function (res) {
      if (!res.ok) {
        throw new Error('Unable to access user info');
      }

      return res.json();
    });
  },
  addUser: function addUser(name, email, password) {
    var opts = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    };
    return fetch('/users/', opts).then(function (res) {
      if (!res.ok) {
        throw new Error('Failed to add new user');
      }
    });
  },
  editUser: function editUser(id, name, email, password, newPassword) {
    var opts = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: name,
        email: email,
        password: password,
        newPassword: newPassword
      })
    };
    return fetch(`/users/${encodeURIComponent(id)}`, opts).then(function (res) {
      if (!res.ok) {
        throw new Error('Failed to edit user');
      }
    });
  },
  addLocalDomain: function addLocalDomain(domainName) {
    var opts = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${window.API.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        domainName: domainName
      })
    };
    return fetch('/users/', opts).then(function (res) {
      if (!res.ok) {
        throw new Error('Failed to change domain name');
      }
    });
  },
  deleteUser: function deleteUser(id) {
    var opts = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API.jwt}`
      }
    };
    return fetch(`/users/${encodeURIComponent(id)}`, opts).then(function (res) {
      if (!res.ok) {
        throw new Error('Failed to delete user');
      }
    });
  },
  getAllUserInfo: function getAllUserInfo() {
    var opts = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API.jwt}`
      }
    };
    return fetch('/users/info', opts).then(function (response) {
      if (!response.ok) {
        throw new Error('Unable to access user info');
      }

      return response.json();
    });
  },
  login: function login(email, password) {
    var opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    };
    return fetch('/login/', opts).then(function (res) {
      if (!res.ok) {
        throw new Error('Incorrect username or password');
      }

      return res.json();
    }).then(function (body) {
      var jwt = body.jwt;
      localStorage.setItem('jwt', jwt);
      API.jwt = jwt;
    });
  },
  logout: function logout() {
    this.assertJWT();
    localStorage.removeItem('jwt');
    return fetch('/log-out', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API.jwt}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(function (res) {
      if (!res.ok) {
        console.error('Logout failed...');
      }
    });
  },
  setAddonConfig: function setAddonConfig(addonName, config) {
    var headers = {
      Authorization: `Bearer ${API.jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    var payload = {
      config: config
    };
    var body = JSON.stringify(payload);
    return fetch(`/addons/${encodeURIComponent(addonName)}/config`, {
      method: 'PUT',
      body: body,
      headers: headers
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Unexpected response code while setting add-on config');
      }
    });
  },
  setAddonSetting: function setAddonSetting(addonName, enabled) {
    var headers = {
      Authorization: `Bearer ${API.jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    var payload = {
      enabled: enabled
    };
    return fetch(`/addons/${encodeURIComponent(addonName)}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: headers
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Unexpected response code while setting add-on setting');
      }
    });
  },
  installAddon: function installAddon(addonName, addonUrl, addonChecksum) {
    var headers = {
      Authorization: `Bearer ${API.jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    var payload = {
      name: addonName,
      url: addonUrl,
      checksum: addonChecksum
    };
    return fetch('/addons', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: headers
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Unexpected response code while installing add-on.');
      }

      return response.json();
    });
  },
  uninstallAddon: function uninstallAddon(addonName) {
    var headers = {
      Authorization: `Bearer ${API.jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    return fetch(`/addons/${encodeURIComponent(addonName)}`, {
      method: 'DELETE',
      headers: headers
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Unexpected response code while uninstalling add-on.');
      }
    });
  },
  updateAddon: function updateAddon(addonName, addonUrl, addonChecksum) {
    var headers = {
      Authorization: `Bearer ${API.jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    var payload = {
      url: addonUrl,
      checksum: addonChecksum
    };
    return fetch(`/addons/${encodeURIComponent(addonName)}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: headers
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Unexpected response code while updating add-on.');
      }
    });
  },
  getExperimentSetting: function getExperimentSetting(experimentName) {
    var headers = {
      Authorization: `Bearer ${API.jwt}`,
      Accept: 'application/json'
    };
    return fetch(`/settings/experiments/${encodeURIComponent(experimentName)}`, {
      method: 'GET',
      headers: headers
    }).then(function (response) {
      if (!response.ok) {
        if (response.status === 404) {
          return false;
        }

        throw new Error(`Error getting ${experimentName}`);
      }

      return response.json().then(function (json) {
        return json.enabled;
      }).catch(function (e) {
        throw new Error(`Error getting ${experimentName} ${e}`);
      });
    });
  },
  setExperimentSetting: function setExperimentSetting(experimentName, enabled) {
    var headers = {
      Authorization: `Bearer ${API.jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    var payload = {
      enabled: enabled
    };
    return fetch(`/settings/experiments/${encodeURIComponent(experimentName)}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: headers
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Unexpected response code while setting experiment setting');
      }
    });
  },
  getUpdateStatus: function getUpdateStatus() {
    return fetch('/updates/status', {
      headers: this.headers()
    }).then(function (res) {
      return res.json();
    });
  },
  getUpdateLatest: function getUpdateLatest() {
    return fetch('/updates/latest', {
      headers: this.headers()
    }).then(function (res) {
      return res.json();
    });
  }
};
window.API = API;
module.exports = API;

/***/ }),

/***/ "./static/js/create-user.js":
/*!**********************************!*\
  !*** ./static/js/create-user.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Create User
 *
 * Implements a simple password confirmation step
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


var API = __webpack_require__(/*! ./api */ "./static/js/api.js");

(function () {
  var form = document.getElementById('create-user-form');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var name = document.getElementById('name');
  var confirmPassword = document.getElementById('confirm-password');
  var errorPasswordMismatch = document.getElementById('error-password-mismatch');
  var errorSubmission = document.getElementById('error-submission');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorSubmission.classList.add('hidden');

    if (password.value !== confirmPassword.value) {
      errorPasswordMismatch.classList.remove('hidden');
      return;
    } else {
      errorPasswordMismatch.classList.add('hidden');
    }

    var emailValue = email.value;
    var passwordValue = password.value;
    var nameValue = name.value;
    API.createUser(nameValue, emailValue, passwordValue).then(function () {
      window.location.href = '/';
    }).catch(function (err) {
      errorSubmission.classList.remove('hidden');
      errorSubmission.textContent = err.message;
      console.error(err);
    });
  });
})();

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./static/js/create-user.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./static/js/create-user.js */"./static/js/create-user.js");


/***/ })

/******/ });
//# sourceMappingURL=71ea1be41cdf77dc8352-create-user.js.map