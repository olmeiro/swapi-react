import { API } from "./api";

export function urlPage(pathname){
  return `${API}${pathname.slice(1)}`
}