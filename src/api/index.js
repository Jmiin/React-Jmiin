import { httpGet,httpPost } from '../utils/http';
import base from "./base";

/**
 * 有多少的网络请求，一次性配置
 */
const api = {
    getApiList() {
        return httpGet(base.ownUrl + base.list);
    }
}

export default api;