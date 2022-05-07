/*
 * @Author: mingwei
 * @Date: 2022-05-07 09:24:40
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-07 10:17:00
 * @FilePath: /react-dev-sdk/src/index.ts
 * @Description:
 */

import { _toolkit } from "./tools";

const pkg = require("../package.json");

export class ReactSDK {
  public toolKit = _toolkit;

  constructor() {
    console.table({
      name: "react 开发者 sdk",
      version: pkg.version,
      more: `https://github.com/gaowei1012/react-dev-sdk.git`,
    });
  }
}
