export const getStringWithValues = (str: string, values?: Array<string | number>): string => str
    .replace(/{(\d)}/g, (match, group) => {
        if (!values) { return match; }

        const index = Number(group);
        if (index !== index) {
            console.error(`Can't group [${str}] with values [${values.join()}]`);
        }
        return values[index] ? String(values[index]) : match;
    });
