const PirateController = require('../controllers/pirate.controller');

module.exports = function (app) {
  app.get('/api', PirateController.index);
  app.post('/api/pirate', PirateController.createPirate);
  app.get('/api/pirate', PirateController.getAll);
  app.get('/api/pirate/:id', PirateController.getOne);
  app.put('/api/pirate/:id', PirateController.updatePirate);
  app.delete('/api/pirate/:id', PirateController.deletePirate);
};
