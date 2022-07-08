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
exports.saveChanges = exports.getAllProduct = void 0;
const products_1 = require("../data/products");
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ products: products_1.MOCK_PRODUCTS });
    }
    catch (error) {
        throw error;
    }
});
exports.getAllProduct = getAllProduct;
const saveChanges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /**
         * In here the changes must be saved on MySQL database. But I run out of time.
         * Instead this will update the array anyway!!
         *
         */
        const body = req.body.products;
        (0, products_1.SET_MOCK_PRODUCTS)(body);
        res.status(200).json({ products: products_1.MOCK_PRODUCTS });
    }
    catch (error) {
        throw error;
    }
});
exports.saveChanges = saveChanges;
