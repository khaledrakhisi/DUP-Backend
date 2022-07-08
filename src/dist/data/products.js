"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_MOCK_PRODUCTS = exports.MOCK_PRODUCTS = void 0;
exports.MOCK_PRODUCTS = [
    {
        id: "5001",
        name: "",
        i18name: "Water Smart Flow Meter,Wassermengenzähler,Průtokoměr,Vandmængdetæller,Nutikas voolumõõdik,计流器,wassermeter",
        modelNumber: "8188,8188-20,8188-24,8188-29",
    },
    {
        id: "5002",
        name: "Product2",
        i18name: "المحصول الثانی",
        modelNumber: "987HH7767",
    },
];
const SET_MOCK_PRODUCTS = (newItems) => {
    exports.MOCK_PRODUCTS = [...newItems];
};
exports.SET_MOCK_PRODUCTS = SET_MOCK_PRODUCTS;
