import axios from "axios";
import { BaseURL } from "../base-url";
const { FAKE_API, PROJECT_API } = BaseURL;
export const instance = axios.create({ baseURL: PROJECT_API, withCredentials: true });