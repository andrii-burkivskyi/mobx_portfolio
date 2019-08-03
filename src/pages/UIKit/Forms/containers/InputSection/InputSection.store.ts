import { observable } from "mobx";
import { isEmail, isPhone, isRequired } from "../../../../../utils/validation";
import { phoneMask } from "../../../../../utils/mask";
import InputStore from "../../../../../components/Form/Input/Input.store";

export class InputSectionStore {

    @observable standardInput = new InputStore({
        type: InputStore.type.TEXT,
        label: "Standard input"
    });

    @observable validatedInput = new InputStore({
        type: InputStore.type.EMAIL,
        label: "Validated input (e-mail)",
        validations: [ [isEmail, "Email should be valid"] ]
    });

    @observable maskedInput = new InputStore({
        type: InputStore.type.TEXT,
        label: "Masked input (phone)",
        mask: phoneMask,
        validations: [ [isPhone, "Phone should be valid"] ]
    });

    @observable numberInput = new InputStore({
        type: InputStore.type.NUMBER,
        label: "Number input",
    });

    @observable readOnlyInput = new InputStore({
        label: "Read only input",
        defaultValue: "Value of readonly input",
        isReadOnly: true,
    });

    @observable disabledInput = new InputStore({
        label: "Disabled input",
        defaultValue: "Value of disabled input",
        isDisabled: true,
    });
}
