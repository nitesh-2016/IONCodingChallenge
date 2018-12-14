// mongoDB dependencies.
var mongodb = require("mongodb"),
    mongoClient = mongodb.MongoClient,
    objectId = mongodb.ObjectID,
    dbUrl = "mongodb://localhost:27017/ion_coding_challenge",
    dbName = "ion_coding_challenge",
    connection = null;

// Create mongodb connection.
mongoClient.connect(dbUrl, {useNewUrlParser: true}, function (err, client) {
  if (err) {
    console.log("Error occurred while connecting to mongodb - ", err);
    process.exit(); // Exit the application, if any error.
  } else {
    console.log("connected to mongodb successfully.");
    connection = client.db(dbName);
  }
});

// express.js dependencies
var express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

app.use(bodyParser.text()); // Allow "text/plain" body content-type.

// Register POST /todo/add API
app.post("/todo/add", function (httpReq, httpRes) {
  var toDoItem = httpReq.body;
  if (!toDoItem) {
    return httpRes.status(400).send({error: "Bad Request", message: "Unrecognized/Null payload."});
  }
  connection.collection("todo").insertOne({item: toDoItem}, function (err, addedToDoItem) {
    if (err) {
      httpRes.status(500).send(err);
    } else {
      httpRes.status(200).send(addedToDoItem.ops);
    }
  })
});

// Register GET /todo API
app.get("/todo", function (httpReq, httpRes) {
  connection.collection("todo").find({}).toArray(function (err, toDoItems) {
    if (err) {
      httpRes.status(500).send(err);
    } else {
      httpRes.status(200).send(toDoItems);
    }
  })
});

// Register DELETE /todo/delete/:id API
app.delete("/todo/delete/:id", function (httpReq, httpRes) {
  var id = httpReq.params.id;
  connection.collection("todo").deleteOne({_id: objectId(id)}, function (err, deleted) {
    if (err) {
      httpRes.status(500).send(err);
    } else {
      httpRes.status(200).send(deleted.result.n + " TODO Item(s) deleted.");
    }
  })
});

const port = 8080;
// Start the application on 8080 port.
app.listen(port, function (err) {
  if (err) {
    return console.log(err);
  }
  return console.log('server is listening on port - ', port);
});