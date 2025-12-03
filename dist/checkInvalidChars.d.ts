/**
 * 檢查字串是否包含任意不允許的字元
 *
 * @param invalidChars - 不允許的字元陣列，例如 ['e', '.']
 * @param value - 要檢查的字串
 * @returns `true` 表示合法；`false` 表示不合法
 *
 * @example
 * checkInvalidChars(['e', '.'], "123") // true
 * checkInvalidChars(['e', '.'], "12e3") // false
 */
export declare function checkInvalidChars(invalidChars: string[], value: string): boolean;
