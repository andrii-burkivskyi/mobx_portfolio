import { AxiosPromise } from "axios";
export enum AxiosHTTPMethods {
    GET = "get",
    POST = "post",
    DELETE = "delete"
}

export interface RequestConfig {
    baseUrl?: string
    headers?: CommonMap
}

export interface RequestOptions {
    query?: CommonMap
    params?: CommonMap
    body?: CommonMap | Array<CommonMap>
}

export type RequestMethod = (url: string, options?: RequestOptions) => AxiosPromise<any>

export interface Request {
    get: RequestMethod
    post: RequestMethod
    delete: RequestMethod
}

export type ConfigureRequest = (config: RequestConfig) => Request