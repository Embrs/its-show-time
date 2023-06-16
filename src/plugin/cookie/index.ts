import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/plugin/utils/tools/crypto-js";
// const useHash = true;

export interface KeyMap {
  [key: string]: string;
}

export interface AnyObj {
  [key: string]: string;
}


// key對應表
export const keyMap = {
  token: "token",
};

// server header 攔截分解
export const headerCookieObj = function (req: any) {
  const serviceCookie: any = {};
  if (req && req.headers && req.headers.cookie) {
    req.headers.cookie.split(";").forEach(function (val: string) {
      const parts = val.split("=");
      serviceCookie[parts[0].trim()] = (parts[1] || "").trim();
    });
  }
  return serviceCookie;
};

// 刪除 cookie
export const RemoveHash = function (key: string, useHash = true) {
  Cookies.remove(useHash ? encrypt(key) : key);
};

// 刪除 all cookies
export const RemoveAll = function () {
  Object.keys(Cookies.get()).forEach((key) => {
    Cookies.remove(key);
  });
};

// server ------------------------------------------
// 取得 server cookie valueObj
export const GetHashInServer = function (key: string, req: AnyObj, useHash = true) {
  const cookieObj = headerCookieObj(req);
  const value =
    useHash ?
      decrypt(cookieObj[encrypt(key)]) :
      cookieObj[key];

  if (!useHash) return value;
  return value && value.length > 0
    ? JSON.parse(value.replace(/%22/g, "\""))
    : undefined;
};
// 設定 sHasherver cookie
export const SetHashInServer = function (key: string, valueObj: AnyObj, res: any, useHash = true) {
  const _value =
    useHash ?
      `${JSON.stringify(valueObj)}` :
      valueObj;

  const _str = useHash
    ? `${encrypt(key)}=${encrypt(_value as string)}`
    : `${key}=${_value}`;
  res.setHeader("Set-Cookie", [`${_str}; path=/;`]);
};

// client ------------------------------------------
// 取得 cookie valueObj
export const GetHash = function (key: string, useHash = true) {
  const value =
    useHash ?
      decrypt(Cookies.get(encrypt(key)) ?? "") :
      Cookies.get(key);

  if (!useHash) return value;
  return value && value.length > 0 ? JSON.parse(value) : undefined;
};

// 設定 cookie valueObj
export const SetHash = function (key: string, valueObj: any, useHash = true) {
  const _value =
    useHash ?
      JSON.stringify(valueObj) :
      valueObj;

  useHash
    ? Cookies.set(encrypt(key), encrypt(_value))
    : Cookies.set(key, _value);
};
