export declare class _utils {
    /**
     * 创建时间
     * @param format 时间戳格式
     * @returns 一个标准的时间
     */
    static createNewDate: (format: string) => string;
    /**
     * 格式化查询条件,支持链式调用
     * Utils.formatRequestQuery(query)(field,type)(field,type)
     * @param {any} query 查询条件结构体
     * @param {String} field 查询字段
     * @param {String} type 查询类型(like,between等)
     * @returns
     */
    static formatRequestQuery: (query: any) => (field: string, type: string) => any;
    /**
     * 将 12010201 处理成 12-01-02-01
     * @param str str
     * @returns
     */
    static formatStringSplit: (str: string) => string;
}
