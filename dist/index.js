"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-05-07 09:24:40
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 10:17:00
 * @FilePath: /react-dev-sdk/src/index.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactSDK = void 0;
var tools_1 = require("./tools");
var pkg = require("../package.json");
var ReactSDK = /** @class */ (function () {
    function ReactSDK() {
        this.toolKit = tools_1._toolkit;
        console.table({
            name: "react 开发者 sdk",
            version: pkg.version,
            more: "https://github.com/gaowei1012/react-dev-sdk.git",
        });
    }
    return ReactSDK;
}());
exports.ReactSDK = ReactSDK;
