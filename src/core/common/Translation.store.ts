import { observable, computed, observe, action, toJS, IObservableValue } from "mobx";
import state from "../State.store";
import { get } from "get-optional";
import { NULL_CHAR } from "../../utils/constants";

interface InitialProps<T> {
    languages: Translation<T>["languages"];
    keys: Translation<T>["keys"];
}

export default class Translation<T> {
    constructor(props: InitialProps<T>) {
        this.languages = props.languages;
        this.keys = props.keys;
        this.i18n = Object.keys(props.keys).reduce((i18n, key) => {
            i18n[key] = observable.box(NULL_CHAR);
            return i18n;
        }, {} as KeyWithValue<T, IObservableValue<string>>);
        this.setLanguage(state.language);
        observe(state, "language", async (change) => { this.setLanguage(change.newValue); });
    }


    @observable languages: {
        en: () => Promise<any>
        ru: () => Promise<any>
    };

    @observable i18n: KeyWithValue<T, IObservableValue<string>>;
    @observable private keys: KeyWithValue<T, string>;

    @action setLanguage = async (language: "en" | "ru") => {
        const translations = await this.languages[language]();
        Object.entries<string>(this.keys).forEach(([key, value]) => {
            (<IObservableValue<string>>this.i18n[key]).set(translations[value])
        });
    }
}