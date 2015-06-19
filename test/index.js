'use strict';

const assert   = require('assert');
const Type     = require('oren-types');
const Dao      = require('..');
const OrientDB = require('orientjs');

describe('#test DAO construction', function () {
  let user = new Dao({}, {
    email : Type.String().default('soggie@gmail.com')
  }, Type, {});

  it('should contain the "email" property field with setter and getter', function () {
    assert.doesNotThrow(function () {
      // Test setter
      user.email = 'soggie+1@gmail.com';

      // Test getter
      let email = user.email;

      // Make sure the new email value is different
      assert(user._diff['email'] === 'soggie@gmail.com');
    });
  });
});

describe('#test DAO creation from model', function () {
  
});