import { setupInterceptorsTo } from "./Interceptors";
import axios from "axios";
export const $http = setupInterceptorsTo(axios);
