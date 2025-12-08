import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
  sub: string;
  email: string;
  role: "user" | "admin";
  iat: number;
  exp: number;
}

export const getToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token");

export const getDecodedToken = (): DecodedToken | null => {
  const token = getToken();
  if (!token) return null;

  try {
    return jwtDecode<DecodedToken>(token);
  } catch {
    return null;
  }
};

export const isAdmin = (): boolean => {
  const decoded = getDecodedToken();
  return decoded?.role === "admin";
};
