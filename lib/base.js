'use strict';

const assign = require('lodash.assign');
const assert = require('assert');

class Instance {
  constructor(db, rid, props) {
    assert(db && rid, 'Require oriento database object and/or Record Id');

    assign(this, props);
    this.db   = db;

    Object.defineProperty(this, 'rid', {
      value: rid,
      writable: false
    });
  }

  set raw(raw) {
    this._raw = raw;
  }

  get raw() {
    return this._raw;
  }

  save() {
    throw new Error('save method needs to be override');
  }

  delete() {
    throw new Error('delete method needs to be override');
  }
}

module.exports = Instance;
