"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mocked_tasks = void 0;
const utils_1 = require("../utils/utils");
exports.mocked_tasks = [
    {
        id: (0, utils_1.generateKey)("tsk_"),
        name: "Task1",
    },
    {
        id: (0, utils_1.generateKey)("tsk_"),
        name: "Task2",
    },
    {
        id: (0, utils_1.generateKey)("tsk_"),
        name: "Task3",
    },
];
