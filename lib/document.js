'use strict';

const Base = require('./base');

class Document extends Base {
  delete() {
    return this
      .db
      .delete(this.rid)
      .scalar();
  }

  save() {
    let unwanted = ['db', 'rid', '_raw'];
    let props = {};

    for(let key in this) {
      if (this.hasOwnProperty(key) && !(~unwanted.indexOf(key))) {
        props[key] = this[key];
      }
    }

    return this.db
        .update(this.rid)
        .set(props)
        .scalar();
  }
}

module.exports = Document;
