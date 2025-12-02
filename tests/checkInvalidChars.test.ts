import { checkInvalidChars } from "../src/checkInvalidChars";
import util from "util";

const OK = true;
const NG = false;

// 美化 console 用
function log(title: string, data: any) {
    console.log(`\n=== ${title} ===`);
    console.log(util.inspect(data, { depth: 10, colors: true }));
}

// 自動包裝 test
function wrappedTest(name: string, invalid: any, value: any, expected: boolean) {
    test(name, () => {
        console.log(`\n🧪【測試案例】${name}`);
        log("不允許字元", invalid);
        log("輸入值", value);

        // @ts-ignore 測試允許非預期參數
        const result = checkInvalidChars(invalid, value);

        log("實際結果", result);
        log("預期結果", expected);

        expect(result).toBe(expected);

        console.log("🟢 測試通過");
    });
}

describe("checkInvalidChars - 全測試案例（包含 console 輸出）", () => {

    // ========== 基本功能 ==========
    wrappedTest("應通過：沒有不允許的字元",
        ["e", "."], "12345", OK);

    wrappedTest("應失敗：包含不允許的字元 e",
        ["e", "."], "12e34", NG);

    wrappedTest("應失敗：包含 .",
        ["e", "."], "9.1", NG);

    // ========== 邊界位置 ==========
    wrappedTest("字元在開頭也應失敗",
        ["e"], "e123", NG);

    wrappedTest("字元在結尾也應失敗",
        ["e"], "123e", NG);

    wrappedTest("字元在中間也應失敗",
        ["e"], "12e34", NG);

    // ========== 空字串、空值 ==========
    wrappedTest("空字串應通過",
        ["e", "."], "", OK);

    wrappedTest("value 為 null → false",
        ["e"], null, NG);

    wrappedTest("value 為 undefined → false",
        ["e"], undefined, NG);

    // ========== invalidChars 錯誤參數 ==========
    wrappedTest("invalidChars 為 null → false",
        null, "123", NG);

    wrappedTest("invalidChars 為 undefined → false",
        undefined, "123", NG);

    wrappedTest("invalidChars 為空陣列 → 永遠通過",
        [], "hello.e", OK);

    wrappedTest("invalidChars 包含非字串 → false",
        [1, 2], "123", NG);

    // ========== 大量輸入 ==========
    wrappedTest("大量字串應正常運作",
        ["e"], "1".repeat(50000), OK);

    wrappedTest("大量字串含不合法字元 → false",
        ["e"], "1".repeat(10000) + "e" + "2".repeat(10000), NG);

    // ========== 特殊字元 ==========
    wrappedTest("特殊符號 @ 若在 invalidChars → false",
        ["@"], "a@b", NG);

    wrappedTest("特殊符號若不在 invalidChars → true",
        ["e"], "a@b&c!", OK);

    wrappedTest("符號需精準比對，不走 regex",
        ["."], "a|b", OK);

    // ========== Unicode ==========
    wrappedTest("中文不在 invalidChars → true",
        ["e"], "中文測試", OK);

    wrappedTest("Emoji 不在 invalidChars → true",
        ["e"], "😁123", OK);

    wrappedTest("全形字元若在 invalidChars → false",
        ["ｅ"], "１２３ｅ", NG);

    // ========== 多字元（複合字串） ==========
    wrappedTest("invalidChars 支援多字元字串",
        ["abc"], "xxabcxx", NG);

    wrappedTest("多字元不完全匹配 → true",
        ["abc"], "ab", OK);

    wrappedTest("多字元在開頭 → false",
        ["abc"], "abc123", NG);

    // ========== 重複字元 ==========
    wrappedTest("大量重複字元不影響結果",
        ["e"], "eeeeeeee", NG);

    // ========== 多個非法字元混合 ==========
    wrappedTest("同時含多個非法字元 → false",
        ["e", ".", "-"], "12e-3.4", NG);

    wrappedTest("僅含部分非法字元 → false",
        ["e", ".", "-"], "12-34", NG);

    wrappedTest("未包含任何非法字元 → true",
        ["e", ".", "-"], "1234", OK);

    // ========== 大小寫判斷 ==========
    wrappedTest("大小寫有差異：只禁止小寫 e",
        ["e"], "HELLO", OK);

    wrappedTest("若加入 E → 大寫也不允許",
        ["e", "E"], "HELLO", NG);

    // ========== 空白與控制字元 ==========
    wrappedTest("空白未包含在 invalidChars → true",
        ["e"], "12 34", OK);

    wrappedTest("空白在 invalidChars → false",
        [" "], "12 34", NG);

    wrappedTest("tab 字元若在 invalidChars → false",
        ["\t"], "hello\tworld", NG);

    // ========== 非字串 value ==========
    wrappedTest("value 為數字 → false",
        ["e"], 12345, NG);

    wrappedTest("value 為物件 → false",
        ["e"], { a: 1 }, NG);

    wrappedTest("value 為陣列 → false",
        ["e"], ["a", "b"], NG);

});
