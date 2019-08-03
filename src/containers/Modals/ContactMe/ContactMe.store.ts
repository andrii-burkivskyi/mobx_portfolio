import { observable, computed, action } from "mobx";
import state from "../../../core/State.store";
import InputStore from "../../../components/Form/Input/Input.store";
import FormStore from "../../../components/Form/Form.store";
import { isRequired, isEmail } from "../../../utils/validation";
import TextAreaStore from "../../../components/Form/TextArea/TextArea.store";
import ButtonStore from "../../../components/Button/Button.store";
import { ModalStore } from "../../../core/common";

export class ContactMeStore {
    @observable form = new FormStore({
        fields: {
            theme: new InputStore({
                placeholder: "Theme",
                type: InputStore.type.TEXT,
                validations: [[isRequired, "This field is required"]]
            }),
            email: new InputStore({
                type: InputStore.type.EMAIL,
                placeholder: "Email",
                validations: [
                    [isRequired, "This field is required"],
                    [isEmail, "Email should be valid"]
                ]
            }),
            message: new TextAreaStore({
                placeholder: "Message"
            }),
        },
        touchHook: ({ newValue: isSomeFieldTouched }) => {
            this.submitButton.setIsDisabled(!isSomeFieldTouched);
        },
        onSubmit: () => {
            if (this.form.isValid) {
                console.log(this.form.data.message);
                this.form.clear();
            } else {
                this.form.allowValidation();
            }
        }
    });

    @observable submitButton = new ButtonStore({
        isDisabled: true
    })

    @computed get modal(): ModalStore {
        return state.modals.ContactMe;
    }
}

if (!state.containers.ContactMe) {
    state.containers.ContactMe = new ContactMeStore();
}


export default state.containers.ContactMe as ContactMeStore;