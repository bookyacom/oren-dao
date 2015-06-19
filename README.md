# Oren Dao

> Transform orientdb record using oriento to a DAO

`DAO` is short for Data Access Object. In Oren, this library is provided to make it easy to map logical data structures to records in the database spread out across different classes, linked together with edges and so forth. In short, it makes it easier to define your logical data structures regardless of how data is stored in your orientdb database.



## Example
``` JS
const OrientDB = require('orientjs');
const dao      = require('oren-dao');
const Vertex   = dao.Vertex;

const server = OrienDB();

const database = server.use({
  name     : 'test',
  username : 'test',
  password : 'test'
});

database
  .select()
  .from('Test')
  .transform(function(record) {
    return new Vertex(database, record['@rid'], record);
  })
  .all()
  .then(function(vertices) {
    let vertex = vertices.shift();

    // update property
    vertex.property = 'red';

    // exec it
    return vertex.save();
  });
```

## Options
### 1. Vertex
**`dao.Vertex(db, rid, record)` -> `Vertex Object`**
#### db (required)
Type: `Object`  
Oriento Database object

#### rid (required)
Type: `Object`  
Record Id

#### record (required)
Type: `Object`  
Record Object

### 2. Edge
**`dao.Edge(db, rid, record)` -> `Edge Object`**
#### db (required)
Type: `Object`  
Oriento Database object

#### rid (required)
Type: `Object`  
Record Id

#### record (required)
Type: `Object`  
Record Object

### 3. Document
**`dao.Document(db, rid, record)` -> `Document Object`**
#### db (required)
Type: `Object`  
Oriento Database object

#### rid (required)
Type: `Object`  
Record Id

#### record (required)
Type: `Object`  
Record Object

### 4. DAO API
**`.save()`**  
Save current DAO to database

**`.delete()`**  
Delete current record from database

## More Information
- [OrientDB](https://github.com/orientechnologies/orientdb)
- [Oriento](https://github.com/codemix/oriento)
