import React from "react"
import Info from "./Info"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title:"Design Atomic/Info",
    component : Info,
    argTypes : {
        backgroundColor :{control : 'color'}
    }
}as ComponentMeta<typeof Info>;

const Template : ComponentStory<typeof Info> = (args)=><Info {...args} />;
export const InfoDark = Template.bind({});
InfoDark.args= {
    username : "Ashish",
    text : "Employee",
    background : "dark"
} 
export const InfoLight= Template.bind({});
InfoLight.args= {
    username : "Ashish",
    text : "Employee",
    background : "light"
} 
export const InfoTrans= Template.bind({});
InfoTrans.args= {
    username : "Ashish",
    text : "Employee",
    background : "transparent"
} 

