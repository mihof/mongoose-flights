var Flight = require('../models/flight')

module.exports = {
  index,
  new: newFlight,
  create,
  show
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {
      title: "Mike Air",
      flights
    });
  });
}

function show(req, res) {
  res.render('flights/show', { title: 'Flight Details' });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    console.log(flight);
    res.redirect(`/flights`);
  });
}