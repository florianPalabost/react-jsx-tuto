import React from 'react';
import MyButton from './MyButton';

export default {
    title: 'Components/MyButton',
    component: MyButton
};

export const Primary = () => <MyButton>Primary Button</MyButton>;

export const Secondary = () => <MyButton variant="secondary">Secondary Button</MyButton>;

export const Disabled = () => <MyButton disabled>Disabled Button</MyButton>;
