const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    res.json([{ id: 201, name: "Reema Puri" }]);
});

app.listen(3001, () => console.log('User Service running on port 3001'));
