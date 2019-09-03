import { observable } from "mobx";
import { isRequired } from "../../../../../utils/validation";
import TextAreaStore from "../../../../../components/Form/TextArea/TextArea.store";

export class TextAreaSectionStore {
    @observable simpleTextArea = new TextAreaStore({
        label: "Simple textarea",
        theme: TextAreaStore.theme.UI_KIT_DEFAULT
    });

    @observable validateTextArea = new TextAreaStore({
        label: "Validate textarea",
        theme: TextAreaStore.theme.UI_KIT_DEFAULT,
        validations: [[isRequired, "This field is required"]]
    });

    @observable readonlyTextArea = new TextAreaStore({
        label: "Readonly textarea",
        theme: TextAreaStore.theme.UI_KIT_DEFAULT,
        defaultValue: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        isReadOnly: true
    });

    @observable disabledTextArea = new TextAreaStore({
        label: "Disabled textarea",
        theme: TextAreaStore.theme.UI_KIT_DEFAULT,
        defaultValue: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        isDisabled: true
    });
}
