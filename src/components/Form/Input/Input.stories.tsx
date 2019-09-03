import React from 'react';
import { observable, action, IObservableArray } from "mobx";
import { Provider } from 'mobx-react';
import { storiesOf } from '@storybook/react';

import 'assets/global.scss';
import { EnumObject } from "utils/enum";
import { isEmail, isPhone } from "utils/validation";
import { phoneMask } from "utils/mask";

import StorybookCanvas from "components/StorybookCanvas/StorybookCanvas";

import Input from './Input';
import InputStore, { InitProps } from './Input.store';

const inputs: { name: string, model: InitProps}[] = [
    {
        name: "Standard input",
        model: {
            type: InputStore.type.TEXT,
            label: "Standard input",
            placeholder: "Placeholder of standard input",
        },
    },

    {
        name: "No label and placeholder input",
        model: {
            type: InputStore.type.TEXT,
        },
    },

    {
        name: "Validated input (e-mail)",
        model: {
            type: InputStore.type.EMAIL,
            label: "Validated input (e-mail)",
            validations: [ [isEmail, "Email should be valid"] ]
        },
    },

    {
        name: "Masked input (phone)",
        model: {
            type: InputStore.type.TEXT,
            label: "Masked input (phone)",
            mask: phoneMask,
            validations: [ [isPhone, "Phone should be valid"] ]
        },
    },

    {
        name: "Number input",
        model: {
            type: InputStore.type.NUMBER,
            label: "Number input",
        },
    },

    {
        name: "Read only input",
        model: {
            type: InputStore.type.TEXT,
            label: "Read only input",
            defaultValue: "Value of readonly input",
            isReadOnly: true,
        },
    },

    {
        name: "Disabled input",
        model: {
            type: InputStore.type.TEXT,
            label: "Disabled input",
            defaultValue: "Value of disabled input",
            isDisabled: true,
        }
    },
    {
        name: "Hidden input",
        model: {
            type: InputStore.type.TEXT,
            label: "Hidden input",
            shouldDisplayed: false
        }
    }
];

const subStories: IObservableArray<{color: string, name: string, model: InputStore}> = observable([]);

EnumObject.getValues(InputStore.theme).forEach((theme) => {
    const colors = {
        [InputStore.theme.UI_KIT_DEFAULT]: "#202c39"
    };

    inputs.forEach((input) => {

        subStories.push({
            color: colors[theme] || "#fff",
            name: input.name,
            model: new InputStore({...input.model, theme})
        })
    })
})

const stories = storiesOf('Input', module)

stories.addDecorator((story) => <Provider state={subStories}>{story()}</Provider>)

subStories.forEach((story) => {
    stories.add(`[Input][${story.model.theme}] ${story.name}`, () => (
        <StorybookCanvas color={story.color}>
            <Input model={story.model} />
        </StorybookCanvas>
    ))
})
