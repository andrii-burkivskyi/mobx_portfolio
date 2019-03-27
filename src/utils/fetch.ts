import axios from "axios";
import pathToRegexp from "path-to-regexp";
import qs from "query-string";
import {get} from "get-optional";

import { ConfigureRequest, AxiosHTTPMethods, RequestOptions } from "./fetch.d";

export const getUrlWithParams = (url: string, params: Object): string =>
    pathToRegexp.compile(url.replace(/(https?\:\/\/.+?\/)/, "/"))(params);

export const getUrlWithQuery = (url: string, query?: CommonMap): string => {
    const queryAsString = query ? qs.stringify(query) : ""; 
    return `${url}${queryAsString.length > 0 ? "?" + queryAsString : queryAsString}`;
}

export const configureRequest: ConfigureRequest = (config) => {
    const { baseUrl, headers } = config;
    const generateRequest = (method: AxiosHTTPMethods) =>
        (relativeUrl: string, options?: RequestOptions) => axios({
            method,
            url: `${baseUrl}${getUrlWithQuery(relativeUrl, get(options, "query"))}`,
            headers
        });

    return {
        get: generateRequest(AxiosHTTPMethods.GET),
        post: generateRequest(AxiosHTTPMethods.POST),
        delete: generateRequest(AxiosHTTPMethods.DELETE),
    }
}



