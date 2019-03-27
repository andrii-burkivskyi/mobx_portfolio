import Translation from "../../../../../../core/common/Translation.store";

export default new Translation({
    languages: {
        en: () => import("./en.json").then((result) => result.default),
        ru: () => import("./ru.json").then((result) => result.default) 
    },
    values: {
        sectionName: "ui_kit_forms.section_name"
    }
});
