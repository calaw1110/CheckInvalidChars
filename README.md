# checkInvalidChars

`checkInvalidChars` 是一個輕量、零依賴（zero-dependency）的字串驗證工具，  
用來檢查輸入字串是否包含「不允許的字元」。  

---

## 安裝

### 安裝

```bash
npm install checkInvalidChars
```

## Use Case

```javascript
checkInvalidChars(['e', '.'], "123") // true

checkInvalidChars(['e', '.'], "12e3") // false
```