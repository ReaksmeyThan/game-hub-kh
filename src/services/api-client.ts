import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const apiClientInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cc5b25313c434f16b51118048515667e",
  },
});
class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return apiClientInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
  };
  post = (config?: AxiosRequestConfig) => {
    return apiClientInstance.post<T>(this.endpoint, config).then((res) => res.data);
  };
}
export default ApiClient;
