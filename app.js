const express = require('express');

const app = express();

app.get('/api/order/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.params);
    const orderId = req.params.id;
    let obj = {
        orderId: req.params.id,
        userName: `user ${orderId}`,
        updatedTime: new Date().getTime() - orderId * 999999999 + Math.random()*100000000000,
        amount: req.params.id * 10.5,
    }
    res.send(obj)
})



app.listen(3000);
console.log('网站服务器启动成功');