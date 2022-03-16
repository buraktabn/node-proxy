import express from 'express';
import fetch from 'node-fetch';

const app = express()

app.get('/health', async function (req, res) {
    try {
        const response = await fetch('http://0.0.0.0:9934/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: '{"id":"1", "jsonrpc":"2.0", "method": "system_health", "params":[]}'
        });
        res.send(await response.json())
    } catch (e) {
        console.log(e)
        res.status(400).send('not ok');
    }
})

app.listen(3000, '0.0.0.0');