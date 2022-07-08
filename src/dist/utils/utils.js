"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKey = void 0;
const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};
exports.generateKey = generateKey;
