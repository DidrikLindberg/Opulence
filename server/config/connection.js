const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-opulence');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://lindbergdidrik:5NbQTTdQUiErm6wK@cluster1.8kywiet.mongodb.net');


module.exports = mongoose.connection;


// pw: 5NbQTTdQUiErm6wK