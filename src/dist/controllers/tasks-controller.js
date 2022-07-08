"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllTasks = exports.addTask = exports.getTask = void 0;
const tasks_1 = require("../data/tasks");
const utils_1 = require("../utils/utils");
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomIndex = Math.floor(Math.random() * tasks_1.mocked_tasks.length);
        const task = tasks_1.mocked_tasks[randomIndex];
        res.status(200).json({ task });
    }
    catch (error) {
        throw error;
    }
});
exports.getTask = getTask;
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log(req.body);
        const newTask = {
            id: (0, utils_1.generateKey)("tsk_"),
            name: body.name,
        };
        const allTasks = tasks_1.mocked_tasks;
        allTasks.push(newTask);
        res
            .status(201)
            .json({ message: "Task added", task: newTask, tasks: allTasks });
    }
    catch (error) {
        throw error;
    }
});
exports.addTask = addTask;
const deleteAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTasks = tasks_1.mocked_tasks.filter((tsk) => tsk.id === "");
        res.status(200).json({
            message: "Tasks are deleted",
            tasks: allTasks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteAllTasks = deleteAllTasks;
