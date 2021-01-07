/*eslint-disable */
import axios from 'axios';
import { HOST_API } from '../constants';

class _AxiosService {
  instance = null;
  constructor() {
    this.instance = axios.create({
      baseURL: HOST_API,
      headers: this._getHeaders()
    });
    this.instance.interceptors.request.use(
      this._interceptBeforeRequest.bind(this),
      this._interceptRequestError.bind(this)
    );
    this.instance.interceptors.response.use(
      this._interceptResponseData.bind(this),
      this._interceptResponseError.bind(this)
    );

  }

  _getHeaders() {
    return {
      'Content-Type': 'application/json'
    };
  }

  async _interceptBeforeRequest(config) {
    if (!config.url) {
      return Promise.reject('[AxiosService] URL must not be blank');
    }
    return config;
  }

  _interceptRequestError(error) {
    return Promise.reject(error);
  }

  _interceptResponseData(response) {
    return response;
  }

  _interceptResponseError(error) {
    return Promise.reject(error);
  }

  get(url = '/', params = {}, config = {}) {
    return this.instance.get(url, { params, ...config });
  }

  post(url = '/', data, config = {}) {
    return this.instance.post(url, data, config);
  }

  put(url = '/', config) {
    return this.instance.put(url, config);
  }

  patch(url = '/', data, config = {}) {
    return this.instance.patch(url, data, config);
  }

  delete(url = '/', params = {}, config = {}) {
    return this.instance.delete(url, { params }, config);
  }
}

export const AxiosService = new _AxiosService();
