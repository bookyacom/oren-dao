# Oren Dao
> Transform orientdb record using oriento to a DAO

## Installation
```
npm install --save oren-dao
```

## Example
``` JS
const Oriento = require('oriento');
const dao     = require('oren-dao');
const Vertex  = dao.Vertex;

const server = Oriento();

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
  .then(function(vertexes) {
    let vertex = vertexes.shift();

    // update property
    vertex.property = 'red';

    // exec it
    return vertex.save();
  });
```

## Options
### Vertex
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

### Edge
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

### Document
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

### DAO API
**`.save()`**  
Save current DAO to database

**`.delete()`**  
Delete current record from database
