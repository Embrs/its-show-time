// 建立唯一值
export const CreateUUID = () => {
  let d = Date.now();
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    d += performance.now(); // use high-precision timer if available
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

// 有單位的金錢轉數字
export const MoneyToNum = (string: string, unit = "NT$") => {
  if (typeof string === "string") {
    const parts = string.toString().split(`${unit} `);
    if (parts[1]) {
      const nums = parts[1].split(".");
      return nums[0] && Number(nums[0]) >= 0 ? nums[0] : "0";
    } else {
      const nums = parts[0].split(".");
      return nums[0] && Number(nums[0]) >= 0 ? nums[0] : "0";
    }
  }
  return "0";
};

// 數字轉有單位的金錢
export const NumToMoney = (num: number, unit = "NT$") => {
  if (typeof num === "number") {
    const parts = num.toString().split(".");
    parts[0] = `${unit} ${parts[0]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 設數字３位','
    return parts.join(".");
  }
  return `${unit} 0`;
};