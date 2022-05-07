"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-05-07 16:30:13
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 16:34:57
 * @FilePath: /react-dev-sdk/src/tools/validator/index.ts
 * @Description:
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._validatorUtil = void 0;
var validator_1 = __importDefault(require("validator"));
var _validatorUtil = /** @class */ (function () {
    function _validatorUtil() {
    }
    _validatorUtil.isMobilePhone = function (phone) {
        if (!validator_1.default.isMobilePhone(phone, "zh-CN"))
            throw "手机号码格式错误,不支持非大陆手机号";
    };
    _validatorUtil.isEmail = function (email) {
        if (!validator_1.default.isEmail(email))
            throw "邮箱格式错误";
    };
    // 检查字符串是否是有效的大陆身份证代码
    _validatorUtil.isIdentityCard = function (str) {
        if (str.length != 18 || !validator_1.default.isIdentityCard(str, "any"))
            throw "身份证格式错误,只支持大陆第二代身份证";
    };
    _validatorUtil.isURL = function (str) {
        if (!validator_1.default.isURL(str))
            throw str + " \u4E0D\u662F\u4E00\u4E2A\u6B63\u786E\u7684url\u683C\u5F0F";
    };
    return _validatorUtil;
}());
exports._validatorUtil = _validatorUtil;
