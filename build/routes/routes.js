"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const tasksTodoServices_1 = require("../services/tasksTodoServices");
const utils_1 = __importDefault(require("../utils"));
exports.router = express_1.default.Router();
exports.router.get('/', (_req, res) => {
    res.send('Mi página de inicio');
});
exports.router.get('/all', (_req, res) => {
    res.send((0, tasksTodoServices_1.getAllTasks)());
});
exports.router.get('/:id', (req, res) => {
    const task = (0, tasksTodoServices_1.getTaskById)(+req.params.id);
    res.send(task !== undefined ? task : (404));
});
exports.router.post('/', (req, res) => {
    try {
        const newTaskEntry = (0, utils_1.default)(req.body);
        const addedTaskEntry = (0, tasksTodoServices_1.addTask)(newTaskEntry);
        res.json(addedTaskEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
//# sourceMappingURL=routes.js.map