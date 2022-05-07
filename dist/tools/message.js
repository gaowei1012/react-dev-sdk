"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._messageUtil = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-05-07 10:04:37
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 10:17:21
 * @FilePath: /react-dev-sdk/src/tools/message.ts
 * @Description:
 */
var antd_1 = require("antd");
var _messageUtil = /** @class */ (function () {
    function _messageUtil() {
    }
    /**
     * 成功返回体
     * @param msg message 消息体
     * @param type messgae 类型
     * @returns
     */
    _messageUtil.MsgInfo = function (type, msg) {
        return antd_1.message[type](msg);
    };
    return _messageUtil;
}());
exports._messageUtil = _messageUtil;
