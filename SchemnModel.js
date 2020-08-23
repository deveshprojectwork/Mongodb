//Import the mongoose module
var mongoose = require("mongoose");
//Set up default mongoose connection
var mongoDB = "mongodb+srv://mymongo:admin@123@cluster0-wj9ko.mongodb.net/test";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Define schema
var Schema = mongoose.Schema;

// var SomeModelSchema = new Schema({
//   a_string: String,
//   a_date: Date
// });

// Compile model from schema
//var SomeModel = mongoose.model('SomeModel', SomeModelSchema );



var schema = new Schema(
    {
      name: String,
      binary: Buffer,
      living: Boolean,
      updated: { type: Date, default: Date.now() },
      age: { type: Number, min: 18, max: 65, required: true },
      mixed: Schema.Types.Mixed,
      _someId: Schema.Types.ObjectId,
      array: [],
      ofString: [String], // You can also have an array of each of the other types too.
      nested: { stuff: { type: String, lowercase: true, trim: true } }
    })



    //Schema with validation
    //https://mongoosejs.com/docs/validation.html

    var breakfastSchema = new Schema({
        eggs: {
          type: Number,
          min: [6, 'Too few eggs'],
          max: 12,
          required: [true, 'Why no eggs?']
        },
        drink: {
          type: String,
          enum: ['Coffee', 'Tea', 'Water',]
        }
      });