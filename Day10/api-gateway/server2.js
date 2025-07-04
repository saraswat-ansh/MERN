// api-gateway.js

const express = require('express');
const axios = require('axios');
const app = express();

app.get('/users', async (req, res) => {
    const response = await axios.get('http://localhost:3001/users');
    res.json(response.data);
});

app.get('/products', async (req, res) => {
    const response = await axios.get('http://localhost:3002/products');
    res.json(response.data);
});

app.get('/orders', async (req, res) => {
    try {
        const [ordersRes, usersRes, productsRes] = await Promise.all([
            axios.get('http://localhost:3003/orders'),
            axios.get('http://localhost:3001/users'),
            axios.get('http://localhost:3002/products')
        ]);

        const orders = ordersRes.data;
        const users = usersRes.data;
        const products = productsRes.data;

        const enrichedOrders = [];

        for (let i = 0; i < orders.length; i++) {
            const order = orders[i];
            const user = users.find(u => u.id == order.user);
            const product = products.find(p => p.id == order.product);

            enrichedOrders.push({
                id: order.id,
                user,
                product
            });
        }

        res.json(enrichedOrders);

    } catch (err) {
        console.error("Error enriching orders:", err.message);
        res.status(500).json({ error: "Failed to fetch enriched orders" });
    }
});

app.listen(3000, () => console.log('API Gateway running on port 3000'));
