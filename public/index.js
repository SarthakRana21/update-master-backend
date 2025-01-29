import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import completion from './getResponse.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({ origin: "*", allowedHeaders: "content-type" }));
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Update Master AI : )');
});
app.post('/api/v1/master', async (req, res) => {
    const { context } = req.body;
    const response = await completion(context);
    res.status(201).send({
        status: 'Success',
        contextReceived: response
    });
});
app.listen(port, () => {
    console.log(`server is running on \nhttps://localhost:${port}`);
});
//# sourceMappingURL=index.js.map