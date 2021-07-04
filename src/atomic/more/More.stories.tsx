import React from "react"
import More from "./More"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title:"Design Atomic/More",
    component : More,
    argTypes : {
        backgroundColor :{control : 'color'}
    }
}as ComponentMeta<typeof More>;

const Template : ComponentStory<typeof More> = (args)=><More {...args} />;
export const MoreElement = Template.bind({});
MoreElement.args= {
    text:"hey"
}
