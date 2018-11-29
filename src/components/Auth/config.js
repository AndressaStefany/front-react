import axios from "axios";

export const HOST = "http://localhost:3000/api";

export const loginRoute = "/Users/login";

export const todosRoute = "/Reviews";

export function setCookie(cname, cvalue, exmili = 30 * 24 * 60 * 60 * 1000) {
  var d = new Date();
  d.setTime(d.getTime() + exmili);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2)
    return parts
      .pop()
      .split(";")
      .shift();
}
export const deleteTokenCookie = () => {
  setCookie("token", "", 1);
  request = axios.create({
    baseURL: HOST,
    timeout: 3000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
export const saveTokenCookie = token => {
  setCookie("token", token);
  request = axios.create({
    baseURL: HOST,
    timeout: 3000,
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export var request = axios.create({
  baseURL: HOST,
  timeout: 3000,
  headers: {
    Authorization: getCookie("token"),
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});