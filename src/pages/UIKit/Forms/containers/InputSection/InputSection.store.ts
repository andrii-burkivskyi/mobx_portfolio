import { observable } from "mobx";
import { isEmail, isPhone } from "../../../../../utils/validation";
import { phoneMask } from "../../../../../utils/mask";
import InputStore from "../../../../../components/Form/Input/Input.store";
import text from "./i18n/Translation.store";

export class InputSectionStore {
    @observable text = text;
    @observable standardInput: InputStore = new InputStore({
        type: InputStore.type.TEXT,
        label: this.text.i18n.standardInput()
    });

    @observable validatedInput: InputStore = new InputStore({
        type: InputStore.type.EMAIL,
        label: "Validated input (e-mail)",
        validations: [ [isEmail, "Email should be valid"] ]
    });

    @observable maskedInput: InputStore = new InputStore({
        type: InputStore.type.TEXT,
        label: "Masked input (phone)",
        mask: phoneMask,
        validations: [ [isPhone, "Phone should be valid"] ]
    });

    @observable numberInput: InputStore = new InputStore({
        type: InputStore.type.NUMBER,
        label: "Number input",
    });

    @observable readOnlyInput: InputStore = new InputStore({
        label: "Read only input",
        defaultValue: "Value of read only input",
        isReadOnly: observable.box(true),
    });

    @observable disabledInput: InputStore = new InputStore({
        label: "Disabled input",
        defaultValue: "Value of disabled input",
        isDisabled: observable.box(true),
    });
}
