"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-05-07 09:24:48
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 16:36:21
 * @FilePath: /react-dev-sdk/src/tools/index.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._toolkit = void 0;
var utils_1 = require("./utils");
var message_1 = require("./message");
var validator_1 = require("./validator");
exports._toolkit = {
    utils: utils_1._utils,
    message: message_1._messageUtil,
    validator: validator_1._validatorUtil,
};
