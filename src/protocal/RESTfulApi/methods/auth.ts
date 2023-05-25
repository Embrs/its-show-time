import { Post } from "../axios";
import type { LoginParams, LoginRes } from "./interface/auth";
const route = {
  login: "/api/staff/login" // 登入
};

// 登入
export const Login = (params: LoginParams): Promise<LoginRes> => Post(route.login, params);
