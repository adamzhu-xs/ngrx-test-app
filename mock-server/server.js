const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', function (req, res) {
    res.send('Mock server')
});


const userRoutes = require('./routes/users/users');
app.use('/api/users', userRoutes);

const accountRoutes = require('./routes/accounts/accounts');
app.use('/api/accounts', accountRoutes);

const customerserviceRoutes = require('./routes/customerservice/customerservice');
app.use('/api/customerservice', customerserviceRoutes);


app.listen(3000, function () {
    console.log('Mock app listening on port 3000!')
});
