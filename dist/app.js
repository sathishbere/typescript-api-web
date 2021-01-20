"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const cors = require('cors');
const port = 8089;
app.use(cors());
app.get('/hello', (req, res) => {
    res.send('Hello World');
});
const names = [{ id: 0, video: 'https://www.youtube.com/watch?v=-l61NE0eqkw' }];
app.get('/api/names', (req, res) => {
    res.send(names);
});
app.get('/api/names/:id', (req, res) => {
    const name = names.find((c, ind) => ind === parseInt(req.params.id));
    if (!name)
        res.status(404).send('not found');
    res.send(name);
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map