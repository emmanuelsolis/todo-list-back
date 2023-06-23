"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware to parse  req.boody to json body
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('Todo bien');
    res.send('Hola Todo bien');
});
app.use('/api/tasks', routes_1.router);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
