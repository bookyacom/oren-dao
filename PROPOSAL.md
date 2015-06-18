# Oren DAO

## Installation

    npm install oren-dao

## Usage Example

    const Type = require('oren-types');
    const dao = require('oren-dao');

    let UserModel = dao.Vertex.make({
      email : Type.String().must()    // attaches a validator to the email property
    });

    let user = UserModel.make();
    user.email = 'soggie@gmail.com';

    // saving the data
    user.save();

    // finding a new data
    let users = yield UserModel.find({ email : 'soggie@gmail.com' }).go();

    // updating a bunch of data
    let results = yield UserModel
                          .update({ email : 'soggie+1@gmail.com' })
                          .where({ email : 'soggie@gmail.com' })
                          .go();

## API

### `.Vertex.make(<properties>)`

Creates a DAO `model` object. The purpose of the model is to create DAOs, and it also contains static methods to allow you to apply an operation to multiple rows at the same time.

**Params**

* `properties` - takes in a JSON object where each property is a `oren-types` type object

**Returns**

* A `model` object

**Error**

* Throws an exception on any error

```Example:

let UserModel = dao.Vertex.make({
  email : Type.String().must()
});
```

### `.Model`

A `model` object is created by `.Vertex.make()`. It can create empty DAOs or used to query the database, returning either a list of DAOs (for read operations) or a `result` object (for write operations).

**Params**

* irrelevant

**Returns**

* irrelevant

**Error**

* irrelevant

### `.Model.make()`

Creates an empty DAO.

### `.Model.find()`

Returns a list of DAOs.

### `.Model.read()`

Retrieves a single DAO.

### `.Model.update()`

Updates multiple records in the database

### `.Model.delete()`

Deletes multiple records in the database

### `.Dao.save()`

Saves the values in the DAO into the database

### `.Dao.update()`

Fetches data from the database and updates the values in the DAO.