# Oren Dao
> Transform orientdb record using oriento to a DAO

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
