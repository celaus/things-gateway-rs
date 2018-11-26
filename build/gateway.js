require("source-map-support").install();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, author, license, bugs, homepage, dependencies, devDependencies, jest, default */
/***/ (function(module) {

module.exports = {"name":"things-gateway","version":"0.7.0","description":"Web of Things gateway","main":"src/app.js","scripts":{"test":"webpack && npm run lint && npm run mocha","lint":"eslint .","mocha":"./src/test/run-tests.sh","jest":"./src/test/run-tests.sh","yarn-check":"./src/test/yarn-test.sh","dependencies-check":"./src/test/dependencies-test.sh","cov":"NODE_TLS_REJECT_UNAUTHORIZED=0 jest --coverage","start":"webpack --display errors-only && node build/gateway.js","watch":"npm-run-all --parallel start watch:build","watch:build":"webpack --watch","debug-ide":"webpack && node --inspect=5858 build/gateway.js","debug":"webpack && node --inspect build/gateway.js","run-only":"node build/gateway.js"},"repository":{"type":"git","url":"git+https://github.com/mozilla-iot/gateway.git"},"author":"Mozilla IoT","license":"MPL-2.0","bugs":{"url":"https://github.com/mozilla-iot/gateway/issues"},"homepage":"https://iot.mozilla.org","dependencies":{"ajv":"^6.5.5","archiver":"^3.0.0","asn1.js":"^5.0.1","bcryptjs":"^2.4.3","body-parser":"^1.18.3","callsites":"^2.0.0","compression":"^1.7.3","config":"^2.0.1","dnssd":"^0.4.1","event-to-promise":"^0.8.0","express":"^4.16.4","express-fileupload":"^1.0.0","express-handlebars":"^3.0.0","express-promise-router":"^3.0.3","express-ws":"^4.0.0","gateway-addon":"https://github.com/mozilla-iot/gateway-addon-node","greenlock":"^2.2.19","handlebars":"^4.0.12","ip-regex":"^3.0.0","jsonwebtoken":"^8.3.0","le-acme-core":"^2.1.3","le-challenge-dns":"^2.3.2","mkdirp":"^0.5.1","nanomsg":"^4.0.2","ncp":"^2.0.0","nocache":"^2.0.0","node-fetch":"^2.2.0","node-getopt":"^0.3.2","promisepipe":"^3.0.0","rimraf":"^2.6.2","source-map-support":"^0.5.9","sqlite3":"^4.0.3","string-format":"^2.0.0","tar":"^4.4.6","tmp":"^0.0.33","uuid":"^3.3.2","web-push":"^3.3.3","winston":"^3.1.0","winston-daily-rotate-file":"^3.3.5","ws":"^6.1.0"},"devDependencies":{"@babel/core":"^7.0.0-beta.49","@babel/plugin-syntax-dynamic-import":"^7.0.0-beta.49","@babel/polyfill":"^7.0.0-beta.49","@babel/preset-env":"^7.0.0-beta.49","@types/asn1js":"^0.0.1","@types/express":"^4.16.0","@types/node":"^10.12.0","@webcomponents/webcomponentsjs":"^2.1.3","awesome-typescript-loader":"^5.2.1","babel-eslint":"^10.0.1","babel-loader":"^8.0.0-beta","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.7.0","cache-loader":"^1.2.2","chai":"^4.2.0","chai-http":"^3.0.0","clean-webpack-plugin":"^0.1.19","codecov":"^3.1.0","copy-webpack-plugin":"^4.5.4","css-loader":"^1.0.0","eslint":"^5.8.0","eslint-plugin-html":"^4.0.6","extract-text-webpack-plugin":"^4.0.0-beta.0","file-loader":"^2.0.0","highlightjs":"^9.12.0","html-loader":"^0.5.5","html-webpack-plugin":"^3.2.0","jest":"^23.6.0","jsdom":"^12.2.0","jsonfile":"^5.0.0","jszip":"^3.1.5","mini-css-extract-plugin":"^0.4.4","nock":"^10.0.1","node-rest-client":"^3.1.0","npm-run-all":"^4.1.3","page":"^1.11.0","raw-loader":"^0.5.1","selenium-standalone":"^6.15.3","simple-oauth2":"^2.2.1","sinon":"^7.1.0","speaktome-api":"^0.2.1","style-loader":"^0.23.1","ts-jest":"^23.10.4","typescript":"^2.9.2","url-loader":"^1.1.2","webdriverio":"^4.14.0","webpack":"^4.23.1","webpack-cli":"^3.1.2"},"jest":{"coverageDirectory":"./coverage/","moduleFileExtensions":["ts","tsx","js","jsx","json"],"testMatch":["**/test/**/*-test.(ts|tsx|js)"],"transform":{"^.+\\.tsx?$":"ts-jest/preprocessor","(validator\\.js?$|speech\\.js?$|schema-utils\\.js)":"babel-jest"},"setupTestFrameworkScriptFile":"<rootDir>/src/test/common.js","testEnvironment":"node"}};

/***/ }),

/***/ "./src sync recursive":
/*!******************!*\
  !*** ./src sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive";

/***/ }),

/***/ "./src/addon-manager.js":
/*!******************************!*\
  !*** ./src/addon-manager.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Manages all of the add-ons used in the system.
 *
 * @module AddonManager
 */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */



const config = __webpack_require__(/*! config */ "config");
const Constants = __webpack_require__(/*! ./constants */ "./src/constants.js");
const Deferred = __webpack_require__(/*! ./deferred */ "./src/deferred.js");
const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
const Platform = __webpack_require__(/*! ./platform */ "./src/platform.js");
const Settings = __webpack_require__(/*! ./models/settings */ "./src/models/settings.js");
const UserProfile = __webpack_require__(/*! ./user-profile */ "./src/user-profile.js");
const Utils = __webpack_require__(/*! ./utils */ "./src/utils.js");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const rimraf = __webpack_require__(/*! rimraf */ "rimraf");
const semver = __webpack_require__(/*! semver */ "semver");
const tar = __webpack_require__(/*! tar */ "tar");
const os = __webpack_require__(/*! os */ "os");
const promisePipe = __webpack_require__(/*! promisepipe */ "promisepipe");
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const {URLSearchParams} = __webpack_require__(/*! url */ "url");

const pkg = __webpack_require__(/*! ../package.json */ "./package.json");

let PluginClient, PluginServer;

// Use webpack provided require for dynamic includes from the bundle  .
const dynamicRequire = (() => {
  if (true) {
    // eslint-disable-next-line no-undef
    return require;
  }
  return __webpack_require__("./src sync recursive");
})();

/**
 * @class AddonManager
 * @classdesc The AddonManager will load any add-ons from the 'addons'
 * directory. See loadAddons() for details.
 */
class AddonManager extends EventEmitter {

  constructor() {
    super();
    this.adapters = new Map();
    this.devices = {};
    this.deferredAdd = null;
    this.deferredRemove = null;
    this.addonsLoaded = false;
    this.installedAddons = new Set();
    this.deferredWaitForAdapter = new Map();
    this.pluginServer = null;
  }

  /**
   * Adds an adapter to the collection of adapters managed by AddonManager.
   * This function is typically called when loading add-ons.
   */
  addAdapter(adapter) {
    if (!adapter.name) {
      adapter.name = adapter.constructor.name;
    }
    this.adapters.set(adapter.id, adapter);

    /**
     * Adapter added event.
     *
     * This is event is emitted whenever a new adapter is loaded.
     *
     * @event adapterAdded
     * @type  {Adapter}
     */
    this.emit(Constants.ADAPTER_ADDED, adapter);

    const deferredWait = this.deferredWaitForAdapter.get(adapter.id);
    if (deferredWait) {
      this.deferredWaitForAdapter.delete(adapter.id);
      deferredWait.resolve(adapter);
    }
  }

  /**
   * @method addNewThing
   * Initiates pairing on all of the adapters that support it.
   * The user then presses the "button" on the device to be added.
   * @returns A promise that resolves to the newly added device.
   */
  addNewThing(pairingTimeout) {
    const deferredAdd = new Deferred();

    if (this.deferredAdd) {
      deferredAdd.reject('Add already in progress');
    } else if (this.deferredRemove) {
      deferredAdd.reject('Remove already in progress');
    } else {
      this.deferredAdd = deferredAdd;
      this.adapters.forEach((adapter) => {
        console.log('About to call startPairing on', adapter.name);
        adapter.startPairing(pairingTimeout);
      });
      this.pairingTimeout = setTimeout(() => {
        console.log('Pairing timeout');
        this.emit(Constants.PAIRING_TIMEOUT);
        this.cancelAddNewThing();
      }, pairingTimeout * 1000);
    }

    return deferredAdd.promise;
  }

  /**
   * @method cancelAddNewThing
   *
   * Cancels a previous addNewThing request.
   */
  cancelAddNewThing() {
    const deferredAdd = this.deferredAdd;

    if (this.pairingTimeout) {
      clearTimeout(this.pairingTimeout);
      this.pairingTimeout = null;
    }

    if (deferredAdd) {
      this.adapters.forEach((adapter) => {
        adapter.cancelPairing();
      });
      this.deferredAdd = null;
      deferredAdd.reject('addNewThing cancelled');
    }
  }

  /**
   * @method cancelRemoveThing
   *
   * Cancels a previous removeThing request.
   */
  cancelRemoveThing(thingId) {
    const deferredRemove = this.deferredRemove;
    if (deferredRemove) {
      const device = this.getDevice(thingId);
      if (device) {
        const adapter = device.adapter;
        if (adapter) {
          adapter.cancelRemoveThing(device);
        }
      }
      this.deferredRemove = null;
      deferredRemove.reject('removeThing cancelled');
    }
  }

  /**
   * @method getAdapter
   * @returns Returns the adapter with the indicated id.
   */
  getAdapter(adapterId) {
    return this.adapters.get(adapterId);
  }

  /**
   * @method getAdaptersByPackageName
   * @returns Returns a list of loaded adapters with the given package name.
   */
  getAdaptersByPackageName(packageName) {
    return Array.from(this.adapters.values()).filter(
      (a) => a.getPackageName() === packageName);
  }

  /**
   * @method getAdapters
   * @returns Returns a Map of the loaded adapters. The dictionary
   *          key corresponds to the adapter id.
   */
  getAdapters() {
    return this.adapters;
  }

  /**
   * @method getDevice
   * @returns Returns the device with the indicated id.
   */
  getDevice(id) {
    return this.devices[id];
  }

  /**
   * @method getDevices
   * @returns Returns an dictionary of all of the known devices.
   *          The dictionary key corresponds to the device id.
   */
  getDevices() {
    return this.devices;
  }

  /**
   * @method getPlugin
   *
   * Returns a previously registered plugin.
   */
  getPlugin(pluginId) {
    if (this.pluginServer) {
      return this.pluginServer.getPlugin(pluginId);
    }
  }

  /**
   * @method getThings
   * @returns Returns a dictionary of all of the known things.
   *          The dictionary key corresponds to the device id.
   */
  getThings() {
    const things = [];
    for (const thingId in this.devices) {
      things.push(this.getThing(thingId));
    }
    return things;
  }

  /**
   * @method getThing
   * @returns Returns the thing with the indicated id.
   */
  getThing(thingId) {
    const device = this.getDevice(thingId);
    if (device) {
      return device.asThing();
    }
  }

  /**
   * @method getPropertyDescriptions
   * @returns Retrieves all of the properties associated with the thing
   *          identified by `thingId`.
   */
  getPropertyDescriptions(thingId) {
    const device = this.getDevice(thingId);
    if (device) {
      return device.getPropertyDescriptions();
    }
  }

  /**
   * @method getPropertyDescription
   * @returns Retrieves the property named `propertyName` from the thing
   *          identified by `thingId`.
   */
  getPropertyDescription(thingId, propertyName) {
    const device = this.getDevice(thingId);
    if (device) {
      return device.getPropertyDescription(propertyName);
    }
  }

  /**
   * @method getProperty
   * @returns a promise which resolves to the retrieved value of `propertyName`
   *          from the thing identified by `thingId`.
   */
  getProperty(thingId, propertyName) {
    const device = this.getDevice(thingId);
    if (device) {
      return device.getProperty(propertyName);
    }

    return Promise.reject(`getProperty: device: ${thingId} not found.`);
  }

  /**
   * @method setProperty
   * @returns a promise which resolves to the updated value of `propertyName`
   *          for the thing identified by `thingId`.
   */
  setProperty(thingId, propertyName, value) {
    const device = this.getDevice(thingId);
    if (device) {
      return device.setProperty(propertyName, value);
    }

    return Promise.reject(`setProperty: device: ${thingId} not found.`);
  }

  /**
   * @method setPin
   * @returns a promise which resolves when the PIN has been set.
   */
  setPin(thingId, pin) {
    const device = this.getDevice(thingId);
    if (device) {
      return device.adapter.setPin(thingId, pin);
    }

    return Promise.reject(`setPin: device ${thingId} not found.`);
  }

  /**
   * @method requestAction
   * @returns a promise which resolves when the action has been requested.
   */
  requestAction(thingId, actionId, actionName, input) {
    const device = this.getDevice(thingId);
    if (device) {
      return device.requestAction(actionId, actionName, input);
    }

    return Promise.reject(`requestAction: device: ${thingId} not found.`);
  }

  /**
   * @method removeAction
   * @returns a promise which resolves when the action has been removed.
   */
  removeAction(thingId, actionId, actionName) {
    const device = this.getDevice(thingId);
    if (device) {
      return device.removeAction(actionId, actionName);
    }

    return Promise.reject(`removeAction: device: ${thingId} not found.`);
  }

  /**
   * @method handleDeviceAdded
   *
   * Called when the indicated device has been added to an adapter.
   */
  handleDeviceAdded(device) {
    this.devices[device.id] = device;
    const thing = device.asThing();

    /**
     * Thing added event.
     *
     * This event is emitted whenever a new thing is added.
     *
     * @event thingAdded
     * @type  {Thing}
     */
    this.emit(Constants.THING_ADDED, thing);

    // If this device was added in response to addNewThing, then
    // We need to cancel pairing mode on all of the "other" adapters.

    const deferredAdd = this.deferredAdd;
    if (deferredAdd) {
      this.deferredAdd = null;
      this.adapters.forEach((adapter) => {
        if (adapter !== device.adapter) {
          adapter.cancelPairing();
        }
      });
      if (this.pairingTimeout) {
        clearTimeout(this.pairingTimeout);
        this.pairingTimeout = null;
      }
      deferredAdd.resolve(thing);
    }
  }

  /**
   * @method handleDeviceRemoved
   * Called when the indicated device has been removed an adapter.
   */
  handleDeviceRemoved(device) {
    delete this.devices[device.id];
    const thing = device.asThing();

    /**
     * Thing removed event.
     *
     * This event is emitted whenever a new thing is removed.
     *
     * @event thingRemoved
     * @type  {Thing}
     */
    this.emit(Constants.THING_REMOVED, thing);

    const deferredRemove = this.deferredRemove;
    if (deferredRemove && deferredRemove.adapter == device.adapter) {
      this.deferredRemove = null;
      deferredRemove.resolve(device.id);
    }
  }

  /**
   * @method validateManifestObject
   *
   * Verifies one level of an object, and recurses as required.
   */
  validateManifestObject(prefix, object, template) {
    for (const key in template) {
      if (key in object) {
        const objectVal = object[key];
        const templateVal = template[key];
        if (typeof objectVal !== typeof templateVal) {
          return `Expecting ${prefix}${key} to have type: ${
            typeof templateVal}, found: ${typeof objectVal}`;
        }
        if (typeof objectVal === 'object') {
          if (Array.isArray(objectVal)) {
            if (templateVal.length > 0) {
              const expectedType = typeof templateVal[0];
              for (const val of objectVal) {
                if (typeof val !== expectedType) {
                  return `Expecting all values in ${prefix}${key} to be of ` +
                    `type ${expectedType}`;
                }
              }
            }
          } else {
            const err = this.validateManifestObject(`${prefix + key}.`,
                                                    objectVal, templateVal);
            if (err) {
              return err;
            }
          }
        }
      } else {
        return `Manifest is missing: ${prefix}${key}`;
      }
    }
  }

  /**
   * @method validateManifest
   *
   * Verifies that the manifest looks valid. We only need to validate
   * fields that we actually use.
   */
  validateManifest(manifest) {
    const manifestTemplate = {
      name: '',
      version: '',
      files: [''],
      moziot: {
        api: {
          min: 0,
          max: 0,
        },
      },
    };
    if (config.get('ipc.protocol') !== 'inproc') {
      // If we're not using in-process plugins, then
      // we also need the exec keyword to exist.
      manifestTemplate.moziot.exec = '';
    }
    return this.validateManifestObject('', manifest, manifestTemplate);
  }

  /**
   * @method loadAddon
   *
   * Loads add-on with the given package name.
   *
   * @param {String} packageName The package name of the add-on to load.
   * @returns A promise which is resolved when the add-on is loaded.
   */
  async loadAddon(packageName) {
    const addonPath = path.join(UserProfile.addonsDir, packageName);

    // Skip if there's no package.json file.
    const packageJson = path.join(addonPath, 'package.json');
    if (!fs.lstatSync(packageJson).isFile()) {
      const err = `package.json not found: ${packageJson}`;
      console.error(err);
      return Promise.reject(err);
    }

    // Read the package.json file.
    let data;
    try {
      data = fs.readFileSync(packageJson);
    } catch (e) {
      const err =
        `Failed to read package.json: ${packageJson}\n${e}`;
      console.error(err);
      return Promise.reject(err);
    }

    let manifest;
    try {
      manifest = JSON.parse(data);
    } catch (e) {
      const err =
        `Failed to parse package.json: ${packageJson}\n${e}`;
      console.error(err);
      return Promise.reject(err);
    }

    // Verify that the name in the package matches the packageName
    if (manifest.name != packageName) {
      const err = `Name from package.json "${manifest.name}" doesn't ` +
                  `match the name from list.json "${packageName}"`;
      console.error(err);
      return Promise.reject(err);
    }

    // Verify the files list in the package.
    if (!manifest.hasOwnProperty('files') || manifest.files.length === 0) {
      const err = `files property missing for package ${manifest.name}`;
      console.error(err);
      return Promise.reject(err);
    }

    if (fs.existsSync(path.join(addonPath, '.git'))) {
      // This looks like a git repository, so we'll skip checking the
      // SHA256SUMS file.
      const sha256SumsIndex = manifest.files.indexOf('SHA256SUMS');
      if (sha256SumsIndex >= 0) {
        manifest.files.splice(sha256SumsIndex, 1);
        console.log(`Not checking SHA256SUMS file for ${manifest.name} ` +
        'since a .git directory was detected');
      }
    }

    for (let fname of manifest.files) {
      fname = path.join(addonPath, fname);
      if (!fs.existsSync(fname)) {
        const err = `Package ${manifest.name} missing file: ${fname}`;
        console.error(err);
        return Promise.reject(err);
      }
    }

    // If a SHA256SUMS file is present, verify it. This file is of the format:
    // <checksum> <filename>
    //
    // To generate a file of this type, you can use:
    //   `rm -f SHA256SUMS && sha256sum file1 file2 ... > SHA256SUMS`
    // To verify, use:
    //   `sha256sum --check SHA256SUMS`
    if (manifest.files.includes('SHA256SUMS')) {
      const sumsFile = path.join(addonPath, 'SHA256SUMS');
      try {
        const data = fs.readFileSync(sumsFile, 'utf8');
        const lines = data.trim().split(/\r?\n/);
        for (const line of lines) {
          const checksum = line.slice(0, 64);
          const filename = line.slice(64).trimLeft();

          if (Utils.hashFile(path.join(addonPath, filename)) !== checksum) {
            const err =
              `Checksum failed in package ${manifest.name}: ${filename}`;
            console.error(err);
            return Promise.reject(err);
          }
        }
      } catch (e) {
        const err =
          `Failed to read SHA256SUMS for package ${manifest.name}: ${e}`;
        console.error(err);
        return Promise.reject(err);
      }
    }

    // Verify that important fields exist in the manifest
    const err = this.validateManifest(manifest);
    if (err) {
      return Promise.reject(
        `Error found in manifest for ${packageName}\n${err}`);
    }

    // Verify API version.
    const apiVersion = config.get('addonManager.api');
    if (manifest.moziot.api.min > apiVersion ||
        manifest.moziot.api.max < apiVersion) {
      const err = `API mismatch for package: ${manifest.name}\nCurrent: ${
        apiVersion} Supported: ${manifest.moziot.api.min}-${
        manifest.moziot.api.max}`;
      console.error(err);
      return Promise.reject(err);
    }

    // Get any saved settings for this add-on.
    const key = `addons.${manifest.name}`;
    const savedSettings = await Settings.get(key);
    const newSettings = Object.assign({}, manifest);
    if (savedSettings) {
      // Overwrite config and enablement values.
      newSettings.moziot.enabled = savedSettings.moziot.enabled;
      newSettings.moziot.config = Object.assign(manifest.moziot.config || {},
                                                savedSettings.moziot.config);
    } else {
      if (!manifest.moziot.hasOwnProperty('enabled')) {
        newSettings.moziot.enabled = false;
      }

      if (!newSettings.moziot.hasOwnProperty('config')) {
        newSettings.moziot.config = {};
      }
    }

    // Update the settings database.
    await Settings.set(key, newSettings);
    this.installedAddons.add(packageName);

    // If this add-on is not explicitly enabled, move on.
    if (!newSettings.moziot.enabled) {
      const err = `Package not enabled: ${manifest.name}`;
      console.log(err);
      return Promise.reject(err);
    }

    const errorCallback = function(packageName, errorStr) {
      console.error('Failed to load', packageName, '-', errorStr);
    };

    // Load the add-on
    console.log('Loading add-on:', manifest.name);
    if (config.get('ipc.protocol') === 'inproc') {
      // This is a special case where we load the adapter directly
      // into the gateway, but we use IPC comms to talk to the
      // add-on (i.e. for testing)
      const pluginClient = new PluginClient(manifest.name,
                                            {verbose: false});
      try {
        const addonManagerProxy = await pluginClient.register();
        console.log('Loading add-on', manifest.name, 'as plugin');
        const addonLoader = dynamicRequire(addonPath);
        addonLoader(addonManagerProxy, newSettings, errorCallback);
      } catch (e) {
        const err =
          `Failed to register package with gateway: ${manifest.name}\n${e}`;
        console.error(err);
        return Promise.reject(err);
      }
    } else {
      // This is the normal plugin adapter case, tell the PluginServer
      // to load the plugin.
      this.pluginServer.loadPlugin(addonPath, newSettings);
    }
  }

  /**
   * @method loadAddons
   * Loads all of the configured add-ons from the addons directory.
   */
  loadAddons() {
    if (this.addonsLoaded) {
      // This is kind of a hack, but it allows the gateway to restart properly
      // when switching between http and https modes.
      return;
    }
    this.addonsLoaded = true;

    // Load the Plugin Server
    PluginClient = __webpack_require__(/*! ./plugin/plugin-client */ "./src/plugin/plugin-client.js");
    PluginServer = __webpack_require__(/*! ./plugin/plugin-server */ "./src/plugin/plugin-server.js");

    this.pluginServer = new PluginServer(this, {verbose: false});

    // Load the add-ons

    const addonManager = this;
    const addonPath = UserProfile.addonsDir;

    // Search add-ons directory
    fs.readdir(addonPath, async function(err, files) {
      if (err) {
        // This should probably never happen.
        console.error('Failed to search add-ons directory');
        console.error(err);
        return;
      }

      for (const addonName of files) {
        // Skip if not a directory. Use stat rather than lstat such that we
        // also load through symlinks.
        if (!fs.statSync(path.join(addonPath, addonName)).isDirectory()) {
          continue;
        }

        addonManager.loadAddon(addonName).catch((err) => {
          console.error(`Failed to load add-on: ${addonName}\n${err}`);
        });
      }
    });

    if (true) {
      // Check for add-ons in 10 seconds (allow add-ons to load first).
      setTimeout(() => {
        this.updateAddons();

        // Check every day.
        const delay = 24 * 60 * 60 * 1000;
        setInterval(this.updateAddons, delay);
      }, 10000);
    }
  }

  /**
   * @method removeThing
   *
   * Initiates removing a particular device.
   * @returns A promise that resolves to the device which was actually removed.
   * Note that it's possible that the device actually removed might
   * not be the same as the one requested. This can occur with zwave for
   * example if the user presses the button on a device which is different
   * from the one that they requested removal of.
   */
  removeThing(thingId) {
    const deferredRemove = new Deferred();

    if (this.deferredAdd) {
      deferredRemove.reject('Add already in progress');
    } else if (this.deferredRemove) {
      deferredRemove.reject('Remove already in progress');
    } else {
      const device = this.getDevice(thingId);
      if (device) {
        deferredRemove.adapter = device.adapter;
        this.deferredRemove = deferredRemove;
        device.adapter.removeThing(device);
      } else {
        deferredRemove.resolve(thingId);
      }
    }

    return deferredRemove.promise;
  }

  /**
   * @method unloadAddons
   * Unloads all of the loaded add-ons.
   *
   * @returns a promise which is resolved when all of the add-ons
   *          are unloaded.
   */
  unloadAddons() {
    if (!this.addonsLoaded) {
      // The add-ons are not currently loaded, no need to unload.
      return Promise.resolve();
    }

    const unloadPromises = [];
    // unload the adapters in the reverse of the order that they were loaded.
    for (const adapterId of Array.from(this.adapters.keys()).reverse()) {
      unloadPromises.push(this.unloadAdapter(adapterId));
    }

    this.addonsLoaded = false;
    return Promise.all(unloadPromises).then(() => {
      if (this.pluginServer) {
        this.pluginServer.shutdown();
      }
    });
  }

  /**
   * @method unloadAdapter
   * Unload the given adapter.
   *
   * @param {String} id The ID of the adapter to unload.
   * @returns A promise which is resolved when the adapter is unloaded.
   */
  unloadAdapter(id) {
    if (!this.addonsLoaded) {
      // The add-ons are not currently loaded, no need to unload.
      return Promise.resolve();
    }

    const adapter = this.getAdapter(id);
    if (typeof adapter === 'undefined') {
      // This adapter wasn't loaded.
      return Promise.resolve();
    }

    console.log('Unloading', adapter.name);
    this.adapters.delete(adapter.id);
    return adapter.unload();
  }

  /**
   * @method unloadAddon
   * Unload add-on with the given package name.
   *
   * @param {String} packageName The package name of the add-on to unload.
   * @param {Boolean} wait Whether or not to wait for unloading to finish
   * @returns A promise which is resolved when the add-on is unloaded.
   */
  unloadAddon(packageName, wait) {
    if (!this.addonsLoaded) {
      // The add-ons are not currently loaded, no need to unload.
      return Promise.resolve();
    }

    const plugin = this.getPlugin(packageName);
    let pluginProcess = {};
    if (plugin) {
      pluginProcess = plugin.process;
    }

    const adapters = this.getAdaptersByPackageName(packageName);
    const adapterIds = adapters.map((a) => a.id);
    const unloadPromises = [];
    if (adapters.length > 0) {
      for (const a of adapters) {
        console.log('Unloading', a.name);
        unloadPromises.push(a.unload());
        this.adapters.delete(a.id);
      }
    } else if (plugin) {
      // If there are no adapters, manually unload the plugin, otherwise it
      // will just restart. Note that if the addon is disabled, then
      // there might not be a plugin either.
      plugin.unload();
    }

    // Give the process 3 seconds to exit before killing it.
    const cleanup = () => {
      setTimeout(() => {
        if (pluginProcess.p) {
          console.log(`Killing ${packageName} plugin.`);
          pluginProcess.p.kill();
        }

        // Remove devices owned by this add-on.
        for (const deviceId of Object.keys(this.devices)) {
          if (adapterIds.includes(this.devices[deviceId].adapter.id)) {
            this.handleDeviceRemoved(this.devices[deviceId]);
          }
        }
      }, Constants.UNLOAD_PLUGIN_KILL_DELAY);
    };

    const all =
      Promise.all(unloadPromises).then(() => cleanup(), () => cleanup());

    if (wait) {
      // If wait was set, wait 3 seconds + a little for the process to die.
      // 3 seconds, because that's what is used in unloadAddon().
      return all.then(() => {
        return new Promise((resolve) => {
          setTimeout(resolve, Constants.UNLOAD_PLUGIN_KILL_DELAY + 500);
        });
      });
    }

    return all;
  }

  /**
   * @method isAddonInstalled
   *
   * @param {String} packageName The package name to check
   * @returns Boolean indicating whether or not the package name is installed
   *          on the system.
   */
  isAddonInstalled(packageName) {
    return this.installedAddons.has(packageName);
  }

  /**
   * Install an add-on.
   *
   * @param {String} name The package name
   * @param {String} url The package URL
   * @param {String} checksum SHA-256 checksum of the package
   * @param {Boolean} enable Whether or not to enable the add-on after install
   * @returns A Promise that resolves when the add-on is installed.
   */
  async installAddonFromUrl(name, url, checksum, enable) {
    const tempPath = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`);
    const destPath = path.join(tempPath, `${name}.tar.gz`);

    console.log(`Fetching add-on ${url} as ${destPath}`);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
      }

      const dest = fs.createWriteStream(destPath);
      await promisePipe(res.body, dest);
    } catch (e) {
      rimraf(tempPath, {glob: false}, (e) => {
        if (e) {
          console.error(`Error removing temp directory: ${tempPath}\n${e}`);
        }
      });
      const err = `Failed to download add-on: ${name}\n${e}`;
      console.error(err);
      return Promise.reject(err);
    }

    if (Utils.hashFile(destPath) !== checksum.toLowerCase()) {
      rimraf(tempPath, {glob: false}, (e) => {
        if (e) {
          console.error(`Error removing temp directory: ${tempPath}\n${e}`);
        }
      });
      const err = `Checksum did not match for add-on: ${name}`;
      console.error(err);
      return Promise.reject(err);
    }

    let success = false, err;
    try {
      await this.installAddon(name, destPath, enable);
      success = true;
    } catch (e) {
      err = e;
    }

    rimraf(tempPath, {glob: false}, (e) => {
      if (e) {
        console.error(`Error removing temp directory: ${tempPath}\n${e}`);
      }
    });

    if (!success) {
      console.error(err);
      return Promise.reject(err);
    }
  }

  /**
   * @method installAddon
   *
   * @param {String} packageName The package name to install
   * @param {String} packagePath Path to the package tarball
   * @param {Boolean} enable Whether or not to enable the add-on after install
   * @returns A promise that resolves when the package is installed.
   */
  async installAddon(packageName, packagePath, enable) {
    if (!this.addonsLoaded) {
      const err =
        'Cannot install add-on before other add-ons have been loaded.';
      console.error(err);
      return Promise.reject(err);
    }

    if (!fs.lstatSync(packagePath).isFile()) {
      const err = `Cannot extract invalid path: ${packagePath}`;
      console.error(err);
      return Promise.reject(err);
    }

    const addonPath = path.join(UserProfile.addonsDir, packageName);

    try {
      // Create the add-on directory, if necessary
      if (!fs.existsSync(addonPath)) {
        fs.mkdirSync(addonPath);
      }
    } catch (e) {
      const err = `Failed to create add-on directory: ${addonPath}\n${e}`;
      console.error(err);
      return Promise.reject(err);
    }

    const cleanup = () => {
      if (fs.lstatSync(addonPath).isDirectory()) {
        rimraf(addonPath, {glob: false}, (e) => {
          if (e) {
            console.error(`Error removing ${packageName}: ${e}`);
          }
        });
      }
    };

    console.log(`Expanding add-on ${packagePath} into ${addonPath}`);

    try {
      // Try to extract the tarball
      await tar.x({file: packagePath, strip: 1, cwd: addonPath}, ['package']);
    } catch (e) {
      // Clean up if extraction failed
      cleanup();

      const err = `Failed to extract package: ${packagePath}\n${e}`;
      console.error(err);
      return Promise.reject(err);
    }

    // Update the saved settings (if any) and enable the add-on
    const key = `addons.${packageName}`;
    let savedSettings = await Settings.get(key);
    if (savedSettings) {
      // Only enable if we're supposed to. Otherwise, keep whatever the current
      // setting is.
      if (enable) {
        savedSettings.moziot.enabled = true;
      }
    } else {
      // If this add-on is brand new, use the passed-in enable flag.
      savedSettings = {
        moziot: {
          enabled: enable,
        },
      };
    }
    await Settings.set(key, savedSettings);

    if (savedSettings.moziot.enabled) {
      // Now, load the add-on
      try {
        await this.loadAddon(packageName);
      } catch (e) {
        // Clean up if loading failed
        cleanup();
        return Promise.reject(`Failed to load add-on: ${packageName}\n${e}`);
      }
    }
  }

  /**
   * @method uninstallAddon
   *
   * @param {String} packageName The package name to uninstall
   * @param {Boolean} wait Whether or not to wait for unloading to finish
   * @param {Boolean} disable Whether or not to disable the add-on
   * @returns A promise that resolves when the package is uninstalled.
   */
  async uninstallAddon(packageName, wait, disable) {
    try {
      // Try to gracefully unload
      await this.unloadAddon(packageName, wait);
    } catch (e) {
      console.error(`Failed to unload ${packageName} properly: ${e}`);
      // keep going
    }

    const addonPath = path.join(UserProfile.addonsDir, packageName);

    // Unload this module from the require cache
    Object.keys(__webpack_require__.c).map((x) => {
      if (x.startsWith(addonPath)) {
        delete __webpack_require__.c[x];
      }
    });

    // Remove the package from the file system
    if (fs.lstatSync(addonPath).isDirectory()) {
      rimraf(addonPath, {glob: false}, (e) => {
        if (e) {
          console.error(`Error removing ${packageName}: ${e}`);
        }
      });
    }

    // Update the saved settings and disable the add-on
    if (disable) {
      const key = `addons.${packageName}`;
      const savedSettings = await Settings.get(key);
      if (savedSettings) {
        savedSettings.moziot.enabled = false;
        await Settings.set(key, savedSettings);
      }
    }

    // Remove from our list of installed add-ons
    this.installedAddons.delete(packageName);
  }

  /**
   * @method waitForAdapter
   *
   * Returns a promise which resolves to the adapter with the indicated id.
   * This function is really only used to support testing and
   * ensure that tests don't proceed until
   */
  waitForAdapter(adapterId) {
    const adapter = this.getAdapter(adapterId);
    if (adapter) {
      // The adapter already exists, just create a Promise
      // that resolves to that.
      return Promise.resolve(adapter);
    }

    let deferredWait = this.deferredWaitForAdapter.get(adapterId);
    if (!deferredWait) {
      // No deferred wait currently setup. Set a new one up.
      deferredWait = new Deferred();
      this.deferredWaitForAdapter.set(adapterId, deferredWait);
    }

    return deferredWait.promise;
  }

  /**
   * @method updateAddons
   *
   * Attempt to update all installed add-ons.
   *
   * @returns A promise which is resolved when updating is complete.
   */
  async updateAddons() {
    const url = config.get('addonManager.listUrl');
    const api = config.get('addonManager.api');
    const architecture = Platform.getArchitecture();
    const version = pkg.version;
    const nodeVersion = Platform.getNodeVersion();
    const pythonVersions = Platform.getPythonVersions();
    const addonPath = UserProfile.addonsDir;
    const available = {};

    console.log('Checking for add-on updates...');

    try {
      const params = new URLSearchParams();
      params.set('api', api);
      params.set('arch', architecture);
      params.set('version', version);
      params.set('node', nodeVersion);

      if (pythonVersions && pythonVersions.length > 0) {
        params.set('python', pythonVersions.join(','));
      }

      const response = await fetch(`${url}?${params.toString()}`, {
        headers: {
          Accept: 'application/json',
          'User-Agent': `mozilla-iot-gateway/${version}`,
        },
      });
      const list = await response.json();

      for (const addon of list) {
        available[addon.name] = {
          version: addon.version,
          url: addon.url,
          checksum: addon.checksum,
        };
      }
    } catch (e) {
      console.error('Failed to parse add-on list.');
      return;
    }

    // Try to update what we can. Don't use the installedAddons set because it
    // doesn't contain add-ons that failed to load properly.
    fs.readdir(addonPath, async (err, files) => {
      if (err) {
        console.error('Failed to search add-on directory');
        console.error(err);
        return;
      }

      for (const addonName of files) {
        // Skip if not a directory. Use stat rather than lstat such that we
        // also load through symlinks.
        if (!fs.statSync(path.join(addonPath, addonName)).isDirectory()) {
          continue;
        }

        // Skip if .git directory is present.
        if (fs.existsSync(path.join(addonPath, addonName, '.git'))) {
          console.log(
            `Not updating ${addonName} since a .git directory was detected`);
          continue;
        }

        // Try to load package.json.
        const packageJson = path.join(addonPath, addonName, 'package.json');
        if (!fs.existsSync(packageJson)) {
          continue;
        }

        let manifest;
        try {
          const data = fs.readFileSync(packageJson);
          manifest = JSON.parse(data);
        } catch (e) {
          console.error(`Failed to read package.json: ${packageJson}\n${e}`);
          continue;
        }

        // Check if an update is available.
        if (available.hasOwnProperty(addonName) &&
            semver.lt(manifest.version, available[addonName].version)) {
          try {
            await this.uninstallAddon(addonName, true, false);
            await this.installAddonFromUrl(addonName,
                                           available[addonName].url,
                                           available[addonName].checksum,
                                           false);
          } catch (e) {
            console.error(`Failed to update ${addonName}: ${e}`);
          }
        }
      }

      console.log('Finished updating add-ons');
    });
  }
}

module.exports = new AddonManager();


/***/ }),

/***/ "./src/app-instance.js":
/*!*****************************!*\
  !*** ./src/app-instance.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * app-instance.js
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

// The way that the jest framework works, it has a pool of
// processes which each run one or more tests. This means that
// there can be multiple process running at the same time.
//
// Furthermore, if one of the processes ends, then it may
// start a new test. This means that the same process may
// run multiple tests, one after the other.
//
// During tests, some portions of the gateway may require
// a unique identifier for each test that is run, and that is
// the purpose of this module.



const process = __webpack_require__(/*! process */ "process");

class AppInstance {

  constructor() {
    this.mark();
  }

  get() {
    return `${process.pid}-${this.timestamp}`;
  }

  mark() {
    const t = new Date();
    this.timestamp = (`0${t.getHours()}`).slice(-2) +
                     (`0${t.getMinutes()}`).slice(-2) +
                     (`0${t.getSeconds()}`).slice(-2) +
                     (`00${t.getMilliseconds()}`).slice(-3);
  }
}

module.exports = new AppInstance();


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Things Gateway App.
 *
 * Back end main script.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

// Set up the user profile.
const UserProfile = __webpack_require__(/*! ./user-profile */ "./src/user-profile.js");
UserProfile.init();
const migration = UserProfile.migrate();

// External Dependencies
const https = __webpack_require__(/*! https */ "https");
const http = __webpack_require__(/*! http */ "http");
const fs = __webpack_require__(/*! fs */ "fs");
const express = __webpack_require__(/*! express */ "express");
const expressWs = __webpack_require__(/*! express-ws */ "express-ws");
const fileUpload = __webpack_require__(/*! express-fileupload */ "express-fileupload");
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const GetOpt = __webpack_require__(/*! node-getopt */ "node-getopt");
const config = __webpack_require__(/*! config */ "config");
const path = __webpack_require__(/*! path */ "path");
const expressHandlebars = __webpack_require__(/*! express-handlebars */ "express-handlebars");
const ipRegex = __webpack_require__(/*! ip-regex */ "ip-regex");

// Internal Dependencies
const addonManager = __webpack_require__(/*! ./addon-manager */ "./src/addon-manager.js");
const db = __webpack_require__(/*! ./db */ "./src/db.js");
const mDNSserver = __webpack_require__(/*! ./mdns-server */ "./src/mdns-server.js");
const Router = __webpack_require__(/*! ./router */ "./src/router.js");
const TunnelService = __webpack_require__(/*! ./ssltunnel */ "./src/ssltunnel.js");
const Constants = __webpack_require__(/*! ./constants */ "./src/constants.js");
const {wifi, wifiSetupApp} = __webpack_require__(/*! ./wifi-setup */ "./src/wifi-setup/index.js");

// Causes a timestamp to be prepended to console log lines.
__webpack_require__(/*! ./log-timestamps */ "./src/log-timestamps.js");

// The following causes an instance of AppInstance to be created.
// This is then used in other places (like src/addons/plugin/ipc.js)
__webpack_require__(/*! ./app-instance */ "./src/app-instance.js");

// Open the database
db.open();

const httpServer = http.createServer();
const httpApp = createGatewayApp(httpServer);

let httpsServer = createHttpsServer();
let httpsApp = null;

/**
 * Creates an HTTPS server object, if successful. If there are no public and
 * private keys stored for the tunnel service, null is returned.
 *
 * @param {}
 * @return {Object|null} https server object if successful, else NULL
 */
function createHttpsServer() {
  if (!TunnelService.hasCertificates()) {
    return null;
  }

  // HTTPS server configuration
  const options = {
    key: fs.readFileSync(path.join(UserProfile.sslDir, 'privatekey.pem')),
    cert: fs.readFileSync(path.join(UserProfile.sslDir, 'certificate.pem')),
  };
  if (fs.existsSync(path.join(UserProfile.sslDir, 'chain.pem'))) {
    options.ca = fs.readFileSync(path.join(UserProfile.sslDir, 'chain.pem'));
  }
  return https.createServer(options);
}

function startHttpsGateway() {
  let port = config.get('ports.https');
  const cliOptions = getOptions();
  if (typeof cliOptions.port === 'number') {
    port = cliOptions.port;
  }

  if (!httpsServer) {
    httpsServer = createHttpsServer();
  }

  httpsApp = createGatewayApp(httpsServer);
  httpsServer.on('request', httpsApp);

  // Start the HTTPS server
  httpsServer.listen(port, function() {
    migration.then(function() {
      addonManager.loadAddons();
    });
    rulesEngineConfigure(httpsServer);
    console.log('HTTPS server listening on port', httpsServer.address().port);
  });

  // Redirect HTTP to HTTPS
  httpServer.on('request', createRedirectApp(httpsServer.address().port));
  const httpPort = config.get('ports.http');
  httpServer.listen(httpPort, function() {
    console.log('Redirector listening on port', httpServer.address().port);
  });
}

function startHttpGateway() {
  httpServer.on('request', httpApp);

  let port = config.get('ports.http');
  const options = getOptions();
  if (typeof options.port === 'number') {
    port = options.port;
  }

  httpServer.listen(port, function() {
    migration.then(function() {
      addonManager.loadAddons();
    });
    rulesEngineConfigure(httpServer);
    console.log('HTTP server listening on port', httpServer.address().port);
  });
}

function stopHttpGateway() {
  httpServer.removeListener('request', httpApp);
}

function startWiFiSetup() {
  httpServer.on('request', wifiSetupApp.onRequest);

  let port = config.get('ports.http');
  const options = getOptions();
  if (typeof options.port === 'number') {
    port = options.port;
  }

  httpServer.listen(port);
}

function stopWiFiSetup() {
  httpServer.removeListener('request', wifiSetupApp.onRequest);
}

function getOptions() {
  if (!config.get('cli')) {
    return {
      debug: false,
      port: null,
    };
  }

  // Command line arguments
  const getopt = new GetOpt([
    ['d', 'debug', 'Enable debug features'],
    ['p', 'port=PORT', 'Specify the server port to use'],
    ['h', 'help', 'Display help' ],
    ['v', 'verbose', 'Show verbose output'],
    ['', 'check-wifi',
     'Run a connection check on the WiFi (only supported on RasPi)'],
  ]);

  const opt = getopt.parseSystem();
  const options = {
    debug: !!opt.options.debug, // cast to bool
    verbose: opt.options.verbose,
  };

  if (opt.options.verbose) {
    console.log(opt);
  }

  if (opt.options.help) {
    getopt.showHelp();
    process.exit(1);
  }

  if (opt.options.port) {
    options.port = parseInt(opt.options.port);
  }

  if (opt.options['check-wifi']) {
    options['check-wifi'] = opt.options['check-wifi'];
  }
  return options;
}

/**
 * Because the rules engine talks to the server over the public HTTP/WS API,
 * the gateway needs to configure it with a JWT and a server address
 * @param {http.Server|https.Server} server
 */
function rulesEngineConfigure(server) {
  const rulesEngine = __webpack_require__(/*! ./rules-engine/index.js */ "./src/rules-engine/index.js");
  let protocol = 'https';
  if (server instanceof http.Server) {
    protocol = 'http';
  }
  const gatewayHref = `${protocol}://127.0.0.1:${server.address().port}`;
  rulesEngine.configure(gatewayHref);
}

function createApp() {
  const app = express();
  app.engine('handlebars', expressHandlebars());
  app.set('view engine', 'handlebars');
  app.set('views', Constants.VIEWS_PATH);

  // Use bodyParser to access the body of requests
  app.use(bodyParser.urlencoded({
    extended: false,
  }));
  app.use(bodyParser.json({limit: '1mb'}));

  // Use fileUpload to handle multi-part uploads
  app.use(fileUpload());

  return app;
}

/**
 * @param {http.Server|https.Server} server
 * @return {express.Router}
 */
function createGatewayApp(server) {
  const app = createApp();
  const opt = getOptions();

  // Inject WebSocket support
  expressWs(app, server);

  // Configure router with configured app and command line options.
  Router.configure(app, opt);
  return app;
}

function createRedirectApp(port) {
  const app = createApp();

  // Allow LE challenges, used when renewing domain.
  app.use(
    /^\/\.well-known\/acme-challenge\/.*/,
    function(request, response, next) {
      if (request.method !== 'GET') {
        response.sendStatus(403);
        return;
      }

      const reqPath = path.join(Constants.BUILD_STATIC_PATH, request.path);
      if (fs.existsSync(reqPath)) {
        response.sendFile(reqPath);
        return;
      }

      next();
    });

  // Redirect based on https://https.cio.gov/apis/
  app.use(function(request, response) {
    if (request.method !== 'GET') {
      response.sendStatus(403);
      return;
    }
    if (request.headers.authorization) {
      response.sendStatus(403);
      return;
    }
    let httpsUrl = `https://${request.hostname}`;
    // If we're behind forwarding we can redirect to the port-free https url
    if (port !== 443 && !config.get('behindForwarding')) {
      httpsUrl += `:${port}`;
    }
    httpsUrl += request.url;

    // If the request is for a bare hostname, a .local address, or an IP
    // address, use a 307 redirect to prevent caching. For instance, if the
    // browser caches a redirect for gateway.local to the HTTPS version, things
    // will break after resetting/reflashing the gateway.
    //
    // Otherwise, use a 301 to help mitigate DNS hijacking.
    if (request.hostname.indexOf('.') < 0 ||
        request.hostname.endsWith('.local') ||
        ipRegex({exact: true}).test(request.hostname)) {
      response.redirect(307, httpsUrl);
    } else {
      response.redirect(301, httpsUrl);
    }
  });

  return app;
}

let serverStartup = Promise.resolve();
let wifiPromise = Promise.resolve(true);
const options = getOptions();

if (options['check-wifi']) {
  wifiPromise = wifi.checkConnection();
}

wifiPromise.then((connected) => {
  if (!connected) {
    wifiSetupApp.onConnection = function() {
      stopWiFiSetup();
      startGateway();
    };
    startWiFiSetup();
  } else {
    startGateway();
  }
});

function startGateway() {
  // if we have the certificates installed, we start https
  if (TunnelService.hasCertificates()) {
    serverStartup = TunnelService.userSkipped().then(function(res) {
      if (res) {
        startHttpGateway();
      } else {
        startHttpsGateway();
        TunnelService.hasTunnelToken().then(function(result) {
          if (result) {
            TunnelService.start();
          }
        });
      }
    });
  } else {
    startHttpGateway();
  }
}

if (config.get('cli')) {
  // Get some decent error messages for unhandled rejections. This is
  // often just errors in the code.
  process.on('unhandledRejection', (reason) => {
    console.log('Unhandled Rejection');
    console.error(reason);
  });

  // Do graceful shutdown when Control-C is pressed.
  process.on('SIGINT', function() {
    console.log('Control-C: unloading add-ons...');
    addonManager.unloadAddons();
    mDNSserver.server.cleanup();
    TunnelService.stop();
    process.exit(0);
  });
}

// function to stop running server and start https
TunnelService.switchToHttps = function() {
  stopHttpGateway();
  startHttpsGateway();
};

// This part starts our Service Discovery process.
// We check to see if mDNS should be setup in default mode, or has a previous
// user setup a unique domain. Then we start it.
mDNSserver.getmDNSstate().then((state) => {
  try {
    mDNSserver.getmDNSconfig().then((mDNSconfig) => {
      console.log(`DNS config is: ${mDNSconfig.host}`);
      mDNSserver.server.changeProfile(mDNSconfig);
      mDNSserver.server.setState(state);
    });
  } catch (err) {
    // if we failed to startup mDNS it's not the end of the world log it
    // and carry on
    console.error(`Service Discover failed to start with error: ${err}`);
  }
});

module.exports = { // for testing
  httpServer: httpServer,
  server: httpsServer,
  serverStartup: serverStartup,
};


/***/ }),

/***/ "./src/command-utils.js":
/*!******************************!*\
  !*** ./src/command-utils.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Command utilities.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Mapping of CSS color names (in human-readable form) to hex colors.
 */
const colors = {
  black: '#000000',
  silver: '#c0c0c0',
  gray: '#808080',
  white: '#ffffff',
  maroon: '#800000',
  red: '#ff0000',
  purple: '#800080',
  fuchsia: '#ff00ff',
  green: '#008000',
  lime: '#00ff00',
  olive: '#808000',
  yellow: '#ffff00',
  navy: '#000080',
  blue: '#0000ff',
  teal: '#008080',
  aqua: '#00ffff',
  orange: '#ffa500',
  'alice blue': '#f0f8ff',
  'antique white': '#faebd7',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  'blanched almond': '#ffebcd',
  'blue violet': '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  'cadet blue': '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  'cornflower blue': '#6495ed',
  'corn silk': '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  'dark blue': '#00008b',
  'dark cyan': '#008b8b',
  'dark goldenrod': '#b8860b',
  'dark gray': '#a9a9a9',
  'dark green': '#006400',
  'dark grey': '#a9a9a9',
  'dark khaki': '#bdb76b',
  'dark magenta': '#8b008b',
  'dark olive green': '#556b2f',
  'dark orange': '#ff8c00',
  'dark orchid': '#9932cc',
  'dark red': '#8b0000',
  'dark salmon': '#e9967a',
  'dark seagreen': '#8fbc8f',
  'dark slate blue': '#483d8b',
  'dark slate gray': '#2f4f4f',
  'dark slate grey': '#2f4f4f',
  'dark turquoise': '#00ced1',
  'dark violet': '#9400d3',
  'deep pink': '#ff1493',
  'deep sky blue': '#00bfff',
  'dim gray': '#696969',
  'dim grey': '#696969',
  'dodger blue': '#1e90ff',
  firebrick: '#b22222',
  'floral white': '#fffaf0',
  'forest green': '#228b22',
  gainsboro: '#dcdcdc',
  'ghost white': '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  'green yellow': '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  'hot pink': '#ff69b4',
  'indian red': '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  'lavender blush': '#fff0f5',
  'lawn green': '#7cfc00',
  'lemon chiffon': '#fffacd',
  'light blue': '#add8e6',
  'light coral': '#f08080',
  'light cyan': '#e0ffff',
  'light goldenrod yellow': '#fafad2',
  'light gray': '#d3d3d3',
  'light green': '#90ee90',
  'light grey': '#d3d3d3',
  'light pink': '#ffb6c1',
  'light salmon': '#ffa07a',
  'light sea green': '#20b2aa',
  'light sky blue': '#87cefa',
  'light slate gray': '#778899',
  'light slate grey': '#778899',
  'light steel blue': '#b0c4de',
  'light yellow': '#ffffe0',
  'lime green': '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  'medium aquamarine': '#66cdaa',
  'medium blue': '#0000cd',
  'medium orchid': '#ba55d3',
  'medium purple': '#9370db',
  'medium sea green': '#3cb371',
  'medium slate blue': '#7b68ee',
  'medium spring green': '#00fa9a',
  'medium turquoise': '#48d1cc',
  'medium violet red': '#c71585',
  'midnight blue': '#191970',
  'mint cream': '#f5fffa',
  'misty rose': '#ffe4e1',
  moccasin: '#ffe4b5',
  'navajo white': '#ffdead',
  'old lace': '#fdf5e6',
  'olive drab': '#6b8e23',
  'orange red': '#ff4500',
  orchid: '#da70d6',
  'pale goldenrod': '#eee8aa',
  'pale green': '#98fb98',
  'pale turquoise': '#afeeee',
  'pale violet red': '#db7093',
  'papaya whip': '#ffefd5',
  'peach puff': '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  'powder blue': '#b0e0e6',
  'rosy brown': '#bc8f8f',
  'royal blue': '#4169e1',
  'saddle brown': '#8b4513',
  salmon: '#fa8072',
  'sandy brown': '#f4a460',
  'sea green': '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  'sky blue': '#87ceeb',
  'slate blue': '#6a5acd',
  'slate gray': '#708090',
  'slate grey': '#708090',
  snow: '#fffafa',
  'spring green': '#00ff7f',
  'steel blue': '#4682b4',
  tan: '#d2b48c',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  'white smoke': '#f5f5f5',
  'yellow green': '#9acd32',
  'rebecca purple': '#663399',
};

/**
 * Mapping of percentages (in human-readable form) to numbers.
 */
const percentages = {
  'zero percent': 0,
  'one percent': 1,
  'two percent': 2,
  'three percent': 3,
  'four percent': 4,
  'five percent': 5,
  'six percent': 6,
  'seven percent': 7,
  'eight percent': 8,
  'nine percent': 9,

  'ten percent': 10,
  'eleven percent': 11,
  'twelve percent': 12,
  'thirteen percent': 13,
  'fourteen percent': 14,
  'fifteen percent': 15,
  'sixteen percent': 16,
  'seventeen percent': 17,
  'eighteen percent': 18,
  'nineteen percent': 19,

  'twenty percent': 20,
  'twenty one percent': 21,
  'twenty two percent': 22,
  'twenty three percent': 23,
  'twenty four percent': 24,
  'twenty five percent': 25,
  'twenty six percent': 26,
  'twenty seven percent': 27,
  'twenty eight percent': 28,
  'twenty nine percent': 29,

  'thirty percent': 30,
  'thirty one percent': 31,
  'thirty two percent': 32,
  'thirty three percent': 33,
  'thirty four percent': 34,
  'thirty five percent': 35,
  'thirty six percent': 36,
  'thirty seven percent': 37,
  'thirty eight percent': 38,
  'thirty nine percent': 39,

  'forty percent': 40,
  'forty one percent': 41,
  'forty two percent': 42,
  'forty three percent': 43,
  'forty four percent': 44,
  'forty five percent': 45,
  'forty six percent': 46,
  'forty seven percent': 47,
  'forty eight percent': 48,
  'forty nine percent': 49,

  // Handle misspelling of forty
  'fourty percent': 40,
  'fourty one percent': 41,
  'fourty two percent': 42,
  'fourty three percent': 43,
  'fourty four percent': 44,
  'fourty five percent': 45,
  'fourty six percent': 46,
  'fourty seven percent': 47,
  'fourty eight percent': 48,
  'fourty nine percent': 49,

  'fifty percent': 50,
  'fifty one percent': 51,
  'fifty two percent': 52,
  'fifty three percent': 53,
  'fifty four percent': 54,
  'fifty five percent': 55,
  'fifty six percent': 56,
  'fifty seven percent': 57,
  'fifty eight percent': 58,
  'fifty nine percent': 59,

  'sixty percent': 60,
  'sixty one percent': 61,
  'sixty two percent': 62,
  'sixty three percent': 63,
  'sixty four percent': 64,
  'sixty five percent': 65,
  'sixty six percent': 66,
  'sixty seven percent': 67,
  'sixty eight percent': 68,
  'sixty nine percent': 69,

  'seventy percent': 70,
  'seventy one percent': 71,
  'seventy two percent': 72,
  'seventy three percent': 73,
  'seventy four percent': 74,
  'seventy five percent': 75,
  'seventy six percent': 76,
  'seventy seven percent': 77,
  'seventy eight percent': 78,
  'seventy nine percent': 79,

  'eighty percent': 80,
  'eighty one percent': 81,
  'eighty two percent': 82,
  'eighty three percent': 83,
  'eighty four percent': 84,
  'eighty five percent': 85,
  'eighty six percent': 86,
  'eighty seven percent': 87,
  'eighty eight percent': 88,
  'eighty nine percent': 89,

  'ninety percent': 90,
  'ninety one percent': 91,
  'ninety two percent': 92,
  'ninety three percent': 93,
  'ninety four percent': 94,
  'ninety five percent': 95,
  'ninety six percent': 96,
  'ninety seven percent': 97,
  'ninety eight percent': 98,
  'ninety nine percent': 99,

  'one hundred percent': 100,
};

for (let i = 0; i <= 100; i++) {
  percentages[`${i}%`] = i;
}

/**
 * Find a property of a thing by its expected @type.
 *
 * @param {Object} thing Thing to search
 * @param {String} type Expected @type value
 * @param {String?} fallbackName Fallback name for legacy devices
 * @returns {String} property name
 */
function findProperty(thing, propType, fallbackName) {
  for (const prop in thing.properties) {
    if (thing.properties[prop]['@type'] === propType) {
      return prop;
    }
  }

  if (thing.properties.hasOwnProperty(fallbackName)) {
    return fallbackName;
  }

  return null;
}

module.exports = {
  colors,
  percentages,
  findProperty,
};


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/*
 * Things Gateway Constants.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const path = __webpack_require__(/*! path */ "path");

// Web server routes
exports.USERS_PATH = '/users';
exports.THINGS_PATH = '/things';
exports.PROPERTIES_PATH = '/properties';
exports.NEW_THINGS_PATH = '/new_things';
exports.ADAPTERS_PATH = '/adapters';
exports.ADDONS_PATH = '/addons';
exports.ACTIONS_PATH = '/actions';
exports.EVENTS_PATH = '/events';
exports.LOGIN_PATH = '/login';
exports.LOG_OUT_PATH = '/log-out';
exports.SETTINGS_PATH = '/settings';
exports.COMMANDS_PATH = '/commands';
exports.UPDATES_PATH = '/updates';
exports.UPLOADS_PATH = '/uploads';
exports.DEBUG_PATH = '/debug';
exports.RULES_PATH = '/rules';
exports.OAUTH_PATH = '/oauth';
exports.OAUTHCLIENTS_PATH = '/authorizations';
exports.LOGS_PATH = '/logs';
exports.PUSH_PATH = '/push';
exports.PING_PATH = '/ping';
// Remember we end up in the build/* directory so these paths looks slightly
// different than you might expect.
exports.STATIC_PATH = path.join(__dirname, '../static');
exports.BUILD_STATIC_PATH = path.join(__dirname, '../build/static');
exports.VIEWS_PATH = path.join(__dirname, '../build/views');

// Plugin and REST/websocket API things
exports.DONT_RESTART_EXIT_CODE = 100;
exports.UNLOAD_PLUGIN_KILL_DELAY = 3000;
exports.ACTION_STATUS = 'actionStatus';
exports.ADAPTER_ADDED = 'adapterAdded';
exports.ADAPTER_UNLOADED = 'adapterUnloaded';
exports.ADD_ADAPTER = 'addAdapter';
exports.ADD_EVENT_SUBSCRIPTION = 'addEventSubscription';
exports.ADD_MOCK_DEVICE = 'addMockDevice';
exports.CANCEL_PAIRING = 'cancelPairing';
exports.CANCEL_REMOVE_THING = 'cancelRemoveThing';
exports.CLEAR_MOCK_ADAPTER_STATE = 'clearMockAdapterState';
exports.CONNECTED = 'connected';
exports.DEBUG_CMD = 'debugCmd';
exports.EVENT = 'event';
exports.ERROR = 'error';
exports.HANDLE_DEVICE_ADDED = 'handleDeviceAdded';
exports.HANDLE_DEVICE_REMOVED = 'handleDeviceRemoved';
exports.MOCK_ADAPTER_STATE_CLEARED = 'mockAdapterStateCleared';
exports.MOCK_DEVICE_ADDED_REMOVED = 'mockDeviceAddedRemoved';
exports.MOCK_DEVICE_ADD_REMOVE_FAILED = 'mockDeviceAddRemoveFailed';
exports.PAIRING_TIMEOUT = 'pairingTimeout';
exports.PAIR_MOCK_DEVICE = 'pairMockDevice';
exports.PLUGIN_ERROR = 'pluginError';
exports.PLUGIN_UNLOADED = 'pluginUnloaded';
exports.PROPERTY_CHANGED = 'propertyChanged';
exports.PROPERTY_STATUS = 'propertyStatus';
exports.REGISTER_PLUGIN = 'registerPlugin';
exports.REGISTER_PLUGIN_REPLY = 'registerPluginReply';
exports.REMOVE_ACTION = 'removeAction';
exports.REMOVE_ACTION_REJECTED = 'removeActionRejected';
exports.REMOVE_ACTION_RESOLVED = 'removeActionResolved';
exports.REMOVE_THING = 'removeThing';
exports.REQUEST_ACTION = 'requestAction';
exports.REQUEST_ACTION_REJECTED = 'requestActionRejected';
exports.REQUEST_ACTION_RESOLVED = 'requestActionResolved';
exports.SET_PIN = 'setPin';
exports.SET_PIN_REJECTED = 'setPinRejected';
exports.SET_PIN_RESOLVED = 'setPinResolved';
exports.SET_PROPERTY = 'setProperty';
exports.START_PAIRING = 'startPairing';
exports.THING_ADDED = 'thingAdded';
exports.THING_REMOVED = 'thingRemoved';
exports.UNLOAD_ADAPTER = 'unloadAdapter';
exports.UNLOAD_PLUGIN = 'unloadPlugin';
exports.UNPAIR_MOCK_DEVICE = 'unpairMockDevice';

// Thing types
exports.THING_TYPE_ON_OFF_SWITCH = 'onOffSwitch';
exports.THING_TYPE_MULTI_LEVEL_SWITCH = 'multiLevelSwitch';
exports.THING_TYPE_BINARY_SENSOR = 'binarySensor';
exports.THING_TYPE_MULTI_LEVEL_SENSOR = 'multiLevelSensor';
exports.THING_TYPE_SMART_PLUG = 'smartPlug';
exports.THING_TYPE_ON_OFF_LIGHT = 'onOffLight';
exports.THING_TYPE_DIMMABLE_LIGHT = 'dimmableLight';
exports.THING_TYPE_ON_OFF_COLOR_LIGHT = 'onOffColorLight';
exports.THING_TYPE_DIMMABLE_COLOR_LIGHT = 'dimmableColorLight';

// OAuth things
exports.ACCESS_TOKEN = 'access_token';
exports.AUTHORIZATION_CODE = 'authorization_code';
exports.USER_TOKEN = 'user_token';
exports.READWRITE = 'readwrite';
exports.READ = 'read';

// Logging
exports.LogSeverity = {
  DEBUG: 0,
  INFO: 1,
  WARNING: 2,
  ERROR: 3,
};

/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ "./src/controllers/actions_controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/actions_controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Actions Controller.
 *
 * Manages the top level actions queue for the gateway and things.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const Action = __webpack_require__(/*! ../models/action */ "./src/models/action.js");
const Actions = __webpack_require__(/*! ../models/actions */ "./src/models/actions.js");
const AddonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");
const Things = __webpack_require__(/*! ../models/things */ "./src/models/things.js");

const ActionsController = PromiseRouter({mergeParams: true});

/**
 * Handle creating a new action.
 */
ActionsController.post('/', async (request, response) => {
  const keys = Object.keys(request.body);
  if (keys.length != 1) {
    const err = 'Incorrect number of parameters.';
    console.log(err, request.body);
    response.status(400).send(err);
    return;
  }

  const actionName = keys[0];
  const actionParams = request.body[actionName].input;
  const thingId = request.params.thingId;
  let action = null;

  if (thingId) {
    try {
      const thing = await Things.getThing(thingId);
      action = new Action(actionName, actionParams, thing);
    } catch (e) {
      console.error('Thing does not exist', thingId, e);
      response.status(404).send(e);
      return;
    }
  } else {
    action = new Action(actionName, actionParams);
  }

  try {
    if (thingId) {
      await AddonManager.requestAction(
        thingId, action.id, actionName, actionParams);
    }
    await Actions.add(action);

    response.status(201).json({[actionName]: action.getDescription()});
  } catch (e) {
    console.error('Creating action', actionName, 'failed');
    console.error(e);
    response.status(400).send(e);
  }
});

/**
 * Handle getting a list of actions.
 */
ActionsController.get('/', function(request, response) {
  if (request.params.thingId) {
    response.status(200).json(Actions.getByThing(request.params.thingId));
  } else {
    response.status(200).json(Actions.getGatewayActions());
  }
});

/**
 * Handle getting a list of actions.
 */
ActionsController.get('/:actionName', function(request, response) {
  const actionName = request.params.actionName;
  if (request.params.thingId) {
    response.status(200).json(Actions.getByThing(request.params.thingId,
                                                 actionName));
  } else {
    response.status(200).json(Actions.getGatewayActions(actionName));
  }
});

/**
 * Handle creating a new action.
 */
ActionsController.post('/:actionName', async (request, response) => {
  const actionName = request.params.actionName;

  const keys = Object.keys(request.body);
  if (keys.length != 1) {
    const err = 'Incorrect number of parameters.';
    console.log(err, request.body);
    response.status(400).send(err);
    return;
  }

  if (actionName !== keys[0]) {
    const err = `Action name must be ${actionName}`;
    console.log(err, request.body);
    response.status(400).send(err);
    return;
  }

  const actionParams = request.body[actionName].input;
  const thingId = request.params.thingId;
  let action = null;

  if (thingId) {
    try {
      const thing = await Things.getThing(thingId);
      action = new Action(actionName, actionParams, thing);
    } catch (e) {
      console.error('Thing does not exist', thingId, e);
      response.status(404).send(e);
      return;
    }
  } else {
    action = new Action(actionName, actionParams);
  }

  try {
    if (thingId) {
      await AddonManager.requestAction(
        thingId, action.id, actionName, actionParams);
    }
    await Actions.add(action);

    response.status(201).json({[actionName]: action.getDescription()});
  } catch (e) {
    console.error('Creating action', actionName, 'failed');
    console.error(e);
    response.status(400).send(e);
  }
});

/**
 * Handle getting a particular action.
 */
ActionsController.get('/:actionName/:actionId', function(request, response) {
  const actionId = request.params.actionId;
  const action = Actions.get(actionId);
  if (action) {
    response.status(200).json({[action.name]: action.getDescription()});
  } else {
    const error = `Action "${actionId}" not found`;
    console.error(error);
    response.status(404).send(error);
  }
});

/**
 * Handle cancelling an action.
 */
ActionsController.delete(
  '/:actionName/:actionId',
  async (request, response) => {
    const actionName = request.params.actionName;
    const actionId = request.params.actionId;
    const thingId = request.params.thingId;

    if (thingId) {
      try {
        await AddonManager.removeAction(thingId, actionId, actionName);
      } catch (e) {
        console.error('Removing action', actionId, 'failed');
        console.error(e);
        response.status(400).send(e);
        return;
      }
    }

    try {
      Actions.remove(actionId);
    } catch (e) {
      console.error('Removing action', actionId, 'failed');
      console.error(e);
      response.status(404).send(e);
      return;
    }

    response.status(204).end();
  });

module.exports = ActionsController;


/***/ }),

/***/ "./src/controllers/adapters_controller.js":
/*!************************************************!*\
  !*** ./src/controllers/adapters_controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Adapter Controller.
 *
 * Manages HTTP requests to /adapters.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const express = __webpack_require__(/*! express */ "express");
const addonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");

const adaptersController = express.Router();

/**
 * Return a list of adapters
 */
adaptersController.get('/', (request, response) => {
  const adapters = addonManager.getAdapters();
  const adapterList = Array.from(adapters.values()).map((adapter) => {
    return adapter.asDict();
  });
  response.json(adapterList);
});

/**
 * Get a particular adapter.
 */
adaptersController.get('/:adapterId/', (request, response) => {
  const adapterId = request.params.adapterId;
  const adapter = addonManager.getAdapter(adapterId);
  if (adapter) {
    response.json(adapter.asDict());
  } else {
    response.status(404).send(`Adapter "${adapterId}" not found.`);
  }
});

module.exports = adaptersController;


/***/ }),

/***/ "./src/controllers/addons_controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/addons_controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const AddonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");
const Settings = __webpack_require__(/*! ../models/settings */ "./src/models/settings.js");

const AddonsController = PromiseRouter();

AddonsController.get('/', async (request, response) => {
  Settings.getAddonSettings().then(function(result) {
    if (typeof result === 'undefined') {
      response.status(404).json([]);
    } else {
      const installedAddons = [];
      for (const setting of result) {
        // Remove the leading 'addons.' from the settings key to get the
        // package name.
        const packageName = setting.key.substr(setting.key.indexOf('.') + 1);
        if (packageName.length <= 0) {
          continue;
        }

        if (AddonManager.isAddonInstalled(packageName)) {
          installedAddons.push(setting);
        }
      }

      response.status(200).json(installedAddons);
    }
  }).catch(function(e) {
    console.error('Failed to get add-on settings.');
    console.error(e);
    response.status(400).send(e);
  });
});

AddonsController.put('/:addonName', async (request, response) => {
  const addonName = request.params.addonName;

  if (!request.body || !request.body.hasOwnProperty('enabled')) {
    response.status(400).send('Enabled property not defined');
    return;
  }

  const enabled = request.body.enabled;

  const key = `addons.${addonName}`;

  let current;
  try {
    current = await Settings.get(key);
    if (typeof current === 'undefined') {
      throw new Error('Setting is undefined.');
    }
  } catch (e) {
    console.error(`Failed to get current settings for add-on ${addonName}`);
    console.error(e);
    response.status(400).send(e);
    return;
  }

  current.moziot.enabled = enabled;
  try {
    await Settings.set(key, current);
  } catch (e) {
    console.error(`Failed to set settings for add-on ${addonName}`);
    console.error(e);
    response.status(400).send(e);
    return;
  }

  try {
    if (enabled) {
      await AddonManager.loadAddon(addonName);
    } else {
      await AddonManager.unloadAddon(addonName);
    }

    response.status(200).json({enabled: enabled});
  } catch (e) {
    console.error(`Failed to toggle add-on ${addonName}`);
    console.error(e);
    response.status(400).send(e);
  }
});

AddonsController.put('/:addonName/config', async (request, response) => {
  const addonName = request.params.addonName;

  if (!request.body || !request.body.hasOwnProperty('config')) {
    response.status(400).send('Config property not defined');
    return;
  }

  const config = request.body.config;

  const key = `addons.${addonName}`;

  let current;
  try {
    current = await Settings.get(key);
    if (typeof current === 'undefined') {
      throw new Error('Setting is undefined.');
    }
  } catch (e) {
    console.error(`Failed to get current settings for add-on ${addonName}`);
    console.error(e);
    response.status(400).send(e);
    return;
  }

  current.moziot.config = config;
  try {
    await Settings.set(key, current);
  } catch (e) {
    console.error(`Failed to set settings for add-on ${addonName}`);
    console.error(e);
    response.status(400).send(e);
    return;
  }

  try {
    await AddonManager.unloadAddon(addonName, true);
    await AddonManager.loadAddon(addonName);

    response.status(200).json({config});
  } catch (e) {
    console.error(`Failed to apply config add-on ${addonName}`);
    console.error(e);
    response.status(400).send(e);
  }
});

AddonsController.post('/', async (request, response) => {
  if (!request.body ||
      !request.body.hasOwnProperty('name') ||
      !request.body.hasOwnProperty('url') ||
      !request.body.hasOwnProperty('checksum')) {
    response.status(400).send('Missing required parameter(s).');
    return;
  }

  const name = request.body.name;
  const url = request.body.url;
  const checksum = request.body.checksum;

  try {
    await AddonManager.installAddonFromUrl(name, url, checksum, true);
    const key = `addons.${name}`;
    const savedSettings = await Settings.get(key);
    response.status(200).json(savedSettings);
  } catch (e) {
    response.status(400).send(e);
  }
});

AddonsController.patch('/:addonName', async (request, response) => {
  const name = request.params.addonName;

  if (!request.body ||
      !request.body.hasOwnProperty('url') ||
      !request.body.hasOwnProperty('checksum')) {
    response.status(400).send('Missing required parameter(s).');
    return;
  }

  const url = request.body.url;
  const checksum = request.body.checksum;

  try {
    await AddonManager.uninstallAddon(name, true, false);
    await AddonManager.installAddonFromUrl(name, url, checksum, true);
    response.sendStatus(200);
  } catch (e) {
    console.error(`Failed to update add-on: ${name}\n${e}`);
    response.status(400).send(e);
  }
});

AddonsController.delete('/:addonName', async (request, response) => {
  const addonName = request.params.addonName;

  try {
    await AddonManager.uninstallAddon(addonName, false, true);
    response.sendStatus(200);
  } catch (e) {
    console.error(`Failed to uninstall add-on: ${addonName}\n${e}`);
    response.status(400).send(e);
  }
});

module.exports = AddonsController;


/***/ }),

/***/ "./src/controllers/commands_controller.js":
/*!************************************************!*\
  !*** ./src/controllers/commands_controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Commands Controller.
 *
 * Manages HTTP requests to /commands.
 *
 * Grammar that the parser understands:
 *  Turn the <tag> light <on|off>
 *  Turn <tag> <on|off>
 *  Shut <tag> <on|off>
 *  Shut the <tag> light <on|off>
 *
 * <tag> must match the .name property of one of the /things objects
 *  in order for the command to be executed.
 *
 * Sample curl command to test from the command line:
 * curl -H 'Authorization:Bearer '<JSONWebToken>'
 *        -H "Content-Type: application/json"
 *        -H "Accept: application/json"
 *        -d '{"text":"turn the kitchen light on"}'
 *        https://localhost:4443/commands
 *        -k
 *
 * HTTP Response Codes        Status message
 *              201           Command Created
 *              400           Text element not defined
 *              404           Thing Not Found
 *              406           Unable to understand command
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const AddonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");
const CommandUtils = __webpack_require__(/*! ../command-utils */ "./src/command-utils.js");
const IntentParser = __webpack_require__(/*! ../models/intentparser */ "./src/models/intentparser.js");
const Things = __webpack_require__(/*! ../models/things */ "./src/models/things.js");

const CommandsController = PromiseRouter();

/**
 * Parses the intent for a text sentence and sends to the intent parser to
 * determine intent. Then executes the intent as an action on the thing API.
 */
CommandsController.post('/', async (request, response) => {
  if (!request.body || !request.body.hasOwnProperty('text')) {
    response.status(400).json({
      message: 'Text element not defined',
    });
    return;
  }

  let names = await Things.getThingNames();
  names = names.map((n) => n.toLowerCase());

  const internalError = () => {
    response.status(400).json({
      message: 'Sorry, something went wrong.',
    });
  };

  const thingNotFound = () => {
    response.status(400).json({
      message: 'Sorry, that thing wasn\'t found.',
    });
  };

  const invalidForDevice = () => {
    response.status(400).json({
      message: 'Sorry, I\'m afraid I can\'t do that.',
    });
  };

  const invalidCommand = () => {
    response.status(400).json({
      message: 'Sorry, I didn\'t understand that.',
    });
  };

  const failedToSet = () => {
    response.status(400).json({
      message: 'Sorry, that didn\'t work.',
    });
  };

  try {
    await IntentParser.train(names);
  } catch (e) {
    console.log('Error training:', e);
    internalError();
    return;
  }

  let payload;
  try {
    payload = await IntentParser.query(request.body.text);
  } catch (e) {
    console.log('Error parsing intent:', e);
    invalidCommand();
    return;
  }

  const name = payload.thing;
  const thing = await Things.getThingByName(name);

  if (!thing) {
    thingNotFound();
    return;
  }

  let propertyName, value;

  const properties = {
    on: CommandUtils.findProperty(thing, 'OnOffProperty', 'on'),
    color: CommandUtils.findProperty(thing, 'ColorProperty', 'color'),
    colorTemperature: CommandUtils.findProperty(thing,
                                                'ColorTemperatureProperty',
                                                'colorTemperature'),
    level: CommandUtils.findProperty(thing, 'LevelProperty', 'level'),
    brightness: CommandUtils.findProperty(thing,
                                          'BrightnessProperty',
                                          'level'),
  };

  if (['on', 'off'].includes(payload.value)) {
    if (!properties.on) {
      invalidForDevice();
      return;
    }

    propertyName = properties.on;
    value = payload.value === 'on';
  } else if (['warmer', 'cooler'].includes(payload.value)) {
    if (!properties.colorTemperature) {
      invalidForDevice();
      return;
    }

    propertyName = properties.colorTemperature;

    let current;
    try {
      current = await AddonManager.getProperty(thing.id, propertyName);
    } catch (e) {
      failedToSet();
      return;
    }

    value = payload.value === 'warmer' ? current - 100 : current + 100;
  } else if (['dim', 'brighten'].includes(payload.keyword) ||
             CommandUtils.percentages.hasOwnProperty(payload.value)) {
    if (!properties.brightness) {
      invalidForDevice();
      return;
    }

    propertyName = properties.brightness;

    const percent =
      payload.value ? CommandUtils.percentages[payload.value] : 10;

    if (payload.keyword === 'set') {
      value = percent;
    } else if (payload.keyword === 'dim' || payload.keyword === 'brighten') {
      let current;
      try {
        current = await AddonManager.getProperty(thing.id, propertyName);
      } catch (e) {
        failedToSet();
        return;
      }

      if (payload.keyword === 'dim') {
        value = current - percent;
      } else {
        value = current + percent;
      }
    }
  } else if (CommandUtils.colors.hasOwnProperty(payload.value)) {
    if (!properties.color) {
      invalidForDevice();
      return;
    }

    propertyName = properties.color;
    value = CommandUtils.colors[payload.value];
  } else {
    invalidCommand();
    return;
  }

  try {
    await AddonManager.setProperty(thing.id, propertyName, value);
  } catch (e) {
    failedToSet();
    return;
  }

  // Returning 201 to signify that the command was mapped to an
  // intent and matched a 'thing' in our list. Return a response to
  // caller with this status before the command finishes execution
  // as the execution can take some time (e.g. blinds)
  response.status(201).json({
    message: 'Command Created',
    payload: payload,
  });
});

module.exports = CommandsController;


/***/ }),

/***/ "./src/controllers/debug_controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/debug_controller.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Debug Controller.
 *
 * Manages HTTP requests to /debug/adapters.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const express = __webpack_require__(/*! express */ "express");
const addonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");

const debugController = express.Router();

addonManager.on(Constants.ADAPTER_ADDED, (adapter) => {
  console.log('debug: Got:', Constants.ADAPTER_ADDED,
              'notification for', adapter.id, adapter.name);
});

addonManager.on(Constants.THING_ADDED, (thing) => {
  console.log('debug: Got:', Constants.THING_ADDED,
              'notification for', thing.name);
});

addonManager.on(Constants.THING_REMOVED, (thing) => {
  console.log('debug: Got:', Constants.THING_REMOVED,
              'notification for', thing.name);
});

addonManager.on(Constants.PROPERTY_CHANGED, (property) => {
  console.log('debug: Got:', Constants.PROPERTY_CHANGED,
              'notification for:', property.device.name,
              'property:', property.name,
              'value:', property.value);
});

addonManager.on(Constants.PAIRING_TIMEOUT, () => {
  console.log('debug: Got:', Constants.PAIRING_TIMEOUT,
              'notification');
});

/**
 * List all known adapters
 */
debugController.get('/adapters', (request, response) => {
  const adapters = addonManager.getAdapters();
  response.status(200).json(Array.from(adapters.values()).map((adapter) => {
    return adapter.asDict();
  }));
});

/**
 * Add a new device
 */
debugController.get('/addNewThing', (request, response) => {
  addonManager.addNewThing(60).then((thing) => {
    console.log('debugController: addNewThing added thing', thing);
  }, () => {
    console.log('debugController: addNewThing cancelled');
  });
  response.status(204).send();
});

/**
 * Cancel adding a new device
 */
debugController.get('/cancelAddNewThing', (request, response) => {
  addonManager.cancelAddNewThing();
  response.status(204).send();
});

/**
 * Cancel removing a device;
 */
debugController.get('/cancelRemoveThing/:thingId', (request, response) => {
  const thingId = request.params.thingId;
  addonManager.cancelRemoveThing(thingId);
  response.status(204).send();
});

/**
 * Get a list of devices ids registered with the add-on manager.
 */
debugController.get('/deviceIds', (request, response) => {
  const devices = addonManager.getDevices();
  const deviceList = [];
  for (const deviceId in devices) {
    const device = addonManager.devices[deviceId];
    deviceList.push(device.id);
  }
  response.status(200).json(deviceList);
});

/**
 * Get a list of the devices registered with the add-on manager.
 */
debugController.get('/devices', (request, response) => {
  const devices = addonManager.getDevices();
  const deviceList = [];
  for (const deviceId in devices) {
    const device = addonManager.devices[deviceId];
    deviceList.push(device.asDict());
  }
  response.status(200).json(deviceList);
});

/**
 * Get a particular device registered with the add-on manager.
 */
debugController.get('/device/:deviceId', (request, response) => {
  const deviceId = request.params.deviceId;
  const device = addonManager.getDevice(deviceId);
  if (device) {
    response.status(200).json(device.asDict());
  } else {
    response.status(404).send(`Device "${deviceId}" not found.`);
  }
});

/**
 * Gets an property from a device.
 */
debugController.get('/device/:deviceId/:propertyName', (request, response) => {
  const deviceId = request.params.deviceId;
  const propertyName = request.params.propertyName;
  const device = addonManager.getDevice(deviceId);
  if (device) {
    device.getProperty(propertyName).then((value) => {
      const valueDict = {};
      valueDict[propertyName] = value;
      response.status(200).json(valueDict);
    }).catch((error) => {
      console.log(`Device "${deviceId}"`);
      console.log(error);
      response.status(404).send(`Device "${deviceId}${error}`);
    });
  } else {
    response.status(404).send(`Device "${deviceId}" not found.`);
  }
});

/**
 * Sends a debug command to a particular device.
 */
debugController.put('/device/:deviceId/cmd/:cmd', (request, response) => {
  const deviceId = request.params.deviceId;
  const device = addonManager.getDevice(deviceId);
  if (device) {
    device.debugCmd(request.params.cmd, request.body);
    response.status(200).json(request.body);
  } else {
    response.status(404).send(`Device "${deviceId}" not found.`);
  }
});

/**
 * Sets an property associated with a device.
 */
debugController.put('/device/:deviceId/:propertyName', (request, response) => {
  const deviceId = request.params.deviceId;
  const propertyName = request.params.propertyName;
  const device = addonManager.getDevice(deviceId);
  if (device) {
    const propertyValue = request.body[propertyName];
    if (typeof propertyValue !== 'undefined') {
      device.setProperty(propertyName, propertyValue).then((updatedValue) => {
        const valueDict = {};
        valueDict[propertyName] = updatedValue;
        response.status(200).json(valueDict);
      }).catch((error) => {
        console.log(`Device "${deviceId}"`);
        console.log(error);
        response.status(404).send(`Device "${deviceId}" ${error}`);
      });
    } else {
      response.status(404).send(`Device "${deviceId
      }" property "${propertyName
      }" not found in request.`);
    }
  } else {
    response.status(404).send(`Device "${deviceId}" not found.`);
  }
});

/**
 * Get a list of plugins
 */
debugController.get('/plugins', (request, response) => {
  const plugins = Array.from(addonManager.pluginServer.plugins.values());
  response.status(200).json(plugins.map((plugin) => {
    return plugin.asDict();
  }));
});

/**
 * Get a list of the things registered with the add-on manager.
 */
debugController.get('/things', (request, response) => {
  response.status(200).json(addonManager.getThings());
});

/**
 * Get a particular thing registered with the add-on manager.
 */
debugController.get('/thing/:thingId', (request, response) => {
  const thingId = request.params.thingId;
  const thing = addonManager.getThing(thingId);
  if (thing) {
    response.status(200).json(thing);
  } else {
    response.status(404).send(`Thing "${thingId}" not found.`);
  }
});

/**
 * Gets a property associated with a thing.
 */
debugController.get('/thing/:thingId/:propertyName', (request, response) => {
  const thingId = request.params.thingId;
  const propertyName = request.params.propertyName;
  const thing = addonManager.getThing(thingId);
  if (thing) {
    addonManager.getProperty(thing.id, propertyName).then((value) => {
      const valueDict = {};
      valueDict[propertyName] = value;
      response.status(200).json(valueDict);
    }).catch((error) => {
      response.status(404).send(`Thing "${thingId} ${error}`);
    });
  } else {
    response.status(404).send(`Thing "${thingId}" not found.`);
  }
});

/**
 * Sets a property associated with a thing.
 */
debugController.put('/thing/:thingId/:propertyName', (request, response) => {
  const thingId = request.params.thingId;
  const propertyName = request.params.propertyName;
  const thing = addonManager.getThing(thingId);
  if (thing) {
    const propertyValue = request.body[propertyName];
    if (typeof propertyValue !== 'undefined') {
      addonManager.setProperty(propertyName, propertyValue).then((value) => {
        const valueDict = {};
        valueDict[propertyName] = value;
        response.status(200).json(valueDict);
      }).catch((error) => {
        console.log(`Thing "${thingId}`);
        console.log(error);
        response.status(404).send(`Thing "${thingId} ${error}`);
      });
    } else {
      response.status(404).send(`Thing "${thingId
      }" property "${propertyName
      }" not found in request.`);
    }
  } else {
    response.status(404).send(`Thing "${thingId}" not found.`);
  }
});

/**
 * Remove an existing Thing.
 */
debugController.get('/removeThing/:thingId', (request, response) => {
  const thingId = request.params.thingId;
  addonManager.removeThing(thingId).then((thingIdRemoved) => {
    console.log('debugController: removed', thingIdRemoved);
    if (thingId != thingIdRemoved) {
      console.log('debugController: Actually removed', thingIdRemoved,
                  'even though request was for:', thingId);
    }
    response.status(200).json({removed: thingIdRemoved});
  }, (str) => {
    console.log('debugController: remove failed:', str);
    response.status(500).send(`remove of ${thingId} failed: ${str}`);
  });
});

/**
 * Unload add-ons
 */
debugController.get('/unloadAddons', (request, response) => {
  console.log('debugController: Unloading Add-ons');
  addonManager.unloadAddons();
  response.status(200).send('');
});

module.exports = debugController;


/***/ }),

/***/ "./src/controllers/events_controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/events_controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Events Controller.
 *
 * Manages the top level events queue for the gateway and things.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const express = __webpack_require__(/*! express */ "express");
const Events = __webpack_require__(/*! ../models/events */ "./src/models/events.js");

const EventsController = express.Router({mergeParams: true});

/**
 * Handle getting a list of events.
 */
EventsController.get('/', function(request, response) {
  if (request.params.thingId) {
    response.status(200).json(Events.getByThing(request.params.thingId));
  } else {
    response.status(200).json(Events.getGatewayEvents());
  }
});

/**
 * Handle getting a list of events.
 */
EventsController.get('/:eventName', function(request, response) {
  const eventName = request.params.eventName;

  if (request.params.thingId) {
    response.status(200).json(Events.getByThing(request.params.thingId,
                                                eventName));
  } else {
    response.status(200).json(Events.getGatewayEvents(eventName));
  }
});

module.exports = EventsController;


/***/ }),

/***/ "./src/controllers/log_out_controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/log_out_controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * LogOut Controller.
 *
 * Handles logging out the user.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Router = __webpack_require__(/*! express-promise-router */ "express-promise-router");

const JSONWebToken = __webpack_require__(/*! ../models/jsonwebtoken */ "./src/models/jsonwebtoken.js");

const LogOutController = new Router();

/**
 * Log out the user
 */
LogOutController.post('/', async (request, response) => {
  const {jwt} = request;
  await JSONWebToken.revokeToken(jwt.keyId);
  response.sendStatus(200);
});

module.exports = LogOutController;


/***/ }),

/***/ "./src/controllers/login_controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/login_controller.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Login Controller.
 *
 * Handles user login.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const path = __webpack_require__(/*! path */ "path");

const Router = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const Users = __webpack_require__(/*! ../models/users */ "./src/models/users.js");
const JSONWebToken = __webpack_require__(/*! ../models/jsonwebtoken */ "./src/models/jsonwebtoken.js");
const Passwords = __webpack_require__(/*! ../passwords */ "./src/passwords.js");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");

const LoginController = Router();

const loginRoot = path.join(Constants.BUILD_STATIC_PATH, 'login');

/**
 * Serve the static login page
 */
LoginController.get('/', async (request, response) => {
  response.sendFile('index.html', {root: loginRoot});
});

/**
 * Handle login request.
 */
LoginController.post('/', async (request, response) => {
  const {body} = request;
  if (!body || !body.email || !body.password) {
    response.status(400).send('User requires email and password');
    return;
  }

  const user = await Users.getUser(body.email.toLowerCase());
  if (!user) {
    response.sendStatus(401);
    return;
  }

  const passwordMatch = await Passwords.compare(
    body.password,
    user.password
  );

  if (!passwordMatch) {
    response.sendStatus(401);
    return;
  }

  // Issue a new JWT for this user.
  const jwt = await JSONWebToken.issueToken(user.id);

  response.send({
    jwt,
  });
});

module.exports = LoginController;


/***/ }),

/***/ "./src/controllers/logs_controller.js":
/*!********************************************!*\
  !*** ./src/controllers/logs_controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Logs Controller.
 *
 * Allows user to download current set of logs.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const AddonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");
const archiver = __webpack_require__(/*! archiver */ "archiver");
const express = __webpack_require__(/*! express */ "express");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const jwtMiddleware = __webpack_require__(/*! ../jwt-middleware */ "./src/jwt-middleware.js");
const UserProfile = __webpack_require__(/*! ../user-profile */ "./src/user-profile.js");
const Utils = __webpack_require__(/*! ../utils */ "./src/utils.js");
const WebSocket = __webpack_require__(/*! ws */ "ws");

const LogsController = express.Router();

/**
 * Generate an index of log files.
 */
LogsController.get('/', async (request, response) => {
  const jwt = jwtMiddleware.extractJWTHeader(request) ||
    jwtMiddleware.extractJWTQS(request);
  const files = fs.readdirSync(UserProfile.logDir)
    .filter((f) => !f.startsWith('.'));
  files.sort();

  let content =
    '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="utf-8">' +
    '<title>Things Gateway - Logs</title>' +
    '</head>' +
    '<body>' +
    '<ul>';

  for (const name of files) {
    if (fs.lstatSync(path.join(UserProfile.logDir, name)).isFile()) {
      content +=
        `${'<li>' +
        `<a href="/logs/files/${encodeURIComponent(name)}?jwt=${jwt}">`}${
          Utils.escapeHtml(name)
        }</a>` +
        `</li>`;
    }
  }

  content +=
    '</ul>' +
    '</body>' +
    '</html>';

  response.send(content);
});

/**
 * Static handler for log files.
 */
LogsController.use('/files', express.static(UserProfile.logDir));

/**
 * Handle request for logs.zip.
 */
LogsController.get('/zip', async (request, response) => {
  const archive = archiver('zip');

  archive.on('error', (err) => {
    response.status(500).send(err.message);
  });

  response.attachment('logs.zip');

  archive.pipe(response);
  fs.readdirSync(
    UserProfile.logDir
  ).map((f) => {
    const fullPath = path.join(UserProfile.logDir, f);
    if (!f.startsWith('.') && fs.lstatSync(fullPath).isFile()) {
      archive.file(fullPath, {name: path.join('logs', f)});
    }
  });
  archive.finalize();
});

LogsController.ws('/', (websocket) => {
  if (websocket.readyState !== WebSocket.OPEN) {
    return;
  }

  const heartbeat = setInterval(() => {
    try {
      websocket.ping();
    } catch (e) {
      websocket.terminate();
    }
  }, 30 * 1000);

  const onLog = (message) => {
    websocket.send(JSON.stringify(message), (err) => {
      if (err) {
        console.error('WebSocket sendMessage failed:', err);
      }
    });
  };

  AddonManager.pluginServer.on('log', onLog);

  const cleanup = () => {
    AddonManager.pluginServer.removeListener('log', onLog);
    clearInterval(heartbeat);
  };

  websocket.on('error', cleanup);
  websocket.on('close', cleanup);
});

module.exports = LogsController;


/***/ }),

/***/ "./src/controllers/new_things_controller.js":
/*!**************************************************!*\
  !*** ./src/controllers/new_things_controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * New Things Controller.
 *
 * /new_things returns a list of Things connected/paired with the gateway which
 * haven't yet been added to the gateway database.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const WebSocket = __webpack_require__(/*! ws */ "ws");
const Things = __webpack_require__(/*! ../models/things */ "./src/models/things.js");

const NewThingsController = PromiseRouter();

/**
 * Handle GET requests to /new_things
 */
NewThingsController.get('/', function(request, response) {
  Things.getNewThings().then(function(newThings) {
    response.json(newThings);
  }).catch(function(error) {
    console.error(`Error getting a list of new things from adapters ${error}`);
    response.status(500).send(error);
  });
});

/**
 * Handle a WebSocket request on /new_things
 */
NewThingsController.ws('/', function(websocket) {
  // Since the Gateway have the asynchronous express middlewares, there is a
  // possibility that the WebSocket have been closed.
  if (websocket.readyState !== WebSocket.OPEN) {
    return;
  }
  console.log('Opened a new things socket');
  // Register the WebSocket with the Things model so new devices can be pushed
  // to the client as they are added.
  Things.registerWebsocket(websocket);
  // Send a list of things the adapter manager already knows about
  Things.getNewThings().then(function(newThings) {
    newThings.forEach(function(newThing) {
      websocket.send(JSON.stringify(newThing));
    }, this);
  }).catch(function(error) {
    console.error(`Error getting a list of new things from adapters ${error}`);
  });
});

/**
 * Handle POST requests to /new_things
 */
NewThingsController.post('/', async (request, response) => {
  if (!request.body || !request.body.hasOwnProperty('url')) {
    response.status(400).send('No URL in thing description');
    return;
  }

  const url = request.body.url;
  try {
    const res = await fetch(url, {headers: {Accept: 'application/json'}});

    if (!res.ok) {
      response.status(400).send('Web thing not found');
      return;
    }

    const description = await res.json();

    // Verify some high level thing description properties.
    if (description.hasOwnProperty('name') &&
        (description.hasOwnProperty('type') ||
         description.hasOwnProperty('@type')) &&
        description.hasOwnProperty('properties')) {
      response.json(description);
    } else if (Array.isArray(description)) {
      response.status(400).send('Web things must be added individually');
    } else {
      response.status(400).send('Invalid thing description');
    }
  } catch (e) {
    response.status(400).send('Web thing not found');
  }
});

module.exports = NewThingsController;


/***/ }),

/***/ "./src/controllers/oauth_controller.ts":
/*!*********************************************!*\
  !*** ./src/controllers/oauth_controller.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _oauth_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oauth-types */ "./src/oauth-types.ts");
/* harmony import */ var _models_oauthclients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/oauthclients */ "./src/models/oauthclients.ts");
/* harmony import */ var _jwt_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jwt-middleware */ "./src/jwt-middleware.js");
/* harmony import */ var _jwt_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jwt_middleware__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_5__);


const JSONWebToken = __webpack_require__(/*! ../models/jsonwebtoken */ "./src/models/jsonwebtoken.js");




const auth = _jwt_middleware__WEBPACK_IMPORTED_MODULE_4__["middleware"]();
const OAuthController = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
function redirect(response, baseURL, params) {
    let url = new url__WEBPACK_IMPORTED_MODULE_1__["URL"](baseURL.toString());
    for (let key in params) {
        if (!params.hasOwnProperty(key)) {
            continue;
        }
        if (typeof params[key] !== 'undefined') {
            url.searchParams.set(key, params[key].toString());
        }
    }
    if (url.hostname === 'gateway.localhost') {
        response.redirect(url.toString().replace(/^https:\/\/gateway\.localhost/, ''));
        return;
    }
    response.redirect(url.toString());
}
function verifyClient(request, response) {
    let client = _models_oauthclients__WEBPACK_IMPORTED_MODULE_3__["default"].get(request.client_id, request.redirect_uri);
    if (!client) {
        let err = {
            error: 'unauthorized_client',
            error_description: 'client id unknown',
            state: request.state
        };
        response.status(400).json(err);
        return null;
    }
    if (!request.redirect_uri) {
        request.redirect_uri = client.redirect_uri;
    }
    if (request.redirect_uri.toString() !== client.redirect_uri.toString()) {
        let err = {
            error: 'invalid_request',
            error_description: 'mismatched redirect_uri',
            state: request.state
        };
        response.status(400).json(err);
        return null;
    }
    return client;
}
function verifyClientAuthorization(client, request, response) {
    let authorization = request.headers.authorization;
    if (typeof authorization !== 'string' || !authorization.startsWith('Basic ')) {
        let err = {
            error: 'unauthorized_client',
            error_description: 'authorization header missing or malformed',
        };
        response.status(400).json(err);
        return false;
    }
    let userPassB64 = authorization.substring('Basic '.length);
    let userPass = Buffer.from(userPassB64, 'base64').toString();
    let parts = userPass.split(':');
    if (parts.length !== 2) {
        let err = {
            error: 'unauthorized_client',
            error_description: 'authorization header missing or malformed',
        };
        response.status(400).json(err);
        return false;
    }
    let clientId = decodeURIComponent(parts[0].replace(/\+/g, '%20'));
    let clientSecret = decodeURIComponent(parts[1].replace(/\+/g, '%20'));
    if (client.id !== clientId || client.secret !== clientSecret) {
        let err = {
            error: 'unauthorized_client',
            error_description: 'authorization header mismatch',
        };
        response.status(400).json(err);
        return false;
    }
    return true;
}
function verifyAuthorizationRequest(authRequest, response) {
    let client = verifyClient(authRequest, response);
    if (!client) {
        return;
    }
    if (authRequest.response_type !== 'code') {
        let err = {
            error: 'unsupported_response_type',
            state: authRequest.state
        };
        redirect(response, client.redirect_uri, err);
        return;
    }
    if (!Object(_oauth_types__WEBPACK_IMPORTED_MODULE_2__["scopeValidSubset"])(client.scope, authRequest.scope)) {
        let err = {
            error: 'invalid_scope',
            error_description: 'client scope does not cover requested scope',
            state: authRequest.state
        };
        redirect(response, client.redirect_uri, err);
        return;
    }
    return client;
}
OAuthController.get('/authorize', async (request, response) => {
    let authRequest = {
        response_type: request.query.response_type,
        client_id: request.query.client_id,
        redirect_uri: request.query.redirect_uri && new url__WEBPACK_IMPORTED_MODULE_1__["URL"](request.query.redirect_uri),
        scope: request.query.scope,
        state: request.query.state
    };
    let client = verifyAuthorizationRequest(authRequest, response);
    if (!client) {
        return;
    }
    response.render('authorize', {
        name: client.name,
        domain: client.redirect_uri.host,
        request: authRequest
    });
});
OAuthController.get('/local-token-service', async (request, response) => {
    let localClient = _models_oauthclients__WEBPACK_IMPORTED_MODULE_3__["default"].get('local-token', undefined);
    let tokenRequest = {
        grant_type: 'authorization_code',
        code: request.query.code,
        redirect_uri: localClient.redirect_uri,
        client_id: localClient.id
    };
    request.body = tokenRequest;
    request.headers.authorization = 'Basic ' +
        new Buffer(localClient.id + ':' + localClient.secret).toString('base64');
    let token = await handleAccessTokenRequest(request, response);
    if (token) {
        response.render('local-token-service', {
            token: token.access_token
        });
    }
});
OAuthController.get('/allow', auth, async (request, response) => {
    let authRequest = {
        response_type: request.query.response_type,
        client_id: request.query.client_id,
        redirect_uri: request.query.redirect_uri && new url__WEBPACK_IMPORTED_MODULE_1__["URL"](request.query.redirect_uri),
        scope: request.query.scope,
        state: request.query.state
    };
    let client = verifyAuthorizationRequest(authRequest, response);
    if (!client) {
        return;
    }
    let jwt = request.jwt;
    if (!jwt) {
        return;
    }
    if (!jwt.payload || jwt.payload.role !== 'user_token') {
        response.status(401).send('Authorization must come from user');
        return;
    }
    let code = await JSONWebToken.issueOAuthToken(client, jwt.user, {
        role: 'authorization_code',
        scope: authRequest.scope
    });
    let success = {
        code: code,
        state: authRequest.state
    };
    redirect(response, client.redirect_uri, success);
});
OAuthController.post('/token', async (request, response) => {
    const requestData = request.body;
    if (requestData.grant_type === 'authorization_code') {
        let token = await handleAccessTokenRequest(request, response);
        if (token) {
            response.json(token);
        }
        return;
    }
    let err = {
        error: 'unsupported_grant_type',
        state: requestData.state
    };
    response.status(400).json(err);
});
async function handleAccessTokenRequest(request, response) {
    const requestData = request.body;
    let tokenRequest = {
        grant_type: requestData.grant_type,
        code: requestData.code,
        redirect_uri: requestData.redirect_uri && new url__WEBPACK_IMPORTED_MODULE_1__["URL"](requestData.redirect_uri),
        client_id: requestData.client_id
    };
    let client = verifyClient(tokenRequest, response);
    if (!client) {
        return;
    }
    if (!verifyClientAuthorization(client, request, response)) {
        return;
    }
    let tokenData = await JSONWebToken.verifyJWT(tokenRequest.code);
    if (!tokenData) {
        let err = {
            error: 'invalid_grant',
            error_description: 'included JWT is invalid',
            state: request.body.state
        };
        response.status(400).json(err);
        return;
    }
    let payload = tokenData.payload;
    if (!payload || payload.role !== 'authorization_code' || payload.client_id !== client.id) {
        let err = {
            error: 'invalid_grant',
            state: request.body.state
        };
        response.status(400).json(err);
        return;
    }
    let accessToken = await JSONWebToken.issueOAuthToken(client, tokenData.user, {
        role: _constants__WEBPACK_IMPORTED_MODULE_5__["ACCESS_TOKEN"],
        scope: tokenData.payload.scope
    });
    let res = {
        access_token: accessToken,
        token_type: 'bearer',
        scope: client.scope
    };
    return res;
}
/* harmony default export */ __webpack_exports__["default"] = (OAuthController);


/***/ }),

/***/ "./src/controllers/oauthclients_controller.ts":
/*!****************************************************!*\
  !*** ./src/controllers/oauthclients_controller.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_oauthclients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/oauthclients */ "./src/models/oauthclients.ts");

const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");

const OAuthClientsController = PromiseRouter();
OAuthClientsController.get('/', async (request, response) => {
    let user = request.jwt.user;
    let clients = await _models_oauthclients__WEBPACK_IMPORTED_MODULE_0__["default"].getAuthorized(user);
    response.json(clients.map((client) => {
        return client.getDescription();
    }));
});
OAuthClientsController.delete('/:clientId', async (request, response) => {
    let clientId = request.params.clientId;
    if (!_models_oauthclients__WEBPACK_IMPORTED_MODULE_0__["default"].get(clientId, undefined)) {
        response.status(404).send('Client not found');
        return;
    }
    let user = request.jwt.user;
    await _models_oauthclients__WEBPACK_IMPORTED_MODULE_0__["default"].revokeClientAuthorization(user, clientId);
    response.sendStatus(200);
});
/* harmony default export */ __webpack_exports__["default"] = (OAuthClientsController);


/***/ }),

/***/ "./src/controllers/ping_controller.js":
/*!********************************************!*\
  !*** ./src/controllers/ping_controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Ping Controller.
 *
 * Handles requests to /ping, used for connectivity checks.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const express = __webpack_require__(/*! express */ "express");

const PingController = express.Router();

PingController.get('/', (request, response) => {
  response.status(204).end();
});

module.exports = PingController;


/***/ }),

/***/ "./src/controllers/push_controller.js":
/*!********************************************!*\
  !*** ./src/controllers/push_controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Push API Controller.
 *
 * Implements the Push API for notifications to use
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const PushService = __webpack_require__(/*! ../push-service */ "./src/push-service.js");

const PushController = PromiseRouter();

/**
 * Handle requests for the public key
 */
PushController.get('/vapid-public-key', async (request, response) => {
  const vapid = await PushService.getVAPIDKeys();
  if (!vapid) {
    response.status(500).json({error: 'vapid not configured'});
    return;
  }
  response.status(200).json({publicKey: vapid.publicKey});
});

PushController.post('/register', async (request, response) => {
  const subscription = request.body.subscription;
  try {
    await PushService.createPushSubscription(subscription);
  } catch (err) {
    console.error(`PushController: Failed to register ${subscription}`, err);
    response.status(500).json({error: 'register failed'});
    return;
  }
  response.status(200).json({});
});

module.exports = PushController;


/***/ }),

/***/ "./src/controllers/root_controller.js":
/*!********************************************!*\
  !*** ./src/controllers/root_controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Root Controller.
 *
 * Handles requests to /.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const express = __webpack_require__(/*! express */ "express");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const TunnelService = __webpack_require__(/*! ../ssltunnel */ "./src/ssltunnel.js");

const RootController = express.Router();

/**
 * Get the home page.
 */
RootController.get('/', TunnelService.isTunnelSet, function(request, response) {
  response.sendFile('index.html', {
    root: Constants.BUILD_STATIC_PATH,
  });
});

module.exports = RootController;


/***/ }),

/***/ "./src/controllers/settings_controller.js":
/*!************************************************!*\
  !*** ./src/controllers/settings_controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Settings Controller.
 *
 * Manages gateway settings.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



/* jshint unused:false */

const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const greenlock = __webpack_require__(/*! greenlock */ "greenlock");
const leChallengeDns = __webpack_require__(/*! le-challenge-dns */ "le-challenge-dns").create({debug: false});
const config = __webpack_require__(/*! config */ "config");
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const Platform = __webpack_require__(/*! ../platform */ "./src/platform.js");
const Settings = __webpack_require__(/*! ../models/settings */ "./src/models/settings.js");
const TunnelService = __webpack_require__(/*! ../ssltunnel */ "./src/ssltunnel.js");
const UserProfile = __webpack_require__(/*! ../user-profile */ "./src/user-profile.js");
const mDNSserver = __webpack_require__(/*! ../mdns-server */ "./src/mdns-server.js");
const pkg = __webpack_require__(/*! ../../package.json */ "./package.json");

const SettingsController = PromiseRouter();

/**
 * Set an experiment setting.
 */
SettingsController.put(
  '/experiments/:experimentName',
  async (request, response) => {
    const experimentName = request.params.experimentName;

    if (!request.body || !request.body.hasOwnProperty('enabled')) {
      response.status(400).send('Enabled property not defined');
      return;
    }

    const enabled = request.body.enabled;

    try {
      const result =
        await Settings.set(`experiments.${experimentName}.enabled`,
                           enabled);
      response.status(200).json({enabled: result});
    } catch (e) {
      console.error(`Failed to set setting experiments.${experimentName}`);
      console.error(e);
      response.status(400).send(e);
    }
  });

/**
 * Get an experiment setting.
 */
SettingsController.get(
  '/experiments/:experimentName',
  async (request, response) => {
    const experimentName = request.params.experimentName;

    try {
      const result =
        await Settings.get(`experiments.${experimentName}.enabled`);
      if (typeof result === 'undefined') {
        response.status(404).send('Setting not found');
      } else {
        response.status(200).json({enabled: result});
      }
    } catch (e) {
      console.error(`Failed to get setting experiments.${experimentName}`);
      console.error(e);
      response.status(400).send(e);
    }
  });

SettingsController.post('/reclaim', async (request, response) => {
  if (!request.body || !request.body.hasOwnProperty('subdomain')) {
    response.statusMessage = 'Subdomain missing from request';
    response.status(400).end();
    return;
  }

  const subdomain = request.body.subdomain;

  try {
    await fetch(`${config.get('ssltunnel.registration_endpoint')
    }/reclaim?name=${subdomain}`);
    response.status(200).end();
  } catch (e) {
    console.error(e);
    response.statusMessage = `Error reclaiming domain - ${e}`;
    response.status(400).end();
  }
});

SettingsController.post('/subscribe', async (request, response) => {
  if (!request.body ||
      !request.body.hasOwnProperty('email') ||
      !request.body.hasOwnProperty('subdomain')) {
    response.statusMessage = 'Invalid request';
    response.status(400).end();
    return;
  }

  const email = request.body.email.toLowerCase();
  const reclamationToken = request.body.reclamationToken;
  const subdomain = request.body.subdomain;
  const fulldomain = `${subdomain}.${config.get('ssltunnel.domain')}`;

  function returnError(message) {
    console.error(message);
    response.statusMessage = `Error issuing certificate - ${message}`;
    response.status(400).end();
  }

  const leStore = __webpack_require__(/*! le-store-certbot */ "le-store-certbot").create({
    webrootPath: Constants.BUILD_STATIC_PATH,
    configDir: path.join(UserProfile.baseDir, 'etc'),
    logsDir: path.join(UserProfile.baseDir, 'var', 'log'),
    workDir: path.join(UserProfile.baseDir, 'var', 'lib'),
  });
  const le = greenlock.create({
    server: greenlock.productionServerUrl,
    challengeType: 'dns-01',
    challenges: {'dns-01': leChallengeDns},
    approveDomains: [fulldomain],
    agreeTos: true,
    store: leStore,
    version: 'draft-11',
  });

  let token;
  // promise to be resolved when LE has the dns challenge ready for us
  leChallengeDns.leDnsResponse =
    (challenge, keyAuthorization, keyAuthDigest) => {
      return new Promise((resolve) => {
        // ok now that we have a challenge, we call our gateway to setup
        // the TXT record
        fetch(`${config.get('ssltunnel.registration_endpoint')
        }/dnsconfig?token=${token}&challenge=${keyAuthDigest}`)
          .catch(function(e) {
            returnError(e);
          })
          .then(function(res) {
            return res.text();
          })
          .then(function() {
            resolve('Success!');
          });
      });
    };

  let jsonToken;
  try {
    let subscribeUrl = `${config.get('ssltunnel.registration_endpoint')
    }/subscribe?name=${subdomain}&email=${email}`;
    if (reclamationToken) {
      subscribeUrl += `&reclamationToken=${reclamationToken.trim()}`;
    }

    const res = await fetch(subscribeUrl);
    const body = await res.text();

    jsonToken = JSON.parse(body);
    if (jsonToken.error) {
      returnError(jsonToken.error);
      return;
    }

    // store the token in the db
    token = jsonToken.token;
    await Settings.set('tunneltoken', jsonToken);
  } catch (e) {
    returnError(e);
    return;
  }

  // Register Let's Encrypt
  try {
    const results = await le.register({
      domains: [fulldomain],
      email: config.get('ssltunnel.certemail'),
      agreeTos: true,
      rsaKeySize: 2048,
      challengeType: 'dns-01',
    });

    console.log('success', results);

    // ok. we got the certificates. let's save them
    fs.writeFileSync(
      path.join(UserProfile.sslDir, 'certificate.pem'), results.cert);
    fs.writeFileSync(
      path.join(UserProfile.sslDir, 'privatekey.pem'), results.privkey);
    fs.writeFileSync(
      path.join(UserProfile.sslDir, 'chain.pem'), results.chain);

    // now we associate user's emails with the subdomain, unless it was
    // reclaimed.
    if (!reclamationToken) {
      try {
        await fetch(`${config.get('ssltunnel.registration_endpoint')
        }/setemail?token=${token}&email=${email}`);
        console.log('Online account created.');
      } catch (e) {
        // https://github.com/mozilla-iot/gateway/issues/358
        // we should store this error and display to the user on
        // settings page to allow him to retry
        returnError(e);
        return;
      }
    }

    const endpoint_url = `https://${subdomain}.${
      config.get('ssltunnel.domain')}`;
    TunnelService.start(response, endpoint_url);
    TunnelService.switchToHttps();
  } catch (err) {
    returnError(err.detail ||
                err.message.substring(0, err.message.indexOf('\n')));
  }
});

SettingsController.post('/skiptunnel', async (request, response) => {
  try {
    await Settings.set('notunnel', true);
    response.status(200).end();
  } catch (e) {
    console.error('Failed to set notunnel setting.');
    console.error(e);
    response.status(400).send(e);
  }
});

SettingsController.get('/tunnelinfo', async (request, response) => {
  try {
    const localDomainSettings = await Settings.getTunnelInfo();
    response.send(localDomainSettings);
    response.status(200).end();
  } catch (e) {
    console.error('Failed to retrieve default settings for ' +
      'tunneltoken or local service discovery setting');
    console.error(e);
    response.status(400).send(e);
  }
});

/* This is responsible for controlling dynamically the local domain name
 * settings (via mDNS) and changing or updating mozilla tunnel endpoints.
 * The /domain endpoint is invoked from:
 *   MainMenu -> Settings -> Doamin
 *
 * JSON data: {
 *              local: {
 *                multicastDNSstate: boolean,
 *                localDNSname: string, - e.g. MyHome
 *              },
 *              mozillaTunnel: {
 *                tunnel: boolean,
 *                tunnelName: string, - e.g. MyName
 *                tunnelEmail: string
 *              }
 *            }
 */
SettingsController.put('/domain', async (request, response) => {
  if (!request.body || !request.body.hasOwnProperty('local')) {
    response.statusMessage = 'Invalid request.';
    response.status(400).end();
    return;
  }

  try {
    if (request.body.local.hasOwnProperty('localDNSname')) {
      const requestDomainName = request.body.local.localDNSname;
      await Settings.set('localDNSname', requestDomainName);
      mDNSserver.server.setLocalDomain(requestDomainName);
    } else if (request.body.local.hasOwnProperty('multicastDNSstate')) {
      const requestState = request.body.local.multicastDNSstate;
      await Settings.set('multicastDNSstate', requestState);
      mDNSserver.server.setState(requestState);
    } else {
      response.statusMessage = 'Invalid request.';
      response.status(400).end();
      return;
    }

    let protocol, port;
    if (request.secure) {
      protocol = 'https';
      port = config.get('ports.https');
    } else {
      protocol = 'http';
      port = config.get('ports.http');
    }

    const url = `${protocol}://${mDNSserver.server.localDomain}.local:${port}`;
    const localDomainSettings = {localDomain: url,
                                 update: true,
                                 mDNSstate: mDNSserver.server.serviceState};
    response.status(200).json(localDomainSettings);
  } catch (err) {
    console.error(`Failed setting domain with: ${err} `);
    const localDomainSettings = {localDomain: mDNSserver.server.localDomain,
                                 update: false,
                                 mDNSstate: mDNSserver.server.serviceState,
                                 error: err.message};
    response.status(400).json(localDomainSettings);
  }
});

SettingsController.get('/addonsInfo', (request, response) => {
  response.json({
    url: config.get('addonManager.listUrl'),
    api: config.get('addonManager.api'),
    architecture: Platform.getArchitecture(),
    version: pkg.version,
    nodeVersion: Platform.getNodeVersion(),
    pythonVersions: Platform.getPythonVersions(),
    testAddons: config.get('addonManager.testAddons'),
  });
});

SettingsController.get('/system/platform', (request, response) => {
  response.json({
    architecture: Platform.getArchitecture(),
    raspberryPi: Platform.isRaspberryPi(),
  });
});

SettingsController.get('/system/ssh', (request, response) => {
  response.json({
    toggleImplemented: Platform.isToggleSshImplemented(),
    enabled: Platform.isSshEnabled(),
  });
});

SettingsController.put('/system/ssh', (request, response) => {
  if (!request.body || !request.body.hasOwnProperty('enabled')) {
    response.status(400).send('Enabled property not defined');
    return;
  }

  const enabled = request.body.enabled;
  if (Platform.toggleSsh(enabled)) {
    response.status(200).json({enabled});
  } else {
    response.status(400).send('Failed to toggle');
  }
});

SettingsController.post('/system/actions', (request, response) => {
  if (!request.body || !request.body.hasOwnProperty('action')) {
    response.status(400).send('Action property not defined');
    return;
  }

  const action = request.body.action;
  switch (action) {
    case 'restartGateway':
      if (Platform.restartGateway()) {
        response.status(200).end();
      } else {
        response.status(500).send('Failed to restart gateway');
      }
      break;
    case 'restartSystem':
      if (Platform.restartSystem()) {
        response.status(200).end();
      } else {
        response.status(500).send('Failed to restart system');
      }
      break;
    default:
      response.status(400).send('Unsupported action');
      break;
  }
});

module.exports = SettingsController;


/***/ }),

/***/ "./src/controllers/things_controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/things_controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Things Controller.
 *
 * Manages HTTP requests to /things.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Action = __webpack_require__(/*! ../models/action */ "./src/models/action.js");
const Actions = __webpack_require__(/*! ../models/actions */ "./src/models/actions.js");
const ActionsController = __webpack_require__(/*! ./actions_controller */ "./src/controllers/actions_controller.js");
const AddonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");
const Ajv = __webpack_require__(/*! ajv */ "ajv");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const EventsController = __webpack_require__(/*! ./events_controller */ "./src/controllers/events_controller.js");
const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const Settings = __webpack_require__(/*! ../models/settings */ "./src/models/settings.js");
const Things = __webpack_require__(/*! ../models/things */ "./src/models/things.js");
const WebSocket = __webpack_require__(/*! ws */ "ws");

const ThingsController = PromiseRouter();
const ajv = new Ajv();

/**
 * Get a list of Things.
 */
ThingsController.get('/', (request, response) => {
  if (request.jwt.payload.role !== Constants.USER_TOKEN) {
    if (!request.jwt.payload.scope) {
      response.status(400).send('Token must contain scope');
    } else {
      const scope = request.jwt.payload.scope;
      if (scope.indexOf(' ') === -1 && scope.indexOf('/') == 0 &&
        scope.split('/').length == 2 &&
        scope.split(':')[0] === Constants.THINGS_PATH) {
        Things.getThingDescriptions(request.get('Host'), request.secure)
          .then((things) => {
            response.status(200).json(things);
          });
      } else {
        // Get hrefs of things in scope
        const paths = scope.split(' ');
        const hrefs = new Array(0);
        for (const path of paths) {
          const parts = path.split(':');
          hrefs.push(parts[0]);
        }
        Things.getListThingDescriptions(hrefs,
                                        request.get('Host'),
                                        request.secure)
          .then((things) => {
            response.status(200).json(things);
          });
      }
    }
  } else {
    Things.getThingDescriptions(request.get('Host'), request.secure)
      .then((things) => {
        response.status(200).json(things);
      });
  }
});

ThingsController.patch('/', async (request, response) => {
  if (!request.body ||
      !request.body.hasOwnProperty('thingId') ||
      !request.body.hasOwnProperty('pin') ||
      !request.body.thingId ||
      request.body.pin.trim().length === 0) {
    response.status(400).send('Invalid request');
    return;
  }

  const thingId = request.body.thingId;
  const pin = request.body.pin.trim();

  try {
    const device = await AddonManager.setPin(thingId, pin);
    response.status(200).json(device);
  } catch (e) {
    console.error(`Failed to set PIN for ${thingId}: ${e}`);
    response.status(400).send(e);
  }
});

/**
 * Handle creating a new thing.
 */
ThingsController.post('/', async (request, response) => {
  if (!request.body || !request.body.hasOwnProperty('id')) {
    response.status(400).send('No id in thing description');
    return;
  }
  const description = request.body;
  const id = description.id;
  delete description.id;

  try {
    // If the thing already exists, bail out.
    await Things.getThing(id);
    const err = 'Web thing already added';
    console.log(err, id);
    response.status(400).send(err);
    return;
  } catch (_e) {
    // Do nothing, this is what we want.
  }

  // If we're adding a native webthing, we need to update the config for
  // thing-url-adapter so that it knows about it.
  let webthing = false;
  if (description.hasOwnProperty('webthingUrl')) {
    webthing = true;

    const key = 'addons.thing-url-adapter';
    try {
      const current = await Settings.get(key);
      if (typeof current === 'undefined') {
        throw new Error('Setting is undefined.');
      }

      current.moziot.config.urls.push(description.webthingUrl);
      await Settings.set(key, current);
    } catch (e) {
      console.error('Failed to update settings for thing-url-adapter');
      console.error(e);
      response.status(400).send(e);
      return;
    }

    delete description.webthingUrl;
  }

  try {
    const thing = await Things.createThing(id, description, webthing);
    console.log(`Successfully created new thing ${thing.name}`);
    response.status(201).send(thing);
  } catch (error) {
    console.error('Error saving new thing', id, description);
    console.error(error);
    response.status(500).send(error);
  }

  // If this is a web thing, we need to restart thing-url-adapter.
  if (webthing) {
    try {
      await AddonManager.unloadAddon('thing-url-adapter', true);
      await AddonManager.loadAddon('thing-url-adapter');
    } catch (e) {
      console.error('Failed to restart thing-url-adapter');
      console.error(e);
    }
  }
});

/**
 * Get a Thing.
 */
ThingsController.get('/:thingId', (request, response) => {
  const id = request.params.thingId;
  Things.getThingDescription(id, request.get('Host'), request.secure)
    .then((thing) => {
      response.status(200).json(thing);
    })
    .catch((error) => {
      console.error(`Error getting thing description for thing with id ${id}`);
      console.error(`Error: ${error}`);
      response.status(404).send(error);
    });
});

/**
 * Get the properties of a Thing.
 */
ThingsController.get('/:thingId/properties', async (request, response) => {
  const thingId = request.params.thingId;

  let thing;
  try {
    thing = await Things.getThing(thingId);
  } catch (e) {
    console.error('Failed to get thing:', e);
    response.status(404).send(e);
    return;
  }

  const result = {};
  for (const name in thing.properties) {
    try {
      const value = await AddonManager.getProperty(thingId, name);
      result[name] = value;
    } catch (e) {
      console.error(`Failed to get property ${name}:`, e);
    }
  }

  response.status(200).json(result);
});

/**
 * Get a property of a Thing.
 */
ThingsController.get(
  '/:thingId/properties/:propertyName',
  (request, response) => {
    const thingId = request.params.thingId;
    const propertyName = request.params.propertyName;
    AddonManager.getProperty(thingId, propertyName).then((value) => {
      const result = {};
      result[propertyName] = value;
      response.status(200).json(result);
    }).catch((error) => {
      console.error('Error getting value for thingId:', thingId,
                    'property:', propertyName);
      console.error(error);
      response.status(500).send(error);
    });
  });

/**
 * Set a property of a Thing.
 */
ThingsController.put(
  '/:thingId/properties/:propertyName',
  (request, response) => {
    const thingId = request.params.thingId;
    const propertyName = request.params.propertyName;
    if (!request.body || typeof request.body[propertyName] === 'undefined') {
      response.status(400).send('Invalid property name');
      return;
    }
    const value = request.body[propertyName];
    Things.getThingDescription(thingId, request.get('Host'), request.secure)
      .then((thing) => {
        if (!thing.properties.hasOwnProperty(propertyName)) {
          response.status(404).send('Property not found');
          return;
        }

        if (thing.properties[propertyName].readOnly) {
          response.status(400).send('Read-only property');
          return;
        }

        const valid = ajv.validate(thing.properties[propertyName], value);
        if (!valid) {
          response.status(400).send('Invalid property value');
          return;
        }

        AddonManager.setProperty(thingId, propertyName, value)
          .then((updatedValue) => {
            // Note: it's possible that updatedValue doesn't match value.
            const result = {};
            result[propertyName] = updatedValue;
            response.status(200).json(result);
          }).catch((error) => {
            console.error('Error setting value for thingId:', thingId,
                          'property:', propertyName,
                          'value:', value);
            response.status(500).send(error);
          });
      }).catch(() => {
        response.status(404).send('Thing not found');
      });
  });

/**
 * Use an ActionsController to handle each thing's actions.
 */
ThingsController.use(`/:thingId${Constants.ACTIONS_PATH}`, ActionsController);

/**
 * Use an EventsController to handle each thing's events.
 */
ThingsController.use(`/:thingId${Constants.EVENTS_PATH}`, EventsController);

/**
 * Modify a Thing's floorplan position.
 */
ThingsController.patch('/:thingId', (request, response) => {
  const thingId = request.params.thingId;
  if (!request.body ||
      !request.body.hasOwnProperty('floorplanX') ||
      !request.body.hasOwnProperty('floorplanY')) {
    response.status(400).send('x and y properties needed to position Thing');
    return;
  }
  Things.getThing(thingId).then((thing) => {
    // return
    return thing.setCoordinates(
      request.body.floorplanX, request.body.floorplanY);
  }).then((description) => {
    response.status(200).json(description);
  }).catch((e) => {
    response.status(500).send(`Failed to update thing ${thingId}: ${e}`);
  });
});

/**
 * Modify a Thing.
 */
ThingsController.put('/:thingId', async (request, response) => {
  const thingId = request.params.thingId;
  if (!request.body || !request.body.hasOwnProperty('name')) {
    response.status(400).send('name parameter required');
    return;
  }

  const name = request.body.name.trim();
  if (name.length === 0) {
    response.status(400).send('Invalid name');
    return;
  }

  let thing;
  try {
    thing = await Things.getThing(thingId);
  } catch (e) {
    response.status(500).send(`Failed to retrieve thing ${thingId}: ${e}`);
  }

  if (request.body.selectedCapability) {
    try {
      await thing.setSelectedCapability(request.body.selectedCapability);
    } catch (e) {
      response.status(500).send(`Failed to update thing ${thingId}: ${e}`);
    }
  }

  if (request.body.iconData) {
    try {
      await thing.setIcon(request.body.iconData, true);
    } catch (e) {
      response.status(500).send(`Failed to update thing ${thingId}: ${e}`);
    }
  }

  let description;
  try {
    description = await thing.setName(name);
  } catch (e) {
    response.status(500).send(`Failed to update thing ${thingId}: ${e}`);
  }

  response.status(200).json(description);
});

/**
 * Remove a Thing.
 */
ThingsController.delete('/:thingId', (request, response) => {
  const thingId = request.params.thingId;
  AddonManager.removeThing(thingId).
    then(() => {
      Things.removeThing(thingId).then(() => {
        console.log(`Successfully deleted ${thingId} from database.`);
        response.status(204).send();
      }).catch((e) => {
        response.status(500).send(`Failed to remove thing ${thingId}: ${e}`);
      });
    }).catch((e) => {
      response.status(500).send(`Failed to remove thing ${thingId}: ${e}`);
    });
});

/**
 * Connect to receive messages from a Thing
 */
ThingsController.ws('/:thingId/', (websocket, request) => {
  // Since the Gateway have the asynchronous express middlewares, there is a
  // possibility that the WebSocket have been closed.
  if (websocket.readyState !== WebSocket.OPEN) {
    return;
  }
  const thingId = request.params.thingId;
  const subscribedEventNames = {};

  function sendMessage(message) {
    websocket.send(message, (err) => {
      if (err) {
        console.error('WebSocket sendMessage failed', err);
      }
    });
  }

  function onPropertyChanged(property) {
    if (property.device.id !== thingId) {
      return;
    }
    sendMessage(JSON.stringify({
      messageType: Constants.PROPERTY_STATUS,
      data: {
        [property.name]: property.value,
      },
    }));
  }

  function onActionStatus(action) {
    sendMessage(JSON.stringify({
      messageType: Constants.ACTION_STATUS,
      data: {
        [action.name]: action.getDescription(),
      },
    }));
  }

  function onEvent(event) {
    if (!subscribedEventNames[event.name]) {
      return;
    }
    sendMessage(JSON.stringify({
      messageType: Constants.EVENT,
      data: {
        [event.name]: event.getDescription(),
      },
    }));
  }

  function onConnected(connected) {
    sendMessage(JSON.stringify({
      messageType: Constants.CONNECTED,
      data: connected,
    }));
  }

  Things.getThing(thingId).then((thing) => {
    thing.registerWebsocket(websocket);
    thing.addEventSubscription(onEvent);
    thing.addConnectedSubscription(onConnected);

    websocket.on('close', () => {
      thing.removeEventSubscription(onEvent);
      thing.removeConnectedSubscription(onConnected);
    });
  }).catch(() => {
    console.error('WebSocket opened on nonexistent thing', thingId);
    sendMessage(JSON.stringify({
      messageType: Constants.ERROR,
      data: {
        status: '404 Not Found',
        message: `Thing ${thingId} not found`,
      },
    }));
    websocket.close();
  });

  AddonManager.on(Constants.PROPERTY_CHANGED, onPropertyChanged);
  Actions.on(Constants.ACTION_STATUS, onActionStatus);

  const heartbeatInterval = setInterval(() => {
    try {
      websocket.ping();
    } catch (e) {
      // Do nothing. Let cleanup() handle things if necessary.
      websocket.terminate();
    }
  }, 30 * 1000);

  const cleanup = () => {
    AddonManager.removeListener(Constants.PROPERTY_CHANGED, onPropertyChanged);
    Actions.removeListener(Constants.ACTION_STATUS, onActionStatus);
    clearInterval(heartbeatInterval);
  };

  websocket.on('error', cleanup);
  websocket.on('close', cleanup);

  websocket.on('message', (requestText) => {
    let request = null;
    try {
      request = JSON.parse(requestText);
    } catch (e) {
      sendMessage(JSON.stringify({
        messageType: Constants.ERROR,
        data: {
          status: '400 Bad Request',
          message: 'Parsing request failed',
        },
      }));
      return;
    }

    const device = AddonManager.getDevice(thingId);
    if (!device) {
      sendMessage(JSON.stringify({
        messageType: Constants.ERROR,
        data: {
          status: '400 Bad Request',
          message: `Thing ${thingId} not found`,
          request: request,
        },
      }));
      return;
    }

    switch (request.messageType) {
      case Constants.SET_PROPERTY: {
        const setRequests = Object.keys(request.data).map((property) => {
          const value = request.data[property];
          return device.setProperty(property, value);
        });
        Promise.all(setRequests).catch((err) => {
          // If any set fails, send an error
          sendMessage(JSON.stringify({
            messageType: Constants.ERROR,
            data: {
              status: '400 Bad Request',
              message: err,
              request: request,
            },
          }));
        });
        break;
      }

      case Constants.ADD_EVENT_SUBSCRIPTION: {
        for (const eventName in request.data) {
          subscribedEventNames[eventName] = true;
        }
        break;
      }

      case Constants.REQUEST_ACTION: {
        for (const actionName in request.data) {
          const actionParams = request.data[actionName].input;
          Things.getThing(thingId).then((thing) => {
            const action = new Action(actionName, actionParams, thing);
            return Actions.add(action).then(() => {
              return AddonManager.requestAction(
                thingId, action.id, actionName, actionParams);
            });
          }).catch((err) => {
            sendMessage(JSON.stringify({
              messageType: Constants.ERROR,
              data: {
                status: '400 Bad Request',
                message: err.message,
                request: request,
              },
            }));
          });
        }
        break;
      }

      default: {
        sendMessage(JSON.stringify({
          messageType: Constants.ERROR,
          data: {
            status: '400 Bad Request',
            message: `Unknown messageType: ${request.messageType}`,
            request: request,
          },
        }));
        break;
      }
    }
  });
});

module.exports = ThingsController;


/***/ }),

/***/ "./src/controllers/updates_controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/updates_controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const childProcess = __webpack_require__(/*! child_process */ "child_process");
const config = __webpack_require__(/*! config */ "config");
const fs = __webpack_require__(/*! fs */ "fs");
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const semver = __webpack_require__(/*! semver */ "semver");
const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");

const pkg = __webpack_require__(/*! ../../package.json */ "./package.json");

const UpdatesController = PromiseRouter();

function readVersion(packagePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(packagePath, {encoding: 'utf8'}, function(err, data) {
      if (err) {
        reject(err);
        return;
      }

      try {
        const pkgJson = JSON.parse(data);

        if (!semver.valid(pkgJson.version)) {
          reject(new Error(`Invalid gateway semver: ${pkgJson.version}`));
          return;
        }

        resolve(pkgJson.version);
      } catch (e) {
        reject(e);
      }
    });
  });
}

function stat(path) {
  return new Promise(function(resolve, reject) {
    fs.stat(path, function(err, stats) {
      if (err) {
        if (err.code === 'ENOENT') {
          resolve(null);
        } else {
          reject(err);
        }
      } else {
        resolve(stats);
      }
    });
  });
}

const cacheLatest = {
  tag: null,
  time: 0,
  value: {version: null},
};
const cacheDuration = 60 * 1000;

function cacheLatestInsert(response, value) {
  cacheLatest.tag = response.get('etag');
  cacheLatest.time = Date.now();
  cacheLatest.value = value;
}

/**
 * Send the client an object describing the latest release
 */
UpdatesController.get('/latest', async function(request, response) {
  const etag = request.get('If-None-Match');
  if (etag) {
    if (cacheLatest.tag === etag &&
        Date.now() - cacheLatest.time < cacheDuration) {
      response.sendStatus(304);
      return;
    }
  }

  const res = await fetch(
    config.get('updateUrl'),
    {headers: {'User-Agent': `mozilla-iot-gateway/${pkg.version}`}});

  const releases = await res.json();
  if (!releases || !releases.filter) {
    console.warn('API returned invalid releases, rate limit likely exceeded');
    const value = {version: null};
    response.send(value);
    cacheLatestInsert(response, value);
    return;
  }
  const latestRelease = releases.filter((release) => {
    return !release.prerelease && !release.draft;
  })[0];
  if (!latestRelease) {
    console.warn('No releases found');
    const value = {version: null};
    response.send(value);
    cacheLatestInsert(response, value);
    return;
  }
  const releaseVer = latestRelease.tag_name;
  const value = {version: releaseVer};
  response.send(value);
  cacheLatestInsert(response, value);
});

/**
 * Send an object describing the update status of the gateway
 */
UpdatesController.get('/status', async function(request, response) {
  // gateway, gateway_failed, gateway_old
  // oldVersion -> gateway_old's package.json version
  // if (gateway_failed.version > thisversion) {
  //  update failed, last attempt was ctime of gateway_failed
  // }
  const currentVersion = pkg.version;

  const oldStats = await stat('../gateway_old/package.json');
  let oldVersion = null;
  if (oldStats) {
    try {
      oldVersion = await readVersion('../gateway_old/package.json');
    } catch (e) {
      console.error('Failed to read ../gateway_old/package.json:', e);
    }
  }

  const failedStats = await stat('../gateway_failed/package.json');
  let failedVersion = null;
  if (failedStats) {
    try {
      failedVersion = await readVersion('../gateway_failed/package.json');
    } catch (e) {
      console.error('Failed to read ../gateway_failed/package.json:', e);
    }
  }

  if (failedVersion && semver.gt(failedVersion, currentVersion)) {
    response.send({
      success: false,
      version: currentVersion,
      failedVersion: failedVersion,
      timestamp: failedStats.ctime,
    });
  } else {
    let timestamp = null;
    if (oldStats) {
      timestamp = oldStats.ctime;
    }
    response.send({
      success: true,
      version: currentVersion,
      oldVersion: oldVersion,
      timestamp: timestamp,
    });
  }
});

UpdatesController.post('/update', async function(request, response) {
  childProcess.exec('sudo systemctl start ' +
    'mozilla-iot-gateway.check-for-update.service');

  response.end();
});

module.exports = UpdatesController;


/***/ }),

/***/ "./src/controllers/uploads_controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/uploads_controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Uploads Controller.
 *
 * Manages file uploads.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const express = __webpack_require__(/*! express */ "express");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const UserProfile = __webpack_require__(/*! ../user-profile */ "./src/user-profile.js");

const UPLOADS_PATH = UserProfile.uploadsDir;
const FLOORPLAN_PATH = path.join(UPLOADS_PATH, 'floorplan.svg');
const FALLBACK_FLOORPLAN_PATH = path.join(Constants.STATIC_PATH,
                                          'images',
                                          'floorplan.svg');

// On startup, copy the default floorplan, if necessary.
if (!fs.existsSync(FLOORPLAN_PATH)) {
  try {
    fs.copyFileSync(FALLBACK_FLOORPLAN_PATH, FLOORPLAN_PATH);
  } catch (err) {
    console.error(`Failed to copy floorplan: ${err}`);
  }
}

const UploadsController = express.Router();

/**
 * Upload a file.
 */
UploadsController.post('/', function(request, response) {
  if (!request.files || !request.files.file) {
    return response.status(500).send('No file provided for upload');
  }

  try {
    if (fs.existsSync(FLOORPLAN_PATH)) {
      fs.unlinkSync(FLOORPLAN_PATH);
    }
  } catch (err) {
    return response.status(500).send(`Failed to unlink old floorplan: ${err}`);
  }

  const file = request.files.file;
  file.mv(FLOORPLAN_PATH, function(error) {
    if (error) {
      // On error, try to copy the fallback.
      try {
        fs.copyFileSync(FALLBACK_FLOORPLAN_PATH, FLOORPLAN_PATH);
      } catch (err) {
        console.error(`Failed to copy floorplan: ${err}`);
      }

      return response.status(500).send(
        `Failed to save uploaded file: ${error}`);
    }

    response.status(201).send('Successfully uploaded file');
  });
});

module.exports = UploadsController;


/***/ }),

/***/ "./src/controllers/users_controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/users_controller.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Users Controller.
 *
 * Manages HTTP requests to /users.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const Passwords = __webpack_require__(/*! ../passwords */ "./src/passwords.js");
const Users = __webpack_require__(/*! ../models/users */ "./src/models/users.js");
const JSONWebToken = __webpack_require__(/*! ../models/jsonwebtoken */ "./src/models/jsonwebtoken.js");
const jwtMiddleware = __webpack_require__(/*! ../jwt-middleware */ "./src/jwt-middleware.js");
const auth = jwtMiddleware.middleware();

const UsersController = PromiseRouter();

/**
 * Get the count of users.
 *
 * NOTE: This is temporary while we figure out mutli user UI.
 */
UsersController.get('/count', async (request, response) => {
  const count = await Users.getCount();
  return response.status(200).send({count});
});

/**
 * Get info about all users.
 */
UsersController.get('/info', auth, async (request, response) => {
  const users = await Users.getUsers();
  const descriptions = users.map((user) => {
    const loggedIn = user.id === request.jwt.user;
    return Object.assign(user.getDescription(), {loggedIn});
  });
  return response.status(200).send(descriptions);
});

/**
 * Get a user.
 */
UsersController.get('/:userId', auth, async (request, response) => {
  const user = await Users.getUserById(request.params.userId);

  if (!user) {
    response.sendStatus(404);
    return;
  }

  response.status(200).json(user.getDescription());
});

/**
 * Create a user
 */
UsersController.post('/', async (request, response) => {
  const body = request.body;

  if (!body || !body.email || !body.password) {
    response.status(400).send('User requires email and password.');
    return;
  }

  // If a user has already been created, this path must be authenticated.
  const count = await Users.getCount();
  if (count > 0) {
    const jwt = await jwtMiddleware.authenticate(request);
    if (!jwt) {
      response.sendStatus(401);
      return;
    }
  }

  // See if this user already exists.
  const found = await Users.getUser(body.email);
  if (found) {
    response.status(400).send('User already exists.');
    return;
  }

  // TODO: user facing errors...
  const hash = await Passwords.hash(body.password);
  const user = await Users.createUser(body.email, hash, body.name);
  const jwt = await JSONWebToken.issueToken(user.id);

  response.send({
    jwt,
  });
});

/**
 * Edit a user
 */
UsersController.put('/:userId', auth, async (request, response) => {
  const user = await Users.getUserById(request.params.userId);

  if (!user) {
    response.sendStatus(404);
    return;
  }

  const body = request.body;
  if (!body || !body.email || !body.password) {
    response.status(400).send('User requires email and password.');
    return;
  }

  const passwordMatch = await Passwords.compare(body.password, user.password);
  if (!passwordMatch) {
    response.status(400).send('Passwords do not match.');
    return;
  }

  if (body.newPassword) {
    user.password = await Passwords.hash(body.newPassword);
  }

  user.email = body.email;
  user.name = body.name;

  await Users.editUser(user);
  response.sendStatus(200);
});

/**
 * Delete a user
 */
UsersController.delete('/:userId', auth, async (request, response) => {
  const userId = request.params.userId;

  await Users.deleteUser(userId);
  response.sendStatus(200);
});

module.exports = UsersController;


/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Things Gateway Database.
 *
 * Stores a list of Things connected to the gateway.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const config = __webpack_require__(/*! config */ "config");
const sqlite3 = __webpack_require__(/*! sqlite3 */ "sqlite3").verbose();
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const Passwords = __webpack_require__(/*! ./passwords */ "./src/passwords.js");
const assert = __webpack_require__(/*! assert */ "assert");

// Imported as a module so we use a relative path.
const ThingsData = __webpack_require__(/*! ../static/things.json */ "./static/things.json");

const TABLES = [
  'users',
  'jsonwebtokens',
  'things',
  'settings',
  'pushSubscriptions',
];

const DEBUG =  false || ("development" === 'test');

const Database = {
  /**
   * SQLite3 Database object.
   */
  db: null,

  /**
   * Open the database.
   */
  open: function() {
    // If the database is already open, just return.
    if (this.db) {
      return;
    }

    // Don't pull this from user-profile.js, because that would cause a
    // circular dependency.
    let filename;
    let exists = false;
    if (false) {} else {
      filename = path.join(config.get('profileDir'), 'config', 'db.sqlite3');

      const removeBeforeOpen = config.get('database.removeBeforeOpen');

      // Check if database already exists
      exists = fs.existsSync(filename);
      if (exists && removeBeforeOpen) {
        fs.unlinkSync(filename);
        exists = false;
      }
    }

    console.log(exists ? 'Opening' : 'Creating', 'database:', filename);
    // Open database or create it if it doesn't exist
    this.db = new sqlite3.Database(filename);

    // Set a timeout in case the database is locked. 10 seconds is a bit long,
    // but it's better than crashing.
    this.db.configure('busyTimeout', 10000);

    this.db.serialize(() => {
      this.createTables();
      this.migrate();
      // If database newly created, populate with default data
      if (!exists) {
        this.populate();
      }
    });
  },

  createTables: function() {
    // Create Things table
    this.db.run('CREATE TABLE IF NOT EXISTS things (' +
      'id TEXT PRIMARY KEY,' +
      'description TEXT' +
    ');');

    // Create Users table
    this.db.run('CREATE TABLE IF NOT EXISTS users (' +
      'id INTEGER PRIMARY KEY ASC,' +
      'email TEXT UNIQUE,' +
      'password TEXT,' +
      'name TEXT' +
    ');');

    /**
     * This really should have a foreign key constraint but it does not work
     * with our version of node-sqlite / sqlite.
     *
     * https://github.com/mapbox/node-sqlite3/pull/660
     *
     * Instead, the INTEGER user is either the id of the user or -1 if NULL
     */
    this.db.run('CREATE TABLE IF NOT EXISTS jsonwebtokens (' +
      'id INTEGER PRIMARY KEY ASC,' +
      'keyId TEXT UNIQUE,' + // public id (kid in JWT terms).
      'user INTEGER,' +
      'issuedAt DATE,' +
      'publicKey TEXT,' +
      'payload TEXT' +
    ');');

    // Create Settings table
    this.db.run('CREATE TABLE IF NOT EXISTS settings (' +
      'key TEXT PRIMARY KEY,' +
      'value TEXT' +
    ');');

    this.db.run(`CREATE TABLE IF NOT EXISTS pushSubscriptions (
      id INTEGER PRIMARY KEY,
      subscription TEXT UNIQUE
    );`);
  },

  /**
   * Do anything necessary to migrate from old database schemas.
   */
  migrate: function() {
    this.db.run('DROP TABLE IF EXISTS jsonwebtoken_to_user');
  },

  /**
   * Populate the database with default data.
   */
  populate: function() {
    console.log('Populating database with default things...');
    // Populate Things table
    const insertSQL = this.db.prepare(
      'INSERT INTO things (id, description) VALUES (?, ?)');
    for (const thing of ThingsData) {
      const thingId = thing.id;
      delete thing.id;
      insertSQL.run(thingId, JSON.stringify(thing));
    }
    insertSQL.finalize();

    // Add default user if provided
    const defaultUser = config.get('authentication.defaultUser');
    if (defaultUser) {
      const passwordHash = Passwords.hashSync(defaultUser.password);
      this.db.run(
        'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
        [defaultUser.email.toLowerCase(), passwordHash, defaultUser.name],
        function(error) {
          if (error) {
            console.error('Failed to save default user.');
          } else {
            console.log(`Saved default user ${defaultUser.email}`);
          }
        });
    }

    // Add any settings provided.
    const generateSettings = function(obj, baseKey) {
      const settings = [];

      for (const key in obj) {
        let newKey;
        if (baseKey !== '') {
          newKey = `${baseKey}.${key}`;
        } else {
          newKey = key;
        }

        if (typeof obj[key] === 'object') {
          settings.push(...generateSettings(obj[key], newKey));
        } else {
          settings.push([newKey, obj[key]]);
        }
      }
      return settings;
    };

    const settings = generateSettings(config.get('settings.defaults'), '');
    for (const setting of settings) {
      this.db.run(
        'INSERT INTO settings (key, value) VALUES (?, ?)',
        [setting[0], setting[1]],
        function(error) {
          if (error) {
            console.error(`Failed to insert setting ${
              setting[0]}`);
          } else if (DEBUG) {
            console.log(`Saved setting ${setting[0]} = ${
              setting[1]}`);
          }
        });
    }
  },

  /**
   * Get all Things stored in the database.
   *
   * @return Promise which resolves with a list of Thing objects.
   */
  getThings: function() {
    return new Promise((function(resolve, reject) {
      this.db.all(
        'SELECT id, description FROM things',
        (function(err, rows) {
          if (err) {
            reject(err);
          } else {
            const things = [];
            for (const row of rows) {
              const thing = JSON.parse(row.description);
              thing.id = row.id;
              things.push(thing);
            }
            resolve(things);
          }
        }));
    }).bind(this));
  },

  /**
   * Add a new Thing to the Database.
   *
   * @param String id The ID to give the new Thing.
   * @param String description A serialised Thing description.
   */
  createThing: function(id, description) {
    return new Promise((function(resolve, reject) {
      const db = this.db;
      db.run(
        'INSERT INTO things (id, description) VALUES (?, ?)',
        [id, JSON.stringify(description)],
        function(error) {
          if (error) {
            reject(error);
          } else {
            resolve(description);
          }
        });
    }).bind(this));
  },

  /**
   * Update a Thing in the Database.
   *
   * @param String id ID of the thing to update.
   * @param String description A serialised Thing description.
   */
  updateThing: function(id, description) {
    return new Promise((function(resolve, reject) {
      const db = this.db;
      db.run(
        'UPDATE things SET description=? WHERE id=?',
        [JSON.stringify(description), id],
        function(error) {
          if (error) {
            reject(error);
          } else {
            resolve(description);
          }
        });
    }).bind(this));
  },

  /**
   * Remove a Thing from the Database.
   *
   * @param String id The ID of the Thing to remove.
   */
  removeThing: function(id) {
    return new Promise((function(resolve, reject) {
      const db = this.db;
      db.run('DELETE FROM things WHERE id = ?', id, function(error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    }).bind(this));
  },

  /**
   * Get a user by their email address.
   */
  getUser: function(email) {
    return new Promise((function(resolve, reject) {
      const db = this.db;
      db.get(
        'SELECT * FROM users WHERE email = ?',
        email,
        function(error, row) {
          if (error) {
            reject(error);
          } else {
            resolve(row);
          }
        });
    }).bind(this));
  },

  /**
   * Get a user by it's primary key (id).
   */
  getUserById: async function(id) {
    assert(typeof id === 'number');
    return await this.get(
      'SELECT * FROM users WHERE id = ?',
      id
    );
  },

  /**
   * Get all Users stored in the database.
   *
   * @return {Promise<Array<User>>} resolves with a list of User objects
   */
  getUsers: function() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  getUserCount: async function() {
    const {count} = await this.get('SELECT count(*) as count FROM users');
    return count;
  },

  /**
   * Get a setting or return undefined
   * @param {String} key
   * @return {Promise<Object?>} value
   */
  getSetting: async function(key) {
    const res = await this.get('SELECT value FROM settings WHERE key=?', key);
    if (DEBUG) {
      console.log('getSetting', key, res);
    }

    if (!res) {
      return;
    }

    const {value} = res;
    if (typeof value === 'undefined') {
      return value;
    } else {
      return JSON.parse(value);
    }
  },

  /**
   * Set a setting. Assumes that the only access to the database is
   * single-threaded.
   *
   * @param {String} key
   * @param {Object} value
   * @return {Promise}
   */
  setSetting: async function(key, value) {
    value = JSON.stringify(value);
    const currentValue = await this.getSetting(key);
    if (typeof currentValue === 'undefined') {
      return this.run('INSERT INTO settings (key, value) VALUES (?, ?)',
                      [key, value]);
    } else {
      return this.run('UPDATE settings SET value=? WHERE key=?', [value, key]);
    }
  },

  /**
   * Remove a setting. Assumes that the only access to the database is
   * single-threaded.
   *
   * @param {String} key
   * @return {Promise}
   */
  deleteSetting: async function(key) {
    this.run('DELETE FROM settings WHERE key = ?', [key]);
  },

  /**
   * Get a list of add-on-related settings.
   *
   * @return {Promise<Array<Setting>>} resolves with a list of setting objects
   */
  getAddonSettings: async function() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM settings WHERE key LIKE "addons.%"',
                  (err, rows) => {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(rows);
                    }
                  });
    });
  },

  /**
   * Create a user
   * @param {User} user
   * @return {Promise<User>}
   */
  createUser: async function(user) {
    const result = await this.run(
      'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
      [user.email, user.password, user.name]
    );
    assert(typeof result.lastID === 'number');
    return result.lastID;
  },

  /**
   * Edit a user.
   * @param {User} user
   * @return Promise that resolves when operation is complete.
   */
  editUser: async function(user) {
    assert(typeof user.id === 'number');
    return this.run(
      'UPDATE users SET email=?, password=?, name=? WHERE id=?',
      [user.email, user.password, user.name, user.id]
    );
  },

  /**
   * Delete a user.
   * @param {Number} userId
   * @return Promise that resolves when operation is complete.
   */
  deleteUser: function(userId) {
    assert(typeof userId === 'number');
    const deleteUser = this.run(
      'DELETE FROM users WHERE id = ?',
      [userId]
    );
    const deleteTokens = this.deleteJSONWebTokensForUser(userId);
    /**
     * XXX: This is a terrible hack until we get foreign key constraint support
     * turned on with node-sqlite. As is this could leave junk around in the db.
     */
    return Promise.all([deleteTokens, deleteUser]);
  },

  /**
   * Delete all jsonwebtoken's for a given user.
   */
  deleteJSONWebTokensForUser: function(userId) {
    assert(typeof userId === 'number');
    return this.run(
      'DELETE FROM jsonwebtokens WHERE user = ?',
      [userId]
    );
  },

  /**
   * Insert a JSONWebToken into the database
   * @param {JSONWebToken} token
   * @return {Promise<number>} resolved to JWT's primary key
   */
  createJSONWebToken: async function(token) {
    const {keyId, user, publicKey, issuedAt, payload} = token;
    const result = await this.run(
      'INSERT INTO jsonwebtokens (keyId, user, issuedAt, publicKey, payload) ' +
      'VALUES (?, ?, ?, ?, ?)',
      [keyId, user, issuedAt, publicKey, JSON.stringify(payload)]
    );
    assert(typeof result.lastID === 'number');
    return result.lastID;
  },

  /**
   * Get a JWT by its key id.
   * @param {string} keyId
   * @return {Promise<Object>} jwt data
   */
  getJSONWebTokenByKeyId: function(keyId) {
    assert(typeof keyId === 'string');
    return this.get(
      'SELECT * FROM jsonwebtokens WHERE keyId = ?',
      keyId
    );
  },

  /**
   * Get all known JWTs of a user
   * @param {number} userId
   * @return {Promise<Array<Object>>}
   */
  getJSONWebTokensByUser: function(userId) {
    return new Promise((resolve, reject) => {
      this.db.all(
        'SELECT * FROM jsonwebtokens WHERE user = ?',
        [userId],
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
    });
  },

  /**
   * Delete a JWT by it's key id.
   * @param {string} keyId
   * @return {Promise<boolean>} whether deleted
   */
  deleteJSONWebTokenByKeyId: async function(keyId) {
    assert(typeof keyId === 'string');
    const result = await this.run(
      'DELETE FROM jsonwebtokens WHERE keyId = ?',
      keyId
    );
    return result.changes !== 0;
  },

  /**
   * Store a new Push subscription
   * @param {Object} subscription
   * @return {Promise<number>} resolves to sub id
   */
  createPushSubscription: function(desc) {
    const description = JSON.stringify(desc);

    const insert = () => {
      return this.run(
        'INSERT INTO pushSubscriptions (subscription) VALUES (?)',
        [description]
      ).then((res) => {
        return parseInt(res.lastID);
      });
    };

    return this.get(
      'SELECT id FROM pushSubscriptions WHERE subscription = ?',
      description
    ).then((res) => {
      if (typeof res === 'undefined') {
        return insert();
      }

      return res.id;
    }).catch(() => {
      return insert();
    });
  },

  /**
   * Get all push subscriptions
   * @return {Promise<Array<PushSubscription>>}
   */
  getPushSubscriptions: function() {
    return new Promise((resolve, reject) => {
      this.db.all(
        'SELECT id, subscription FROM pushSubscriptions',
        [],
        function(err, rows) {
          if (err) {
            reject(err);
            return;
          }
          const subs = [];
          for (const row of rows) {
            const sub = JSON.parse(row.subscription);
            sub.id = row.id;
            subs.push(sub);
          }
          resolve(subs);
        }
      );
    });
  },

  /**
   * Delete a single subscription
   * @param {number} id
   */
  deletePushSubscription: function(id) {
    return this.run('DELETE FROM pushSubscriptions WHERE id = ?', [id]);
  },

  /**
   * ONLY for tests (clears all tables).
   */
  deleteEverything: async function() {
    return Promise.all(TABLES.map((t) => {
      return this.run(`DELETE FROM ${t}`);
    }));
  },

  get: function(sql, ...params) {
    return new Promise((accept, reject) => {
      params.push(function(err, row) {
        if (err) {
          reject(err);
          return;
        }
        accept(row);
      });

      try {
        this.db.get(sql, ...params);
      } catch (err) {
        reject(err);
      }
    });
  },

  /**
   * Run a SQL statement
   * @param {String} sql
   * @param {Array<any>} values
   * @return {Promise<Object>} promise resolved to `this` of statement result
   */
  run: function(sql, values) {
    return new Promise((accept, reject) => {
      try {
        this.db.run(sql, values, function(err) {
          if (err) {
            reject(err);
            return;
          }
          // node-sqlite puts results on "this" so avoid arrrow fn.
          accept(this);
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};

module.exports = Database;


/***/ }),

/***/ "./src/deferred.js":
/*!*************************!*\
  !*** ./src/deferred.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Wraps up a promise in a slightly more convenient manner for passing
 * around, or saving.
 *
 * @module Deferred
 */



const DEBUG = false;

let id = 0;

class Deferred {
  constructor() {
    this.id = ++id;
    this.promise = new Promise((resolve, reject) => {
      this.resolveFunc = resolve;
      this.rejectFunc = reject;
    });
    if (DEBUG) {
      console.log('Deferred: Created deferred promise id:', this.id);
    }
  }

  resolve(arg) {
    if (DEBUG) {
      console.log('Deferred: Resolving deferred promise id:', this.id,
                  'arg:', arg);
    }
    return this.resolveFunc(arg);
  }

  reject(arg) {
    if (DEBUG) {
      console.log('Deferred: Rejecting deferred promise id:', this.id,
                  'arg:', arg);
    }
    return this.rejectFunc(arg);
  }
}

module.exports = Deferred;


/***/ }),

/***/ "./src/ec-crypto.ts":
/*!**************************!*\
  !*** ./src/ec-crypto.ts ***!
  \**************************/
/*! exports provided: generateKeyPair, JWT_ALGORITHM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateKeyPair", function() { return generateKeyPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_ALGORITHM", function() { return JWT_ALGORITHM; });
/* harmony import */ var asn1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! asn1.js */ "asn1.js");
/* harmony import */ var asn1_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(asn1_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);


const CURVE = 'prime256v1';
const ECPrivateKeyASN = asn1_js__WEBPACK_IMPORTED_MODULE_0__["define"]('ECPrivateKey', function () {
    this.seq().obj(this.key('version').int(), this.key('privateKey').octstr(), this.key('parameters').explicit(0).objid().optional(), this.key('publicKey').explicit(1).bitstr().optional());
});
const SubjectPublicKeyInfoASN = asn1_js__WEBPACK_IMPORTED_MODULE_0__["define"]('SubjectPublicKeyInfo', function () {
    this.seq().obj(this.key('algorithm').seq().obj(this.key('id').objid(), this.key('namedCurve').objid()), this.key('pub').bitstr());
});
const UNRESTRICTED_ALGORITHM_ID = [1, 2, 840, 10045, 2, 1];
const SECP256R1_CURVE = [1, 2, 840, 10045, 3, 1, 7];
function generateKeyPair() {
    const key = crypto__WEBPACK_IMPORTED_MODULE_1__["createECDH"](CURVE);
    key.generateKeys();
    const priv = ECPrivateKeyASN.encode({
        version: 1,
        privateKey: key.getPrivateKey(),
        parameters: SECP256R1_CURVE,
    }, 'pem', {
        label: 'EC PRIVATE KEY',
    });
    const pub = SubjectPublicKeyInfoASN.encode({
        pub: {
            unused: 0,
            data: key.getPublicKey(),
        },
        algorithm: {
            id: UNRESTRICTED_ALGORITHM_ID,
            namedCurve: SECP256R1_CURVE,
        },
    }, 'pem', {
        label: 'PUBLIC KEY',
    });
    return { public: pub, private: priv };
}
const JWT_ALGORITHM = 'ES256';


/***/ }),

/***/ "./src/jwt-middleware.js":
/*!*******************************!*\
  !*** ./src/jwt-middleware.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * JWT authorization middleware.
 *
 * Contains logic to create a middleware which validates the presence of a JWT
 * token in either the header or query parameters (for websockets).
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
const Constants = __webpack_require__(/*! ./constants */ "./src/constants.js");
const JSONWebToken = __webpack_require__(/*! ./models/jsonwebtoken */ "./src/models/jsonwebtoken.js");

const AUTH_TYPE = 'Bearer';

/**
 * Attempt to find the JWT in query parameters.
 *
 * @param {Request} req incoming http request.
 * @return {string|false} JWT string or false.
 */
function extractJWTQS(req) {
  if (typeof req.query === 'object' && req.query.jwt) {
    return req.query.jwt;
  }
  return false;
}

/**
 *  Attempt to find the JWT in the Authorization header.
 *
 * @param {Request} req incoming http request.
 * @return {string|false} JWT string or false.
 */
function extractJWTHeader(req) {
  const {authorization} = req.headers;
  if (!authorization) {
    return false;
  }
  const [type, sig] = authorization.split(' ');
  if (type !== AUTH_TYPE) {
    console.warn('JWT header extraction failed: invalid auth type');
    return false;
  }
  return sig;
}

/**
 * Authenticate the incoming call by checking it's JWT.
 *
 * TODO: User error messages.
 */
async function authenticate(req) {
  const sig = extractJWTHeader(req) || extractJWTQS(req);
  if (!sig) {
    return false;
  }
  return await JSONWebToken.verifyJWT(sig);
}

function scopeAllowsRequest(scope, request) {
  const requestPath = request.originalUrl;
  if (!scope) {
    return true;
  }
  const paths = scope.split(' ');
  for (let path of paths) {
    const parts = path.split(':');
    if (parts.length !== 2) {
      console.warn('Invalid scope', scope);
      return false;
    }
    const access = parts[1];
    const readwrite = access === Constants.READWRITE;
    path = parts[0];
    const allowedDirect = requestPath.startsWith(path);
    const allowedThings = requestPath === Constants.THINGS_PATH &&
      path.startsWith(Constants.THINGS_PATH);
    const allowedCommands = requestPath === Constants.COMMANDS_PATH &&
      path.startsWith(Constants.THINGS_PATH);

    if (allowedDirect || allowedThings || allowedCommands) {
      if (!readwrite && request.method !== 'GET' &&
          request.method !== 'OPTIONS') {
        return false;
      }
      return true;
    }
  }
  return false;
}

function middleware() {
  return (req, res, next) => {
    authenticate(req, res).
      then((jwt) => {
        if (!jwt) {
          res.status(401).end();
          return;
        }
        let scope = jwt.payload.scope;
        if (jwt.payload.role === Constants.AUTHORIZATION_CODE) {
          scope = `${Constants.OAUTH_PATH}:${Constants.READWRITE}`;
        }
        if (!scopeAllowsRequest(scope, req)) {
          res.status(401).send(
            `Token of role ${jwt.payload.role} used out of scope: ${scope}`);
          return;
        }
        if (jwt.payload.role !== Constants.USER_TOKEN) {
          if (!jwt.payload.scope) {
            res.status(400)
              .send('Token must contain scope');
            return;
          }
        }

        req.jwt = jwt;
        next();
      }).
      catch((err) => {
        console.error('error running jwt middleware', err.stack);
        next(err);
      });
  };
}

module.exports = {
  middleware,
  authenticate,
  extractJWTQS,
  extractJWTHeader,
};


/***/ }),

/***/ "./src/log-timestamps.js":
/*!*******************************!*\
  !*** ./src/log-timestamps.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module log-timestamps
 *
 * Modifies console.log and friends to prepend a timestamp to log lines.
 */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */



const winston = __webpack_require__(/*! winston */ "winston");
const DailyRotateFile = __webpack_require__(/*! winston-daily-rotate-file */ "winston-daily-rotate-file");
const UserProfile = __webpack_require__(/*! ./user-profile */ "./src/user-profile.js");
const format = __webpack_require__(/*! util */ "util").format;

class CustomFormatter {
  transform(info) {
    const level = info.level.toUpperCase().padEnd(7, ' ');
    info.message = `${info.timestamp} ${level}: ${info.message}`;
    return info;
  }
}

const timestampFormat = winston.format.timestamp({
  format: 'YYYY-MM-DD HH:mm:ss.SSS',
});

const logger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        timestampFormat,
        new CustomFormatter(),
        winston.format.colorize({
          all: true,
          colors: {
            debug: 'white',
            info: 'dim white',
            warn: 'yellow',
            error: 'red',
          },
        }),
        winston.format.printf((info) => info.message)
      ),
    }),
    new DailyRotateFile({
      dirname: UserProfile.logDir,
      filename: 'run-app.log',
      zippedArchive: false,
      maxSize: '10m',
      maxFiles: 10,
      format: winston.format.combine(
        timestampFormat,
        new CustomFormatter(),
        winston.format.printf((info) => info.message)
      ),
    }),
  ],
  exitOnError: false,
});

function logPrefix() {
  const currTime = new Date();
  return `${currTime.getFullYear()}-${
    (`0${currTime.getMonth() + 1}`).slice(-2)}-${
    (`0${currTime.getDate()}`).slice(-2)} ${
    (`0${currTime.getHours()}`).slice(-2)}:${
    (`0${currTime.getMinutes()}`).slice(-2)}:${
    (`0${currTime.getSeconds()}`).slice(-2)}.${
    (`00${currTime.getMilliseconds()}`).slice(-3)} `;
}

if (!console.constructor.hooked) {
  console.constructor.hooked = true;

  // BufferedConsole is used (under jest) when running multiple tests
  // CustomConsole is used (under jest) when running a single test

  if (console.constructor.name === 'BufferedConsole') {
    // The code for the write function comes from the jest source code:
    // https://github.com/facebook/jest/blob/master/packages/jest-util/
    //    src/buffered_console.js

    const callsites = __webpack_require__(/*! callsites */ "callsites");

    console.constructor.write = function write(buffer, type, message, level) {
      const call = callsites()[level != null ? level : 2];
      const origin = `${call.getFileName()}:${call.getLineNumber()}`;
      buffer.push({message: logPrefix() + message, origin, type});
      return buffer;
    };

    console.log = function log() {
      console.constructor.write(
        this._buffer, 'log', format.apply(null, arguments));
    };
    console.info = function info() {
      console.constructor.write(
        this._buffer, 'info', format.apply(null, arguments));
    };
    console.warn = function warn() {
      console.constructor.write(
        this._buffer, 'warn', format.apply(null, arguments));
    };
    console.error = function error() {
      console.constructor.write(
        this._buffer, 'error', format.apply(null, arguments));
    };
    // jest's BufferedConsole doesn't provide a debug, so we skip it as well.
  } else if (console.constructor.name === 'CustomConsole') {
    // See: https://github.com/facebook/jest/blob/master/packages/jest-util/
    //        src/Console.js
    //      for the implementation of _log

    console.log = function log() {
      console._log('log', logPrefix() + format.apply(null, arguments));
    };

    console.info = function info() {
      console._log('info', logPrefix() + format.apply(null, arguments));
    };

    console.warn = function warn() {
      console._log('warn', logPrefix() + format.apply(null, arguments));
    };

    console.error = function error() {
      console._log('error', logPrefix() + format.apply(null, arguments));
    };
    // jest's CustomConsole doesn't provide a debug, so we skip it as well.
  } else {
    // This path is for the normal non-jest output
    const FUNCS = ['info', 'debug', 'error', 'warn', 'verbose', 'silly'];

    for (const func of FUNCS) {
      console[func] = function() {
        logger[func](format.apply(null, arguments));
      };
    }

    console.log = console.info;
  }
}


/***/ }),

/***/ "./src/mdns-server.js":
/*!****************************!*\
  !*** ./src/mdns-server.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * mDNS service handler.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

// External dependencies
const config = __webpack_require__(/*! config */ "config");
const dnssd = __webpack_require__(/*! dnssd */ "dnssd");

// Internal dependencies
const Platform = __webpack_require__(/*! ./platform */ "./src/platform.js");
const Settings = __webpack_require__(/*! ./models/settings */ "./src/models/settings.js");
const TunnelService = __webpack_require__(/*! ./ssltunnel */ "./src/ssltunnel.js");

const server = new DNSserviceDiscovery();

/**
 * DNS Service Discovery object.
 *
 * Creates an object which contains the 'profile' used to have a mDNS service
 * discovery process running. The object will be instantiated with default
 * values to ensure it will always work no matter DB or Config state.
 *
 * It provides methods to interact with the object. This object is created
 * quite early on since the starting process in app.js and parts of the UI in
 * settings_controller.js need to use its methods.
 */
function DNSserviceDiscovery() {
  this.serviceState = false;
  if (false) {} else if (TunnelService.hasCertificates()) {
    this.port = config.get('ports.https');
  } else {
    this.port = config.get('ports.http');
  }
  this.localDomain = config.get(
    'settings.defaults.domain.localControl.mdnsServiceDomain');
  this.localName = config.get(
    'settings.defaults.domain.localControl.mdnsServiceName');
  this.protocol = config.get(
    'settings.defaults.domain.localControl.mdnsTxt.protocol');
  this.power = config.get(
    'settings.defaults.domain.localControl.mdnsTxt.power');
  this.description = config.get(
    'settings.defaults.domain.localControl.mdnsTxt.desc');
  const txt = {desc: this.description,
               protocols: this.protocol,
               power: this.power};
  const options = {name: this.localName, host: this.localDomain, txt};

  this.handleError = (e) => {
    console.debug(`mDNS error: ${e}`);
    setTimeout(() => {
      if (this.serviceState) {
        this.dnssdHandle.start();
      }
    }, 10000);
  };

  // Initialize our object and make sure it's not started on object creation.
  this.dnssdHandle =
    dnssd.Advertisement(dnssd.tcp('http'), this.port, options);
  this.dnssdHandle.on('error', this.handleError);
  this.dnssdHandle.stop();
}

/**
 * Update the internal state of the mDNS service discovery, then restart it if
 * necessary.
 *
 * @param {boolean} state Whether or not to enable the service.
 */
DNSserviceDiscovery.prototype.setState = function(state) {
  this.serviceState = !!state;    // Make sure it's a boolean value

  const success = Platform.togglemDns(state);
  if (!success) {
    if (this.serviceState) {
      this.dnssdHandle.start();
    } else {
      this.dnssdHandle.stop(true);
    }
  }

  console.log(`Service Discovery: state changed to: ${this.serviceState}`);
};

/**
 * Update the local name of the mDNS service discovery.
 *
 * Updating the localDomain name, stop the old service, and then create a new
 * dnssd object. The DNS name must be < 63 chars [a-z,0-9] and no hyphen as the
 * first character.
 *
 * @param {string} localDomain local DNS name. e.g. 'Myhome-iot'
 */
DNSserviceDiscovery.prototype.setLocalDomain = function(localDomain) {
  // Check any letter or number a-Z, A-Z, 0-9 and '-' any number of times with
  // a length less than 63
  localDomain = localDomain.toLowerCase();
  const re = new RegExp(/^([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])$/);
  const valid = re.test(localDomain) && localDomain.length <= 63;

  if (valid) {
    // Change our object data member and stop the old service first.
    console.log(`Service Discovery: localDomain changed to: ${localDomain} `);
    this.localDomain = localDomain;

    const success = Platform.setHostname(this.localDomain);
    if (!success) {
      this.dnssdHandle.stop();

      // Now let's start a new service with the new name.
      const txt = {
        desc: this.description,
        protocols: this.protocol,
        power: this.power,
      };
      const options = {
        name: this.localName,
        host: this.localDomain,
        txt: txt,
      };

      this.dnssdHandle = dnssd.Advertisement(dnssd.tcp('http'),
                                             this.port, options);
      this.dnssdHandle.on('error', this.handleError);
      this.dnssdHandle.start();
    }
  } else {
    console.error('Service Discovery:',
                  `Domain name did not match [a-z,A-Z,0-9,-]+: ${localDomain}`);
    throw new Error('Invalid local domain name. It should only consist ' +
                    'of characters a-Z, A-Z, 0-9, or -');
  }
};

/**
 * This method will take a new profile 'object' and use this to update
 * the objects internal variables. It then will create a new mDNS
 * advertiser object using the new profile and restart the advertiser
 * depending on the state of the DNSserviceDiscovery manager.
 *
 * @return
 *
 * @param {object} newProfile For example:
 *   newProfile = {
 *     name: "Mozilla IoT Gateway",
 *     host: "mozillaGateway",     // Local DNS name
 *     txt: {
 *       desc: "descriptive text",
 *       protocols:  "http, https, oauth2 etc..",
 *       power: "default power"
 *     }
 *   }
 */
DNSserviceDiscovery.prototype.changeProfile = function(newProfile) {
  try {
    console.log('Service Discovery: changing profile - local domain is now:',
                newProfile.host);
    this.localName = newProfile.name;
    this.localDomain = newProfile.host;
    this.description = newProfile.txt.desc;
    this.protocol = newProfile.txt.protocols;
    this.power = newProfile.txt.power;

    const txt = {desc: this.description,
                 protocols: this.protocol,
                 power: this.power};
    const options = {name: this.localName,
                     host: this.localDomain,
                     txt: txt};

    this.dnssdHandle = dnssd.Advertisement(dnssd.tcp('http'),
                                           this.port, options);
    this.dnssdHandle.on('error', this.handleError);

    // Check to see if the profile should be active or not.
    if (this.serviceState) {
      this.dnssdHandle.start();
    } else {
      this.dnssdHandle.stop();
    }
  } catch (err) {
    // We should never get here. Don't attempt to start service discovery
    // and log an error message. But allow the application to carry on
    console.error('Service Discovery: could not change profile settings:', err);
  }
};

/**
 * Stop the node mDNS service.
 */
DNSserviceDiscovery.prototype.cleanup = function() {
  this.dnssdHandle.stop(true);
};

/**
 * Look at settings that may be in the DB (set by the user) or default settings.
 * It will safely return a profile that will work for the calling application to
 * use.
 *
 * @return: {Object} mDNS config options, for example:
 *   Options = {
 *     name: "Mozilla IoT Gateway",
 *     host: "mozillaGateway",     // Local DNS name
 *     txt: {
 *       desc: "descriptive text",
 *       protocols:  "http, https, oauth2 etc..",
 *       power: "default power"
 *     }
 *   }
 * This function searches /config or db.sqlite3 DB
 */
async function getmDNSconfig() {
  let mDNSserviceDomain;

  try {
    mDNSserviceDomain = await Settings.get('localDNSname');

    // There is no local service discovery name stored in the DB -
    // use the default value
    if (!mDNSserviceDomain) {
      mDNSserviceDomain = config.get(
        'settings.defaults.domain.localControl.mdnsServiceDomain');
    }
    const locName = config.get(
      'settings.defaults.domain.localControl.mdnsServiceName');
    const locProtocols = config.get(
      'settings.defaults.domain.localControl.mdnsTxt.protocol');
    const powerCons = config.get(
      'settings.defaults.domain.localControl.mdnsTxt.power');
    const description = config.get(
      'settings.defaults.domain.localControl.mdnsTxt.desc');

    const txt = {desc: description, protocols: locProtocols, power: powerCons};
    const options = {name: locName, host: mDNSserviceDomain, txt: txt};

    return options;
  } catch (err) {
    // We should never get here. Don't attempt to start service discovery.
    // Just log an error message and allow the application to carry on.
    console.error('Service Discovery: could not find configuration settings:',
                  err);
  }
}

/**
 * Get the current enablement state of the mDNS service.
 *
 * @return: {boolean} 'True' if mDNS service discovery has a default or user
 * configured state requesting it to be started. 'False' if default or user
 * configured or no state if found.
 */
async function getmDNSstate() {
  let mDNSstate;
  try {
    mDNSstate = await Settings.get('multicastDNSstate');
    if (typeof mDNSstate === 'undefined') {
      return config.get('settings.defaults.domain.localAccess');
    }
    return mDNSstate;
  } catch (err) {
    // Catch this DB error. Since we don't know what state the mDNS process
    // should be in make sure it's off
    console.error(
      'Service Discovery: Error getting DB entry for multicast DNS state:',
      err);

    return config.get('settings.defaults.domain.localAccess');
  }
}

module.exports = {
  server: server,
  getmDNSconfig: getmDNSconfig,
  getmDNSstate: getmDNSstate,
};


/***/ }),

/***/ "./src/models/action.js":
/*!******************************!*\
  !*** ./src/models/action.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Action Model.
 *
 * Manages Action data model and business logic.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Actions = __webpack_require__(/*! ../models/actions */ "./src/models/actions.js");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const EventEmitter = __webpack_require__(/*! events */ "events");
const {Utils} = __webpack_require__(/*! gateway-addon */ "gateway-addon");

class Action extends EventEmitter {
  /**
   * Create a new Action
   * @param {String} name
   * @param {Object} input
   * @param {Thing?} thing
   */
  constructor(name, input, thing) {
    super();

    this.id = Actions.generateId();
    this.name = name;
    this.input = input || {};
    if (thing) {
      this.href = `${thing.href}${Constants.ACTIONS_PATH}/${name}/${this.id}`;
      this.thingId = thing.id;
    } else {
      this.href = `${Constants.ACTIONS_PATH}/${name}/${this.id}`;
    }
    this.status = 'created';
    this.timeRequested = Utils.timestamp();
    this.timeCompleted = null;
    this.error = '';
  }

  getDescription() {
    const description = {
      input: this.input,
      href: this.href,
      status: this.status,
      timeRequested: this.timeRequested,
    };

    if (this.timeCompleted) {
      description.timeCompleted = this.timeCompleted;
    }

    if (this.error) {
      description.error = this.error;
    }

    return description;
  }

  /**
   * Update status and notify listeners
   * @param {String} newStatus
   */
  updateStatus(newStatus) {
    if (this.status === newStatus) {
      return;
    }

    if (newStatus === 'completed') {
      this.timeCompleted = Utils.timestamp();
    }

    this.status = newStatus;
    this.emit(Constants.ACTION_STATUS, this);
  }

  /**
   * Update from another action.
   */
  update(action) {
    this.timeRequested = action.timeRequested;
    this.timeCompleted = action.timeCompleted;

    if (this.status !== action.status) {
      this.status = action.status;
      this.emit(Constants.ACTION_STATUS, this);
    }
  }
}

module.exports = Action;


/***/ }),

/***/ "./src/models/actions.js":
/*!*******************************!*\
  !*** ./src/models/actions.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Actions.
 *
 * Manages a collection of Actions.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Things = __webpack_require__(/*! ../models/things */ "./src/models/things.js");
const AddonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const EventEmitter = __webpack_require__(/*! events */ "events");

class Actions extends EventEmitter {

  constructor() {
    super();

    /**
     * A map of action requests.
     */
    this.actions = {};

    /**
     * A counter to generate action IDs.
     */
    this.nextId = 0;

    this.onActionStatus = this.onActionStatus.bind(this);
  }

  /**
   * Reset actions state.
   */
  clearState() {
    this.nextId = 0;
    for (const id in this.actions) {
      this.remove(id);
    }
  }

  /**
   * Generate an ID for a new action.
   *
   * @returns {integer} An id.
   */
  generateId() {
    return ++this.nextId;
  }

  /**
   * Get a particular action.
   *
   * @returns {Object} The specified action, or undefined if the action
   * doesn't exist.
   */
  get(id) {
    return this.actions[id];
  }

  /**
   * Get a list of all current actions.
   *
   * @returns {Array} A list of current actions.
   */
  getAll() {
    return Object.keys(this.actions).map((id) => {
      return this.actions[id];
    });
  }

  /**
   * Get only the actions which are not associated with a specific thing and
   * therefore belong to the root Gateway
   */
  getGatewayActions(actionName) {
    return this.getAll().filter((action) => {
      return !action.thingId;
    }).filter((action) => {
      if (actionName) {
        return actionName === action.name;
      }

      return true;
    }).map((action) => {
      return {[action.name]: action.getDescription()};
    });
  }


  /**
   * Get only the actions which are associated with a specific thing
   */
  getByThing(thingId, actionName) {
    return this.getAll().filter((action) => {
      return action.thingId === thingId;
    }).filter((action) => {
      if (actionName) {
        return actionName === action.name;
      }

      return true;
    }).map((action) => {
      return {[action.name]: action.getDescription()};
    });
  }

  /**
   * Add a new action.
   *
   * @param {Action} action An Action object.
   * @return {Promise} resolved when action added or rejected if failed
   */
  add(action) {
    const id = action.id;
    this.actions[id] = action;

    // Call this initially for the 'created' status.
    this.onActionStatus(action);

    action.on(Constants.ACTION_STATUS, this.onActionStatus);

    if (action.thingId) {
      return Things.getThing(action.thingId).then((thing) => {
        const success = thing.addAction(action);
        if (!success) {
          delete this.actions[id];
          throw new Error(`Invalid thing action name: "${action.name}"`);
        }
      });
    }

    // Only update the action status if it's being handled internally
    action.updateStatus('pending');

    switch (action.name) {
      case 'pair':
        AddonManager.addNewThing(action.input.timeout).then(function() {
          action.updateStatus('completed');
        }).catch(function(error) {
          action.error = error;
          action.updateStatus('error');
          console.error('Thing was not added');
          console.error(error);
        });
        break;
      case 'unpair':
        if (action.input.id) {
          AddonManager.removeThing(action.input.id)
            .then(function(thingIdUnpaired) {
              console.log('unpair: thing:', thingIdUnpaired, 'was unpaired');
              Things.removeThing(thingIdUnpaired);
              action.updateStatus('completed');
            }).catch(function(error) {
              action.error = error;
              action.updateStatus('error');
              console.error('unpair of thing:',
                            action.input.id, 'failed.');
              console.error(error);
            });
        } else {
          const msg = 'unpair missing "id" parameter.';
          action.error = msg;
          action.updateStatus('error');
          console.error(msg);
        }
        break;
      default:
        delete this.actions[id];
        return Promise.reject(
          new Error(`Invalid action name: "${action.name}"`));
    }
    return Promise.resolve();
  }

  /**
   * Forward the actionStatus event
   */
  onActionStatus(action) {
    this.emit(Constants.ACTION_STATUS, action);
  }

  /**
   * Remove an action from the action list.
   *
   * @param integer id Action ID.
   *
   * If the action has not yet been completed, it is cancelled.
   */
  remove(id) {
    const action = this.actions[id];
    if (!action) {
      throw `Invalid action id: ${id}`;
    }

    if (action.status === 'pending') {
      if (action.thingId) {
        Things.getThing(action.thingId).then((thing) => {
          if (!thing.removeAction(action)) {
            throw `Invalid thing action name: "${action.name}"`;
          }
        }).catch((err) => {
          console.error('Error removing thing action', err);
        });
      } else {
        switch (action.name) {
          case 'pair':
            AddonManager.cancelAddNewThing();
            break;
          case 'unpair':
            AddonManager.cancelRemoveThing(action.input.id);
            break;
          default:
            throw `Invalid action name: "${action.name}"`;
        }
      }
    }

    action.updateStatus('deleted');
    action.removeListener(Constants.ACTION_STATUS, this.onActionStatus);
    delete this.actions[id];
  }
}

module.exports = new Actions();


/***/ }),

/***/ "./src/models/event.js":
/*!*****************************!*\
  !*** ./src/models/event.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Event Model.
 *
 * Manages Event data model
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const {Utils} = __webpack_require__(/*! gateway-addon */ "gateway-addon");

class Event {
  /**
   * Create a new Event
   * @param {String} name
   * @param {*} data
   * @param {String?} thingId
   * @param {String?} timestamp
   */
  constructor(name, data, thingId, timestamp) {
    this.name = name;
    this.data = data || null;
    this.thingId = thingId;
    this.timestamp = timestamp || Utils.timestamp();
  }

  getDescription() {
    return {
      data: this.data,
      timestamp: this.timestamp,
    };
  }
}

module.exports = Event;


/***/ }),

/***/ "./src/models/events.js":
/*!******************************!*\
  !*** ./src/models/events.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Events.
 *
 * Manages a collection of Events.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Things = __webpack_require__(/*! ../models/things */ "./src/models/things.js");

class Events {

  constructor() {
    this.events = [];
  }

  /**
   * Reset events state.
   */
  clearState() {
    this.events = [];
  }

  /**
   * Get only the events which are not associated with a specific thing and
   * therefore belong to the root Gateway.
   */
  getGatewayEvents(eventName) {
    return this.events.filter((event) => {
      return !event.thingId;
    }).filter((event) => {
      if (eventName) {
        return eventName === event.name;
      }

      return true;
    }).map((event) => {
      return {[event.name]: event.getDescription()};
    });
  }


  /**
   * Get only the events which are associated with a specific thing.
   */
  getByThing(thingId, eventName) {
    return this.events.filter((event) => {
      return event.thingId === thingId;
    }).filter((event) => {
      if (eventName) {
        return eventName === event.name;
      }

      return true;
    }).map((event) => {
      return {[event.name]: event.getDescription()};
    });
  }

  /**
   * Add a new event.
   *
   * @param {Object} event An Event object.
   */
  add(event) {
    this.events.push(event);

    if (event.thingId) {
      Things.getThing(event.thingId).then(
        (thing) => thing.dispatchEvent(event));
    }
  }
}

module.exports = new Events();


/***/ }),

/***/ "./src/models/intentparser.js":
/*!************************************!*\
  !*** ./src/models/intentparser.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Intent Parser Model
 *
 * Interface to the intent parser.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


const CommandUtils = __webpack_require__(/*! ../command-utils */ "./src/command-utils.js");
const net = __webpack_require__(/*! net */ "net");
const IntentParser = {
  keywords: [
    'turn',
    'switch',
    'make',
    'change',
    'set',
    'dim',
    'brighten',
  ],

  types: Object.keys(CommandUtils.colors).
    concat(Object.keys(CommandUtils.percentages)).
    concat([
      'on',
      'off',
      'red',
      'warmer',
      'cooler',
    ]),

  buildMessage: function(data) {
    data = JSON.stringify(data);
    const buffer = Buffer.alloc(4 + data.length);
    buffer.writeUInt32BE(data.length, 0);
    buffer.write(data, 4);
    return buffer;
  },

  /**
  * Interface train the intent parser
  */
  train: function(things) {
    return new Promise((resolve, reject) => {
      const socket_client = new net.Socket();
      socket_client.connect(5555, '127.0.0.1', function() {
        console.log('Connected to intent parser server');

        socket_client.on('data', function(data) {
          console.log(`Training result: ${data}`);
          try {
            const response = JSON.parse(data);
            if (response.hasOwnProperty('status')) {
              if (response.status === 'success') {
                resolve();
              } else {
                reject(response.error);
              }
            } else {
              reject('Failed to train intent parser.');
            }
          } catch (e) {
            reject('Failed to train intent parser.');
          }
        });

        socket_client.write(IntentParser.buildMessage({
          command: 'train',
          data: {
            keywords: IntentParser.keywords,
            types: IntentParser.types,
            locations: things,
          },
        }));
      });
      socket_client.on('error', function(data) {
        console.log(`Training error: ${data}`);
        reject('Failed to train intent parser.');
      });
    });
  },

  /**
  * Interface to query the intent parser
  */
  query: function(query) {
    return new Promise((resolve, reject) => {
      const socket_client = new net.Socket();
      socket_client.connect(5555, '127.0.0.1', function() {
        socket_client.on('data', function(data) {
          console.log(`Query result: ${data}`);
          try {
            const response = JSON.parse(data);
            if (response.hasOwnProperty('status') &&
                response.hasOwnProperty('data')) {
              if (response.status === 'success') {
                resolve({
                  cmd: 'IOT',
                  href: '',
                  thing: response.data.Location,
                  keyword: response.data.Keyword,
                  value: response.data.Type,
                });
              } else {
                reject(response.error);
              }
            } else {
              reject('Failed to query intent parser.');
            }
          } catch (e) {
            reject('Failed to query intent parser.');
          }
        });
        socket_client.write(IntentParser.buildMessage({
          command: 'query',
          data: query,
        }));
      });
      socket_client.on('error', function(data) {
        console.log(`Query error: ${data}`);
        reject('Failed to query intent parser.');
      });
    });
  },
};

module.exports = IntentParser;


/***/ }),

/***/ "./src/models/jsonwebtoken.js":
/*!************************************!*\
  !*** ./src/models/jsonwebtoken.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * JSONWebToken Model.
 *
 * Contains logic to create and verify JWT tokens.
 *
 * This file contains the logic to generate public/private key pairs and return
 * them in the format openssl/crypto expects.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
const uuid = __webpack_require__(/*! uuid */ "uuid");
const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
const assert = __webpack_require__(/*! assert */ "assert");

const ec = __webpack_require__(/*! ../ec-crypto */ "./src/ec-crypto.ts");
const Database = __webpack_require__(/*! ../db */ "./src/db.js");
const Settings = __webpack_require__(/*! ./settings */ "./src/models/settings.js");

const ROLE_USER_TOKEN = 'user_token';

class JSONWebToken {

  /**
   * Verify a JWT by it's signature.
   *
   * @return {JSONWebToken|bool} false when invalid JSONWebToken when valid.
   */
  static async verifyJWT(sig) {
    const decoded = jwt.decode(sig, {
      complete: true,
    });

    if (!decoded || !decoded.header || !decoded.header.kid) {
      return false;
    }

    const {kid} = decoded.header;

    const tokenData = await Database.getJSONWebTokenByKeyId(kid);
    if (!tokenData) {
      return false;
    }

    const token = new JSONWebToken(tokenData);
    token.payload = token.verify(sig);
    if (token.payload) {
      return token;
    }

    return false;
  }

  /**
   * Issue a JWT token and store it in the database.
   *
   * @param {User} user to issue token for.
   * @return {string} the JWT token signature.
   */
  static async issueToken(user) {
    const {sig, token} = await this.create(user);
    await Database.createJSONWebToken(token);
    return sig;
  }

  /**
   * Issue a JWT token for an OAuth2 client and store it in the
   * database.
   *
   * @param {ClientRegistry} client to issue token for.
   * @param {number} user user id associated with token
   * @param {{role: String, scope: String}} payload of token
   * @return {string} the JWT token signature.
   */
  static async issueOAuthToken(client, user, payload) {
    const {sig, token} = await this.create(user, Object.assign({
      client_id: client.id,
    }, payload));
    await Database.createJSONWebToken(token);
    return sig;
  }

  /**
   * Remove a JWT token from the database by it's key id.
   *
   * @param {string} keyId of the record to remove.
   * @return bool true when a record was deleted.
   */
  static async revokeToken(keyId) {
    assert(typeof keyId === 'string');
    return Database.deleteJSONWebTokenByKeyId(keyId);
  }

  /**
   * @param number user id of the user to create a token for.
   * @return {Object} containing .sig (the jwt signature) and .token
   *  for storage in the database.
   */
  static async create(user, payload = {role: ROLE_USER_TOKEN}) {
    const pair = ec.generateKeyPair();

    const keyId = uuid.v4();
    const tunnelInfo = await Settings.getTunnelInfo();
    const issuer = tunnelInfo.tunnelDomain;
    const options = {
      algorithm: ec.JWT_ALGORITHM,
      keyid: keyId,
    };
    if (issuer) {
      options.issuer = issuer;
    }

    const sig = jwt.sign(payload, pair.private, options);

    const token = {
      user,
      issuedAt: new Date(),
      publicKey: pair.public,
      keyId,
      payload,
    };

    return {sig, token};
  }

  constructor(obj) {
    const {user, issuedAt, publicKey, keyId} = obj;
    assert(typeof user === 'number');
    assert(issuedAt);
    assert(typeof publicKey === 'string');
    assert(typeof keyId === 'string');
    this.user = user;
    this.issuedAt = issuedAt;
    this.publicKey = publicKey;
    this.keyId = keyId;
    this.payload = {};
  }

  /**
   * Verify that the given JWT matches this token.
   *
   * @param string sig jwt token.
   * @returns {Object|false} jwt payload if signature matches.
   */
  verify(sig) {
    try {
      return jwt.verify(sig, this.publicKey, {
        algorithms: [ec.JWT_ALGORITHM],
      });
    } catch (err) {
      // If this error is thrown we know the token is invalid.
      if (err.name === 'JsonWebTokenError') {
        return false;
      }
      throw err;
    }
  }

}

module.exports = JSONWebToken;


/***/ }),

/***/ "./src/models/oauthclients.ts":
/*!************************************!*\
  !*** ./src/models/oauthclients.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _oauth_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../oauth-types */ "./src/oauth-types.ts");


const Database = __webpack_require__(/*! ../db */ "./src/db.js");
class OAuthClients {
    constructor() {
        this.clients = new Map();
    }
    register(client) {
        if (this.clients.get(client.id)) {
            this.clients.get(client.id).push(client);
        }
        else {
            this.clients.set(client.id, [client]);
        }
    }
    get(id, redirectUri) {
        const clients = this.clients.get(id);
        if (!clients) {
            return;
        }
        if (!redirectUri) {
            return clients[0];
        }
        for (let client of clients) {
            if (client.redirect_uri.href === redirectUri.href) {
                return client;
            }
        }
        return clients[0];
    }
    async getAuthorized(userId) {
        let jwts = await Database.getJSONWebTokensByUser(userId);
        let authorized = new Map();
        for (let jwt of jwts) {
            let payload = JSON.parse(jwt.payload);
            if (payload.role !== 'access_token') {
                continue;
            }
            if (!this.clients.has(payload.client_id)) {
                console.warn('Orphaned access_token', jwt);
                await Database.deleteJSONWebTokenByKeyId(jwt.keyId);
                continue;
            }
            const defaultClient = this.clients.get(payload.client_id)[0];
            if (!defaultClient) {
                continue;
            }
            authorized.set(payload.client_id, defaultClient);
        }
        return Array.from(authorized.values());
    }
    async revokeClientAuthorization(userId, clientId) {
        let jwts = await Database.getJSONWebTokensByUser(userId);
        for (let jwt of jwts) {
            let payload = JSON.parse(jwt.payload);
            if (payload.client_id === clientId) {
                await Database.deleteJSONWebTokenByKeyId(jwt.keyId);
            }
        }
    }
}
let oauthClients = new OAuthClients();
oauthClients.register(new _oauth_types__WEBPACK_IMPORTED_MODULE_1__["ClientRegistry"](new url__WEBPACK_IMPORTED_MODULE_0__["URL"]('http://127.0.0.1:31338/callback'), 'test', 'Test OAuth Client', 'super secret', '/things:readwrite'));
oauthClients.register(new _oauth_types__WEBPACK_IMPORTED_MODULE_1__["ClientRegistry"](new url__WEBPACK_IMPORTED_MODULE_0__["URL"]('http://127.0.0.1:31338/bonus-entry'), 'test', 'Test OAuth Client', 'other secret', '/things:readwrite'));
oauthClients.register(new _oauth_types__WEBPACK_IMPORTED_MODULE_1__["ClientRegistry"](new url__WEBPACK_IMPORTED_MODULE_0__["URL"]('https://gateway.localhost/oauth/local-token-service'), 'local-token', 'Local Token Service', 'super secret', '/things:readwrite'));
/* harmony default export */ __webpack_exports__["default"] = (oauthClients);


/***/ }),

/***/ "./src/models/settings.js":
/*!********************************!*\
  !*** ./src/models/settings.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Settings Model.
 *
 * Manages the getting and setting of settings
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const config = __webpack_require__(/*! config */ "config");
const Database = __webpack_require__(/*! ../db */ "./src/db.js");
const util = __webpack_require__(/*! util */ "util");

const DEBUG =  false || ("development" === 'test');

const Settings = {

  /**
   * Get a setting.
   *
   * @param {String} key Key of setting to get.
   */
  get: function(key) {
    return Database.getSetting(key).catch(function(e) {
      console.error('Failed to get', key);
      throw e;
    });
  },

  /**
   * Set a setting.
   *
   * @param {String} key Key of setting to set.
   * @param value Value to set key to.
   */
  set: function(key, value) {
    return Database.setSetting(key, value).then(function() {
      if (DEBUG) {
        console.log('Set', key, 'to',
                    util.inspect(value, {breakLength: Infinity}));
      }
      return value;
    }).catch(function(e) {
      console.error('Failed to set', key, 'to',
                    util.inspect(value, {breakLength: Infinity}));
      throw e;
    });
  },

  /**
   * Delete a setting.
   *
   * @param {String} key Key of setting to delete.
   */
  delete: function(key) {
    return Database.deleteSetting(key).catch(function(e) {
      console.error('Failed to delete', key);
      throw e;
    });
  },

  /**
   * Get an object of all add-on-related settings.
   */
  getAddonSettings: function() {
    return Database.getAddonSettings().catch(function(e) {
      console.error('Failed to get add-on settings');
      throw e;
    });
  },

  /**
   * Get an object of all tunnel settings
   * @return {localDomain, mDNSstate, tunnelDomain}
   */
  getTunnelInfo: async function() {
    // Check to see if we have a tunnel endpoint first
    const result = await Settings.get('tunneltoken');
    let localDomain;
    let mDNSstate;
    let tunnelEndpoint;

    if (typeof result === 'object') {
      console.log(`Tunnel domain found. Tunnel name is: ${result.name} and`,
                  `tunnel domain is: ${config.get('ssltunnel.domain')}`);
      tunnelEndpoint =
        `https://${result.name}.${config.get('ssltunnel.domain')}`;
    } else {
      tunnelEndpoint = 'Not set.';
    }

    // Find out our default local DNS name Check for a previous name in the
    // DB, if that does not exist use the default.
    try {
      mDNSstate = await Settings.get('multicastDNSstate');
      localDomain = await Settings.get('localDNSname');
      // If our DB is empty use defaults
      if (typeof mDNSstate === 'undefined') {
        mDNSstate = config.get(
          'settings.defaults.domain.localAccess');
      }
      if (typeof localDomain === 'undefined') {
        localDomain = config.get(
          'settings.defaults.domain.localControl.mdnsServiceDomain');
      }
    } catch (err) {
      // Catch this DB error. Since we don't know what state the mDNS process
      // should be in make sure it's off
      console.error(`Error getting DB entry for multicast from the DB: ${err}`);
      localDomain = config.get(
        'settings.defaults.domain.localControl.mdnsServiceDomain');
    }

    console.log(`Tunnel name is set to: ${tunnelEndpoint}`);
    console.log(`Local mDNS Service Domain Name is: ${localDomain}`);
    return {
      localDomain: localDomain,
      mDNSstate: mDNSstate,
      tunnelDomain: tunnelEndpoint,
    };
  },
};

module.exports = Settings;


/***/ }),

/***/ "./src/models/thing.js":
/*!*****************************!*\
  !*** ./src/models/thing.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Thing Model.
 *
 * Represents a Web Thing.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const Database = __webpack_require__(/*! ../db.js */ "./src/db.js");
const EventEmitter = __webpack_require__(/*! events */ "events");
const UserProfile = __webpack_require__(/*! ../user-profile */ "./src/user-profile.js");
const WebSocket = __webpack_require__(/*! ws */ "ws");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const tmp = __webpack_require__(/*! tmp */ "tmp");

/**
 * Thing constructor.
 *
 * Create a Thing object from an id and a valid Thing description.
 *
 * @param {String} id Unique ID.
 * @param {Object} description Thing description.
 */
const Thing = function(id, description) {
  if (!id || !description) {
    console.error('id and description needed to create new Thing');
    return;
  }
  // Parse the Thing Description
  this.id = id;
  this.name = description.name || '';
  this.type = description.type || '';
  this['@context'] =
    description['@context'] || 'https://iot.mozilla.org/schemas';
  this['@type'] = description['@type'] || [];
  this.description = description.description || '';
  this.href = `${Constants.THINGS_PATH}/${this.id}`;
  this.properties = {};
  this.actions = description.actions || {};
  this.events = description.events || {};
  this.connected = false;
  this.eventsDispatched = [];
  this.emitter = new EventEmitter();
  if (description.properties) {
    for (const propertyName in description.properties) {
      const property = description.properties[propertyName];
      // Give the property a URL
      property.href = `${Constants.THINGS_PATH}/${this.id
      }${Constants.PROPERTIES_PATH}/${propertyName}`;
      this.properties[propertyName] = property;
    }
  }
  this.floorplanX = description.floorplanX;
  this.floorplanY = description.floorplanY;
  this.selectedCapability = description.selectedCapability;
  this.websockets = [];
  this.links = [
    {
      rel: 'properties',
      href: `${this.href}/properties`,
    },
    {
      rel: 'actions',
      href: `${this.href}/actions`,
    },
    {
      rel: 'events',
      href: `${this.href}/events`,
    },
  ];

  const uiLink = {
    rel: 'alternate',
    mediaType: 'text/html',
    href: this.href,
  };

  if (description.hasOwnProperty('uiHref') && description.uiHref) {
    uiLink.href = description.uiHref;
  } else if (description.hasOwnProperty('links')) {
    for (const link of description.links) {
      if (link.rel === 'alternate' &&
          link.mediaType === 'text/html' &&
          link.href.startsWith('http')) {
        uiLink.href = link.href;
        break;
      }
    }
  }

  this.links.push(uiLink);

  for (const actionName in this.actions) {
    this.actions[actionName].href =
      `${this.href}/actions/${actionName}`;
  }

  for (const eventName in this.events) {
    this.events[eventName].href = `${this.href}/events/${eventName}`;
  }

  this.iconHref = null;
  if (description.iconHref) {
    this.iconHref = description.iconHref;
  } else if (description.iconData) {
    this.setIcon(description.iconData, false);
  }
};

/**
 * Set the x and y co-ordinates for a Thing on the floorplan.
 *
 * @param {number} x The x co-ordinate on floorplan (0-100).
 * @param {number} y The y co-ordinate on floorplan (0-100).
 * @return {Promise} A promise which resolves with the description set.
 */
Thing.prototype.setCoordinates = function(x, y) {
  this.floorplanX = x;
  this.floorplanY = y;
  return Database.updateThing(this.id, this.getDescription());
};

/**
 * Set the name of this Thing.
 *
 * @param {String} name The new name
 * @return {Promise} A promise which resolves with the description set.
 */
Thing.prototype.setName = function(name) {
  this.name = name;
  return Database.updateThing(this.id, this.getDescription());
};

/**
 * Set the custom icon for this Thing.
 *
 * @param {Object} iconData Base64-encoded icon and its mime-type.
 * @param {Boolean} updateDatabase Whether or not to update the database after
 *                                 setting.
 */
Thing.prototype.setIcon = function(iconData, updateDatabase) {
  if (!iconData.data ||
      !['image/jpeg', 'image/png', 'image/svg+xml'].includes(iconData.mime)) {
    console.error('Invalid icon data:', iconData);
    return;
  }

  if (this.iconHref) {
    try {
      fs.unlinkSync(path.join(UserProfile.baseDir, this.iconHref));
    } catch (e) {
      console.error('Failed to remove old icon:', e);
      // continue
    }

    this.iconHref = null;
  }

  let extension;
  switch (iconData.mime) {
    case 'image/jpeg':
      extension = '.jpg';
      break;
    case 'image/png':
      extension = '.png';
      break;
    case 'image/svg+xml':
      extension = '.svg';
      break;
  }

  let tempfile;
  try {
    tempfile = tmp.fileSync({
      mode: parseInt('0644', 8),
      template: path.join(UserProfile.uploadsDir, `XXXXXX${extension}`),
      detachDescriptor: true,
      keep: true,
    });

    const data = Buffer.from(iconData.data, 'base64');
    fs.writeFileSync(tempfile.fd, data);
  } catch (e) {
    console.error('Failed to write icon:', e);
    if (tempfile) {
      try {
        fs.unlinkSync(tempfile.fd);
      } catch (e) {
        // pass
      }
    }

    return;
  }

  this.iconHref = path.join('/uploads', path.basename(tempfile.name));

  if (updateDatabase) {
    return Database.updateThing(this.id, this.getDescription());
  }
};

/**
 * Set the selected capability of this Thing.
 *
 * @param {String} capability The selected capability
 * @return {Promise} A promise which resolves with the description set.
 */
Thing.prototype.setSelectedCapability = function(capability) {
  this.selectedCapability = capability;
  return Database.updateThing(this.id, this.getDescription());
};

/**
 * Dispatch an event to all listeners subscribed to the Thing
 * @param {Event} event
 */
Thing.prototype.dispatchEvent = function(event) {
  if (!event.thingId) {
    event.thingId = this.id;
  }
  this.eventsDispatched.push(event);
  this.emitter.emit(Constants.EVENT, event);
};

/**
 * Add a subscription to the Thing's events
 * @param {Function} callback
 */
Thing.prototype.addEventSubscription = function(callback) {
  this.emitter.on(Constants.EVENT, callback);
};

/**
 * Remove a subscription to the Thing's events
 * @param {Function} callback
 */
Thing.prototype.removeEventSubscription = function(callback) {
  this.emitter.removeListener(Constants.EVENT, callback);
};

/**
 * Add a subscription to the Thing's connected state
 * @param {Function} callback
 */
Thing.prototype.addConnectedSubscription = function(callback) {
  this.emitter.on(Constants.CONNECTED, callback);
  callback(this.connected);
};

/**
 * Remove a subscription to the Thing's connected state
 * @param {Function} callback
 */
Thing.prototype.removeConnectedSubscription = function(callback) {
  this.emitter.removeListener(Constants.CONNECTED, callback);
};

/**
 * Get a JSON Thing Description for this Thing.
 *
 * @param {String} reqHost request host, if coming via HTTP
 * @param {Boolean} reqSecure whether or not the request is secure, i.e. TLS
 */
Thing.prototype.getDescription = function(reqHost, reqSecure) {
  const links = JSON.parse(JSON.stringify(this.links));

  if (typeof reqHost !== 'undefined') {
    const wsLink = {
      rel: 'alternate',
      href: `${reqSecure ? 'wss' : 'ws'}://${reqHost}${this.href}`,
    };

    links.push(wsLink);
  }

  return {
    name: this.name,
    type: this.type,
    '@context': this['@context'],
    '@type': this['@type'],
    description: this.description,
    href: this.href,
    properties: this.properties,
    actions: this.actions,
    events: this.events,
    links: links,
    floorplanX: this.floorplanX,
    floorplanY: this.floorplanY,
    selectedCapability: this.selectedCapability,
    iconHref: this.iconHref,
  };
};

Thing.prototype.registerWebsocket = function(ws) {
  this.websockets.push(ws);
};

/**
 * Remove and clean up the Thing
 */
Thing.prototype.remove = function() {
  if (this.iconHref) {
    try {
      fs.unlinkSync(path.join(UserProfile.baseDir, this.iconHref));
    } catch (e) {
      console.error('Failed to remove old icon:', e);
      // continue
    }

    this.iconHref = null;
  }

  this.websockets.forEach(function(ws) {
    if (ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CONNECTING) {
      ws.close();
    }
  });
};

/**
 * Add an action
 * @param {Action} action
 * @return {boolean} Whether a known action
 */
Thing.prototype.addAction = function(action) {
  return this.actions.hasOwnProperty(action.name);
};

/**
 * Remove an action
 * @param {Action} action
 * @return {boolean} Whether a known action
 */
Thing.prototype.removeAction = function(action) {
  return this.actions.hasOwnProperty(action.name);
};

/**
 * Update a thing from a description.
 *
 * Thing descriptions can change as new capabilities are developed, so this
 * method allows us to update the stored thing description.
 *
 * @param {Object} description Thing description.
 * @return {Promise} A promise which resolves with the description set.
 */
Thing.prototype.updateFromDescription = function(description) {
  // Update type
  this.type = description.type || '';

  // Update @context
  this['@context'] =
    description['@context'] || 'https://iot.mozilla.org/schemas';

  // Update @type
  this['@type'] = description['@type'] || [];

  // Update description
  this.description = description.description || '';

  // Update properties
  this.properties = {};
  if (description.properties) {
    for (const propertyName in description.properties) {
      const property = description.properties[propertyName];
      // Give the property a URL
      property.href = `${Constants.THINGS_PATH}/${this.id
      }${Constants.PROPERTIES_PATH}/${propertyName}`;
      this.properties[propertyName] = property;
    }
  }

  // Update actions
  this.actions = description.actions || {};
  for (const actionName in this.actions) {
    this.actions[actionName].href =
      `${this.href}/actions/${actionName}`;
  }

  // Update events
  this.events = description.events || {};
  for (const eventName in this.events) {
    this.events[eventName].href = `${this.href}/events/${eventName}`;
  }

  let uiLink = {
    rel: 'alternate',
    mediaType: 'text/html',
    href: this.href,
  };
  for (const link of this.links) {
    if (link.rel === 'alternate' && link.mediaType === 'text/html') {
      uiLink = link;
      break;
    }
  }

  // Update the UI href
  if (description.hasOwnProperty('uiHref') && description.uiHref) {
    uiLink.href = description.uiHref;
  } else if (description.hasOwnProperty('links')) {
    for (const link of description.links) {
      if (link.rel === 'alternate' &&
          link.mediaType === 'text/html' &&
          link.href.startsWith('http')) {
        uiLink.href = link.href;
        break;
      }
    }
  }

  // If the previously selected capability is no longer present, reset it.
  if (this.selectedCapability &&
      !this['@type'].includes(this.selectedCapability)) {
    this.selectedCapability = '';
  }

  return Database.updateThing(this.id, this.getDescription());
};

/**
 * Set the connected state of this thing.
 *
 * @param {boolean} connected - Whether or not the thing is connected
 */
Thing.prototype.setConnected = function(connected) {
  this.connected = connected;
  this.emitter.emit(Constants.CONNECTED, connected);
};

module.exports = Thing;


/***/ }),

/***/ "./src/models/things.js":
/*!******************************!*\
  !*** ./src/models/things.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Things Model.
 *
 * Manages the data model and business logic for a collection of Things.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Thing = __webpack_require__(/*! ./thing.js */ "./src/models/thing.js");
const Database = __webpack_require__(/*! ../db.js */ "./src/db.js");
const AddonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");

const Things = {

  /**
   * A Map of Things in the Things database.
   */
  things: new Map(),

  /**
   * A collection of open websockets listening for new things.
   */
  websockets: [],

  /**
   * The promise object returned by Database.getThings()
   */
  getThingsPromise: null,

  /**
   * Get all Things known to the Gateway, initially loading them from the
   * database,
   *
   * @return {Promise} which resolves with a Map of Thing objects.
   */
  getThings: function() {
    if (this.things.size > 0) {
      return Promise.resolve(this.things);
    }
    if (this.getThingsPromise) {
      // We're still waiting for the database request.
      return this.getThingsPromise.then((things) => {
        return things;
      });
    }
    this.getThingsPromise = Database.getThings().then((things) => {
      this.getThingsPromise = null;
      // Update the map of Things
      this.things = new Map();
      things.forEach((thing) => {
        this.things.set(thing.id, new Thing(thing.id, thing));
      });
      return this.things;
    });
    return this.getThingsPromise;
  },

  /**
   * Get the names of all things.
   *
   * @return {Promise<Array>} which resolves with a list of all thing names.
   */
  getThingNames: function() {
    return this.getThings().then(function(things) {
      return Array.from(things.values()).map((t) => t.name);
    });
  },

  /**
   * Get Thing Descriptions for all Things stored in the database.
   *
   * @param {String} reqHost request host, if coming via HTTP
   * @param {Boolean} reqSecure whether or not the request is secure, i.e. TLS
   * @return {Promise} which resolves with a list of Thing Descriptions.
   */
  getThingDescriptions: function(reqHost, reqSecure) {
    return this.getThings().then(function(things) {
      const descriptions = [];
      for (const thing of things.values()) {
        descriptions.push(thing.getDescription(reqHost, reqSecure));
      }
      return descriptions;
    });
  },

  /**
   * Get a list of Things by their hrefs.
   *
   * {Array} hrefs hrefs of the list of Things to get.
   * @return {Promise} A promise which resolves with a list of Things.
   */
  getListThings: function(hrefs) {
    return this.getThings().then(function(things) {
      const listThings = [];
      for (const href of hrefs) {
        things.forEach(function(thing) {
          if (thing.href === href) {
            listThings.push(thing);
          }
        });
      }
      return listThings;
    });
  },

  /**
   * Get Thing Descriptions for a list of Things by their hrefs.
   *
   * @param {Array} hrefs The hrefs of the list of Things to get
   *                      descriptions of.
   * @param {String} reqHost request host, if coming via HTTP.
   * @param {Boolean} reqSecure whether or not the request is secure, i.e. TLS.
   * @return {Promise} which resolves with a list of Thing Descriptions.
   */
  getListThingDescriptions: function(hrefs, reqHost, reqSecure) {
    return this.getListThings(hrefs).then(function(listThings) {
      const descriptions = [];
      for (const thing of listThings) {
        descriptions.push(thing.getDescription(reqHost, reqSecure));
      }
      return descriptions;
    });
  },

  /**
   * Get a list of things which are connected to adapters but not yet saved
   * in the gateway database.
   *
   * @returns Promise A promise which resolves with a list of Things.
   */
  getNewThings: function() {
    // Get a map of things in the database
    return this.getThings().then((function(storedThings) {
      // Get a list of things connected to adapters
      const connectedThings = AddonManager.getThings();
      const newThings = [];
      connectedThings.forEach(function(connectedThing) {
        if (!storedThings.has(connectedThing.id)) {
          connectedThing.href =
           `${Constants.THINGS_PATH}/${connectedThing.id}`;
          if (connectedThing.properties) {
            for (const propertyName in connectedThing.properties) {
              const property = connectedThing.properties[propertyName];
              property.href = `${Constants.THINGS_PATH
              }/${connectedThing.id
              }${Constants.PROPERTIES_PATH}/${propertyName}`;
            }
          }
          newThings.push(connectedThing);
        }
      });
      return newThings;
    }));
  },

  /**
   * Create a new Thing with the given ID and description.
   *
   * @param String id ID to give Thing.
   * @param Object description Thing description.
   */
  createThing: function(id, description) {
    const thing = new Thing(id, description);
    thing.connected = true;

    return Database.createThing(thing.id, thing.getDescription())
      .then(function(thingDesc) {
        this.things.set(thing.id, thing);
        return thingDesc;
      }.bind(this));
  },

  /**
   * Handle a new Thing having been discovered.
   *
   * @param {Object} newThing - New Thing description
   */
  handleNewThing: function(newThing) {
    this.getThing(newThing.id).then((thing) => {
      thing.setConnected(true);
      return thing.updateFromDescription(newThing);
    }).catch(() => {
      // If we don't already know about this thing, notify each open websocket
      this.websockets.forEach(function(socket) {
        socket.send(JSON.stringify(newThing));
      });
    });
  },

  /**
   * Handle a thing being removed by an adapter.
   *
   * @param {Object} thing - Thing which was removed
   */
  handleThingRemoved: function(thing) {
    this.getThing(thing.id).then((thing) => {
      thing.setConnected(false);
    }).catch(() => {});
  },

  /**
   * Handle a thing's connectivity state change.
   *
   * @param {string} thingId - ID of thing
   * @param {boolean} connected - New connectivity state
   */
  handleConnected: function(thingId, connected) {
    this.getThing(thingId).then((thing) => {
      thing.setConnected(connected);
    }).catch(() => {});
  },

  /**
   * Add a websocket to the list of new Thing subscribers.
   *
   * @param {Websocket} websocket A websocket instance.
   */
  registerWebsocket: function(websocket) {
    this.websockets.push(websocket);
    websocket.on('close', () => {
      const index = this.websockets.indexOf(websocket);
      this.websockets.splice(index, 1);
    });
  },

  /**
   * Get a Thing by its ID.
   *
   * @param {String} id The ID of the Thing to get.
   * @return {Promise<Thing>} A Thing object.
   */
  getThing: function(id) {
    return this.getThings().then(function(things) {
      if (things.has(id)) {
        return things.get(id);
      } else {
        throw new Error(`Unable to find thing with id: ${id}`);
      }
    });
  },

  /**
   * Get a Thing by its name.
   *
   * @param {String} name The name of the Thing to get.
   * @return {Promise<Thing>} A Thing object.
   */
  getThingByName: function(name) {
    name = name.toLowerCase();

    return this.getThings().then(function(things) {
      for (const thing of things.values()) {
        if (thing.name.toLowerCase() === name) {
          return thing;
        }
      }

      throw new Error(`Unable to find thing with name: ${name}`);
    });
  },

  /**
   * Get a Thing description for a thing by its ID.
   *
   * @param {String} id The ID of the Thing to get a description of.
   * @param {String} reqHost request host, if coming via HTTP
   * @param {Boolean} reqSecure whether or not the request is secure, i.e. TLS
   * @return {Promise<ThingDescription>} A Thing description object.
   */
  getThingDescription: function(id, reqHost, reqSecure) {
    return this.getThing(id).then((thing) => {
      return thing.getDescription(reqHost, reqSecure);
    });
  },

  /**
   * Remove a Thing.
   *
   * @param String id ID to give Thing.
   */
  removeThing: function(id) {
    return Database.removeThing(id).then(() => {
      const thing = this.things.get(id);
      if (!thing) {
        return;
      }
      thing.remove();
      this.things.delete(id);
    });
  },

  clearState: function() {
    this.websockets = [];
    this.things = new Map();
  },
};

AddonManager.on(Constants.THING_ADDED, (thing) => {
  Things.handleNewThing(thing);
});

AddonManager.on(Constants.THING_REMOVED, (thing) => {
  Things.handleThingRemoved(thing);
});

AddonManager.on(Constants.CONNECTED, ({device, connected}) => {
  Things.handleConnected(device.id, connected);
});

module.exports = Things;


/***/ }),

/***/ "./src/models/user.js":
/*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * User Model.
 *
 * Represents a user.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Passwords = __webpack_require__(/*! ../passwords */ "./src/passwords.js");

const User = function(id, email, password, name) {
  this.id = id;
  this.email = email;
  this.password = password; // Hashed
  this.name = name;
};

User.generate = async function(email, rawPassword, name) {
  const hash = await Passwords.hash(rawPassword);
  return new User(null, email, hash, name);
};

/**
 * Get a JSON description for this user.
 *
 * @return {Object} JSON description of user.
 */
User.prototype.getDescription = function() {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  };
};

module.exports = User;


/***/ }),

/***/ "./src/models/users.js":
/*!*****************************!*\
  !*** ./src/models/users.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * User Manager.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const User = __webpack_require__(/*! ./user.js */ "./src/models/user.js");
const Database = __webpack_require__(/*! ../db.js */ "./src/db.js");

const Users = {
  /**
   * Get a user from the database.
   *
   * @param {String} email Email address of user to look up.
   * @return {Promise} Promise which resolves to user object
   *   or false if user doesn't exist.
   */
  getUser: function(email) {
    return Database.getUser(email).then((result) => {
      if (!result) {
        return false;
      }
      return new User(result.id, result.email, result.password, result.name);
    });
  },

  getCount: function() {
    return Database.getUserCount();
  },

  /**
   * Get a user from the database.
   *
   * @param {number} id primary key.
   * @return {Promise} Promise which resolves to user object
   *   or false if user doesn't exist.
   */
  getUserById: async function(id) {
    if (typeof id !== 'number') {
      id = parseInt(id, 10);
      if (isNaN(id)) {
        return Promise.reject('Invalid user ID');
      }
    }

    const row = await Database.getUserById(id);
    if (!row) {
      return row;
    }
    return new User(row.id, row.email, row.password, row.name);
  },

  /**
   * Get all Users stored in the database
   * @return {Promise<Array<User>>}
   */
  getUsers: function() {
    return Database.getUsers().then((userRows) => {
      return userRows.map((row) => {
        return new User(row.id, row.email, row.password, row.name);
      });
    });
  },

  /**
   * Create a new User
   * @param {String} email
   * @param {String} password
   * @param {String?} name - optional name of user
   * @return {User} user object.
   */
  createUser: async function(email, password, name) {
    const user = new User(null, email.toLowerCase(), password, name);
    user.id = await Database.createUser(user);
    return user;
  },

  /**
   * Edit an existing User
   * @param {User} user to edit
   * @return {Promise} Promise which resolves when operation is complete.
   */
  editUser: async function(user) {
    user.email = user.email.toLowerCase();
    await Database.editUser(user);
  },

  /**
   * Delete an existing User
   * @param {Number} userId
   * @return {Promise} Promise which resolves when operation is complete.
   */
  deleteUser: async function(userId) {
    if (typeof userId !== 'number') {
      userId = parseInt(userId, 10);
      if (isNaN(userId)) {
        return Promise.reject('Invalid user ID');
      }
    }

    await Database.deleteUser(userId);
  },
};

module.exports = Users;


/***/ }),

/***/ "./src/oauth-types.ts":
/*!****************************!*\
  !*** ./src/oauth-types.ts ***!
  \****************************/
/*! exports provided: ClientRegistry, scopeValidSubset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRegistry", function() { return ClientRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeValidSubset", function() { return scopeValidSubset; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_0__);

class ClientRegistry {
    constructor(redirect_uri, id, name, secret, scope) {
        this.redirect_uri = redirect_uri;
        this.id = id;
        this.name = name;
        this.secret = secret;
        this.scope = scope;
    }
    getDescription() {
        return {
            id: this.id,
            name: this.name,
            redirect_uri: this.redirect_uri,
            scope: this.scope
        };
    }
}
function stringToScope(scopeRaw) {
    let scope = {};
    let scopeParts = scopeRaw.split(' ');
    for (let scopePart of scopeParts) {
        let parts = scopePart.split(':');
        let path = parts[0];
        let readwrite = parts[1];
        if (readwrite !== 'read' && readwrite !== 'readwrite') {
            readwrite = 'read';
        }
        scope[path] = readwrite;
    }
    return scope;
}
function scopeValidSubset(clientScopeRaw, requestScopeRaw) {
    if (clientScopeRaw === requestScopeRaw) {
        return true;
    }
    let clientScope = stringToScope(clientScopeRaw);
    let requestScope = stringToScope(requestScopeRaw);
    if (!clientScope || !requestScope) {
        return false;
    }
    for (let requestPath in requestScope) {
        if (!requestPath.startsWith(_constants__WEBPACK_IMPORTED_MODULE_0__["THINGS_PATH"])) {
            console.warn('Invalid request for out-of-bounds scope', requestScopeRaw);
            return false;
        }
        let requestAccess = requestScope[requestPath];
        let access;
        if (clientScope[requestPath]) {
            access = clientScope[requestPath];
        }
        else {
            access = clientScope[_constants__WEBPACK_IMPORTED_MODULE_0__["THINGS_PATH"]];
        }
        if (!access) {
            return false;
        }
        if (requestAccess === 'readwrite') {
            if (access !== 'readwrite') {
                return false;
            }
        }
    }
    return true;
}


/***/ }),

/***/ "./src/passwords.js":
/*!**************************!*\
  !*** ./src/passwords.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Password utilities.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const config = __webpack_require__(/*! config */ "config");

let rounds;
if (config.has('bcryptRounds')) {
  rounds = config.get('bcryptRounds');
}

module.exports = {
  /**
   * Hash a password asynchronously
   * @param {String} password
   * @return {Promise<String>} hashed password
   */
  hash: function(password) {
    return bcrypt.hash(password, rounds);
  },

  /**
   * Hash a password synchronously.
   * WARNING: This will block for a very long time
   *
   * @param {String} password
   * @return {String} hashed password
   */
  hashSync: function(password) {
    return bcrypt.hashSync(password, rounds);
  },

  /**
   * Compare two password hashes asynchronously
   * @param {String} passwordText - a plain text password
   * @param {String} passwordHash - the expected hash
   * @return {Promise<boolean>} If the hashes are equal
   */
  compare: function(passwordText, passwordHash) {
    return bcrypt.compare(passwordText, passwordHash);
  },

  /**
   * Compare two password hashes
   * @param {String} passwordText - a plain text password
   * @param {String} passwordHash - the expected hash
   * @return {boolean} If the hashes are equal
   */
  compareSync: function(passwordText, passwordHash) {
    return bcrypt.compareSync(passwordText, passwordHash);
  },
};


/***/ }),

/***/ "./src/platform.js":
/*!*************************!*\
  !*** ./src/platform.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Platform-specific utilities.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const child_process = __webpack_require__(/*! child_process */ "child_process");
const fs = __webpack_require__(/*! fs */ "fs");
const process = __webpack_require__(/*! process */ "process");

/**
 * Get the current architecture as "os-machine", i.e. darwin-x64.
 */
function getArchitecture() {
  return `${process.platform}-${process.arch}`;
}

/**
 * Get the current node version.
 */
function getNodeVersion() {
  return process.config.variables.node_module_version;
}

/**
 * Get a list of installed Python versions.
 */
function getPythonVersions() {
  const versions = new Set();
  const parse = (output) => {
    const parts = output.split(' ');
    if (parts.length === 2) {
      const match = parts[1].match(/^\d+\.\d+/);
      if (match) {
        versions.add(match[0]);
      }
    }
  };

  for (const bin of ['python', 'python2', 'python3']) {
    const proc = child_process.spawnSync(
      bin,
      ['--version'],
      {encoding: 'utf8'}
    );

    if (proc.status === 0) {
      const output = proc.stdout || proc.stderr;
      parse(output);
    }
  }

  return Array.from(versions).sort();
}

/**
 * Determine whether or not the SSH toggle is implemented.
 *
 * @return {Boolean} indicating implementation status
 */
function isToggleSshImplemented() {
  return isRaspberryPi();
}

/**
 * Determine whether or not SSH is enabled.
 *
 * @return {Boolean} indicating enablement status
 */
function isSshEnabled() {
  if (isRaspberryPi()) {
    const proc = child_process.spawnSync(
      'sudo', ['raspi-config', 'nonint', 'get_ssh']);

    if (proc.status !== 0) {
      return false;
    }

    return proc.stdout.toString().trim() === '0';
  }

  return false;
}

/**
 * Enable/disable SSH, if possible.
 *
 * @param {Boolean} enable Whether or not SSH should be enabled.
 * @return {Boolean} indicating success
 */
function toggleSsh(enable) {
  if (isRaspberryPi()) {
    let arg = '1';
    if (enable) {
      arg = '0';
    }

    const proc = child_process.spawnSync(
      'sudo', ['raspi-config', 'nonint', 'do_ssh', arg]);
    return proc.status === 0;
  }

  return false;
}

/**
 * Enable/disable the system's mDNS server, if possible.
 *
 * @param {Boolean} enable Whether or not mDNS should be enabled.
 * @return {Boolean} indicating success
 */
function togglemDns(enable) {
  if (isRaspberryPi()) {
    const command = enable ? 'start' : 'stop';
    const proc = child_process.spawnSync(
      'sudo', ['systemctl', command, 'avahi-daemon.service']);
    return proc.status === 0;
  }

  return false;
}

/**
 * Set the system's hostname, if possible.
 *
 * @param {String} hostname The hostname to set
 * @returns {Boolean} indicating success
 */
function setHostname(hostname) {
  hostname = hostname.toLowerCase();
  const re = new RegExp(/^([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])$/);
  const valid = re.test(hostname) && hostname.length <= 63;
  if (!valid) {
    return false;
  }

  if (isRaspberryPi()) {
    // Read in the current hostname
    let original = fs.readFileSync('/etc/hostname', 'utf8');
    if (original) {
      original = original.trim();
    }

    // Do this with sed, as it's the easiest way to write the file as root.
    let proc = child_process.spawnSync(
      'sudo', ['sed', '-i', '-e', `s/^.*$/${hostname}/`, '/etc/hostname']);
    if (proc.status !== 0) {
      return false;
    }

    proc = child_process.spawnSync('sudo', ['hostname', hostname]);
    if (proc.status !== 0) {
      // Set the original hostname back
      child_process.spawnSync(
        'sudo', ['sed', '-i', '-e', `s/^.*$/${original}/`, '/etc/hostname']);

      return false;
    }

    proc = child_process.spawnSync(
      'sudo', ['systemctl', 'restart', 'avahi-daemon.service']);
    if (proc.status !== 0) {
      // Set the original hostname back
      child_process.spawnSync(
        'sudo', ['sed', '-i', '-e', `s/^.*$/${original}/`, '/etc/hostname']);
      child_process.spawnSync('sudo', ['hostname', original]);

      return false;
    }

    return true;
  }

  return false;
}

/**
 * Determine whether or not gateway restart is implemented.
 *
 * @return {Boolean} indicating implementation status
 */
function isRestartGatewayImplemented() {
  return isRaspberryPi();
}

/**
 * Restart the gateway process.
 *
 * @return {Boolean} indicating success
 */
function restartGateway() {
  if (isRaspberryPi()) {
    const proc = child_process.spawnSync(
      'sudo', ['systemctl', 'restart', 'mozilla-iot-gateway.service']);

    // This will probably not fire, but just in case.
    return proc.status === 0;
  }

  return false;
}

/**
 * Determine whether or not system restart is implemented.
 *
 * @return {Boolean} indicating implementation status
 */
function isRestartSystemImplemented() {
  return isRaspberryPi();
}

/**
 * Restart the system.
 *
 * @return {Boolean} indicating success
 */
function restartSystem() {
  if (isRaspberryPi()) {
    const proc = child_process.spawnSync('sudo', ['reboot']);

    // This will probably not fire, but just in case.
    return proc.status === 0;
  }

  return false;
}

/**
 * Determine whether or not we're running on the Raspberry Pi.
 */
function isRaspberryPi() {
  const proc = child_process.spawnSync('lsb_release', ['-i', '-s']);
  return proc.status === 0 && proc.stdout.toString().trim() === 'Raspbian';
}

module.exports = {
  getArchitecture,
  getNodeVersion,
  getPythonVersions,
  isToggleSshImplemented,
  isSshEnabled,
  toggleSsh,
  togglemDns,
  setHostname,
  isRestartGatewayImplemented,
  restartGateway,
  isRestartSystemImplemented,
  restartSystem,
  isRaspberryPi,
};


/***/ }),

/***/ "./src/plugin/adapter-proxy.js":
/*!*************************************!*\
  !*** ./src/plugin/adapter-proxy.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module AdapterProxy base class.
 *
 * Manages Adapter data model and business logic.
 */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */



const {Adapter} = __webpack_require__(/*! gateway-addon */ "gateway-addon");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const Deferred = __webpack_require__(/*! ../deferred */ "./src/deferred.js");
const DeviceProxy = __webpack_require__(/*! ./device-proxy */ "./src/plugin/device-proxy.js");

const DEBUG = false;

/**
 * Class used to describe an adapter from the perspective
 * of the gateway.
 */
class AdapterProxy extends Adapter {

  constructor(addonManager, adapterId, name, packageName, plugin) {
    super(addonManager, adapterId, packageName);
    this.name = name;
    this.plugin = plugin;
    this.deferredMock = null;
    this.unloadCompletedPromise = null;
  }

  startPairing(timeoutSeconds) {
    DEBUG && console.log('AdapterProxy: startPairing',
                         this.name, 'id', this.id);
    this.sendMsg(Constants.START_PAIRING, {timeout: timeoutSeconds});
  }

  cancelPairing() {
    DEBUG && console.log('AdapterProxy: cancelPairing',
                         this.name, 'id', this.id);
    this.sendMsg(Constants.CANCEL_PAIRING, {});
  }

  removeThing(device) {
    DEBUG && console.log('AdapterProxy:', this.name, 'id', this.id,
                         'removeThing:', device.id);
    this.sendMsg(Constants.REMOVE_THING, {deviceId: device.id});
  }

  cancelRemoveThing(device) {
    DEBUG && console.log('AdapterProxy:', this.name, 'id', this.id,
                         'cancelRemoveThing:', device.id);
    this.sendMsg(Constants.CANCEL_REMOVE_THING, {deviceId: device.id});
  }

  sendMsg(methodType, data, deferred) {
    data.adapterId = this.id;
    return this.plugin.sendMsg(methodType, data, deferred);
  }

  /**
   * Unloads an adapter.
   *
   * @returns a promise which resolves when the adapter has
   *          finished unloading.
   */
  unload() {
    if (this.unloadCompletedPromise) {
      console.error('AdapterProxy: unload already in progress');
      return Promise.reject();
    }
    this.unloadCompletedPromise = new Deferred();
    this.sendMsg(Constants.UNLOAD_ADAPTER, {
      adapterId: this.id,
    });
    return this.unloadCompletedPromise.promise;
  }

  /**
   * Set the PIN for the given device.
   *
   * @param {String} deviceId ID of the device
   * @param {String} pin PIN to set
   *
   * @returns a promise which resolves when the PIN has been set.
   */
  setPin(deviceId, pin) {
    return new Promise((resolve, reject) => {
      console.log('AdapterProxy: setPin:', pin, 'for:', deviceId);

      const device = this.getDevice(deviceId);
      if (!device) {
        reject('Device not found');
        return;
      }

      const deferredSet = new Deferred();

      deferredSet.promise.then((device) => {
        resolve(device);
      }).catch(() => {
        reject();
      });

      this.sendMsg(Constants.SET_PIN, {deviceId, pin}, deferredSet);
    });
  }

  // The following methods are added to support using the
  // MockAdapter as a plugin.

  clearState() {
    if (this.deferredMock) {
      const err = 'clearState: deferredMock already in progress';
      console.error(err);
      return Promise.reject(err);
    }
    this.deferredMock = new Deferred();
    this.sendMsg(Constants.CLEAR_MOCK_ADAPTER_STATE, {
      adapterId: this.id,
    });
    return this.deferredMock.promise;
  }

  addDevice(deviceId, deviceDescription) {
    if (this.deferredMock) {
      const err = 'addDevice: deferredMock already in progress';
      console.error(err);
      return Promise.reject(err);
    }

    // For the MockDevice we create the device now, so that we can
    // deliver the propertyChanged notifications that show up before
    // the handleDeviceAdded notification comes in. The device we
    // create now will be replaced when the handleDeviceAdded
    // notification shows up.

    this.devices[deviceId] = new DeviceProxy(this, deviceDescription);

    this.deferredMock = new Deferred();
    this.sendMsg(Constants.ADD_MOCK_DEVICE, {
      deviceId: deviceId,
      deviceDescr: deviceDescription,
    });
    return this.deferredMock.promise;
  }

  removeDevice(deviceId) {
    if (this.deferredMock) {
      const err = 'removeDevice: deferredMock already in progress';
      console.error(err);
      return Promise.reject(err);
    }
    this.deferredMock = new Deferred();

    // We need the actual device object when we resolve the promise
    // so we stash it here since it gets removed under our feet.
    this.deferredMock.device = this.getDevice(deviceId);
    this.sendMsg(Constants.REMOVE_MOCK_DEVICE, {
      deviceId: deviceId,
    });
    return this.deferredMock.promise;
  }

  pairDevice(deviceId, deviceDescription) {
    this.sendMsg(Constants.PAIR_MOCK_DEVICE, {
      deviceId: deviceId,
      deviceDescr: deviceDescription,
    });
  }

  unpairDevice(deviceId) {
    this.sendMsg(Constants.UNPAIR_MOCK_DEVICE, {
      deviceId: deviceId,
    });
  }
}

module.exports = AdapterProxy;


/***/ }),

/***/ "./src/plugin/addon-manager-proxy.js":
/*!*******************************************!*\
  !*** ./src/plugin/addon-manager-proxy.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Proxy version of AddonManager used by plugins.
 *
 * @module AddonManagerProxy
 */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */



const config = __webpack_require__(/*! config */ "config");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;

const DEBUG = false;

class AddonManagerProxy extends EventEmitter {
  constructor(pluginClient) {
    super();

    this.adapters = new Map();
    this.pluginClient = pluginClient;

    this.on(Constants.PROPERTY_CHANGED, (property) => {
      DEBUG && console.log('AddonManagerProxy: Got',
                           Constants.PROPERTY_CHANGED, 'notification for',
                           property.name, 'value:', property.value);
      this.sendPropertyChangedNotification(property);
    });

    this.on(Constants.ACTION_STATUS, (action) => {
      DEBUG && console.log('AddonManagerProxy: Got',
                           Constants.ACTION_STATUS, 'notification for',
                           action.name, 'status:', action.status);
      this.sendActionStatusNotification(action);
    });

    this.on(Constants.EVENT, (event) => {
      DEBUG && console.log('AddonManagerProxy: Got',
                           Constants.EVENT, 'notification for', event.name);
      this.sendEventNotification(event);
    });

    this.on(Constants.CONNECTED, ({device, connected}) => {
      DEBUG && console.log('AddonManagerProxy: Got',
                           Constants.CONNECTED, 'notification for',
                           device.name);
      this.sendConnectedNotification(device, connected);
    });
  }

  /**
   * @method addAdapter
   *
   * Adds an adapter to the collection of adapters managed by AddonManager.
   */
  addAdapter(adapter) {
    const adapterId = adapter.id;
    DEBUG && console.log('AddonManagerProxy: addAdapter:', adapterId);

    this.adapters.set(adapterId, adapter);
    this.pluginClient.sendNotification(Constants.ADD_ADAPTER, {
      adapterId: adapter.getId(),
      name: adapter.getName(),
      packageName: adapter.getPackageName(),
    });
  }

  /**
   * @method handleDeviceAdded
   *
   * Called when the indicated device has been added to an adapter.
   */
  handleDeviceAdded(device) {
    DEBUG && console.log('AddonManagerProxy: handleDeviceAdded:', device.id);
    const deviceDict = device.asDict();
    deviceDict.adapterId = device.adapter.id;
    this.pluginClient.sendNotification(
      Constants.HANDLE_DEVICE_ADDED, deviceDict);
  }

  /**
   * @method handleDeviceRemoved
   * Called when the indicated device has been removed an adapter.
   */
  handleDeviceRemoved(device) {
    DEBUG && console.log('AddonManagerProxy: handleDeviceRemoved:',
                         device.id);
    this.pluginClient.sendNotification(
      Constants.HANDLE_DEVICE_REMOVED, {
        adapterId: device.adapter.id,
        id: device.id,
      });
  }

  /**
   * @method onMsg
   * Called whenever a message is received from the gateway.
   */
  onMsg(msg) {
    DEBUG && console.log('AddonManagerProxy: Rcvd:', msg);

    // The first switch covers unload plugin.
    switch (msg.messageType) {
      case Constants.UNLOAD_PLUGIN:
        this.unloadPlugin();
        return;
    }

    // The second switch covers adapter messages. i.e. don't have a deviceId.
    // or don't need a device object.

    const adapterId = msg.data.adapterId;
    const adapter = this.adapters.get(adapterId);
    if (!adapter) {
      console.error('AddonManagerProxy: Unrecognized adapter:', adapterId);
      console.error('AddonManagerProxy: Ignoring msg:', msg);
      return;
    }

    switch (msg.messageType) {

      case Constants.START_PAIRING:
        adapter.startPairing(msg.data.timeout);
        return;

      case Constants.CANCEL_PAIRING:
        adapter.cancelPairing();
        return;

      case Constants.UNLOAD_ADAPTER:
        adapter.unload().then(() => {
          this.adapters.delete(adapterId);
          this.pluginClient.sendNotification(Constants.ADAPTER_UNLOADED, {
            adapterId: adapter.id,
          });
        });
        return;

      case Constants.CLEAR_MOCK_ADAPTER_STATE:
        adapter.clearState().then(() => {
          this.pluginClient.sendNotification(
            Constants.MOCK_ADAPTER_STATE_CLEARED, {
              adapterId: adapter.id,
            });
        });
        return;

      case Constants.ADD_MOCK_DEVICE:
        adapter.addDevice(msg.data.deviceId, msg.data.deviceDescr)
          .then((device) => {
            this.pluginClient.sendNotification(
              Constants.MOCK_DEVICE_ADDED_REMOVED, {
                adapterId: adapter.id,
                deviceId: device.id,
              });
          }).catch((err) => {
            this.pluginClient.sendNotification(
              Constants.MOCK_DEVICE_ADD_REMOVE_FAILED, {
                adapterId: adapter.id,
                error: err,
              });
          });
        return;

      case Constants.REMOVE_MOCK_DEVICE:
        adapter.removeDevice(msg.data.deviceId)
          .then((device) => {
            this.pluginClient.sendNotification(
              Constants.MOCK_DEVICE_ADDED_REMOVED, {
                adapterId: adapter.id,
                deviceId: device.id,
              });
          }).catch((err) => {
            this.pluginClient.sendNotification(
              Constants.MOCK_DEVICE_ADD_REMOVE_FAILED, {
                adapterId: adapter.id,
                error: err,
              });
          });
        return;

      case Constants.PAIR_MOCK_DEVICE:
        adapter.pairDevice(msg.data.deviceId, msg.data.deviceDescr);
        return;

      case Constants.UNPAIR_MOCK_DEVICE:
        adapter.unpairDevice(msg.data.deviceId);
        return;

    }

    // All messages from here on are assumed to require a valid deviceId.

    const deviceId = msg.data.deviceId;
    const device = adapter.getDevice(deviceId);
    if (!device) {
      console.error('AddonManagerProxy: No such device:', deviceId);
      console.error('AddonManagerProxy: Ignoring msg:', msg);
      return;
    }

    switch (msg.messageType) {

      case Constants.REMOVE_THING:
        adapter.removeThing(device);
        break;

      case Constants.CANCEL_REMOVE_THING:
        adapter.cancelRemoveThing(device);
        break;

      case Constants.SET_PROPERTY: {
        const propertyName = msg.data.propertyName;
        const propertyValue = msg.data.propertyValue;
        const property = device.findProperty(propertyName);
        if (property) {
          property.setValue(propertyValue).then((_updatedValue) => {
            if (property.fireAndForget) {
              // This property doesn't send propertyChanged notifications,
              // so we fake one.
              this.sendPropertyChangedNotification(property);
            } else {
              // We should get a propertyChanged notification thru
              // the normal channels, so don't sent another one here.
              // We don't really need to do anything.
            }
          }).catch((err) => {
            // Something bad happened. The gateway is still
            // expecting a reply, so we report the error
            // and just send whatever the current value is.
            console.error('AddonManagerProxy: Failed to setProperty',
                          propertyName, 'to', propertyValue,
                          'for device:', deviceId);
            console.error(err);
            this.sendPropertyChangedNotification(property);
          });
        } else {
          console.error('AddonManagerProxy: Unknown property:',
                        propertyName);
        }
        break;
      }
      case Constants.REQUEST_ACTION: {
        const actionName = msg.data.actionName;
        const actionId = msg.data.actionId;
        const input = msg.data.input;
        device.requestAction(actionId, actionName, input)
          .then(() => {
            this.pluginClient.sendNotification(
              Constants.REQUEST_ACTION_RESOLVED, {
                actionName: actionName,
                actionId: actionId,
              });
          }).catch((err) => {
            console.error('AddonManagerProxy: Failed to request action',
                          actionName, 'for device:', deviceId);
            console.error(err);
            this.pluginClient.sendNotification(
              Constants.REQUEST_ACTION_REJECTED, {
                actionName: actionName,
                actionId: actionId,
              });
          });
        break;
      }
      case Constants.REMOVE_ACTION: {
        const actionName = msg.data.actionName;
        const actionId = msg.data.actionId;
        const messageId = msg.data.messageId;
        device.removeAction(actionId, actionName)
          .then(() => {
            this.pluginClient.sendNotification(
              Constants.REMOVE_ACTION_RESOLVED, {
                actionName: actionName,
                actionId: actionId,
                messageId: messageId,
              });
          }).catch((err) => {
            console.error('AddonManagerProxy: Failed to remove action',
                          actionName, 'for device:', deviceId);
            console.error(err);
            this.pluginClient.sendNotification(
              Constants.REMOVE_ACTION_REJECTED, {
                actionName: actionName,
                actionId: actionId,
                messageId: messageId,
              });
          });
        break;
      }
      case Constants.SET_PIN: {
        const pin = msg.data.pin;
        const messageId = msg.data.messageId;
        adapter.setPin(deviceId, pin)
          .then(() => {
            const dev = adapter.getDevice(deviceId);
            this.pluginClient.sendNotification(
              Constants.SET_PIN_RESOLVED, {
                device: dev.asDict(),
                messageId: messageId,
                adapterId: adapter.id,
              });
          }).catch((err) => {
            console.error(
              `AddonManagerProxy: Failed to set PIN for device ${deviceId}`);
            console.error(err);

            this.pluginClient.sendNotification(
              Constants.SET_PIN_REJECTED, {
                deviceId: deviceId,
                messageId: messageId,
              });
          });
        break;
      }
      case Constants.DEBUG_CMD:
        device.debugCmd(msg.data.cmd, msg.data.params);
        break;

      default:
        console.warn('AddonManagerProxy: unrecognized msg:', msg);
        break;
    }
  }

  /**
   * @method sendPropertyChangedNotification
   * Sends a propertyChanged notification to the gateway.
   */
  sendPropertyChangedNotification(property) {
    this.pluginClient.sendNotification(Constants.PROPERTY_CHANGED, {
      adapterId: property.device.adapter.id,
      deviceId: property.device.id,
      property: property.asDict(),
    });
  }

  /**
   * @method sendActionStatusNotification
   * Sends an actionStatus notification to the gateway.
   */
  sendActionStatusNotification(action) {
    this.pluginClient.sendNotification(Constants.ACTION_STATUS, {
      adapterId: action.device.adapter.id,
      deviceId: action.device.id,
      action: action.asDict(),
    });
  }

  /**
   * @method sendEventNotification
   * Sends an event notification to the gateway.
   */
  sendEventNotification(event) {
    this.pluginClient.sendNotification(Constants.EVENT, {
      adapterId: event.device.adapter.id,
      deviceId: event.device.id,
      event: event.asDict(),
    });
  }

  /**
   * @method sendConnectedNotification
   * Sends a connected notification to the gateway.
   */
  sendConnectedNotification(device, connected) {
    this.pluginClient.sendNotification(Constants.CONNECTED, {
      adapterId: device.adapter.id,
      deviceId: device.id,
      connected,
    });
  }

  /**
   * @method unloadPlugin
   *
   * Unloads the plugin, and tells the server about it.
   */
  unloadPlugin() {
    if (config.get('ipc.protocol') === 'inproc') {
      // When we're testing, we run in the same process and we need
      // to close the sockets before the adapter.unload promise is
      // resolved. So we hook into the plugin unloadedRcvdPromise.

      // NOTE: We need to put this require here rather than at the top
      //       of the file because at the top of the file, otherwise we
      //       have circular requires and the addonManager object won't
      //       have been created yet.
      const addonManager = __webpack_require__(/*! ../addon-manager */ "./src/addon-manager.js");
      // NOTE: The call to getPlugin will only succeed when doing
      //       inproc IPC, since getPlugin reaches into server-side
      //       data structures, and we're running on the client.
      const plugin = addonManager.getPlugin(this.pluginClient.pluginId);
      if (plugin && plugin.unloadedRcvdPromise) {
        plugin.unloadedRcvdPromise.promise
          .then((socketsClosedPromise) => {
            this.pluginClient.unload();
            socketsClosedPromise.resolve();
          });
      } else {
        // Wait a small amount of time to allow the pluginUnloaded
        // message to be processed by the server before closing.
        setTimeout(() => {
          this.pluginClient.unload();
        }, 500);
      }
    } else {
      // Wait a small amount of time to allow the pluginUnloaded
      // message to be processed by the server before closing.
      setTimeout(() => {
        this.pluginClient.unload();
      }, 500);
    }
    this.pluginClient.sendNotification(Constants.PLUGIN_UNLOADED, {});
  }

  sendError(message) {
    this.pluginClient.sendNotification(Constants.PLUGIN_ERROR, {message});
  }
}

module.exports = AddonManagerProxy;


/***/ }),

/***/ "./src/plugin/device-proxy.js":
/*!************************************!*\
  !*** ./src/plugin/device-proxy.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DeviceProxy - Gateway side representation of a device when using
 *               an adapter plugin.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */



const Actions = __webpack_require__(/*! ../models/actions */ "./src/models/actions.js");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const Event = __webpack_require__(/*! ../models/event */ "./src/models/event.js");
const Events = __webpack_require__(/*! ../models/events */ "./src/models/events.js");
const PropertyProxy = __webpack_require__(/*! ./property-proxy */ "./src/plugin/property-proxy.js");
const {Device, Deferred} = __webpack_require__(/*! gateway-addon */ "gateway-addon");

class DeviceProxy extends Device {

  constructor(adapter, deviceDict) {
    super(adapter, deviceDict.id);

    this.name = deviceDict.name;
    this.type = deviceDict.type;
    this['@context'] =
      deviceDict['@context'] || 'https://iot.mozilla.org/schemas';
    this['@type'] = deviceDict['@type'] || [];
    this.description = deviceDict.description || '';
    this.uiHref = deviceDict.uiHref || null;

    if (deviceDict.hasOwnProperty('pin')) {
      this.pinRequired = deviceDict.pin.required;
      this.pinPattern = deviceDict.pin.pattern;
    } else {
      this.pinRequired = false;
      this.pinPattern = null;
    }

    for (const propertyName in deviceDict.properties) {
      const propertyDict = deviceDict.properties[propertyName];
      const propertyProxy =
        new PropertyProxy(this, propertyName, propertyDict);
      this.properties.set(propertyName, propertyProxy);
    }

    // Copy over any extra device fields which might be useful for debugging.
    this.deviceDict = {};
    for (const field in deviceDict) {
      if (['id', 'name', 'type', 'description', 'properties', 'actions',
           'events', '@type', '@context'].includes(field)) {
        continue;
      }
      this.deviceDict[field] = deviceDict[field];
    }

    if (deviceDict.actions) {
      for (const actionName in deviceDict.actions) {
        const dict = deviceDict.actions[actionName];
        this.actions.set(actionName, dict);
      }
    }

    if (deviceDict.events) {
      for (const eventName in deviceDict.events) {
        const dict = deviceDict.events[eventName];
        this.events.set(eventName, dict);
      }
    }
  }

  asDict() {
    return Object.assign({}, this.deviceDict, super.asDict());
  }

  debugCmd(cmd, params) {
    this.adapter.sendMsg(
      Constants.DEBUG_CMD, {
        deviceId: this.id,
        cmd: cmd,
        params: params,
      }
    );
  }

  /**
   * @method requestAction
   */
  requestAction(actionId, actionName, input) {
    return new Promise((resolve, reject) => {
      if (!this.actions.has(actionName)) {
        reject(`Action "${actionName}" not found`);
        return;
      }

      console.log('DeviceProxy: requestAction:', actionName,
                  'for:', this.id);

      const deferredSet = new Deferred();

      deferredSet.promise.then(() => {
        resolve();
      }).catch(() => {
        reject();
      });

      this.adapter.sendMsg(
        Constants.REQUEST_ACTION, {
          deviceId: this.id,
          actionName,
          actionId,
          input,
        }, deferredSet);
    });
  }

  /**
   * @method removeAction
   */
  removeAction(actionId, actionName) {
    return new Promise((resolve, reject) => {
      if (!this.actions.has(actionName)) {
        reject(`Action "${actionName}" not found`);
        return;
      }

      console.log('DeviceProxy: removeAction:', actionName,
                  'for:', this.id);

      const deferredSet = new Deferred();

      deferredSet.promise.then(() => {
        resolve();
      }).catch(() => {
        reject();
      });

      this.adapter.sendMsg(
        Constants.REMOVE_ACTION, {
          deviceId: this.id,
          actionName,
          actionId,
        }, deferredSet);
    });
  }

  actionNotify(action) {
    const a = Actions.get(action.id);
    if (a) {
      a.update(action);
    }
  }

  eventNotify(event) {
    Events.add(new Event(event.name, event.data, this.id, event.timestamp));
  }
}

module.exports = DeviceProxy;


/***/ }),

/***/ "./src/plugin/ipc.js":
/*!***************************!*\
  !*** ./src/plugin/ipc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const config = __webpack_require__(/*! config */ "config");
const fs = __webpack_require__(/*! fs */ "fs");
const nanomsg = __webpack_require__(/*! nanomsg */ "nanomsg");

const appInstance = __webpack_require__(/*! ../app-instance */ "./src/app-instance.js");

const DEBUG = false;
const DEBUG_MSG = false;

const boundAddrs = new Set();
const connectedAddrs = new Set();
let socketId = 0;

class IpcSocket {

  constructor(name, socketType, ipcBaseAddr, onMsg) {
    this.name = name;
    this.socketType = socketType;
    this.socket = nanomsg.socket(socketType);
    this.ipcBaseAddr = ipcBaseAddr;
    this.onMsg = onMsg;
    socketId += 1;
    this.socketId = socketId;

    this.protocol = config.get('ipc.protocol');
    switch (this.protocol) {
      case 'ipc':
        this.ipcFile = `/tmp/${ipcBaseAddr}`;
        break;

      case 'inproc':
        this.ipcFile = `${appInstance.get()}-${
          ipcBaseAddr}`;
        break;

      default: {
        const err = `Unsupported IPC protocol: ${this.protocol}`;
        console.error(err);
        throw err;
      }
    }
    this.ipcAddr = `${this.protocol}://${this.ipcFile}`;

    this.logPrefix = `IpcSocket${(`${this.socketId}`).padStart(3)}: ${
      this.name.padEnd(18)}:`;
    DEBUG && this.log('  alloc', this.ipcAddr, socketType);

    this.socket.on('data', this.onData.bind(this));
    this.connected = false;
    this.bound = false;
  }

  error() {
    Array.prototype.unshift.call(arguments, this.logPrefix);
    console.error.apply(null, arguments);
  }

  log() {
    Array.prototype.unshift.call(arguments, this.logPrefix);
    console.log.apply(null, arguments);
  }

  bind() {
    DEBUG && this.log('   bind', this.ipcAddr);

    if (this.bound) {
      this.error('socket already bound:', this.ipcAddr);
    }
    if (this.connected) {
      this.error('socket already connected:', this.ipcAddr);
    }
    this.bound = true;

    if (this.socketType === 'pair') {
      if (boundAddrs.has(this.ipcAddr)) {
        this.error('address already bound:', this.ipcAddr);
      }
      boundAddrs.add(this.ipcAddr);
    }

    if (this.protocol === 'ipc') {
      if (fs.existsSync(this.ipcFile)) {
        fs.unlinkSync(this.ipcFile);
      }
    }
    return this.socket.bind(this.ipcAddr);
  }

  connect() {
    DEBUG && this.log('connect', this.ipcAddr);

    if (this.bound) {
      this.error('socket already bound:', this.ipcAddr);
    }
    if (this.connected) {
      this.error('socket already connected:', this.ipcAddr);
    }
    this.connected = true;

    if (this.socketType === 'pair') {
      if (connectedAddrs.has(this.ipcAddr)) {
        this.error('address already connected:', this.ipcAddr);
      }
      connectedAddrs.add(this.ipcAddr);
    }

    return this.socket.connect(this.ipcAddr);
  }

  close() {
    DEBUG && this.log('  close', this.ipcAddr);
    if (this.connected) {
      this.connected = false;
      if (this.socketType === 'pair') {
        connectedAddrs.delete(this.ipcAddr);
      }
    } else if (this.bound) {
      this.bound = false;
      if (this.socketType === 'pair') {
        boundAddrs.delete(this.ipcAddr);
      }
    } else {
      this.error('socket not connected or bound:', this.ipcAddr);
    }
    this.socket.close();
  }

  /**
   * @method onData
   * @param {Buffer} buf
   *
   * Called anytime a new message has been received.
   */
  onData(buf) {
    const bufStr = buf.toString();
    let data;
    try {
      data = JSON.parse(bufStr);
    } catch (err) {
      this.error('Error parsing message as JSON');
      this.error(`Rcvd: "${bufStr}"`);
      this.error(err);
      return;
    }
    DEBUG_MSG && this.log(this.name, 'Rcvd:', data);
    this.onMsg(data);
  }

  /**
   * @method sendJson
   * @param {dict} obj
   *
   * Async function which will convert the passed object
   * into json, send it and not wait for any type of reply.
   */
  sendJson(obj) {
    const jsonObj = JSON.stringify(obj);
    DEBUG_MSG && this.log(this.name, 'Sending:', jsonObj);
    this.socket.send(jsonObj);
  }
}

module.exports = IpcSocket;


/***/ }),

/***/ "./src/plugin/plugin-client.js":
/*!*************************************!*\
  !*** ./src/plugin/plugin-client.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module PluginClient
 *
 * Takes care of connecting to the gateway for an adapter plugin
 */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */



const AddonManagerProxy = __webpack_require__(/*! ./addon-manager-proxy */ "./src/plugin/addon-manager-proxy.js");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const Deferred = __webpack_require__(/*! ../deferred */ "./src/deferred.js");
const EventEmitter = __webpack_require__(/*! events */ "events");
const IpcSocket = __webpack_require__(/*! ./ipc */ "./src/plugin/ipc.js");

class PluginClient extends EventEmitter {

  constructor(pluginId, {verbose} = {}) {
    super();
    this.pluginId = pluginId;
    this.verbose = verbose;
    this.deferredReply = null;
  }

  onManagerMsg(msg) {
    this.verbose &&
      console.log('PluginClient: rcvd ManagerMsg:', msg);

    if (!this.deferredReply) {
      console.error('No deferredReply setup');
      return;
    }

    if (msg.messageType === Constants.REGISTER_PLUGIN_REPLY) {
      this.addonManager = new AddonManagerProxy(this);

      // Now that we're registered with the server, open the plugin
      // specific IPC channel with the server.
      this.pluginIpcBaseAddr = msg.data.ipcBaseAddr;
      this.pluginIpcSocket =
        new IpcSocket('PluginClient', 'pair',
                      this.pluginIpcBaseAddr,
                      this.addonManager.onMsg.bind(this.addonManager));
      this.pluginIpcSocket.connect(this.pluginIpcAddr);
      this.verbose &&
        console.log('PluginClient: registered with PluginServer:',
                    this.pluginIpcSocket.ipcAddr);

      const deferredReply = this.deferredReply;
      this.deferredReply = null;
      deferredReply.resolve(this.addonManager);
    } else {
      console.error('Unexpected registration reply for gateway');
      console.error(msg);
    }
  }

  register() {
    if (this.deferredReply) {
      console.error('Already waiting for registration reply');
      return;
    }
    this.deferredReply = new Deferred();

    this.managerIpcSocket =
      new IpcSocket('PluginClientServer', 'req',
                    'gateway.addonManager',
                    this.onManagerMsg.bind(this));
    this.managerIpcSocket.connect();

    // Register ourselves with the server
    this.verbose &&
      console.log('Connected to server:', this.managerIpcSocket.ipcAddr,
                  'registering...');

    this.managerIpcSocket.sendJson({
      messageType: Constants.REGISTER_PLUGIN,
      data: {
        pluginId: this.pluginId,
      },
    });

    return this.deferredReply.promise;
  }

  sendNotification(methodType, data) {
    data.pluginId = this.pluginId;
    this.pluginIpcSocket.sendJson({
      messageType: methodType,
      data: data,
    });
  }

  unload() {
    this.pluginIpcSocket.close();
    this.managerIpcSocket.close();
    this.emit('unloaded', {});
  }
}

module.exports = PluginClient;


/***/ }),

/***/ "./src/plugin/plugin-server.js":
/*!*************************************!*\
  !*** ./src/plugin/plugin-server.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module PluginServer
 *
 * Takes care of the gateway side of adapter plugins. There is
 * only a single instance of the PluginServer for the entire gateway.
 * There will be an AdapterProxy instance for each adapter plugin.
 */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */



const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const EventEmitter = __webpack_require__(/*! events */ "events");
const IpcSocket = __webpack_require__(/*! ./ipc */ "./src/plugin/ipc.js");
const Plugin = __webpack_require__(/*! ./plugin */ "./src/plugin/plugin.js");

class PluginServer extends EventEmitter {
  constructor(addonManager, {verbose} = {}) {
    super();
    this.manager = addonManager;

    this.verbose = verbose;
    this.plugins = new Map();

    this.ipcSocket = new IpcSocket('PluginServer', 'rep',
                                   'gateway.addonManager',
                                   this.onMsg.bind(this));
    this.ipcSocket.bind();
    this.verbose &&
      console.log('Server bound to', this.ipcSocket.ipcAddr);
  }

  /**
   * @method addAdapter
   *
   * Tells the adapter manager about new adapters added via a plugin.
   */
  addAdapter(adapter) {
    this.manager.addAdapter(adapter);
  }

  /**
   * @method onMsg
   *
   * Called when the plugin server receives an adapter manager IPC message
   * from a plugin. This particular IPC channel is only used to register
   * plugins. Each plugin will get its own IPC channel once its registered.
   */
  onMsg(msg) {
    this.verbose &&
      console.log('PluginServer: Rcvd:', msg);

    switch (msg.messageType) {
      case Constants.REGISTER_PLUGIN: {
        const plugin = this.registerPlugin(msg.data.pluginId);
        this.ipcSocket.sendJson({
          messageType: Constants.REGISTER_PLUGIN_REPLY,
          data: {
            pluginId: msg.data.pluginId,
            ipcBaseAddr: plugin.ipcBaseAddr,
          },
        });
        break;
      }
    }
  }

  /**
   * @method getPlugin
   *
   * Returns a previously loaded plugin instance.
   */
  getPlugin(pluginId) {
    return this.plugins.get(pluginId);
  }

  /**
   * @method loadPlugin
   *
   * Loads a plugin by launching a separate process.
   */
  loadPlugin(pluginPath, manifest) {
    const plugin = this.registerPlugin(manifest.name);
    plugin.exec = manifest.moziot.exec;
    plugin.execPath = pluginPath;
    plugin.start();
  }

  /**
   * @method registerPlugin
   *
   * Called when the plugin server receives a register plugin message
   * via IPC.
   */
  registerPlugin(pluginId) {
    let plugin = this.plugins.get(pluginId);
    if (plugin) {
      // This is a plugin that we already know about.
    } else {
      // We haven't seen this plugin before.
      plugin = new Plugin(pluginId, this);
      this.plugins.set(pluginId, plugin);
    }
    return plugin;
  }

  /**
   * @method unregisterPlugin
   *
   * Called when the plugin sends a plugin-unloaded message.
   */
  unregisterPlugin(pluginId) {
    this.plugins.delete(pluginId);
  }

  shutdown() {
    this.ipcSocket.close();
  }
}

module.exports = PluginServer;


/***/ }),

/***/ "./src/plugin/plugin.js":
/*!******************************!*\
  !*** ./src/plugin/plugin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module Plugin
 *
 * Object created for each plugin that the gateway talks to.
 */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */



const AdapterProxy = __webpack_require__(/*! ./adapter-proxy */ "./src/plugin/adapter-proxy.js");
const config = __webpack_require__(/*! config */ "config");
const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const Deferred = __webpack_require__(/*! ../deferred */ "./src/deferred.js");
const DeviceProxy = __webpack_require__(/*! ./device-proxy */ "./src/plugin/device-proxy.js");
const format = __webpack_require__(/*! string-format */ "string-format");
const IpcSocket = __webpack_require__(/*! ./ipc */ "./src/plugin/ipc.js");
const readline = __webpack_require__(/*! readline */ "readline");
const spawn = __webpack_require__(/*! child_process */ "child_process").spawn;
const path = __webpack_require__(/*! path */ "path");
const UserProfile = __webpack_require__(/*! ../user-profile */ "./src/user-profile.js");

const DEBUG = false;

class Plugin {

  constructor(pluginId, pluginServer) {
    this.pluginId = pluginId;
    this.pluginServer = pluginServer;
    this.logPrefix = pluginId.replace('-adapter', '');

    this.adapters = new Map();
    this.ipcBaseAddr = `gateway.plugin.${this.pluginId}`;

    this.ipcSocket = new IpcSocket('AdapterProxy', 'pair',
                                   this.ipcBaseAddr,
                                   this.onMsg.bind(this));
    this.ipcSocket.bind();
    this.exec = '';
    this.execPath = '.';

    // Make this a nested object such that if the Plugin object is reused,
    // i.e. the plugin is disabled and quickly re-enabled, the gateway process
    // can maintain a proper reference to the process object.
    this.process = {p: null};

    this.restart = true;
    this.unloadCompletedPromise = null;
    this.unloadedRcvdPromise = null;

    this.nextId = 0;
    this.requestActionPromises = new Map();
    this.removeActionPromises = new Map();
    this.setPinPromises = new Map();
  }

  asDict() {
    let pid = 'not running';
    if (this.process.p) {
      pid = this.process.p.pid;
    }
    return {
      pluginId: this.pluginId,
      ipcBaseAddr: this.ipcBaseAddr,
      adapters: Array.from(this.adapters.values()).map((adapter) => {
        return adapter.asDict();
      }),
      exec: this.exec,
      pid: pid,
    };
  }

  onMsg(msg) {
    DEBUG && console.log('Plugin: Rcvd Msg', msg);

    // The first switch manages action method resolved or rejected messages.
    switch (msg.messageType) {
      case Constants.REQUEST_ACTION_RESOLVED: {
        const actionId = msg.data.actionId;
        const deferred = this.requestActionPromises.get(actionId);
        if (typeof actionId === 'undefined' ||
            typeof deferred === 'undefined') {
          console.error('Plugin:', this.pluginId,
                        'Unrecognized action id:', actionId,
                        'Ignoring msg:', msg);
          return;
        }
        deferred.resolve();
        this.requestActionPromises.delete(actionId);
        return;
      }
      case Constants.REQUEST_ACTION_REJECTED: {
        const actionId = msg.data.actionId;
        const deferred = this.requestActionPromises.get(actionId);
        if (typeof actionId === 'undefined' ||
            typeof deferred === 'undefined') {
          console.error('Plugin:', this.pluginId,
                        'Unrecognized action id:', actionId,
                        'Ignoring msg:', msg);
          return;
        }
        deferred.reject();
        this.requestActionPromises.delete(actionId);
        return;
      }
      case Constants.REMOVE_ACTION_RESOLVED: {
        const messageId = msg.data.messageId;
        const deferred = this.removeActionPromises.get(messageId);
        if (typeof messageId === 'undefined' ||
            typeof deferred === 'undefined') {
          console.error('Plugin:', this.pluginId,
                        'Unrecognized message id:', messageId,
                        'Ignoring msg:', msg);
          return;
        }
        deferred.resolve();
        this.removeActionPromises.delete(messageId);
        return;
      }
      case Constants.REMOVE_ACTION_REJECTED: {
        const messageId = msg.data.messageId;
        const deferred = this.removeActionPromises.get(messageId);
        if (typeof messageId === 'undefined' ||
            typeof deferred === 'undefined') {
          console.error('Plugin:', this.pluginId,
                        'Unrecognized message id:', messageId,
                        'Ignoring msg:', msg);
          return;
        }
        deferred.reject();
        this.removeActionPromises.delete(messageId);
        return;
      }
      case Constants.SET_PIN_RESOLVED: {
        const messageId = msg.data.messageId;
        const deferred = this.setPinPromises.get(messageId);
        if (typeof messageId === 'undefined' ||
            typeof deferred === 'undefined') {
          console.error('Plugin:', this.pluginId,
                        'Unrecognized message id:', messageId,
                        'Ignoring msg:', msg);
          return;
        }
        const adapter = this.adapters.get(msg.data.adapterId);
        const deviceId = msg.data.device.id;
        const device = new DeviceProxy(adapter, msg.data.device);
        adapter.devices[deviceId] = device;
        adapter.manager.devices[deviceId] = device;
        deferred.resolve(msg.data.device);
        this.setPinPromises.delete(messageId);
        return;
      }
      case Constants.SET_PIN_REJECTED: {
        const messageId = msg.data.messageId;
        const deferred = this.setPinPromises.get(messageId);
        if (typeof messageId === 'undefined' ||
            typeof deferred === 'undefined') {
          console.error('Plugin:', this.pluginId,
                        'Unrecognized message id:', messageId,
                        'Ignoring msg:', msg);
          return;
        }
        deferred.reject();
        this.setPinPromises.delete(messageId);
        return;
      }
    }

    const adapterId = msg.data.adapterId;
    let adapter;

    // The second switch manages plugin level messages.
    switch (msg.messageType) {
      case Constants.ADD_ADAPTER:
        adapter = new AdapterProxy(this.pluginServer.manager,
                                   adapterId,
                                   msg.data.name,
                                   msg.data.packageName,
                                   this);
        this.adapters.set(adapterId, adapter);
        this.pluginServer.addAdapter(adapter);
        return;

      case Constants.PLUGIN_UNLOADED:
        this.shutdown();
        this.pluginServer.unregisterPlugin(msg.data.pluginId);
        if (this.unloadedRcvdPromise) {
          const socketsClosedPromise = new Deferred();
          if (config.get('ipc.protocol') === 'inproc') {
            // In test mode we want to wait until the sockets are actually
            // closed before we resolve the unloadCompletedPromise.
            this.unloadedRcvdPromise.resolve(socketsClosedPromise);
            this.unloadedRcvdPromise = null;
          } else {
            // For non-test mode, the plugin is out-of-process so there is no
            // way for us to know when then sockets are closed. We won't try
            // try to restart the plugin until it exits, so there isn't any
            // problem with resolving the unloadCompletedPromise right away.
            socketsClosedPromise.resolve();
          }
          socketsClosedPromise.promise.then(() => {
            if (this.unloadCompletedPromise) {
              this.unloadCompletedPromise.resolve();
              this.unloadCompletedPromise = null;
            }
          });
        }
        return;

      case Constants.PLUGIN_ERROR:
        this.pluginServer.emit('log', {
          severity: Constants.LogSeverity.ERROR,
          message: msg.data.message,
        });
        return;
    }

    // The next switch deals with adapter level messages

    adapter = this.adapters.get(adapterId);
    if (!adapter) {
      console.error('Plugin:', this.pluginId,
                    'Unrecognized adapter:', adapterId,
                    'Ignoring msg:', msg);
      return;
    }

    let device;
    let property;
    let deferredMock;

    switch (msg.messageType) {

      case Constants.ADAPTER_UNLOADED:
        this.adapters.delete(adapterId);
        if (this.adapters.size == 0) {
          // We've unloaded the last adapter for the plugin, now unload
          // the plugin.

          // We may need to reevaluate this, and only auto-unload
          // the plugin for the MockAdapter. For plugins which
          // support hot-swappable dongles (like zwave/zigbee) it makes
          // sense to have a plugin loaded with no adapters present.
          this.unload();
          this.unloadCompletedPromise = adapter.unloadCompletedPromise;
          adapter.unloadCompletedPromise = null;
        } else if (adapter.unloadCompletedPromise) {
          adapter.unloadCompletedPromise.resolve();
          adapter.unloadCompletedPromise = null;
        }
        break;

      case Constants.HANDLE_DEVICE_ADDED:
        device = new DeviceProxy(adapter, msg.data);
        adapter.handleDeviceAdded(device);
        break;

      case Constants.HANDLE_DEVICE_REMOVED:
        device = adapter.getDevice(msg.data.id);
        if (device) {
          adapter.handleDeviceRemoved(device);
        }
        break;

      case Constants.PROPERTY_CHANGED:
        device = adapter.getDevice(msg.data.deviceId);
        if (device) {
          property = device.findProperty(msg.data.property.name);
          if (property) {
            property.doPropertyChanged(msg.data.property);
            if (property.isVisible()) {
              device.notifyPropertyChanged(property);
            }
          }
        }
        break;

      case Constants.ACTION_STATUS:
        device = adapter.getDevice(msg.data.deviceId);
        if (device) {
          device.actionNotify(msg.data.action);
        }
        break;

      case Constants.EVENT:
        device = adapter.getDevice(msg.data.deviceId);
        if (device) {
          device.eventNotify(msg.data.event);
        }
        break;

      case Constants.CONNECTED:
        device = adapter.getDevice(msg.data.deviceId);
        if (device) {
          device.connectedNotify(msg.data.connected);
        }
        break;

      case Constants.MOCK_ADAPTER_STATE_CLEARED:
        deferredMock = adapter.deferredMock;
        if (!deferredMock) {
          console.error('mockAdapterStateCleared: No deferredMock');
        } else {
          adapter.deferredMock = null;
          deferredMock.resolve();
        }
        break;

      case Constants.MOCK_DEVICE_ADDED_REMOVED:
        deferredMock = adapter.deferredMock;
        if (!deferredMock) {
          console.error('mockDeviceAddedRemoved: No deferredMock');
        } else {
          device = deferredMock.device;
          adapter.deferredMock = null;
          deferredMock.device = null;
          deferredMock.resolve(device);
        }
        break;

      case Constants.MOCK_DEVICE_ADD_REMOVE_FAILED:
        deferredMock = adapter.deferredMock;
        if (!deferredMock) {
          console.error('Plugin:', this.pluginId,
                        'Adapter:', adapter.getId(),
                        'No deferredMock');
        } else {
          adapter.deferredMock = null;
          deferredMock.reject(msg.data.error);
        }
        break;

      default:
        console.error('Plugin: unrecognized msg:', msg);
        break;
    }
  }

  /**
   * Generate an ID for a message.
   *
   * @returns {integer} An id.
   */
  generateMsgId() {
    return ++this.nextId;
  }

  sendMsg(methodType, data, deferred) {
    data.pluginId = this.pluginId;

    // Methods which could fail should await result.
    if (typeof deferred !== 'undefined') {
      switch (methodType) {
        case Constants.REQUEST_ACTION: {
          this.requestActionPromises.set(data.actionId, deferred);
          break;
        }
        case Constants.REMOVE_ACTION: {
          // removeAction needs ID which is per message, because it
          // can be called while waiting rejected or resolved.
          data.messageId = this.generateMsgId();
          this.removeActionPromises.set(data.messageId, deferred);
          break;
        }
        case Constants.SET_PIN: {
          // removeAction needs ID which is per message, because it
          // can be called while waiting rejected or resolved.
          data.messageId = this.generateMsgId();
          this.setPinPromises.set(data.messageId, deferred);
          break;
        }
        default:
          break;
      }
    }

    const msg = {
      messageType: methodType,
      data: data,
    };
    DEBUG && console.log('Plugin: sendMsg:', msg);

    return this.ipcSocket.sendJson(msg);
  }

  /**
   * Does cleanup required to allow the test suite to complete cleanly.
   */
  shutdown() {
    this.requestActionPromises.forEach((promise, key) => {
      promise.reject();
      this.requestActionPromises.delete(key);
    });
    this.removeActionPromises.forEach((promise, key) => {
      promise.reject();
      this.removeActionPromises.delete(key);
    });
    this.setPinPromises.forEach((promise, key) => {
      promise.reject();
      this.setPinPromises.delete(key);
    });
    this.ipcSocket.close();
  }

  start() {
    const execArgs = {
      nodeLoader: `node ${path.join(UserProfile.gatewayDir,
                                    'src',
                                    'addon-loader.js')}`,
      name: this.pluginId,
      path: this.execPath,
    };
    const execCmd = format(this.exec, execArgs);

    DEBUG && console.log('  Launching:', execCmd);

    // If we need embedded spaces, then consider changing to use the npm
    // module called splitargs
    this.restart = true;
    const args = execCmd.split(' ');
    this.process.p = spawn(
      args[0],
      args.slice(1),
      {
        env: Object.assign(process.env,
                           {
                             MOZIOT_HOME: UserProfile.baseDir,
                             NODE_PATH: path.join(UserProfile.gatewayDir,
                                                  'node_modules'),
                           }),
      }
    );

    this.process.p.on('error', (err) => {
      // We failed to spawn the process. This most likely means that the
      // exec string is malformed somehow. Report the error but don't try
      // restarting.
      this.restart = false;
      console.error('Failed to start plugin', this.pluginId);
      console.error('Command:', this.exec);
      console.error(err);
    });

    this.stdoutReadline = readline.createInterface({
      input: this.process.p.stdout,
    });
    this.stdoutReadline.on('line', (line) => {
      console.log(`${this.logPrefix}: ${line}`);
    });

    this.stderrReadline = readline.createInterface({
      input: this.process.p.stderr,
    });
    this.stderrReadline.on('line', (line) => {
      console.error(`${this.logPrefix}: ${line}`);
    });

    this.process.p.on('exit', (code) => {
      if (this.restart) {
        if (code == Constants.DONT_RESTART_EXIT_CODE) {
          console.log('Plugin:', this.pluginId, 'died, code =', code,
                      'NOT restarting...');
          this.restart = false;
          this.process.p = null;
        } else {
          console.log('Plugin:', this.pluginId, 'died, code =', code,
                      'restarting...');
          this.start();
        }
      } else {
        this.process.p = null;
      }
    });
  }

  unload() {
    this.restart = false;
    this.unloadedRcvdPromise = new Deferred();
    this.sendMsg(Constants.UNLOAD_PLUGIN, {});
  }
}

module.exports = Plugin;


/***/ }),

/***/ "./src/plugin/property-proxy.js":
/*!**************************************!*\
  !*** ./src/plugin/property-proxy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * PropertyProxy - Gateway side representation of a property
 *                 when using an adapter plugin.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const Constants = __webpack_require__(/*! ../constants */ "./src/constants.js");
const Deferred = __webpack_require__(/*! ../deferred */ "./src/deferred.js");
const {Property} = __webpack_require__(/*! gateway-addon */ "gateway-addon");

class PropertyProxy extends Property {
  constructor(device, propertyName, propertyDict) {
    super(device, propertyName, propertyDict);

    this.value = propertyDict.value;

    this.propertyChangedPromises = [];
    this.propertyDict = Object.assign({}, propertyDict);
  }

  asDict() {
    return Object.assign({}, this.propertyDict, super.asDict());
  }

  /**
   * @method onPropertyChanged
   * @returns a promise which is resoved when the next
   * propertyChanged notification is received.
   */
  onPropertyChanged() {
    const deferredChange = new Deferred();
    this.propertyChangedPromises.push(deferredChange);
    return deferredChange.promise;
  }

  /**
   * @method doPropertyChanged
   * Called whenever a property changed notification is received
   * from the adapter.
   */
  doPropertyChanged(propertyDict) {
    this.propertyDict = Object.assign({}, propertyDict);
    this.setCachedValue(propertyDict.value);
    if (propertyDict.hasOwnProperty('minimum')) {
      this.minimum = propertyDict.minimum;
    }
    if (propertyDict.hasOwnProperty('maximum')) {
      this.maximum = propertyDict.maximum;
    }
    if (propertyDict.hasOwnProperty('multipleOf')) {
      this.multipleOf = propertyDict.multipleOf;
    }
    if (propertyDict.hasOwnProperty('enum')) {
      this.enum = propertyDict.enum;
    }
    while (this.propertyChangedPromises.length > 0) {
      const deferredChange = this.propertyChangedPromises.pop();
      deferredChange.resolve(propertyDict.value);
    }
  }

  /**
   * @returns a promise which resolves to the updated value.
   *
   * @note it is possible that the updated value doesn't match
   * the value passed in.
   */
  setValue(value) {
    return new Promise((resolve, reject) => {
      this.device.adapter.sendMsg(
        Constants.SET_PROPERTY, {
          deviceId: this.device.id,
          propertyName: this.name,
          propertyValue: value,
        });

      // TODO: Add a timeout

      this.onPropertyChanged().then((updatedValue) => {
        resolve(updatedValue);
      }).catch((error) => {
        console.error('PropertyProxy: Failed to setProperty',
                      this.name, 'to', value,
                      'for device:', this.device.id);
        console.error(error);
        reject(error);
      });
    });
  }
}

module.exports = PropertyProxy;


/***/ }),

/***/ "./src/push-service.js":
/*!*****************************!*\
  !*** ./src/push-service.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Push Service.
 *
 * Manage the Push Service for notifications
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const WebPush = __webpack_require__(/*! web-push */ "web-push");
const Settings = __webpack_require__(/*! ./models/settings */ "./src/models/settings.js");
const Database = __webpack_require__(/*! ./db */ "./src/db.js");

const PushService = {

  enabled: false,
  /**
   * Initialize the Push Service, generating and storing a VAPID keypair
   * if necessary.
   */
  init: async (tunnelDomain) => {
    let vapid = await Settings.get('push.vapid');
    if (!vapid) {
      vapid = WebPush.generateVAPIDKeys();
      await Settings.set('push.vapid', vapid);
    }
    const {publicKey, privateKey} = vapid;

    WebPush.setVapidDetails(tunnelDomain, publicKey, privateKey);

    this.enabled = true;
  },

  getVAPIDKeys: async () => {
    try {
      const vapid = await Settings.get('push.vapid');
      return vapid;
    } catch (err) {
      // do nothing
      console.error('vapid still not generated');
    }
  },

  createPushSubscription: async (subscription) => {
    return await Database.createPushSubscription(subscription);
  },

  broadcastNotification: async (message) => {
    if (!this.enabled) {
      return;
    }
    const subscriptions = await Database.getPushSubscriptions();
    for (const subscription of subscriptions) {
      WebPush.sendNotification(subscription, message).catch((err) => {
        console.warn('Push API error', err);
        Database.deletePushSubscription(subscription.id);
      });
    }
  },
};

module.exports = PushService;


/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Router.
 *
 * Configure web app routes.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const compression = __webpack_require__(/*! compression */ "compression");
const express = __webpack_require__(/*! express */ "express");
const nocache = __webpack_require__(/*! nocache */ "nocache")();
const Constants = __webpack_require__(/*! ./constants */ "./src/constants.js");
const jwtMiddleware = __webpack_require__(/*! ./jwt-middleware */ "./src/jwt-middleware.js");
const auth = jwtMiddleware.middleware();
const UserProfile = __webpack_require__(/*! ./user-profile */ "./src/user-profile.js");

/**
 * Router.
 */
const Router = {
  /**
   * Configure web app routes.
   */
  configure: function(app, options) {
    const API_PREFIX = '/api'; // A pseudo path to use for API requests
    const APP_PREFIX = '/app'; // A pseudo path to use for front end requests

    // Compress all responses larger than 1kb
    app.use(compression());

    // Enable HSTS
    app.use((request, response, next) => {
      if (request.protocol === 'https') {
        response.set('Strict-Transport-Security',
                     'max-age=31536000; includeSubDomains');
      }

      next();
    });

    // First look for a static file
    const staticHandler = express.static(Constants.BUILD_STATIC_PATH);
    app.use('/uploads', express.static(UserProfile.uploadsDir));
    app.use((request, response, next) => {
      if (request.path === '/' && request.accepts('html')) {
        // We need this to hit RootController.
        next();
      } else {
        staticHandler(request, response, next);
      }
    });

    // Content negotiation middleware
    app.use(function(request, response, next) {
      // Inform the browser that content negotiation is taking place
      response.setHeader('Vary', 'Accept');

      // Enable CORS for all requests
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      response.setHeader('Access-Control-Allow-Methods',
                         'GET,HEAD,PUT,PATCH,POST,DELETE');

      // If request won't accept HTML but will accept JSON,
      // or is a WebSocket request, or is multipart/form-data
      // treat it as an API request
      if (!request.accepts('html') && request.accepts('json') ||
          request.get('Upgrade') === 'websocket' ||
          request.is('multipart/form-data') ||
          request.path.startsWith(Constants.LOGS_PATH)) {
        request.url = API_PREFIX + request.url;
        next();
      // Otherwise treat it as an app request
      } else {
        request.url = APP_PREFIX + request.url;
        next();
      }
    });

    // Let OAuth handle its own rendering
    app.use(APP_PREFIX + Constants.OAUTH_PATH, nocache,
            __webpack_require__(/*! ./controllers/oauth_controller */ "./src/controllers/oauth_controller.ts").default);

    // Web app routes - send index.html and fall back to client side URL router
    app.use(`${APP_PREFIX}/*`, __webpack_require__(/*! ./controllers/root_controller */ "./src/controllers/root_controller.js"));

    // Unauthenticated API routes
    app.use(API_PREFIX + Constants.LOGIN_PATH, nocache,
            __webpack_require__(/*! ./controllers/login_controller */ "./src/controllers/login_controller.js"));
    app.use(API_PREFIX + Constants.SETTINGS_PATH, nocache,
            __webpack_require__(/*! ./controllers/settings_controller */ "./src/controllers/settings_controller.js"));
    app.use(API_PREFIX + Constants.USERS_PATH, nocache,
            __webpack_require__(/*! ./controllers/users_controller */ "./src/controllers/users_controller.js"));
    app.use(API_PREFIX + Constants.PING_PATH, nocache,
            __webpack_require__(/*! ./controllers/ping_controller */ "./src/controllers/ping_controller.js"));
    if (options.debug) {
      app.use(API_PREFIX + Constants.DEBUG_PATH, nocache,
              __webpack_require__(/*! ./controllers/debug_controller */ "./src/controllers/debug_controller.js"));
    }

    // Authenticated API routes
    app.use(API_PREFIX + Constants.THINGS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/things_controller */ "./src/controllers/things_controller.js"));
    app.use(API_PREFIX + Constants.NEW_THINGS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/new_things_controller */ "./src/controllers/new_things_controller.js"));
    app.use(API_PREFIX + Constants.ADAPTERS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/adapters_controller */ "./src/controllers/adapters_controller.js"));
    app.use(API_PREFIX + Constants.ACTIONS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/actions_controller */ "./src/controllers/actions_controller.js"));
    app.use(API_PREFIX + Constants.EVENTS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/events_controller */ "./src/controllers/events_controller.js"));
    app.use(API_PREFIX + Constants.LOG_OUT_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/log_out_controller */ "./src/controllers/log_out_controller.js"));
    app.use(API_PREFIX + Constants.UPLOADS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/uploads_controller */ "./src/controllers/uploads_controller.js"));
    app.use(API_PREFIX + Constants.COMMANDS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/commands_controller */ "./src/controllers/commands_controller.js"));
    app.use(API_PREFIX + Constants.UPDATES_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/updates_controller */ "./src/controllers/updates_controller.js"));
    app.use(API_PREFIX + Constants.ADDONS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/addons_controller */ "./src/controllers/addons_controller.js"));
    app.use(API_PREFIX + Constants.RULES_PATH, nocache, auth,
            __webpack_require__(/*! ./rules-engine/index.js */ "./src/rules-engine/index.js"));
    app.use(API_PREFIX + Constants.LOGS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/logs_controller */ "./src/controllers/logs_controller.js"));
    app.use(API_PREFIX + Constants.PUSH_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/push_controller */ "./src/controllers/push_controller.js"));

    app.use(API_PREFIX + Constants.OAUTH_PATH, nocache,
            __webpack_require__(/*! ./controllers/oauth_controller */ "./src/controllers/oauth_controller.ts").default);
    app.use(API_PREFIX + Constants.OAUTHCLIENTS_PATH, nocache, auth,
            __webpack_require__(/*! ./controllers/oauthclients_controller */ "./src/controllers/oauthclients_controller.ts").default);
  },
};

module.exports = Router;


/***/ }),

/***/ "./src/rules-engine/APIError.js":
/*!**************************************!*\
  !*** ./src/rules-engine/APIError.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

/**
 * A simple helper class for sending JSON-formatted errors to clients
 */
class APIError extends Error {
  constructor(message, originalError) {
    super(message);
    if (originalError) {
      this.message += `: ${originalError.message}`;
    }
    console.error(`new API Error: ${this.message}`);
  }

  toString() {
    return JSON.stringify({error: true, message: this.message});
  }
}

module.exports = APIError;


/***/ }),

/***/ "./src/rules-engine/Database.js":
/*!**************************************!*\
  !*** ./src/rules-engine/Database.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const db = __webpack_require__(/*! ../db.js */ "./src/db.js");

function Database() {
  if (!db.db) {
    db.open();
  }
  this.open();
}

/**
 * Open the database
 */
Database.prototype.open = function() {
  const rulesTableSQL = `CREATE TABLE IF NOT EXISTS rules (
    id INTEGER PRIMARY KEY,
    description TEXT
  );`;
  return db.run(rulesTableSQL, []);
};

/**
 * Get all rules
 * @return {Promise<Map<number, RuleDescription>>} resolves to a map of rule id
 * to rule
 */
Database.prototype.getRules = function() {
  return new Promise((resolve, reject) => {
    db.db.all(
      'SELECT id, description FROM rules',
      [],
      function(err, rows) {
        if (err) {
          reject(err);
          return;
        }
        const rules = {};
        for (const row of rows) {
          const desc = JSON.parse(row.description);
          rules[row.id] = desc;
        }
        resolve(rules);
      }
    );
  });
};

/**
 * Create a new rule
 * @param {RuleDescription} desc
 * @return {Promise<number>} resolves to rule id
 */
Database.prototype.createRule = function(desc) {
  return db.run(
    'INSERT INTO rules (description) VALUES (?)',
    [JSON.stringify(desc)]
  ).then((res) => {
    return parseInt(res.lastID);
  });
};

/**
 * Update an existing rule
 * @param {number} id
 * @param {RuleDescription} desc
 * @return {Promise}
 */
Database.prototype.updateRule = function(id, desc) {
  return db.run(
    'UPDATE rules SET description = ? WHERE id = ?',
    [JSON.stringify(desc), id]
  );
};

/**
 * Delete an existing rule
 * @param {number} id
 * @return {Promise}
 */
Database.prototype.deleteRule = function(id) {
  return db.run('DELETE FROM rules WHERE id = ?', [id]);
};

module.exports = new Database();


/***/ }),

/***/ "./src/rules-engine/Engine.js":
/*!************************************!*\
  !*** ./src/rules-engine/Engine.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const Database = __webpack_require__(/*! ./Database */ "./src/rules-engine/Database.js");
const Rule = __webpack_require__(/*! ./Rule */ "./src/rules-engine/Rule.js");

/**
 * An engine for running and managing list of rules
 */
class Engine {
  /**
   * Get a list of all current rules
   * @return {Promise<Array<Rule>>} rules
   */
  getRules() {
    let rulesPromise = Promise.resolve(this.rules);

    if (!this.rules) {
      rulesPromise = Database.getRules().then(async (ruleDescs) => {
        this.rules = {};
        for (const ruleId in ruleDescs) {
          ruleDescs[ruleId].id = parseInt(ruleId);
          this.rules[ruleId] = Rule.fromDescription(ruleDescs[ruleId]);
          await this.rules[ruleId].start();
        }
        return this.rules;
      });
    }

    return rulesPromise.then((rules) => {
      return Object.keys(rules).map((ruleId) => {
        return rules[ruleId];
      });
    });
  }

  /**
   * Get a rule by id
   * @param {number} id
   * @return {Promise<Rule>}
   */
  getRule(id) {
    const rule = this.rules[id];
    if (!rule) {
      return Promise.reject(new Error(`Rule ${id} does not exist`));
    }
    return Promise.resolve(rule);
  }

  /**
   * Add a new rule to the engine's list
   * @param {Rule} rule
   * @return {Promise<number>} rule id
   */
  async addRule(rule) {
    const id = await Database.createRule(rule.toDescription());
    rule.id = id;
    this.rules[id] = rule;
    await rule.start();
    return id;
  }

  /**
   * Update an existing rule
   * @param {number} rule id
   * @param {Rule} rule
   * @return {Promise}
   */
  async updateRule(ruleId, rule) {
    if (!this.rules[ruleId]) {
      return Promise.reject(new Error(`Rule ${ruleId} does not exist`));
    }
    rule.id = ruleId;
    await Database.updateRule(ruleId, rule.toDescription());

    this.rules[ruleId].stop();
    this.rules[ruleId] = rule;
    await rule.start();
  }

  /**
   * Delete an existing rule
   * @param {number} rule id
   * @return {Promise}
   */
  deleteRule(ruleId) {
    if (!this.rules[ruleId]) {
      return Promise.reject(
        new Error(`Rule ${ruleId} already does not exist`));
    }
    return Database.deleteRule(ruleId).then(() => {
      this.rules[ruleId].stop();
      delete this.rules[ruleId];
    });
  }
}

module.exports = Engine;


/***/ }),

/***/ "./src/rules-engine/Events.js":
/*!************************************!*\
  !*** ./src/rules-engine/Events.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * List of event types
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */
module.exports = {
  // Sent by a trigger to a rule to notify effects
  STATE_CHANGED: 'state-changed',
  // Sent by a property to a trigger to potentially change state
  VALUE_CHANGED: 'value-changed',
};


/***/ }),

/***/ "./src/rules-engine/Property.js":
/*!**************************************!*\
  !*** ./src/rules-engine/Property.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const assert = __webpack_require__(/*! assert */ "assert");
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const https = __webpack_require__(/*! https */ "https");
const Settings = __webpack_require__(/*! ../models/settings */ "./src/models/settings.js");
const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
const Events = __webpack_require__(/*! ./Events */ "./src/rules-engine/Events.js");
const ThingConnection = __webpack_require__(/*! ./ThingConnection */ "./src/rules-engine/ThingConnection.js");

/**
 * Utility to support operations on Thing's properties
 */
class Property extends EventEmitter {
  /**
   * Create a Property from a descriptor returned by the WoT API
   * @param {PropertyDescription} desc
   */
  constructor(desc) {
    super();

    this.originator = new Error().stack;

    assert(desc.type);
    assert(desc.href);

    this.type = desc.type;
    this.href = desc.href;
    if (desc.unit) {
      this.unit = desc.unit;
    }
    if (desc.description) {
      this.description = desc.description;
    }
    const parts = this.href.split('/');
    this.name = parts[parts.length - 1];

    this.onMessage = this.onMessage.bind(this);
    const thingHref = this.href.split('/properties')[0];
    this.thingConn = new ThingConnection(thingHref, this.onMessage);
  }

  /**
   * @return {PropertyDescription}
   */
  toDescription() {
    const desc = {
      type: this.type,
      href: this.href,
      name: this.name,
    };
    if (this.unit) {
      desc.unit = this.unit;
    }
    if (this.description) {
      desc.description = this.description;
    }
    return desc;
  }

  /**
   * @return {String} full property href
   */
  async getHref() {
    const href = await Settings.get('RulesEngine.gateway') + this.href;
    return href;
  }

  /**
   * @return {Promise<Object>} headers for JWT bearer auth
   */
  async headerAuth() {
    const jwt = await Settings.get('RulesEngine.jwt');
    if (jwt) {
      return {
        Authorization: `Bearer ${jwt}`,
      };
    } else {
      return {};
    }
  }

  /**
   * @return {Promise} resolves to property's value
   */
  async get() {
    const href = await this.getHref();
    let agent = null;
    if (href.startsWith('https')) {
      agent = new https.Agent({rejectUnauthorized: false});
    }

    const res = await fetch(href, {
      headers: Object.assign({
        Accept: 'application/json',
      }, await this.headerAuth()),
      agent,
    });
    const data = await res.json();

    return data[this.name];
  }

  /**
   * @param {any} value
   * @return {Promise} resolves if property is set to value
   */
  async set(value) {
    const href = await this.getHref();
    let agent = null;
    if (href.startsWith('https')) {
      agent = new https.Agent({rejectUnauthorized: false});
    }

    const data = {};
    data[this.name] = value;
    return fetch(href, {
      method: 'PUT',
      headers: Object.assign({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, await this.headerAuth()),
      body: JSON.stringify(data),
      cors: true,
      agent,
    });
  }

  async start() {
    await this.thingConn.start();
  }

  onMessage(msg) {
    if (msg.messageType === 'propertyStatus') {
      if (msg.data.hasOwnProperty(this.name)) {
        this.emit(Events.VALUE_CHANGED, msg.data[this.name]);
      }
    }
  }

  stop() {
    this.thingConn.stop();
  }
}

module.exports = Property;


/***/ }),

/***/ "./src/rules-engine/Rule.js":
/*!**********************************!*\
  !*** ./src/rules-engine/Rule.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */
const effects = __webpack_require__(/*! ./effects */ "./src/rules-engine/effects/index.js");
const triggers = __webpack_require__(/*! ./triggers */ "./src/rules-engine/triggers/index.js");
const Events = __webpack_require__(/*! ./Events */ "./src/rules-engine/Events.js");

class Rule {
  /**
   * @param {boolean} enabled
   * @param {Trigger} trigger
   * @param {Effect} effect
   */
  constructor(enabled, trigger, effect) {
    this.enabled = enabled;
    this.trigger = trigger;
    this.effect = effect;

    this.onTriggerStateChanged = this.onTriggerStateChanged.bind(this);
  }

  /**
   * Begin executing the rule
   */
  async start() {
    this.trigger.on(Events.STATE_CHANGED, this.onTriggerStateChanged);
    await this.trigger.start();
  }

  /**
   * On a state changed event, pass the state forwawrd to the rule's effect
   * @param {State} state
   */
  onTriggerStateChanged(state) {
    if (!this.enabled) {
      return;
    }
    this.effect.setState(state);
  }

  /**
   * @return {RuleDescription}
   */
  toDescription() {
    const desc = {
      enabled: this.enabled,
      trigger: this.trigger.toDescription(),
      effect: this.effect.toDescription(),
    };
    if (this.hasOwnProperty('id')) {
      desc.id = this.id;
    }
    if (this.hasOwnProperty('name')) {
      desc.name = this.name;
    }
    return desc;
  }

  /**
   * Stop executing the rule
   */
  stop() {
    this.trigger.removeListener(Events.STATE_CHANGED,
                                this.onTriggerStateChanged);
    this.trigger.stop();
  }
}

/**
 * Create a rule from a serialized description
 * @param {RuleDescription} desc
 * @return {Rule}
 */
Rule.fromDescription = function(desc) {
  const trigger = triggers.fromDescription(desc.trigger);
  const effect = effects.fromDescription(desc.effect);
  const rule = new Rule(desc.enabled, trigger, effect);
  if (desc.hasOwnProperty('id')) {
    rule.id = desc.id;
  }
  if (desc.hasOwnProperty('name')) {
    rule.name = desc.name;
  }
  return rule;
};

module.exports = Rule;


/***/ }),

/***/ "./src/rules-engine/ThingConnection.js":
/*!*********************************************!*\
  !*** ./src/rules-engine/ThingConnection.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const e2p = __webpack_require__(/*! event-to-promise */ "event-to-promise");
const Settings = __webpack_require__(/*! ../models/settings */ "./src/models/settings.js");
const WebSocket = __webpack_require__(/*! ws */ "ws");

/**
 * Manages WebSocket connection to a Thing
 */
class ThingConnection {
  /**
   * @param {String|URL} href - Link to Thing endpoint
   * @param {Function<Object>} messageHandler - called with messages from WS
   */
  constructor(href, messageHandler) {
    this.href = href;
    this.messageHandler = messageHandler;
    this.onMessage = this.onMessage.bind(this);
    this.ws = null;
  }

  /**
   * Connect to the Thing's websocket
   * @return {Promise}
   */
  async start() {
    const jwt = await Settings.get('RulesEngine.jwt');
    const gateway = await Settings.get('RulesEngine.gateway');
    const wsHref = `${gateway.replace(/^http/, 'ws') + this.href}?jwt=${jwt}`;

    this.ws = new WebSocket(wsHref, {rejectUnauthorized: false});
    this.ws.on('message', this.onMessage);
    await e2p(this.ws, 'open');

    // Allow the app to handle the websocket open
    await new Promise((res) => {
      setTimeout(res, 100);
    });
  }

  /**
   * Send a string over the websocket to the Thing
   * @param {String} msg
   * @return {Promise}
   */
  async send(msg) {
    await new Promise((resolve) => {
      this.ws.send(msg, function() {
        resolve();
      });
    });
  }

  /**
   * Disconnect the websocket
   */
  stop() {
    if (this.ws) {
      this.ws.removeListener('message', this.onMessage);
      if (this.ws.readyState === WebSocket.OPEN) {
        this.ws.close();
      }
    } else {
      console.warn(`${this.constructor.name}.stop was not started`);
    }
  }

  onMessage(text) {
    const msg = JSON.parse(text);
    this.messageHandler(msg);
  }
}

module.exports = ThingConnection;


/***/ }),

/***/ "./src/rules-engine/effects/ActionEffect.js":
/*!**************************************************!*\
  !*** ./src/rules-engine/effects/ActionEffect.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const assert = __webpack_require__(/*! assert */ "assert");
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const https = __webpack_require__(/*! https */ "https");
const Effect = __webpack_require__(/*! ./Effect */ "./src/rules-engine/effects/Effect.js");
const Settings = __webpack_require__(/*! ../../models/settings */ "./src/models/settings.js");

/**
 * An Effect which creates an action
 */
class ActionEffect extends Effect {
  /**
   * @param {EffectDescription} desc
   */
  constructor(desc) {
    super(desc);

    assert(desc.thing);
    assert(desc.action);

    this.thing = desc.thing;
    this.action = desc.action;
    this.parameters = desc.parameters || {};
  }

  /**
   * @return {EffectDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {
        thing: this.thing,
        action: this.action,
        parameters: this.parameters,
      }
    );
  }

  /**
   * @param {State} state
   */
  setState(state) {
    if (!state.on) {
      return;
    }

    this.createAction();
  }

  async createAction() {
    const descr = {
      [this.action]: {
        input: this.parameters,
      },
    };

    const href = `${await Settings.get('RulesEngine.gateway') + this.thing.href
    }/actions`;
    const jwt = await Settings.get('RulesEngine.jwt');
    let agent = null;
    if (href.startsWith('https')) {
      agent = new https.Agent({rejectUnauthorized: false});
    }

    const res = await fetch(href, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(descr),
      agent,
    });
    if (!res.ok) {
      console.warn('Unable to dispatch action', res);
    }
  }
}

module.exports = ActionEffect;



/***/ }),

/***/ "./src/rules-engine/effects/Effect.js":
/*!********************************************!*\
  !*** ./src/rules-engine/effects/Effect.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

/**
 * Effect - The outcome of a Rule once triggered
 */
class Effect {
  /**
   * Create an Effect based on a wire-format description with a property
   * @param {EffectDescription} desc
   */
  constructor(desc) {
    this.type = this.constructor.name;
    this.label = desc.label;
  }

  /**
   * @return {EffectDescription}
   */
  toDescription() {
    return {
      type: this.type,
      label: this.label,
    };
  }

  /**
   * Set the state of Effect based on a trigger
   * @param {State} _state
   */
  setState(_state) {
    throw new Error('Unimplemented');
  }
}

module.exports = Effect;


/***/ }),

/***/ "./src/rules-engine/effects/MultiEffect.js":
/*!*************************************************!*\
  !*** ./src/rules-engine/effects/MultiEffect.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const Effect = __webpack_require__(/*! ./Effect */ "./src/rules-engine/effects/Effect.js");

/**
 * MultiEffect - The outcome of a Rule involving multiple effects
 */
class MultiEffect extends Effect {
  /**
   * @param {MultiEffectDescription} desc
   */
  constructor(desc) {
    super(desc);
    const fromDescription = __webpack_require__(/*! ./index */ "./src/rules-engine/effects/index.js").fromDescription;

    this.effects = desc.effects.map(function(effect) {
      return fromDescription(effect);
    });
  }

  /**
   * @return {EffectDescription}
   */
  toDescription() {
    return Object.assign(super.toDescription(), {
      effects: this.effects.map((effect) => effect.toDescription()),
    });
  }

  /**
   * @param {State} state
   */
  setState(state) {
    for (const effect of this.effects) {
      effect.setState(state);
    }
  }
}

module.exports = MultiEffect;



/***/ }),

/***/ "./src/rules-engine/effects/NotificationEffect.js":
/*!********************************************************!*\
  !*** ./src/rules-engine/effects/NotificationEffect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const assert = __webpack_require__(/*! assert */ "assert");
const Effect = __webpack_require__(/*! ./Effect */ "./src/rules-engine/effects/Effect.js");
const PushService = __webpack_require__(/*! ../../push-service */ "./src/push-service.js");

/**
 * An Effect which creates a notification
 */
class NotificationEffect extends Effect {
  /**
   * @param {EffectDescription} desc
   */
  constructor(desc) {
    super(desc);

    assert(desc.hasOwnProperty('message'));

    this.message = desc.message;
  }

  /**
   * @return {EffectDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {
        message: this.message,
      }
    );
  }

  /**
   * @param {State} state
   */
  setState(state) {
    if (!state.on) {
      return;
    }

    PushService.broadcastNotification(this.message);
  }
}

module.exports = NotificationEffect;



/***/ }),

/***/ "./src/rules-engine/effects/PropertyEffect.js":
/*!****************************************************!*\
  !*** ./src/rules-engine/effects/PropertyEffect.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const Property = __webpack_require__(/*! ../Property */ "./src/rules-engine/Property.js");
const Effect = __webpack_require__(/*! ./Effect */ "./src/rules-engine/effects/Effect.js");

/**
 * PropertyEffect - The outcome of a Rule involving a property
 */
class PropertyEffect extends Effect {
  /**
   * Create an Effect based on a wire-format description with a property
   * @param {PropertyEffectDescription} desc
   */
  constructor(desc) {
    super(desc);
    this.property = new Property(desc.property);
  }

  /**
   * @return {EffectDescription}
   */
  toDescription() {
    return Object.assign(super.toDescription(), {
      property: this.property.toDescription(),
    });
  }
}

module.exports = PropertyEffect;


/***/ }),

/***/ "./src/rules-engine/effects/PulseEffect.js":
/*!*************************************************!*\
  !*** ./src/rules-engine/effects/PulseEffect.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const assert = __webpack_require__(/*! assert */ "assert");
const PropertyEffect = __webpack_require__(/*! ./PropertyEffect */ "./src/rules-engine/effects/PropertyEffect.js");

/**
 * An Effect which temporarily sets the target property to
 * a value before restoring its original value
 */
class PulseEffect extends PropertyEffect {
  /**
   * @param {EffectDescription} desc
   */
  constructor(desc) {
    super(desc);
    this.value = desc.value;
    assert(typeof this.value === this.property.type,
           'setpoint and property must be same type');
    this.on = false;
    this.oldValue = null;
  }

  /**
   * @return {EffectDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {value: this.value}
    );
  }

  /**
   * @param {State} state
   */
  setState(state) {
    if (state.on) {
      // If we're already active, just perform the effect again
      if (this.on) {
        return this.property.set(this.value);
      }
      // Activate the effect and save our current state to revert to upon
      // deactivation
      this.property.get().then((value) => {
        if (value !== this.value) {
          this.oldValue = value;
        } else {
          this.oldValue = null;
        }
        this.on = true;
        return this.property.set(this.value);
      });
    } else if (this.on) {
      // Revert to our original value if we pulsed to a new value
      this.on = false;
      if (this.oldValue !== null) {
        return this.property.set(this.oldValue);
      }
    }
  }
}

module.exports = PulseEffect;


/***/ }),

/***/ "./src/rules-engine/effects/SetEffect.js":
/*!***********************************************!*\
  !*** ./src/rules-engine/effects/SetEffect.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const assert = __webpack_require__(/*! assert */ "assert");
const PropertyEffect = __webpack_require__(/*! ./PropertyEffect */ "./src/rules-engine/effects/PropertyEffect.js");

/**
 * An Effect which permanently sets the target property to
 * a value when triggered
 */
class SetEffect extends PropertyEffect {
  /**
   * @param {EffectDescription} desc
   */
  constructor(desc) {
    super(desc);
    this.value = desc.value;
    assert(typeof this.value === this.property.type,
           'setpoint and property must be same type');
    this.on = false;
  }

  /**
   * @return {EffectDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {value: this.value}
    );
  }

  /**
   * @return {State}
   */
  setState(state) {
    if (!this.on && state.on) {
      this.on = true;
      return this.property.set(this.value);
    }
    if (this.on && !state.on) {
      this.on = false;
      return Promise.resolve();
    }
  }
}

module.exports = SetEffect;


/***/ }),

/***/ "./src/rules-engine/effects/index.js":
/*!*******************************************!*\
  !*** ./src/rules-engine/effects/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const effects = {
  Effect: __webpack_require__(/*! ./Effect */ "./src/rules-engine/effects/Effect.js"),
  ActionEffect: __webpack_require__(/*! ./ActionEffect */ "./src/rules-engine/effects/ActionEffect.js"),
  MultiEffect: __webpack_require__(/*! ./MultiEffect */ "./src/rules-engine/effects/MultiEffect.js"),
  NotificationEffect: __webpack_require__(/*! ./NotificationEffect */ "./src/rules-engine/effects/NotificationEffect.js"),
  SetEffect: __webpack_require__(/*! ./SetEffect */ "./src/rules-engine/effects/SetEffect.js"),
  PulseEffect: __webpack_require__(/*! ./PulseEffect */ "./src/rules-engine/effects/PulseEffect.js"),
};

/**
 * Produce an effect from a serialized effect description. Throws if `desc` is
 * invalid
 * @param {EffectDescription} desc
 * @return {Effect}
 */
function fromDescription(desc) {
  const EffectClass = effects[desc.type];
  if (!EffectClass) {
    throw new Error(`Unsupported or invalid effect type:${desc.type}`);
  }
  return new EffectClass(desc);
}

module.exports = {
  effects: effects,
  fromDescription: fromDescription,
};


/***/ }),

/***/ "./src/rules-engine/index.js":
/*!***********************************!*\
  !*** ./src/rules-engine/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const PromiseRouter = __webpack_require__(/*! express-promise-router */ "express-promise-router");
const Settings = __webpack_require__(/*! ../models/settings */ "./src/models/settings.js");

const APIError = __webpack_require__(/*! ./APIError */ "./src/rules-engine/APIError.js");
const Database = __webpack_require__(/*! ./Database */ "./src/rules-engine/Database.js");
const Engine = __webpack_require__(/*! ./Engine */ "./src/rules-engine/Engine.js");
const JSONWebToken = __webpack_require__(/*! ../models/jsonwebtoken */ "./src/models/jsonwebtoken.js");
const Rule = __webpack_require__(/*! ./Rule */ "./src/rules-engine/Rule.js");

const index = PromiseRouter();
const engine = new Engine();

/**
 * Express middleware for extracting rules from the bodies of requests
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {Function} next
 */
function parseRuleFromBody(req, res, next) {
  if (!req.body.trigger) {
    res.status(400).send(new APIError('No trigger provided').toString());
    return;
  }
  if (!req.body.effect) {
    res.status(400).send(new APIError('No effect provided').toString());
    return;
  }

  let rule = null;
  try {
    rule = Rule.fromDescription(req.body);
  } catch (e) {
    res.status(400).send(new APIError('Invalid rule', e).toString());
    return;
  }
  req.rule = rule;
  next();
}

index.get('/', async function(req, res) {
  const rules = await engine.getRules();
  res.send(rules.map((rule) => {
    return rule.toDescription();
  }));
});


index.get('/:id', async function(req, res) {
  try {
    const id = parseInt(req.params.id);
    const rule = await engine.getRule(id);
    res.send(rule.toDescription());
  } catch (e) {
    res.status(404).send(
      new APIError('Engine failed to get rule', e).toString());
  }
});

index.post('/', parseRuleFromBody, async function(req, res) {
  const ruleId = await engine.addRule(req.rule);
  res.send({id: ruleId});
});

index.put('/:id', parseRuleFromBody, async function(req, res) {
  try {
    await engine.updateRule(parseInt(req.params.id), req.rule);
    res.send({});
  } catch (e) {
    res.status(404).send(
      new APIError('Engine failed to update rule', e).toString());
  }
});

index.delete('/:id', async function(req, res) {
  try {
    await engine.deleteRule(req.params.id);
    res.send({});
  } catch (e) {
    res.status(404).send(
      new APIError('Engine failed to delete rule', e).toString());
  }
});

index.configure = async function(gatewayHref) {
  await Settings.set('RulesEngine.gateway', gatewayHref);
  await Settings.set('RulesEngine.jwt', await JSONWebToken.issueToken(-1));

  await Database.open();
  await engine.getRules();
};

module.exports = index;


/***/ }),

/***/ "./src/rules-engine/triggers/BooleanTrigger.js":
/*!*****************************************************!*\
  !*** ./src/rules-engine/triggers/BooleanTrigger.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const assert = __webpack_require__(/*! assert */ "assert");
const Events = __webpack_require__(/*! ../Events */ "./src/rules-engine/Events.js");
const PropertyTrigger = __webpack_require__(/*! ./PropertyTrigger */ "./src/rules-engine/triggers/PropertyTrigger.js");

/**
 * A Trigger which activates when a boolean property is
 * equal to a given value, `onValue`
 */
class BooleanTrigger extends PropertyTrigger {
  /**
   * @param {TriggerDescription} desc
   */
  constructor(desc) {
    super(desc);
    assert(this.property.type === 'boolean');
    assert(typeof desc.onValue === 'boolean');
    this.onValue = desc.onValue;
  }

  /**
   * @return {TriggerDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {onValue: this.onValue}
    );
  }

  /**
   * @param {boolean} propValue
   * @return {State}
   */
  onValueChanged(propValue) {
    if (propValue === this.onValue) {
      this.emit(Events.STATE_CHANGED, {on: true, value: propValue});
    } else {
      this.emit(Events.STATE_CHANGED, {on: false, value: propValue});
    }
  }
}

module.exports = BooleanTrigger;


/***/ }),

/***/ "./src/rules-engine/triggers/EqualityTrigger.js":
/*!******************************************************!*\
  !*** ./src/rules-engine/triggers/EqualityTrigger.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const Events = __webpack_require__(/*! ../Events */ "./src/rules-engine/Events.js");
const PropertyTrigger = __webpack_require__(/*! ./PropertyTrigger */ "./src/rules-engine/triggers/PropertyTrigger.js");

/**
 * A trigger which activates when a property is equal to a given value
 */
class EqualityTrigger extends PropertyTrigger {
  /**
   * @param {TriggerDescription} desc
   */
  constructor(desc) {
    super(desc);

    this.value = desc.value;
  }

  /**
   * @return {TriggerDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {
        value: this.value,
      }
    );
  }

  /**
   * @param {number} propValue
   * @return {State}
   */
  onValueChanged(propValue) {
    const on = propValue === this.value;

    this.emit(Events.STATE_CHANGED, {on: on, value: propValue});
  }
}

module.exports = EqualityTrigger;


/***/ }),

/***/ "./src/rules-engine/triggers/EventTrigger.js":
/*!***************************************************!*\
  !*** ./src/rules-engine/triggers/EventTrigger.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const Constants = __webpack_require__(/*! ../../constants.js */ "./src/constants.js");
const Events = __webpack_require__(/*! ../Events */ "./src/rules-engine/Events.js");
const ThingConnection = __webpack_require__(/*! ../ThingConnection */ "./src/rules-engine/ThingConnection.js");
const Trigger = __webpack_require__(/*! ./Trigger */ "./src/rules-engine/triggers/Trigger.js");

/**
 * A trigger activated when an event occurs
 */
class EventTrigger extends Trigger {
  constructor(desc) {
    super(desc);
    this.thing = desc.thing;
    this.event = desc.event;
    this.timeout = null;
    this.subscribed = false;
    this.onMessage = this.onMessage.bind(this);
    this.thingConn = new ThingConnection(desc.thing.href, this.onMessage);
  }

  /**
   * @return {TriggerDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {
        thing: this.thing,
        event: this.event,
      }
    );
  }

  async start() {
    await this.thingConn.start();
    await this.subscribe();
  }

  async subscribe() {
    await this.thingConn.send(JSON.stringify({
      messageType: Constants.ADD_EVENT_SUBSCRIPTION,
      data: {
        [this.event]: {},
      },
    }));
  }

  onMessage(msg) {
    if (msg.messageType === Constants.CONNECTED && !this.subscribed) {
      if (msg.data) {
        this.subscribe();
      }
    }

    if (msg.messageType !== Constants.EVENT) {
      return;
    }
    if (!msg.data.hasOwnProperty(this.event)) {
      return;
    }

    this.subscribed = true;

    this.emit(Events.STATE_CHANGED, {on: true, value: Date.now()});
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.emit(Events.STATE_CHANGED, {on: false, value: Date.now()});
      this.timeout = null;
    }, 500);
  }

  stop() {
    clearTimeout(this.timeout);
    this.thingConn.stop();
  }
}

module.exports = EventTrigger;



/***/ }),

/***/ "./src/rules-engine/triggers/LevelTrigger.js":
/*!***************************************************!*\
  !*** ./src/rules-engine/triggers/LevelTrigger.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const assert = __webpack_require__(/*! assert */ "assert");
const Events = __webpack_require__(/*! ../Events */ "./src/rules-engine/Events.js");
const PropertyTrigger = __webpack_require__(/*! ./PropertyTrigger */ "./src/rules-engine/triggers/PropertyTrigger.js");

const LevelTriggerTypes = {
  LESS: 'LESS',
  EQUAL: 'EQUAL',
  GREATER: 'GREATER',
};

/**
 * A trigger which activates when a numerical property is less or greater than
 * a given level
 */
class LevelTrigger extends PropertyTrigger {
  /**
   * @param {TriggerDescription} desc
   */
  constructor(desc) {
    super(desc);
    assert(this.property.type === 'number' || this.property.type === 'integer');
    assert(typeof desc.value === 'number');
    assert(LevelTriggerTypes[desc.levelType]);
    if (desc.levelType === 'EQUAL') {
      assert(this.property.type === 'integer');
    }

    this.value = desc.value;
    this.levelType = desc.levelType;
  }

  /**
   * @return {TriggerDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {
        value: this.value,
        levelType: this.levelType,
      }
    );
  }

  /**
   * @param {number} propValue
   * @return {State}
   */
  onValueChanged(propValue) {
    let on = false;

    switch (this.levelType) {
      case LevelTriggerTypes.LESS:
        if (propValue < this.value) {
          on = true;
        }
        break;
      case LevelTriggerTypes.EQUAL:
        if (propValue === this.value) {
          on = true;
        }
        break;
      case LevelTriggerTypes.GREATER:
        if (propValue > this.value) {
          on = true;
        }
        break;
    }

    this.emit(Events.STATE_CHANGED, {on: on, value: propValue});
  }
}

LevelTrigger.types = LevelTriggerTypes;

module.exports = LevelTrigger;


/***/ }),

/***/ "./src/rules-engine/triggers/MultiTrigger.js":
/*!***************************************************!*\
  !*** ./src/rules-engine/triggers/MultiTrigger.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const assert = __webpack_require__(/*! assert */ "assert");
const Events = __webpack_require__(/*! ../Events */ "./src/rules-engine/Events.js");
const Trigger = __webpack_require__(/*! ./Trigger */ "./src/rules-engine/triggers/Trigger.js");

const ops = {
  AND: 'AND',
  OR: 'OR',
};

/**
 * A Trigger which activates only when a set of triggers are activated
 */
class MultiTrigger extends Trigger {
  /**
   * @param {TriggerDescription} desc
   */
  constructor(desc) {
    super(desc);
    assert(desc.op in ops);
    this.op = desc.op;
    const fromDescription = __webpack_require__(/*! ./index */ "./src/rules-engine/triggers/index.js").fromDescription;

    this.triggers = desc.triggers.map((trigger) => {
      return fromDescription(trigger);
    });

    this.states = new Array(this.triggers.length);
    this.state = false;
  }

  /**
   * @return {TriggerDescription}
   */
  toDescription() {
    return Object.assign(super.toDescription(), {
      op: this.op,
      triggers: this.triggers.map((trigger) => trigger.toDescription()),
    });
  }

  async start() {
    const starts = this.triggers.map((trigger, triggerIndex) => {
      trigger.on(Events.STATE_CHANGED,
                 this.onStateChanged.bind(this, triggerIndex));
      return trigger.start();
    });
    await Promise.all(starts);
  }

  stop() {
    this.triggers.forEach((trigger) => {
      trigger.removeAllListeners(Events.STATE_CHANGED);
      trigger.stop();
    });
  }

  onStateChanged(triggerIndex, state) {
    this.states[triggerIndex] = state.on;

    let value = this.states[0];
    for (let i = 1; i < this.states.length; i++) {
      if (this.op === ops.AND) {
        value = value && this.states[i];
      } else if (this.op === ops.OR) {
        value = value || this.states[i];
      }
    }
    if (value !== this.state) {
      this.state = value;
      this.emit(Events.STATE_CHANGED, {on: this.state});
    }
  }
}

module.exports = MultiTrigger;


/***/ }),

/***/ "./src/rules-engine/triggers/PropertyTrigger.js":
/*!******************************************************!*\
  !*** ./src/rules-engine/triggers/PropertyTrigger.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const Events = __webpack_require__(/*! ../Events */ "./src/rules-engine/Events.js");
const Trigger = __webpack_require__(/*! ./Trigger */ "./src/rules-engine/triggers/Trigger.js");
const Property = __webpack_require__(/*! ../Property */ "./src/rules-engine/Property.js");

/**
 * An abstract class for triggers whose input is a single property
 */
class PropertyTrigger extends Trigger {
  constructor(desc) {
    super(desc);
    this.property = new Property(desc.property);
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  /**
   * @return {TriggerDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {property: this.property.toDescription()}
    );
  }

  async start() {
    this.property.on(Events.VALUE_CHANGED, this.onValueChanged);
    await this.property.start();
  }

  onValueChanged(_value) {
  }

  stop() {
    this.property.removeListener(Events.VALUE_CHANGED, this.onValueChanged);
    this.property.stop();
  }
}

module.exports = PropertyTrigger;


/***/ }),

/***/ "./src/rules-engine/triggers/TimeTrigger.js":
/*!**************************************************!*\
  !*** ./src/rules-engine/triggers/TimeTrigger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const Events = __webpack_require__(/*! ../Events */ "./src/rules-engine/Events.js");
const Trigger = __webpack_require__(/*! ./Trigger */ "./src/rules-engine/triggers/Trigger.js");

/**
 * An abstract class for triggers whose input is a single property
 */
class TimeTrigger extends Trigger {
  constructor(desc) {
    super(desc);
    this.time = desc.time;
    this.sendOn = this.sendOn.bind(this);
    this.sendOff = this.sendOff.bind(this);
  }

  /**
   * @return {TriggerDescription}
   */
  toDescription() {
    return Object.assign(
      super.toDescription(),
      {time: this.time}
    );
  }

  async start() {
    this.scheduleNext();
  }

  scheduleNext() {
    const parts = this.time.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    // Time is specified in UTC
    const nextTime = new Date();
    nextTime.setUTCHours(hours, minutes, 0, 0);

    if (nextTime.getTime() < Date.now()) {
      // NB: this will wrap properly into the next month/year
      nextTime.setDate(nextTime.getDate() + 1);
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.sendOn,
                              nextTime.getTime() - Date.now());
  }

  sendOn() {
    this.emit(Events.STATE_CHANGED, {on: true, value: Date.now()});
    this.timeout = setTimeout(this.sendOff, 60 * 1000);
  }

  sendOff() {
    this.emit(Events.STATE_CHANGED, {on: false, value: Date.now()});
    this.scheduleNext();
  }

  stop() {
    clearTimeout(this.timeout);
    this.timeout = null;
  }
}

module.exports = TimeTrigger;



/***/ }),

/***/ "./src/rules-engine/triggers/Trigger.js":
/*!**********************************************!*\
  !*** ./src/rules-engine/triggers/Trigger.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */
const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;

/**
 * The trigger component of a Rule which monitors some state and passes on
 * whether to be active to the Rule's effect
 */
class Trigger extends EventEmitter {
  /**
   * Create a Trigger based on a wire-format description with a property
   * @param {TriggerDescription} desc
   */
  constructor(desc) {
    super();
    this.type = this.constructor.name;
    this.label = desc.label;
  }

  /**
   * @return {TriggerDescription}
   */
  toDescription() {
    return {
      type: this.type,
      label: this.label,
    };
  }
}

module.exports = Trigger;


/***/ }),

/***/ "./src/rules-engine/triggers/index.js":
/*!********************************************!*\
  !*** ./src/rules-engine/triggers/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

const triggers = {
  BooleanTrigger: __webpack_require__(/*! ./BooleanTrigger */ "./src/rules-engine/triggers/BooleanTrigger.js"),
  EqualityTrigger: __webpack_require__(/*! ./EqualityTrigger */ "./src/rules-engine/triggers/EqualityTrigger.js"),
  EventTrigger: __webpack_require__(/*! ./EventTrigger */ "./src/rules-engine/triggers/EventTrigger.js"),
  LevelTrigger: __webpack_require__(/*! ./LevelTrigger */ "./src/rules-engine/triggers/LevelTrigger.js"),
  MultiTrigger: __webpack_require__(/*! ./MultiTrigger */ "./src/rules-engine/triggers/MultiTrigger.js"),
  PropertyTrigger: __webpack_require__(/*! ./PropertyTrigger */ "./src/rules-engine/triggers/PropertyTrigger.js"),
  TimeTrigger: __webpack_require__(/*! ./TimeTrigger */ "./src/rules-engine/triggers/TimeTrigger.js"),
  Trigger: __webpack_require__(/*! ./Trigger */ "./src/rules-engine/triggers/Trigger.js"),
};

/**
 * Produce an trigger from a serialized trigger description. Throws if `desc`
 * is invalid
 * @param {TriggerDescription} desc
 * @return {Trigger}
 */
function fromDescription(desc) {
  const TriggerClass = triggers[desc.type];
  if (!TriggerClass) {
    throw new Error(`Unsupported or invalid trigger type:${desc.type}`);
  }
  return new TriggerClass(desc);
}

module.exports = {
  triggers: triggers,
  fromDescription: fromDescription,
};


/***/ }),

/***/ "./src/ssltunnel.js":
/*!**************************!*\
  !*** ./src/ssltunnel.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * MozIoT Gateway Tunnelservice.
 *
 * Manages the tunnel service.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const fs = __webpack_require__(/*! fs */ "fs");
const config = __webpack_require__(/*! config */ "config");
const path = __webpack_require__(/*! path */ "path");
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const spawnSync = __webpack_require__(/*! child_process */ "child_process").spawn;
const Settings = __webpack_require__(/*! ./models/settings */ "./src/models/settings.js");
const UserProfile = __webpack_require__(/*! ./user-profile */ "./src/user-profile.js");
const PushService = __webpack_require__(/*! ./push-service */ "./src/push-service.js");

const DEBUG =  false || ("development" === 'test');

const TunnelService = {

  pagekiteProcess: null,
  tunneltoken: null,
  switchToHttps: null,

  /*
   * Router middleware to check if we have a ssl tunnel set.
   *
   * @param {Object} request Express request object.
   * @param {Object} response Express response object.
   * @param {Object} next Next middleware.
   */
  isTunnelSet: async function(request, response, next) {
    // If ssl tunnel is disabled, continue
    if (!config.get('ssltunnel.enabled')) {
      return next();
    } else {
      let notunnel = await Settings.get('notunnel');
      if (typeof notunnel !== 'boolean') {
        notunnel = false;
      }

      // then we check if we have certificates installed
      if ((fs.existsSync(path.join(UserProfile.sslDir,
                                   'certificate.pem')) &&
           fs.existsSync(path.join(UserProfile.sslDir,
                                   'privatekey.pem'))) ||
          notunnel) {
        // if certs are installed,
        // then we don't need to do anything and return
        return next();
      }

      // if there are no certs installed,
      // we display the cert setup page to the user
      response.render('tunnel_setup',
                      {domain: config.get('ssltunnel.domain')});
    }
  },

  // method that starts the client if the box has a registered tunnel
  start: function(response, urlredirect) {
    Settings.get('tunneltoken').then((result) => {
      if (typeof result === 'object') {
        let responseSent = false;
        this.tunneltoken = result;
        const endpoint = `${result.name}.${
          config.get('ssltunnel.domain')}`;
        this.pagekiteProcess =
            spawnSync(config.get('ssltunnel.pagekite_cmd'),
                      ['--clean', `--frontend=${endpoint}:${
                        config.get('ssltunnel.port')}`,
                       `--service_on=https:${endpoint
                       }:localhost:${
                         config.get('ports.https')}:${
                         this.tunneltoken.token}`],
                      {shell: true});

        // TODO: we should replace the hardcoded secret by the token
        // after change the server
        this.pagekiteProcess.stdout.on('data', (data) => {
          if (DEBUG) {
            console.log(`[pagekite] stdout: ${data}`);
          }
          if (response) {
            if (responseSent) {
              return;
            }

            if (data.indexOf('err=Error in connect') > -1) {
              responseSent = true;
              response.status(400).end();
            } else if (data.indexOf('connect=') > -1) {
              responseSent = true;
              response.send(urlredirect);
            }
          }
        });
        this.pagekiteProcess.stderr.on('data', (data) => {
          console.log(`[pagekite] stderr: ${data}`);
        });
        this.pagekiteProcess.on('close', (code) => {
          console.log(`[pagekite] process exited with code ${code}`);
        });

        // Ping the registration server every hour.
        const delay = 60 * 60 * 1000;
        setInterval(() => this.pingRegistrationServer(), delay);

        // Enable push service
        PushService.init(`https://${endpoint}`);
      } else {
        console.error('tunneltoken not set');
        if (response) {
          response.status(400).end();
        }
      }
    }).catch(function(e) {
      console.error('Failed to get tunneltoken setting');
      console.error(e);

      if (response) {
        response.status(400).send(e);
      }
    });
  },

  // method to stop pagekite process
  stop: function() {
    if (this.pagekiteProcess) {
      this.pagekiteProcess.kill('SIGHUP');
    }
  },

  // method to check if the box has certificates
  hasCertificates: function() {
    return fs.existsSync(path.join(UserProfile.sslDir, 'certificate.pem')) &&
      fs.existsSync(path.join(UserProfile.sslDir, 'privatekey.pem'));
  },

  // method to check if the box has a registered tunnel
  hasTunnelToken: async function() {
    const tunneltoken = await Settings.get('tunneltoken');
    return typeof tunneltoken === 'object';
  },

  // method to check if user skipped the ssl tunnel setup
  userSkipped: async function() {
    const notunnel = await Settings.get('notunnel');
    if (typeof notunnel === 'boolean' && notunnel) {
      return true;
    }

    return false;
  },

  // method to ping the registration server to track active domains
  pingRegistrationServer: function() {
    fetch(`${config.get('ssltunnel.registration_endpoint')
    }/ping?token=${this.tunneltoken.token}`)
      .catch((e) => {
        console.log('Failed to ping registration server:', e);
      });
  },
};

module.exports = TunnelService;


/***/ }),

/***/ "./src/user-profile.js":
/*!*****************************!*\
  !*** ./src/user-profile.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/**
 * Things Gateway user profile.
 *
 * The user profile lives outside of the source tree to allow for things like
 * data persistence with Docker, as well as the ability to easily switch
 * profiles, if desired.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



const config = __webpack_require__(/*! config */ "config");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const os = __webpack_require__(/*! os */ "os");
const mkdirp = __webpack_require__(/*! mkdirp */ "mkdirp");
const ncp = __webpack_require__(/*! ncp */ "ncp");
const rimraf = __webpack_require__(/*! rimraf */ "rimraf");
const db = __webpack_require__(/*! ./db */ "./src/db.js");
const Settings = __webpack_require__(/*! ./models/settings */ "./src/models/settings.js");
const Users = __webpack_require__(/*! ./models/users */ "./src/models/users.js");

const Profile = {
  init: function() {
    this.baseDir = config.get('profileDir');
    this.configDir = path.join(this.baseDir, 'config');
    this.sslDir = path.join(this.baseDir, 'ssl');
    this.uploadsDir = path.join(this.baseDir, 'uploads');
    this.logDir = path.join(this.baseDir, 'log');
    this.gatewayDir = path.join(__dirname, '..');

    if (false) {} else {
      this.addonsDir = path.join(this.baseDir, 'addons');
    }
  },

  /**
   * Manually copy, then unlink, to prevent issues with cross-device renames.
   */
  renameFile: function(src, dst) {
    fs.copyFileSync(src, dst);
    fs.unlinkSync(src);
  },

  /**
   * Manually copy, then remove, to prevent issues with cross-device renames.
   */
  renameDir: function(src, dst) {
    return new Promise((resolve, reject) => {
      ncp(src, dst, (e) => {
        if (e) {
          reject(e);
          return;
        }

        rimraf(src, (err) => {
          if (err) {
            reject(err);
            return;
          }

          resolve();
        });
      });
    });
  },

  /**
   * Migrate from old locations to new ones
   * @return {Promise} resolved when migration is complete
   */
  migrate: function() {
    const pending = [];
    // Create all required profile directories.
    if (!fs.existsSync(this.configDir)) {
      mkdirp.sync(this.configDir);
    }
    if (!fs.existsSync(this.sslDir)) {
      mkdirp.sync(this.sslDir);
    }
    if (!fs.existsSync(this.uploadsDir)) {
      mkdirp.sync(this.uploadsDir);
    }
    if (!fs.existsSync(this.logDir)) {
      mkdirp.sync(this.logDir);
    }
    if (!fs.existsSync(this.addonsDir)) {
      mkdirp.sync(this.addonsDir);
    }

    // Relocate the database, if necessary, before opening it.
    const dbPath = path.join(this.configDir, 'db.sqlite3');
    const oldDbPath = path.join(this.gatewayDir, 'db.sqlite3');
    if (fs.existsSync(oldDbPath)) {
      this.renameFile(oldDbPath, dbPath);
    }

    // Open the database.
    db.open();

    // Normalize user email addresses
    Users.getUsers().then((users) => {
      users.forEach((user) => {
        // Call editUser with the same user, as it will normalize the email
        // for us and save it.
        Users.editUser(user);
      });
    });

    // Move the tunneltoken into the database.
    const ttPath = path.join(this.gatewayDir, 'tunneltoken');
    if (fs.existsSync(ttPath)) {
      const token = JSON.parse(fs.readFileSync(ttPath));
      Settings.set('tunneltoken', token).then(() => {
        fs.unlinkSync(ttPath);
      }).catch((e) => {
        throw e;
      });
    }

    // Move the notunnel setting into the database.
    const ntPath = path.join(this.gatewayDir, 'notunnel');
    if (fs.existsSync(ntPath)) {
      Settings.set('notunnel', true).then(() => {
        fs.unlinkSync(ntPath);
      }).catch((e) => {
        throw e;
      });
    }

    // Move certificates, if necessary.
    const pkPath1 = path.join(this.gatewayDir, 'privatekey.pem');
    const pkPath2 = path.join(this.gatewayDir, 'ssl', 'privatekey.pem');
    if (fs.existsSync(pkPath1)) {
      this.renameFile(pkPath1, path.join(this.sslDir, 'privatekey.pem'));
    } else if (fs.existsSync(pkPath2)) {
      this.renameFile(pkPath2, path.join(this.sslDir, 'privatekey.pem'));
    }

    const certPath1 = path.join(this.gatewayDir, 'certificate.pem');
    const certPath2 = path.join(this.gatewayDir, 'ssl', 'certificate.pem');
    if (fs.existsSync(certPath1)) {
      this.renameFile(certPath1, path.join(this.sslDir, 'certificate.pem'));
    } else if (fs.existsSync(certPath2)) {
      this.renameFile(certPath2, path.join(this.sslDir, 'certificate.pem'));
    }

    const chainPath1 = path.join(this.gatewayDir, 'chain.pem');
    const chainPath2 = path.join(this.gatewayDir, 'ssl', 'chain.pem');
    if (fs.existsSync(chainPath1)) {
      this.renameFile(chainPath1, path.join(this.sslDir, 'chain.pem'));
    } else if (fs.existsSync(chainPath2)) {
      this.renameFile(chainPath2, path.join(this.sslDir, 'chain.pem'));
    }

    const csrPath1 = path.join(this.gatewayDir, 'csr.pem');
    const csrPath2 = path.join(this.gatewayDir, 'ssl', 'csr.pem');
    if (fs.existsSync(csrPath1)) {
      this.renameFile(csrPath1, path.join(this.sslDir, 'csr.pem'));
    } else if (fs.existsSync(csrPath2)) {
      this.renameFile(csrPath2, path.join(this.sslDir, 'csr.pem'));
    }

    const oldSslDir = path.join(this.gatewayDir, 'ssl');
    if (fs.existsSync(oldSslDir)) {
      rimraf(oldSslDir, (err) => {
        if (err) {
          throw err;
        }
      });
    }

    // Move old uploads, if necessary.
    const oldUploadsDir = path.join(this.gatewayDir, 'static', 'uploads');
    if (fs.existsSync(oldUploadsDir) &&
        fs.lstatSync(oldUploadsDir).isDirectory()) {
      const fnames = fs.readdirSync(oldUploadsDir);
      for (const fname of fnames) {
        this.renameFile(
          path.join(oldUploadsDir, fname), path.join(this.uploadsDir, fname));
      }

      fs.rmdirSync(oldUploadsDir);
    }

    // Create a user config if one doesn't exist.
    const userConfigPath = path.join(this.configDir, 'local.js');
    if (!fs.existsSync(userConfigPath)) {
      fs.writeFileSync(
        userConfigPath, '\'use strict\';\n\nmodule.exports = {\n};');
    }

    const localConfigPath = path.join(this.gatewayDir, 'config', 'local.js');
    if (!fs.existsSync(localConfigPath)) {
      fs.copyFileSync(userConfigPath, localConfigPath);
    }

    // Move anything that exists in ~/mozilla-iot, such as certbot configs.
    const oldProfileDir = path.join(os.homedir(), 'mozilla-iot');
    const oldEtcDir = path.join(oldProfileDir, 'etc');
    if (fs.existsSync(oldEtcDir) && fs.lstatSync(oldEtcDir).isDirectory()) {
      pending.push(this.renameDir(oldEtcDir, path.join(this.baseDir, 'etc')));
    }
    const oldVarDir = path.join(oldProfileDir, 'var');
    if (fs.existsSync(oldVarDir) && fs.lstatSync(oldVarDir).isDirectory()) {
      pending.push(this.renameDir(oldVarDir, path.join(this.baseDir, 'var')));
    }

    // Move add-ons.
    if (true) {
      const oldAddonsDir = path.join(this.gatewayDir, 'build', 'addons');
      if (fs.existsSync(oldAddonsDir) &&
          fs.lstatSync(oldAddonsDir).isDirectory()) {
        const fnames = fs.readdirSync(oldAddonsDir);
        for (const fname of fnames) {
          const oldFname = path.join(oldAddonsDir, fname);
          const newFname = path.join(this.addonsDir, fname);
          const lstat = fs.lstatSync(oldFname);

          if (fname !== 'plugin' && lstat.isDirectory()) {
            // Move existing add-ons.
            pending.push(this.renameDir(oldFname, newFname));
          }
        }
      }
    }
    return Promise.all(pending);
  },
};

module.exports = Profile;

/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Various utilities.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const crypto = __webpack_require__(/*! crypto */ "crypto");
const fs = __webpack_require__(/*! fs */ "fs");

module.exports = {
  /**
   * Compute a SHA-256 checksum of a file.
   *
   * @param {String} fname File path
   * @returns A checksum as a lower case hex string.
   */
  hashFile: function(fname) {
    const hash = crypto.createHash('sha256');

    let fd;
    try {
      fd = fs.openSync(fname, 'r');
      const buffer = new Uint8Array(4096);

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const bytes = fs.readSync(fd, buffer, 0, 4096);
        if (bytes <= 0) {
          break;
        }
        hash.update(buffer.slice(0, bytes));
      }
    } catch (e) {
      console.error(e);
      return null;
    } finally {
      if (fd) {
        fs.closeSync(fd);
      }
    }

    return hash.digest('hex').toLowerCase();
  },

  /**
   * Escape text such that it's safe to be placed in HTML.
   */
  escapeHtml: function(text) {
    if (typeof text !== 'string') {
      text = `${text}`;
    }

    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },
};


/***/ }),

/***/ "./src/wifi-setup/app.js":
/*!*******************************!*\
  !*** ./src/wifi-setup/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const config = __webpack_require__(/*! config */ "config");
const express = __webpack_require__(/*! express */ "express");
const Handlebars = __webpack_require__(/*! handlebars */ "handlebars");
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const fs = __webpack_require__(/*! fs */ "fs");
const platform = __webpack_require__(/*! ./platform.js */ "./src/wifi-setup/platform.js");
const wifi = __webpack_require__(/*! ./wifi.js */ "./src/wifi-setup/wifi.js");
const wait = __webpack_require__(/*! ./wait.js */ "./src/wifi-setup/wait.js");
const path = __webpack_require__(/*! path */ "path");

Handlebars.registerHelper('escapeQuotes', function(str) {
  return new Handlebars.SafeString(str.replace(/'/, '\\\''));
});

const templatesPath = path.join(__dirname, '../../src/wifi-setup/templates');

const WiFiSetupApp = {};
// The express server
const app = express();

// When we get POSTs, handle the body like this
app.use(bodyParser.urlencoded({extended: false}));

// Define the handler methods for the various URLs we handle
app.get('/*', handleCaptive);
app.get('/', handleRoot);
app.get('/wifi-setup', handleWiFiSetup);
app.post('/connecting', handleConnecting);
app.use(express.static(templatesPath));

WiFiSetupApp.onRequest = app;

function getTemplate(filename) {
  return Handlebars.compile(fs.readFileSync(filename, 'utf8'));
}

const wifiSetupTemplate = getTemplate(
  path.join(templatesPath, 'wifiSetup.handlebars'));
const connectingTemplate = getTemplate(
  path.join(templatesPath, 'connecting.handlebars'));
const hotspotTemplate = getTemplate(
  path.join(templatesPath, 'hotspot.handlebars'));

// When the client issues a GET request for the list of wifi networks
// scan and return them

// this function handles requests for captive portals
function handleCaptive(request, response, next) {
  console.log('handleCaptive', request.path);
  if (request.path === '/hotspot.html') {
    console.log('sending hotspot.html');
    response.send(hotspotTemplate({ap_ip: platform.ap_ip}));
  } else if (request.path === '/hotspot-detect.html' ||
    request.path === '/connecttest.txt') {
    console.log('ios or osx captive portal request', request.path);
    if (request.get('User-Agent').includes('CaptiveNetworkSupport') ||
        request.get('User-Agent').includes('Microsoft NCSI')) {
      console.log('windows captive portal request');
      response.redirect(302, `http://${platform.ap_ip}/hotspot.html`);
    } else {
      response.redirect(302, `http://${platform.ap_ip}/wifi-setup`);
    }
  } else if (request.path === '/generate_204' || request.path === '/fwlink/') {
    console.log('android captive portal request');
    response.redirect(302, `http://${platform.ap_ip}/wifi-setup`);
  } else if (request.path === '/redirect') {
    console.log('redirect - send setup for windows');
    response.redirect(302, `http://${platform.ap_ip}/wifi-setup`);
  } else {
    console.log('skipping.');
    next();
  }
}

// This function handles requests for the root URL '/'.
// We display a different page depending on what stage of setup we're at
function handleRoot(request, response) {
  wifi.getStatus().then((status) => {
    // If we don't have a wifi connection yet, display the wifi setup page
    if (status !== 'COMPLETED') {
      console.log('no wifi connection; redirecting to wifiSetup');
      response.redirect('/wifi-setup');
    } else {
      // Otherwise, look to see if we have an oauth token yet
      console.log('wifi setup complete; redirecting /status');
      response.redirect('/status');
    }
  })
    .catch((e) => {
      console.error(e);
    });
}

function handleWiFiSetup(request, response) {
  wifi.scan().then((results) => {
    // On Edison, scanning will fail since we're in AP mode at this point
    // So we'll use the preliminary scan instead
    if (results.length === 0) {
      results = wifi.preliminaryScanResults;
    }

    // XXX
    // To handle the case where the user entered a bad password and we are
    // not connected, we should show the networks we know about, and modify
    // the template to explain that if the user is seeing it, it means
    // that the network is down or password is bad. This allows the user
    // to re-enter a network.  Hopefully wpa_supplicant is smart enough
    // to do the right thing if there are two entries for the same ssid.
    // If not, we could modify wifi.defineNetwork() to overwrite rather than
    // just adding.
    let map1 = [];
    if (results) {
      map1 = results.filter((x) => x.length > 7);
      map1 = map1.map((word) => {
        let icon = 'wifi-secure.svg';
        let pwdRequired = true;
        if (word.substring(3, 5).trim() !== 'on') {
          icon = 'wifi.svg';
          pwdRequired = false;
        }
        return {
          icon,
          pwdRequired,
          ssid: word.substring(6),
        };
      });
    }

    response.send(wifiSetupTemplate({networks: map1}));
  });
}

function handleConnecting(request, response) {
  if (request.body.skip === '1') {
    const wifiskipPath = path.join(config.get('profileDir'), 'config',
                                   'wifiskip');
    fs.closeSync(fs.openSync(wifiskipPath, 'w'));
    console.log('skip wifi setup. stop the ap');
    response.send(connectingTemplate({skip: 'true'}));
    wifi.stopAP()
      .then(() => wifi.broadcastBeacon())
      .then(() => {
        WiFiSetupApp.onConnection();
      });
    return;
  }

  const ssid = request.body.ssid.trim();
  const password = request.body.password.trim();

  // XXX
  // We can come back here from the status page if the user defines
  // more than one network. We always need to call defineNetwork(), but
  // only need to call stopAP() if we're actually in ap mode.
  //
  // Also, if we're not in AP mode, then we should just redirect to
  // /status instead of sending the connecting template.
  //
  response.send(connectingTemplate({skip: 'false'}));

  // Wait before switching networks to make sure the response gets through.
  // And also wait to be sure that the access point is fully down before
  // defining the new network. If I only wait two seconds here, it seems
  // like the Edison takes a really long time to bring up the new network
  // but a 5 second wait seems to work better.
  wait(2000)
    .then(() => wifi.stopAP())
    .then(() => wait(5000))
    .then(() => wifi.getKnownNetworks())
    .then((networks) => {
      const index = networks.indexOf(ssid);
      if (index >= 0) {
        // Remove the existing network. We should be able to update this with
        // `wpa_cli -iwlan0 new_password <id> "<psk>"`, but that doesn't seem
        // to actually work.
        return wifi.removeNetwork(index);
      } else {
        return Promise.resolve();
      }
    })
    .then(() => wifi.defineNetwork(ssid, password))
    .then(() => wifi.waitForWiFi(20, 3000))
    .then(() => wifi.broadcastBeacon())
    .then(() => {
      WiFiSetupApp.onConnection();
    })
    .catch((error) => {
      console.log('General Error:', error);
    });
}

module.exports = WiFiSetupApp;

/* WEBPACK VAR INJECTION */}.call(this, "src/wifi-setup"))

/***/ }),

/***/ "./src/wifi-setup/index.js":
/*!*********************************!*\
  !*** ./src/wifi-setup/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.wifi = __webpack_require__(/*! ./wifi */ "./src/wifi-setup/wifi.js");
module.exports.wifiSetupApp = __webpack_require__(/*! ./app */ "./src/wifi-setup/app.js");


/***/ }),

/***/ "./src/wifi-setup/platform.js":
/*!************************************!*\
  !*** ./src/wifi-setup/platform.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
/*
 * # Raspberry Pi (we'll treat this as the default)
 * pi@gateway:~ $ uname -a
 * Linux gateway 4.4.13-v7+ #894 SMP Mon Jun 13 13:13:27 BST 2016 armv7l GNU/Linux
 *
 */

const uname =
    __webpack_require__(/*! child_process */ "child_process").execFileSync('uname', ['-a'], {encoding: 'utf8'});

/* eslint-enable */

const platform = __webpack_require__(/*! ./platforms/default.js */ "./src/wifi-setup/platforms/default.js");

module.exports = platform;


/***/ }),

/***/ "./src/wifi-setup/platforms/default.js":
/*!*********************************************!*\
  !*** ./src/wifi-setup/platforms/default.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(/*! path */ "path");

module.exports = {
  platform: 'default',

  // ip to be used by the AP
  ap_ip: '192.168.220.1',

  // A shell command that outputs the string "COMPLETED" if we are
  // connected to a wifi network and outputs something else otherwise
  getStatus:
    'wpa_cli -iwlan0 status | sed -n -e \'/^wpa_state=/{s/wpa_state=//;p;q}\'',

  // A shell command that outputs the SSID of the current wifi network
  // or outputs nothing if we are not connected to wifi
  getConnectedNetwork:
    'wpa_cli -iwlan0 status | sed -n -e \'/^ssid=/{s/ssid=//;p;q}\'',

  // A Python script that scans for wifi networks and outputs the ssids in
  // order from best signal to worst signal, omitting hidden networks
  scan: `sudo ${path.join(__dirname, './scan.py')}`,

  // A shell command that lists the names of known wifi networks, one
  // to a line.
  getKnownNetworks:
    // eslint-disable-next-line
    'wpa_cli -iwlan0 list_networks | sed -e "1d" | awk \'BEGIN {FS="\\t"}; {print $2}\'',

  // Start broadcasting an access point.
  // The name of the AP is defined in a config file elsewhere
  // Note that we use different commands on Yocto systems than
  // we do on Raspbian systems
  startAP:
    // eslint-disable-next-line
    'sudo ifconfig wlan0 $IP; sudo systemctl start hostapd; sudo systemctl start dnsmasq',

  // Stop broadcasting an AP and attempt to reconnect to local wifi
  stopAP:
    // eslint-disable-next-line
    'sudo systemctl stop hostapd; sudo systemctl stop dnsmasq; sudo ifconfig wlan0 0.0.0.0',

  // Remove an existing network. Expects the network ID in the environment
  // variable ID.
  removeNetwork:
    'wpa_cli -iwlan0 remove_network $ID && wpa_cli -iwlan0 save_config',

  // Define a new wifi network. Expects the network name and password
  // in the environment variables SSID and PSK.
  defineNetwork:
    // eslint-disable-next-line
    'ID=`wpa_cli -iwlan0 add_network` && wpa_cli -iwlan0 set_network $ID ssid \\"$SSID\\" && wpa_cli -iwlan0 set_network $ID psk \\"$PSK\\" && wpa_cli -iwlan0 enable_network $ID && wpa_cli -iwlan0 save_config',

  // Define a new open wifi network. Expects the network name
  // in the environment variable SSID.
  defineOpenNetwork:
    // eslint-disable-next-line
    'ID=`wpa_cli -iwlan0 add_network` && wpa_cli -iwlan0 set_network $ID ssid \\"$SSID\\" && wpa_cli -iwlan0 set_network $ID key_mgmt NONE && wpa_cli -iwlan0 enable_network $ID && wpa_cli -iwlan0 save_config',

  // Lists configured networks
  listNetworks: 'wpa_cli -iwlan0 list_networks',

  // Broadcast an Eddystone beacon
  broadcastBeacon:
    // eslint-disable-next-line
    'sudo hciconfig hci0 up && sudo hciconfig hci0 leadv 3 && sudo hcitool -i hci0 cmd',
};

/* WEBPACK VAR INJECTION */}.call(this, "src/wifi-setup/platforms"))

/***/ }),

/***/ "./src/wifi-setup/run.js":
/*!*******************************!*\
  !*** ./src/wifi-setup/run.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const child_process = __webpack_require__(/*! child_process */ "child_process");

module.exports = run;

// A Promise-based version of child_process.exec(). It rejects the
// promise if there is an error or if there is any output to stderr.
// Otherwise it resolves the promise to the text that was printed to
// stdout (with any leading and trailing whitespace removed).
function run(command, environment) {
  return new Promise(function(resolve, reject) {
    console.log('Running command:', command);
    const options = {};
    if (environment) {
      options.env = environment;
    }
    child_process.exec(command, options, function(error, stdout, stderr) {
      if (error) {
        console.log('Error running command:', error);
        reject(error);
      } else if (stderr && stderr.length > 0) {
        console.log('Command wrote to stderr, assuming failure:', stderr);
        reject(new Error(`${command} output to stderr: ${stderr}`));
      } else {
        resolve(stdout.trim());
      }
    });
  });
}


/***/ }),

/***/ "./src/wifi-setup/wait.js":
/*!********************************!*\
  !*** ./src/wifi-setup/wait.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function wait(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, milliseconds);
  });
};


/***/ }),

/***/ "./src/wifi-setup/wifi.js":
/*!********************************!*\
  !*** ./src/wifi-setup/wifi.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(/*! config */ "config");
const fs = __webpack_require__(/*! fs */ "fs");
const os = __webpack_require__(/*! os */ "os");
const path = __webpack_require__(/*! path */ "path");
const run = __webpack_require__(/*! ./run.js */ "./src/wifi-setup/run.js");
const platform = __webpack_require__(/*! ./platform.js */ "./src/wifi-setup/platform.js");

exports.getStatus = getStatus;
exports.getConnectedNetwork = getConnectedNetwork;
exports.scan = scan;
exports.startAP = startAP;
exports.stopAP = stopAP;
exports.defineNetwork = defineNetwork;
exports.removeNetwork = removeNetwork;
exports.getKnownNetworks = getKnownNetworks;
exports.broadcastBeacon = broadcastBeacon;
exports.checkConnection = checkConnection;
exports.waitForWiFi = waitForWiFi;

// The Edison device can't scan for wifi networks while in AP mode, so
// we've got to scan before we enter AP mode and save the results. They're a
// global variable because this code needs to ship
exports.preliminaryScanResults = [];


/**
 * Determine whether we have a wifi connection with the `wpa_cli
 * status` command. This function returns a Promise that resolves to a
 * string.  On my Rasberry Pi, the string is "DISCONNECTED" or
 * "INACTIVE" when there is no connection and is "COMPLETED" when
 * there is a connection. There are other possible string values when
 * a connection is being established
 */
function getStatus() {
  return run(platform.getStatus);
}

/**
 * Determine the ssid of the wifi network we are connected to.
 * This function returns a Promise that resolves to a string.
 * The string will be empty if not connected.
 */
function getConnectedNetwork() {
  return run(platform.getConnectedNetwork);
}

/**
 * Scan for available wifi networks using `iwlist wlan0 scan`.
 * Returns a Promise that resolves to an array of strings. Each string
 * is the ssid of a wifi network. They are sorted by signal strength from
 * strongest to weakest. On a Raspberry Pi, a scan seems to require root
 * privileges.
 *
 * On a Raspberry Pi 3, this function works when the device is in AP mode.
 * The Intel Edison, however, cannot scan while in AP mode: iwlist fails
 * with an error. iwlist sometimes also fails with an error when the
 * hardware is busy, so this function will try multiple times if you
 * pass a number. If all attempts fail, the promise is resolved to
 * an empty array.
 */
function scan(numAttempts) {
  numAttempts = numAttempts || 1;
  return new Promise(function(resolve) {
    let attempts = 0;

    function tryScan() {
      attempts++;

      _scan()
        .then((out) => {
          resolve(out.length ? out.split('\n') : []);
        })
        .catch((err) => {
          console.error('Scan attempt', attempts, 'failed:',
                        err.message || err);

          if (attempts >= numAttempts) {
            console.error('Giving up. No scan results available.');
            resolve([]);
          } else {
            console.error('Will try again in 3 seconds.');
            setTimeout(tryScan, 3000);
          }
        });
    }

    tryScan();
  });

  function _scan() {
    return run(platform.scan);
  }
}

/**
 * Enable an access point that users can connect to to configure the device.
 *
 * This command runs different commands on Raspbery Pi Rasbian and Edison Yocto.
 *
 * It requires that hostapd and udhcpd are installed on the system but not
 * enabled, so that they do not automatically run when the device boots up.
 * It also requires that hostapd and udhcpd have appropriate config files
 * that define the ssid for the wifi network to be created, for example.
 * Also, the udhcpd config file should be set up to work with the IP address
 * of the device.
 *
 * XXX
 * It would probably be better if the IP address, SSID and password were
 * options to this function rather than being hardcoded in system config
 * files. (Each device ought to be able to add a random number to its
 * SSID, for example, so that when you've got multiple devices they don't
 * all try to create the same network).
 *
 * This function returns a Promise that resolves when the necessary
 * commands have been run.  This does not necessarily mean that the AP
 * will be functional, however. The setup process might take a few
 * seconds to complete before the user will be able to see and connect
 * to the network.
 */
function startAP(ip) {
  return run(platform.startAP, {IP: ip});
}

/**
 * Like startAP(), but take the access point down, using platform-dependent
 * commands.
 *
 * Returns a promise that resolves when the commands have been run. At
 * this point, the AP should be in the process of stopping but may not
 * yet be completely down.
 */
function stopAP() {
  return run(platform.stopAP);
}

/**
 * This function uses wpa_cli to add the specified network ssid and password
 * to the wpa_supplicant.conf file. This assumes that wpa_supplicant is
 * configured to run automatically at boot time and is configured to work
 * with wpa_cli.
 *
 * If the system is not connected to a wifi network, calling this
 * command with a valid ssid and password should cause it to connect.
 */
function defineNetwork(ssid, password) {
  return run(password ? platform.defineNetwork : platform.defineOpenNetwork, {
    SSID: ssid,
    PSK: password,
  });
}

/**
 * This function uses wpa_cli to remove the network with the given ID.
 */
function removeNetwork(id) {
  return run(platform.removeNetwork, {ID: id});
}

/**
 * Return a Promise that resolves to an array of known wifi network names
 */
function getKnownNetworks() {
  return run(platform.getKnownNetworks)
    .then((out) => out.length ? out.split('\n') : []);
}

/**
 * Broadcast a Bluetooth Eddystone beacon with the local IP address.
 */
function broadcastBeacon() {
  let cmd = platform.broadcastBeacon;

  let ip = null;
  const ifaces = os.networkInterfaces();

  // Check out wlan0 first.
  if (ifaces.hasOwnProperty('wlan0')) {
    for (const addr of ifaces.wlan0) {
      if (addr.family !== 'IPv4' || addr.internal) {
        continue;
      }

      ip = addr.address;
      break;
    }
  }

  // If we didn't get an IP address, check out eth0.
  if (ip === null && ifaces.hasOwnProperty('eth0')) {
    for (const addr of ifaces.eth0) {
      if (addr.family !== 'IPv4' || addr.internal) {
        continue;
      }

      ip = addr.address;
      break;
    }
  }

  // If we still don't have an IP, bail.
  if (ip === null) {
    // Don't reject, as this isn't really critical.
    return Promise.resolve();
  }

  // OGF + OCF
  cmd += ' 0x08 0x0008';

  // Length byte
  const length1 = 14 + ip.length;
  cmd += ` ${length1.toString(16)}`;

  // Flags
  cmd += ' 02 01 06';

  // UUIDs
  cmd += ' 03 03 aa fe';

  // Length byte
  const length2 = 6 + ip.length;
  cmd += ` ${length2.toString(16)}`;

  // Service data type value
  cmd += ' 16';

  // UUIDs
  cmd += ' aa fe';

  // Frame type
  cmd += ' 10';

  // TX power
  cmd += ' 00';

  // URL scheme
  cmd += ' 02';

  // URL
  cmd += ` ${ip.split('').map((x) => x.charCodeAt(0).toString(16)).join(' ')}`;

  // Trailer
  cmd += ' 00 00 00 00 00 00 00 00';

  return run(cmd);
}

function checkConnection() {
  const wifiskipPath = path.join(config.get('profileDir'), 'config',
                                 'wifiskip');
  if (fs.existsSync(wifiskipPath)) {
    return Promise.resolve(true);
  }
  return getStatus().then(() => {
    // Wait until we have a working wifi connection. Retry every 3 seconds up
    // to 10 times. If we are connected, then start the Gateway client.
    // If we never get a wifi connection, go into AP mode.
    // Before we start, though, let the user know that something is happening
    return waitForWiFi(20, 3000).then(() => {
      return true;
    }).catch((err) => {
      console.log('No wifi connection found. Starting the AP...', err);
      // Scan for wifi networks now because we can't always scan once
      // the AP is being broadcast, retrying up to 10 times
      scan(10).then((ssids) => {
        exports.preliminaryScanResults = ssids; // Remember ssids
        console.log('No wifi found; entering AP mode');
        startAP(platform.ap_ip);
      });

      return false;
    });
  }).catch((err) => {
    console.error('Error checking wifi adapter presence', err);
    return true;
  });
}

// Return a promise, then check every interval ms for a wifi connection.
// Resolve the promise when we're connected. Or, if we aren't connected
// after maxAttempts attempts, then reject the promise
function waitForWiFi(maxAttempts, interval) {
  return new Promise(function(resolve, reject) {
    let attempts = 0;

    // first of all we query wpa_supplicant if there's a wifi AP configured
    run(platform.listNetworks)
      .then((out) => {
        console.log('List Networks command executed:', out);
        if (out.includes('\n0\t')) {
          // there's at least one wifi AP configured. Let's wait to see if it
          // will connect
          check();
        } else {
          // No wifi AP configured. Let's skip the wait and start the setup
          // immediately
          reject();
        }
      })
      .catch((err) => console.error('Error listing Networks:', err));


    function check() {
      attempts++;
      console.log('check', attempts);
      getStatus()
        .then((status) => {
          console.log(status);
          if (status === 'COMPLETED') {
            console.log('WiFi connection found. resolving');
            checkForAddress();
            console.log('resolved');
          } else {
            console.log('No wifi connection on attempt', attempts);
            retryOrGiveUp();
          }
        })
        .catch((err) => {
          console.error('Error checking wifi on attempt', attempts, ':', err);
          retryOrGiveUp();
        });
    }

    function checkForAddress() {
      const ifaces = os.networkInterfaces();

      if (ifaces.hasOwnProperty('wlan0')) {
        for (const addr of ifaces.wlan0) {
          if (addr.family !== 'IPv4' || addr.internal) {
            continue;
          }

          resolve();
          return;
        }
      }

      retryOrGiveUp();
    }

    function retryOrGiveUp() {
      if (attempts >= maxAttempts) {
        console.error('Giving up. No wifi available.');
        reject();
      } else {
        setTimeout(check, interval);
      }
    }
  });
}


/***/ }),

/***/ "./static/things.json":
/*!****************************!*\
  !*** ./static/things.json ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = [];

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ajv");

/***/ }),

/***/ "archiver":
/*!***************************!*\
  !*** external "archiver" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("archiver");

/***/ }),

/***/ "asn1.js":
/*!**************************!*\
  !*** external "asn1.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("asn1.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "callsites":
/*!****************************!*\
  !*** external "callsites" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("callsites");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dnssd":
/*!************************!*\
  !*** external "dnssd" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dnssd");

/***/ }),

/***/ "event-to-promise":
/*!***********************************!*\
  !*** external "event-to-promise" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("event-to-promise");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-handlebars");

/***/ }),

/***/ "express-promise-router":
/*!*****************************************!*\
  !*** external "express-promise-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-promise-router");

/***/ }),

/***/ "express-ws":
/*!*****************************!*\
  !*** external "express-ws" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-ws");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gateway-addon":
/*!********************************!*\
  !*** external "gateway-addon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gateway-addon");

/***/ }),

/***/ "greenlock":
/*!****************************!*\
  !*** external "greenlock" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("greenlock");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("handlebars");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "ip-regex":
/*!***************************!*\
  !*** external "ip-regex" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ip-regex");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "le-challenge-dns":
/*!***********************************!*\
  !*** external "le-challenge-dns" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("le-challenge-dns");

/***/ }),

/***/ "le-store-certbot":
/*!***********************************!*\
  !*** external "le-store-certbot" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("le-store-certbot");

/***/ }),

/***/ "mkdirp":
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),

/***/ "nanomsg":
/*!**************************!*\
  !*** external "nanomsg" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanomsg");

/***/ }),

/***/ "ncp":
/*!**********************!*\
  !*** external "ncp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ncp");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "nocache":
/*!**************************!*\
  !*** external "nocache" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nocache");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "node-getopt":
/*!******************************!*\
  !*** external "node-getopt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-getopt");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),

/***/ "promisepipe":
/*!******************************!*\
  !*** external "promisepipe" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("promisepipe");

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),

/***/ "rimraf":
/*!*************************!*\
  !*** external "rimraf" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rimraf");

/***/ }),

/***/ "semver":
/*!*************************!*\
  !*** external "semver" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sqlite3");

/***/ }),

/***/ "string-format":
/*!********************************!*\
  !*** external "string-format" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string-format");

/***/ }),

/***/ "tar":
/*!**********************!*\
  !*** external "tar" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tar");

/***/ }),

/***/ "tmp":
/*!**********************!*\
  !*** external "tmp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tmp");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "web-push":
/*!***************************!*\
  !*** external "web-push" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web-push");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),

/***/ "winston-daily-rotate-file":
/*!********************************************!*\
  !*** external "winston-daily-rotate-file" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston-daily-rotate-file");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ })

/******/ });
//# sourceMappingURL=gateway.js.map