"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks-controller");
const router = (0, express_1.Router)();
router.get("/task", tasks_controller_1.getTask);
router.post("/add", tasks_controller_1.addTask);
router.delete("/delete", tasks_controller_1.deleteAllTasks);
exports.default = router;
