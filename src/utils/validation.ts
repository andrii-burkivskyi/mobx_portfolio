
export const isRequired = (value: string): boolean => Boolean(value);

export const isEmail = (value: string): boolean =>
    !Boolean(value) ||
    Boolean(value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i));

export const isPhone = (value: string): boolean =>
    !Boolean(value) ||
    Boolean(value.match(/^380\d{9}$/i));

export type ValidationType = [(value: any) => boolean, string, Array<string | number>] | 
    [(value: any) => boolean, string]; 

interface Validate {
    (value: any, arr: Array<ValidationType>): [string, Array<string | number>];
}

export const validate: Validate = (value, arr) => {
    const result = arr.find(([validator]) => !validator(value));
    if (!result) { return ["", []]; }

    const error = result[1] || "";
    const values = (result.length === 3 && result[2]) || [];
    return [error, values];
};