const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const transactionsModel = require('./models/transactions');
const windowsModel = require('./models/windows');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const {connectDB,db} = require('./dbconfig');
connectDB();

app.get('/api/v1/data', async (req, res) => {
    const windowData = await windowsModel.find();
    console.log(windowData);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(windowData);
});

app.post('/api/v1/data', async (req, res) => {
    console.log(req.body);
    let data = req.body;
    data["type"] = "add";
    let windowId = req.body.windowId;
    let content = req.body.content;
    console.log(data);
    try{
        const transactionData = new transactionsModel(data);
        await transactionData.save();
    
        const windowData = await windowsModel.findOneAndUpdate(
            { windowId },
            { content },
            { new: true } // Return the updated document
        );
        console.log(windowData);
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS')
        res.status(200).json({ message: 'Data added successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update data
app.put('/api/v1/data/:windowId', async (req, res) => {
    const data = { "content":req.body.content, "type":"edit", "windowId":req.params.windowId};
    console.log(req.params);
    try{
        const transactionData = new transactionsModel(data);
        await transactionData.save();
        let windowId = req.params.windowId;
        let content = req.body.content;
    
        const windowData = await windowsModel.findOneAndUpdate(
            { windowId },
            { content },
            { new: true }
        );
        console.log(windowData);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json({ message: 'Data updated successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/v1/count/', async (req, res) => {
    const count = await transactionsModel.countDocuments();
    console.log(count);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json({ count });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
