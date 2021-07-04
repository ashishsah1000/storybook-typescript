import React from "react"
import Social from "./Social"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title:"Design Atomic/Social",
    component : Social,
    argTypes : {
        backgroundColor :{control : 'color'}
    }
}as ComponentMeta<typeof Social>;

const Template : ComponentStory<typeof Social> = (args)=><Social />;
export const SocialElement = Template.bind({});
SocialElement.args= {
}
