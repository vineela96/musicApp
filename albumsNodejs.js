

//get service albums collection

const express = require('express');
const app = express();
const mongo = require('mongodb');
app.use(express.json());

app.get('/', (req,res)=> {
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("musicApp");
 dbo.collection("albums").find({}, {}).toArray(function(err, result) {
if (err) throw err;
console.log(result);
res.send(result);
db.close();
 });
});
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//put service albums
const express = require('express');
const app = express();
const mongo = require('mongodb');
app.use(express.json());

app.put('/',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("musicApp");
  var myquery = { album_name: "the trip" };
  var newvalues = { $set: {album_name: "the trip got updated"} };
  dbo.collection("albums").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    console.log("1 document updated");
res.send(result);
    db.close();
  });
});
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//post service albums

const express = require('express');
const app = express();
const mongo = require('mongodb');
app.use(express.json());

app.post('/',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("musicApp");
 var myobj = {
	album_id: "25",
	album_name: "addiction",
	album_genre: "rock",
	artist_id: "13",
	no_of_tracks: "3",
	track_ids: ["234","543","31"]
	};
 dbo.collection("albums").insertOne(myobj, function(err, res) {
if (err) throw err;
console.log("1 document inserted into albums collection");
   
 });
});
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//delete service albums
const express = require('express');
const app = express();
const mongo = require('mongodb');
app.use(express.json());

app.delete('/',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
   MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("musicApp");
   var myquery = { album_id: "22" };
   dbo.collection("albums").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted from student collection");
    db.close();
  });
});
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));
