import React from "react"
import Button from "./Button"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title:"button",
    component : Button,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
}as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const primary = Template.bind({}); 
primary.args={
    title : "Primary",
    background : "primary",
    size:1    
}

export const danger= Template.bind({}); 
danger.args={
    title : "Danger",
    background : "danger",
    size:1    
}
