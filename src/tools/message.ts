/*
 * @Author: mingwei
 * @Date: 2022-05-07 10:04:37
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 10:17:21
 * @FilePath: /react-dev-sdk/src/tools/message.ts
 * @Description:
 */
import { message } from "antd";

export class _messageUtil {
  /**
   * 成功返回体
   * @param msg message 消息体
   * @param type messgae 类型
   * @returns
   */
  static MsgInfo(
    type: string | "info" | "success" | "warning" | "warn" | "loading",
    msg: string
  ) {
    return message[type](msg);
  }
}
