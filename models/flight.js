var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destinationSchema = new Schema ({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA'],
  },
  arrival: Date,
})

var flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  flightNo: {
    type: Number
  },
  departs: {
    type: Date,
    // Following function credits to Achmedzianov Danilian on stackoverflow
    default: () => Date.now() + 365*24*60*60*1000,
  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    default: 'SEA'
  },
  destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema);