const axios = require('axios');

axios.get('http://localhost:3000')
  .then(response => {
    console.log('Server says:', response.data);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });