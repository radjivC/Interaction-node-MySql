var db          = require('mysql'); //This sets up the MySQL connection
var connection = mysql.createConnection(
  {
    host        : 'localhost',
    port        : '8889',
    database    : 'unicorn',
    user        : 'root',
    password    : 'root'
  }
);

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving unicorn: ' + id);
    connection.connect();

    var queryString = 'SELECT'+id+'FROM unicorns';

    connection.query(queryString, function(err, result) {
        if (err) throw err;
        unicorn = result;
    });
}

exports.findAll = function(req, res) {

    var unicorns = [];
    connection.connect();

    var queryString = 'SELECT * FROM unicorns';

    connection.query(queryString, function(err, rows, fields) {
      if (err) throw err;

      for (var i in rows) {
        unicorns= rows[i];
      }
    });
}

exports.addUnicorn = function(req, res) {
    var unicorn = req.body;
    console.log('add unicorn');
    connection.connect();
    var name=unicorn.name ;
    var status=unicorn.status;
    var birthday=unicorn.birthday; 
    var queryString = 'INSERT'+name+','+status +','+birthday +','+'FROM unicorns';

    connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result+ 'add OK');
    });

}

exports.updateUnicorn = function(req, res) {
    var unicorn = req.body;
    console.log('add unicorn');
    connection.connect();
    var name=unicorn.name ;
    var status=unicorn.status;
    var birthday=unicorn.birthday; 
    var queryString = 'INSERT'+name+','+status +','+birthday +','+'FROM unicorns';

    connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result+ 'insert OK');
    });

}

exports.deleteUnicorn = function(req, res) {
    var id = req.id;
    console.log('delete unicorn');
    connection.connect();

    var queryString = 'DELETE'+id+'FROM unicorns';

    connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result+ 'delete OK');
    });
}

