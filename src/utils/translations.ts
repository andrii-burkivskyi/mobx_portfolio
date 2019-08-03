import { orderBy } from "natural-orderby";
import { DEFAULT_STRING } from "./constants";

export const t = (value: string, params: CommonMap = {}) => {
    const translation = new TranslatedString(value, params);
    return translation.get()
};

class TranslatedString {
    value: string;
    params: CommonMap;
    pluralMatcher = /^\${2}(.*)\${2}$/;
    paramsInStringMatcher = (paramKey: string) => new RegExp(`{{${paramKey}}}`, "g");
    pluralGroupMatcher = /\({2}(.*?)\){2}/g;

    constructor(value: string, params: CommonMap) {
        this.value = value;
        this.params = params;
        this.flow();
    }

    private flow = () => {
        if (this.isPlural()) {
            this.replaceParamsInStringValue();
            this.replacePluralGroupsInStringValue();
            return;
        }
        else {
            return;
        }
    }

    private isPlural = () => {
        const pluralMatch = this.value.match(this.pluralMatcher);
        this.value = pluralMatch ? pluralMatch[1] : this.value;
        return Boolean(pluralMatch);
    }

    private replaceParamsInStringValue = () => {
        this.value = Object.entries(this.params).reduce((resultString, [paramKey, paramValue]) => {
            return resultString.replace(this.paramsInStringMatcher(paramKey), paramValue);
        }, this.value);
    }

    private replacePluralGroupsInStringValue = () => {
        this.value = this.value.replace(this.pluralGroupMatcher, (__, group) => {
            const pluralValue = new PluralGroup(group, this.params);
            return pluralValue.get();
        });
    }

    get = () => this.value;
}

class PluralGroup {
    value: string;
    params: CommonMap;
    splittedValues: Array<{
        isStrict: boolean,
        value: string,
        paramKey: string,
        paramValue: number[]
    }> = [];
    groupItemMatcher = /^\!?\[(\w+)\:([\dinf]+\-?[\dinf]*)\](.*)$/;
    constructor(value: string, params: CommonMap) {
        this.value = value;
        this.params = params;
        this.flow();
    }

    private flow = () => {
        this.splitAndSortValue();
        this.selectRightPlural();
    }

    private splitAndSortValue = () => {
        this.splittedValues = this.value.split("|").map((groupItem) => {
            const [
                match = DEFAULT_STRING,
                paramKey = DEFAULT_STRING,
                paramValue = DEFAULT_STRING,
                value = DEFAULT_STRING,
            ] = groupItem.match(this.groupItemMatcher) || [];
            return {
                isStrict: match[0] === "!",
                value,
                paramKey,
                paramValue: paramValue.split("-").map((v) => v === "inf" ? Infinity : Number(v))
            }
        });
        this.splittedValues = orderBy(
            this.splittedValues,
            [v => v.isStrict, v => v.paramValue.length, v => v.paramValue[0]],
            ["desc", "asc", "asc"]
        )
    }

    private formatParamValue = (value: number, isStrict: boolean) =>
        isStrict || value === Infinity ? Number(value) : Number(value) % 10;

    private selectRightPlural = () => {
        const pluralGroupValue = this.splittedValues.find((sortedValue) => {
            const value = Number(this.params[sortedValue.paramKey]);
            const hasMinMax = sortedValue.paramValue.length >= 2;
            const { isStrict } = sortedValue;
            if (hasMinMax) {
                const [min, max] = sortedValue.paramValue;
                return this.formatParamValue(max, isStrict) >= this.formatParamValue(value, isStrict) &&
                    this.formatParamValue(min, isStrict) <= this.formatParamValue(value, isStrict);
            }
            else {
                const [min] = sortedValue.paramValue;
                return this.formatParamValue(min, isStrict) === this.formatParamValue(value, isStrict);
            }
        });

        this.value = pluralGroupValue ? pluralGroupValue.value : DEFAULT_STRING;
    }

    get = () => this.value;
}