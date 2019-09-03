import { observable } from "mobx";
import { isEmail, isPhone, isRequired } from "utils/validation";
import { phoneMask } from "utils/mask";
import InputStore from "components/Form/Input/Input.store";

export class InputSectionStore {
    @observable standardInput = new InputStore({
        type: InputStore.type.TEXT,
        theme: InputStore.theme.UI_KIT_DEFAULT,
        label: "Standard input"
    });

    @observable validatedInput = new InputStore({
        type: InputStore.type.EMAIL,
        theme: InputStore.theme.UI_KIT_DEFAULT,
        label: "Validated input (e-mail)",
        validations: [ [isEmail, "Email should be valid"] ]
    });

    @observable maskedInput = new InputStore({
        type: InputStore.type.TEXT,
        theme: InputStore.theme.UI_KIT_DEFAULT,
        label: "Masked input (phone)",
        mask: phoneMask,
        validations: [ [isPhone, "Phone should be valid"] ]
    });

    @observable numberInput = new InputStore({
        type: InputStore.type.NUMBER,
        theme: InputStore.theme.UI_KIT_DEFAULT,
        label: "Number input",
    });

    @observable readOnlyInput = new InputStore({
        type: InputStore.type.TEXT,
        theme: InputStore.theme.UI_KIT_DEFAULT,
        label: "Read only input",
        defaultValue: "Value of readonly input",
        isReadOnly: true,
    });

    @observable disabledInput = new InputStore({
        type: InputStore.type.TEXT,
        theme: InputStore.theme.UI_KIT_DEFAULT,
        label: "Disabled input",
        defaultValue: "Value of disabled input",
        isDisabled: true,
    });
}
