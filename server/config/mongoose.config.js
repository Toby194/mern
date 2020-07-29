const mongoose = require('mongoose');

// setting up connection to our database
mongoose.connect('mongodb://localhost/piratedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})
    .then(() => console.log('Established a connection to the database!'))
    .catch(err => console.log('Something is wrong when connecting to the database', err));