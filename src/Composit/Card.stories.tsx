import React from "react"
import Card from "./Card"
import { ComponentStory, ComponentMeta } from '@storybook/react';



export default{
    title:"butgeyton",
    component : Card,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
}as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
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
