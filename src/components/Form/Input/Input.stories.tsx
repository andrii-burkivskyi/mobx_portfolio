import React from 'react';
import { Provider } from 'mobx-react';
import { storiesOf } from '@storybook/react';

import 'assets/global.scss';

import  Input from './Input';
import  InputStore  from './Input.store';


const input = new InputStore({
  type: InputStore.type.TEXT,
  label: "Label of input",
  placeholder: "Input your value",
});

storiesOf('Input', module)
  .add('default', () => (
    <Provider state={input}>
      <Input model={input} />
    </Provider>
  ));


