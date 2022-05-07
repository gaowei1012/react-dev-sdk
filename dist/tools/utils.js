"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._utils = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-05-07 09:34:51
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 10:19:45
 * @FilePath: /react-dev-sdk/src/tools/utils.ts
 * @Description:
 */
var moment_1 = __importDefault(require("moment"));
var _utils = /** @class */ (function () {
    function _utils() {
    }
    /**
     * 创建时间
     * @param format 时间戳格式
     * @returns 一个标准的时间
     */
    _utils.createNewDate = function (format) {
        if (format)
            return (0, moment_1.default)().format(format);
    };
    /**
     * 格式化查询条件,支持链式调用
     * Utils.formatRequestQuery(query)(field,type)(field,type)
     * @param {any} query 查询条件结构体
     * @param {String} field 查询字段
     * @param {String} type 查询类型(like,between等)
     * @returns
     */
    _utils.formatRequestQuery = function (query) {
        function continuous(field, type) {
            query[field] = {
                value: query[field] ? query : "",
                type: type,
            };
            return continuous;
        }
        return continuous;
    };
    /**
     * 将 12010201 处理成 12-01-02-01
     * @param str str
     * @returns
     */
    _utils.formatStringSplit = function (str) {
        return str
            .replace(/([0-9]{0,2})([0-9]{0,2})([0-9]{0,2})([0-9]{0,3})([0-9]{0,4})/, "$1 $2 $3 $4 $5")
            .trim()
            .replace(/\s/g, "-");
    };
    return _utils;
}());
exports._utils = _utils;
