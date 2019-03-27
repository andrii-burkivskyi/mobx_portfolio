import { observable, computed, observe, action } from "mobx";
import state from "../State.store";
import { get } from "get-optional";
import { NULL_CHAR } from "../../utils/constants";

interface InitialProps<T> {
    languages: Translation<T>["languages"];
    values: Translation<T>["_values"];
}

class TranslationItem {

}

export default class Translation<T> {
    constructor(props: InitialProps<T>) {
        this.languages = props.languages;
        this._values = props.values;
        this.setLanguage(state.language);
        observe(state, "language", async (change) => { this.setLanguage(change.newValue); });
    }

    @observable languages: {
        en: () => Promise<CommonMap>
        ru: () => Promise<CommonMap>
    };
    @observable _translatedText: {
        en?: CommonMap,
        ru?: CommonMap
    } = { en: {}, ru: {}};

    @observable private _values: { [P in keyof T]: string; };

    @computed get i18n(): { [P in keyof T]: (subStringObject?: CommonMap) => string} {
        return Object.entries<string>(this._values).reduce((translationsAcc, [translationKey, translationValue]) => {
            translationsAcc[translationKey] = (subStringObject?: CommonMap) =>
                subStringObject
                    ? Object.entries(subStringObject).reduce(
                        (translationString, [subStringKey, subStringValue]) =>
                            translationString.replace(`{${subStringKey}}`, subStringValue),
                        get(this._translatedText, state.language, translationValue) || NULL_CHAR
                    )
                    : get(this._translatedText, state.language, translationValue) || NULL_CHAR;

            return translationsAcc;
        }, {} as { [P in keyof T]: (subStringObject?: CommonMap) => string})
    }

    @action setLanguage = async (language: string) => {
        this._translatedText[language] = await this.languages[language]();
    }

}