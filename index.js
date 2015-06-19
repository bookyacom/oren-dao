'use strict';

// const vertex = require('./lib/vertex');
// const edge   = require('./lib/edge');
// const doc    = require('./lib/document');

// module.exports = {
//   Vertex   : vertex,
//   Edge     : edge,
//   Document : doc
// }

const assert = require('assert');
const debug  = require('debug');
const trace  = debug('oren:dao:trace');
const error  = debug('oren:dao:error');

class Dao {
  // DAO Constructor
  //
  // db       - an instance of orientjs passed in by a model
  // proplist - a collection of properties defined using oren-types
  // Type     - an instance of oren-types (injected by the model)
  // Model    - an instance of the Model that created this Dao
  constructor(db, proplist, Type, model) {
    let self    = this;
    this._db    = db;
    this._prop  = {};
    this._diff  = {};  
    this._model = model;

    // Create getters and setters for each property
    for (let key of Object.keys(proplist)) {
      let prop = proplist[key];

      // Ensure that each property is a oren type
      try {
        assert(typeof prop === 'object');
        assert(typeof prop.get === 'function');
        assert(typeof prop.set === 'function');
      } catch (err) {
        prop = Type.Any().default(prop);
      }

      this._prop[key] = prop;
      this._diff[key] = prop.get();

      // Create a setter for this object
      Object.defineProperty(this, key, {
        get : function () {
          self._prop[key].get();
        },

        set : function (v) {
          self._prop[key].set(v);
        }
      });
    }
  }

  clone() {
    // TODO
  }

  *save() {
    let db       = this._db;
    let update   = {};
    let proplist = this._prop;
    let model    = this._model;

    // Go through the property list and see which ones have changed by 
    // comparing it's current value (in this._prop) to its original value (in
    // this._diff).
    for (let key of Object.keys(proplist)) {
      let prop = proplist[key];

      if (prop !== this._diff[key]) {
        update[key] = prop;
      }
    }

    return yield model.update(prop).where(/* ...TODO... */);
  }

  *refetch() {
    let db     = this._db;
    let model  = this._model;
    let record = yield model.read(/* ...TODO... */);

    // TODO
  }
}

module.exports = Dao;