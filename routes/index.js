const clientsController = require('../controllers').clients;
const zipCodesController = require('../controllers').zipCodes;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Original API!',
    }));

    app.get('/api/clients/check/:email', clientsController.checkIfExists);

    app.post('/api/clients', clientsController.create);

    app.put('/api/clients/:email', clientsController.update);

    app.delete('/api/clients/:email', clientsController.delete);

    app.post('/api/clients/:email/zipcodes', zipCodesController.create);

    app.delete('/api/clients/:email/zipcodes/:zipcode', zipCodesController.delete);
}