/*
 * @Author: mingwei
 * @Date: 2022-05-07 09:34:51
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 10:19:45
 * @FilePath: /react-dev-sdk/src/tools/utils.ts
 * @Description:
 */
import moment from "moment";

export class _utils {
  /**
   * 创建时间
   * @param format 时间戳格式
   * @returns 一个标准的时间
   */
  static createNewDate = (format: string) => {
    if (format) return moment().format(format);
  };

  /**
   * 格式化查询条件,支持链式调用
   * Utils.formatRequestQuery(query)(field,type)(field,type)
   * @param {any} query 查询条件结构体
   * @param {String} field 查询字段
   * @param {String} type 查询类型(like,between等)
   * @returns
   */
  static formatRequestQuery = (query: any) => {
    function continuous(field: string, type: string) {
      query[field] = {
        value: query[field] ? query : "",
        type,
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
  static formatStringSplit = (str: string) => {
    return str
      .replace(
        /([0-9]{0,2})([0-9]{0,2})([0-9]{0,2})([0-9]{0,3})([0-9]{0,4})/,
        "$1 $2 $3 $4 $5"
      )
      .trim()
      .replace(/\s/g, "-");
  };
}
