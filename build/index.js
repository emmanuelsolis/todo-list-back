"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
const server = http_1.default.createServer(app);
server.listen(8080, () => {
    console.log('Server running on port 8080');
});
app.get('/ping', (_req, res) => {
    console.log('Todo bien');
    res.send('Hola Todo bien');
});
app.use('/api/tasks', routes_1.router);
exports.default = app;
const MONGO_URL = 'mongodb+srv://Admin:miiUReg2MZgpYtSC@cluster1.chodwcu.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(MONGO_URL);
mongoose_1.default.connection.on('error', (error) => console.log(error));
//# sourceMappingURL=index.js.map