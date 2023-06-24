"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getTaskById = exports.getAllTasks = void 0;
const tasksTodo_json_1 = __importDefault(require("./tasksTodo.json"));
const tasksTodo = tasksTodo_json_1.default;
const getAllTasks = () => tasksTodo;
exports.getAllTasks = getAllTasks;
const getTaskById = (id) => {
    const task = tasksTodo.find(task => task.id === id);
    return task;
};
exports.getTaskById = getTaskById;
const addTask = (newTaskEntry) => {
    const newTask = Object.assign({ id: Math.max(...tasksTodo.map(task => task.id)) + 1 }, newTaskEntry);
    tasksTodo.push(newTask);
    return newTask;
};
exports.addTask = addTask;
const updateTask = () => undefined;
exports.updateTask = updateTask;
const deleteTask = () => undefined;
exports.deleteTask = deleteTask;
//# sourceMappingURL=tasksTodoServices.js.map