var MongoClient = require("mongodb").MongoClient;
require("dotenv").config()
var URL = process.env.DATABASE_URL;

///////Check connection
// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
// //Get the default connection
// var db = mongoose.connection;
// console.log("test")
// //Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
///////Check connection END

///////check conenction
// MongoClient.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
//   if (err) throw err;
//     console.log("check conenction  created!");
//   db.close();
// }
// );

///////check conenction end


/////create collection(table)
// MongoClient.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("AccentureDB");
  
//   dbo.createCollection("emp", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// }
// );
///////create collection(table) END

///////Delete collection(table) END
// MongoClient.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("AccentureDB");
//     dbo.collection("emp").drop(function (err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("Collection deleted");
//       db.close();
//     });
//   }
// );


///////Insert Query
// console.log("url " +URL)

// // insert single row
// MongoClient.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("AccentureDB");
//     var myobj = { name: "devesh", email: "devesh.kr.sri@gmail.com" };

//     dbo.collection("customers").insertOne(myobj, function (err, res) { //insert single
//       if (err) throw err;
//         console.log("1 document inserted");
//     db.close();
//   });
// });

//insert multiple row
// MongoClient.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("AccentureDB");
//     var myobj = [
//       { name: "John", address: "Highway 71" },
//       { name: "Peter", address: "Lowstreet 4" },
//       { name: "Amy", address: "Apple st 652" },
//       { name: "Hannah", address: "Mountain 21" },
//       { name: "Michael", address: "Valley 345" },
//       { name: "Sandy", address: "Ocean blvd 2" },
//       { name: "Betty", address: "Green Grass 1" },
//       { name: "Richard", address: "Sky st 331" },
//       { name: "Susan", address: "One way 98" },
//       { name: "Vicky", address: "Yellow Garden 2" },
//       { name: "Ben", address: "Park Lane 38" },
//       { name: "William", address: "Central st 954" },
//       { name: "Chuck", address: "Main Road 989" },
//       { name: "Viola", address: "Sideway 1633" },
//     ];
//     dbo.collection("customers").insertMany(myobj, function (err, res) {  //insert insertMany
//       if (err) throw err;
//       console.log("1 document inserted");
//   db.close();
// });
// });

// MongoClient.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("AccentureDB");
    
//     //var query = { name: "Viola" }; ///Find documents with the name: "Viola":
//     //var query = { address: /^S/ }; //To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/:
//     var query = { address: "Lowstreet 4" }; //To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/:

//     dbo
//       .collection("customers")
//       .find(query)
//       .toArray(function (err, res) {
//         if (err) throw err;
//         //console.log("collectino created);
//         //console.log("No of document inserted!", res.insertedCount);
//         console.log(res); //find all
//         //console.log(result[2].address);  //Apple st 652
//         db.close();

//         ///To exclude the _id field, you must set its value to 0:
//         //dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
//       });
//   }
// );
///////Insert Query END

///////Delete Query

// MongoClient.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, db) {
//   if (err) throw err;    
//     var dbo = db.db("AccentureDB");

//     var myquery = { name: "Amy" };    
//     //deleting collection
//       dbo.collection("customers").deleteOne(myquery, function (err, obj) {
//       //var myquery = { address: /^O/ };   ///Delete all documents were the address starts with the letter "O":
//       //dbo.collection("customers").deleteMany(myquery, function(err, obj) { 

//       console.log(obj.result.n + " document(s) deleted");
//       if (err) throw err;
//         console.log("1 document deleted");
//       db.close();
//     });
//   }
// );
///////Delete Query END

///////Update Query
// MongoClient.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, db) {
//   if (err) throw err;    
//     var dbo = db.db("AccentureDB");
//     var myquery = { name: "Michael" };
//     //var myquery = { address: /^V/ }; // //Update all documents where the name starts with the letter "S":
//     var newvalues = { $set: { address: "Mumbai 123343434" } };

//     dbo
//       .collection("customers")
//       .updateOne(myquery, newvalues, function (err, res) {
//         if (err) throw err;
//         console.log("1 document updated");
//         db.close();
//       });
//   }
// );
///////Update Query END

// ///////Sort Query 
// MongoClient.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("AccentureDB");
//     var mysort = { name: -1 }; //{ name: 1 } // ascending    { name: -1 } // descending
//     dbo
//       .collection("customers")
//       .find()
//       .sort(mysort)
//       .toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//       });
//   }
// );

// ///////Sort Query END



// // ///////Join two tables Query
// MongoClient.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("AccentureDB");
//     // Consider you have a "orders" collection and a "products" collection:
//     // orders
//     // [{ _id: 1, product_id: 154, status: 1 }]

//     // products[
//     // { _id: 154, name: 'Chocolate Heaven' },
//     // { _id: 155, name: 'Tasty Lemons' },
//     // { _id: 156, name: 'Vanilla Dreams' }
//     // ]

//     //Join the matching "products" document(s) to the "orders" collection:

//     dbo
//       .collection("orders")
//       .aggregate([
//         {
//           $lookup: {
//             from: "products",
//             localField: "product_id",
//             foreignField: "_id",
//             as: "orderdetails",
//           },
//         },
//       ])
//       .toArray(function (err, res) {
//         if (err) throw err;
//         console.log(JSON.stringify(res));
//         db.close();
//       });
//   }
// );
//// ///////Join two tables Query END

///////Limit query - start 
// MongoClient.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("AccentureDB");
//     dbo
//       .collection("customers")
//       .find()
//       .limit(3)
//       .toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//       });
//   }
// );
// /////Limit query - End 