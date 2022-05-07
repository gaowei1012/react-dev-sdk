/*
 * @Author: mingwei
 * @Date: 2022-05-07 16:30:13
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 16:34:57
 * @FilePath: /react-dev-sdk/src/tools/validator/index.ts
 * @Description:
 */

import validator from "validator";

export class _validatorUtil {
  static isMobilePhone = (phone: string) => {
    if (!validator.isMobilePhone(phone, "zh-CN"))
      throw "手机号码格式错误,不支持非大陆手机号";
  };

  static isEmail = (email: string) => {
    if (!validator.isEmail(email)) throw "邮箱格式错误";
  };

  // 检查字符串是否是有效的大陆身份证代码
  static isIdentityCard = (str: string) => {
    if (str.length != 18 || !validator.isIdentityCard(str, "any"))
      throw "身份证格式错误,只支持大陆第二代身份证";
  };

  static isURL = (str: string) => {
    if (!validator.isURL(str)) throw `${str} 不是一个正确的url格式`;
  };
}
