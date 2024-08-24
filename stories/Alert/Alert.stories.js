import React from 'react';
import Alert from './Alert';
// import Alert from '../components/Alert';

export default {
    title: 'Example/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    message: 'This is a dummy alert text message',
    color: '#f8d7da',
    textColor: 'black',
    borderColor: '#f5c6cb',
};
