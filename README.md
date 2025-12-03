# checkInvalidChars / 字串非法字元檢查工具

## 🇹🇼 中文說明

`checkInvalidChars` 是一個 **零相依、超輕量、跨平台（前端/後端皆可使用）** 的字串驗證工具，用來檢查輸入值是否包含不允許的字元或字串片段。  
此套件使用 **TypeScript** 開發，並附帶 **完整型別支援、jsDoc 文件、38+ 全測試案例**。

---

## ✨ 功能特色

- TypeScript 開發，完整型別推斷  
- 支援單字元、多字元片段（如 "abc"）  
- 支援 Unicode（中文、emoji、全形字）  
- 零相依、體積極小  
- 適用於 Web 表單、後端 API 驗證、資料清洗  
- 38+ 全測試案例（涵蓋所有邊界情境）

---

## 📥 安裝方式

```bash
npm install checkInvalidChars
```

---

## 🚀 使用方式（TypeScript）

```ts
import { checkInvalidChars } from "checkInvalidChars";

checkInvalidChars(["e", "."], "12345"); // true
checkInvalidChars(["e", "."], "12e45"); // false
```

---

## 🧩 API 說明

### `checkInvalidChars(invalidChars: string[], value: string): boolean`

| 參數 | 型別 | 說明 |
|------|--------|--------|
| invalidChars | string[] | 不允許的字元或字串片段 |
| value | string | 要檢查的輸入字串 |

#### 回傳：
- `true` = 合法  
- `false` = 不合法  

---

## 🧪 測試

```bash
npm test
```

本套件包含：

- 基本功能測試  
- 邊界位置（開頭/中間/結尾）  
- 空字串、null、undefined  
- Unicode / emoji / 全形字  
- 大量字串（10,000～50,000 字）  
- 非字串輸入  
- 多字元片段  
- 空白字元、tab  
- 全部皆有 console debug log 美化輸出

---

## 📂 專案結構

```
checkInvalidChars/
├── src/
│   └── checkInvalidChars.ts
├── dist/
│   ├── checkInvalidChars.js
│   └── checkInvalidChars.d.ts
├── tests/
│   └── checkInvalidChars.test.ts
├── package.json
├── tsconfig.json
└── jest.config.js
```

---

## 📝 授權

MIT License

---

# EN Version

## checkInvalidChars — Simple & Lightweight Invalid Character Detector

`checkInvalidChars` is a **zero‑dependency**, **lightweight**, and **platform‑agnostic** string validation utility for detecting invalid characters or disallowed substrings within a given input.

Built in **TypeScript**, it includes **full type definitions, jsDoc comments, and 38+ complete Jest test cases**.

---

## ✨ Features

- Written in TypeScript with built‑in type definitions  
- Supports single characters & multi‑character substrings  
- Unicode‑ready (Chinese, emoji, fullwidth characters, etc.)  
- Zero dependencies, extremely small footprint  
- Ideal for form validation, API request validation, data sanitization  
- 38+ test cases covering all edge conditions

---

## 📦 Installation

```bash
npm install checkInvalidChars
```

---

## 🚀 Usage (TypeScript Example)

```ts
import { checkInvalidChars } from "checkInvalidChars";

checkInvalidChars(["e", "."], "12345"); // true
checkInvalidChars(["e", "."], "1e345"); // false
```

---

## 🧩 API Specification

### `checkInvalidChars(invalidChars: string[], value: string): boolean`

| Parameter | Type | Description |
|----------|--------|-------------|
| invalidChars | string[] | List of disallowed characters or substrings |
| value | string | Target string to validate |

#### Returns:
- `true` = valid  
- `false` = invalid  

---

## 🧪 Testing

```bash
npm test
```

The suite includes:

- Basic behavior  
- Edge positions (start/middle/end)  
- Empty string / null / undefined  
- Unicode / emoji / fullwidth characters  
- Large strings (10k–50k chars)  
- Non‑string input  
- Multi‑character substring detection  
- Whitespace & tab detection  
- All tests include pretty console debug output  

---

## 📂 Project Structure

```
checkInvalidChars/
├── src/
│   └── checkInvalidChars.ts
├── dist/
│   ├── checkInvalidChars.js
│   └── checkInvalidChars.d.ts
├── tests/
│   └── checkInvalidChars.test.ts
├── package.json
├── tsconfig.json
└── jest.config.js
```

---

## 📝 License  
MIT License
