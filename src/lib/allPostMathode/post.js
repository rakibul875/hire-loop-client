"use server";

import { getUserToken } from "../core/session";

export const authHeader = async () => {
  const token = await getUserToken();
  const headers = token? {
    authorization: `Bearer ${token}`,
  }:{}
  return headers;
};

export const handelPost = async (path, newData, method = "POST") => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, {
    method: method,
    headers: {
      "Content-type": "application/json",
      ... await authHeader(),
    },
    body: JSON.stringify(newData),
  });
  return res.json();
};
