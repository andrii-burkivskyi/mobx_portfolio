import { observable, action, computed } from "mobx";

import { RequestOptions } from "../../utils/fetch.d";
import { AxiosPromise, AxiosResponse } from "axios";

interface MapInitProps<R = any, M = CommonMap> {
    request: (options?: RequestOptions) => AxiosPromise<R>;
    onSuccess?: (response: R) => M;
    onError?: (response: R) => string;
}

export enum MapState {
    INIT = "init",
    LOADING = "loading",
    LOADED = "loaded",
    SKIPPED = "skipped",
    ERROR = "error"
}

export default class MapStore<R = any, M = CommonMap> {
    static SUCCESS_HANDLER = {
        DEFAULT: (response: any) => response,
    }
    static ERROR_HANDLER = {
        DEFAULT: () => ""
    }

    constructor(props: MapInitProps<R, M>) {
        this.request = props.request;
        this.onSuccess = props.onSuccess || MapStore.SUCCESS_HANDLER.DEFAULT;
        this.onError = props.onError || MapStore.ERROR_HANDLER.DEFAULT;
    }

    @action fetch = async (options?: RequestOptions) => {
        this.state = MapState.LOADING;
        try {
            const response: AxiosResponse<R> = await this.request(options);

            this.data = this.onSuccess(response.data);
            this.state = MapState.LOADED;
        }
        catch (error) {
            console.error(new Error().stack);
            this.error = this.onError(error)
            this.state = MapState.ERROR;
        }
    }


    @observable state: MapState = MapState.INIT;
    @observable data: M = {} as M;
    @observable error: string = "";
    request: (options?: RequestOptions) => AxiosPromise<R>;
    onSuccess: (response: R) => M;
    onError: (response: R) => string;

    @computed get isFetching() { return this.state === MapState.LOADING; }
    @computed get isError() { return this.state === MapState.ERROR; }

}