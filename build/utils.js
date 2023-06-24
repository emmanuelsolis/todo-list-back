"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const isString = (string) => {
    return typeof string === 'string';
};
const parseName = (namFromRequest) => {
    if (!isString(namFromRequest)) {
        throw new Error('Incorrect or missing name ');
    }
    return namFromRequest;
};
const parseDescription = (descriptionFromRequest) => {
    if (!isString(descriptionFromRequest)) {
        throw new Error('Incorrect or missing description ');
    }
    return descriptionFromRequest;
};
const parseStatus = (statusFromRequest) => {
    if (!isString(statusFromRequest) || !isStatus(statusFromRequest)) {
        throw new Error('Incorrect or missing status ');
    }
    return statusFromRequest;
};
const isStatus = (param) => {
    return Object.values(types_1.Status).includes(param);
};
const toNewTaskEntry = (object) => {
    const newEntry = {
        name: parseName(object.name),
        description: parseDescription(object.description),
        status: parseStatus(object.status)
    };
    return newEntry;
};
exports.default = toNewTaskEntry;
//# sourceMappingURL=utils.js.map