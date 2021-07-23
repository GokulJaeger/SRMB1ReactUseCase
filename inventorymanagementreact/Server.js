const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'lkjnvds87yct9m8o4toq029ts80c9vkuscg'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));