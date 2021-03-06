const express = require('express');
const app = express();
const cors = require('cors');

require('./server/config/mongoose.config');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/pirate.routes')(app);
app.listen(8000, () => console.log('listening on port 8000'));
