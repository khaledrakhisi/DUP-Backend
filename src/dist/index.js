"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const products_route_1 = __importDefault(require("./routes/products-route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// To recognize the incoming Request Object as a JSON Object
app.use(express_1.default.json());
// CORS Headers => Required for cross-origin/ cross-server communication
app.use((0, cors_1.default)());
app.use(products_route_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
