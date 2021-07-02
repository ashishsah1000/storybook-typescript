import React from "react"
import Image from "./Image"
import { ComponentStory, ComponentMeta } from '@storybook/react';



export default{
    title:"Design Atomic/Image",
    component : Image,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
}as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;
export const primary = Template.bind({}); 
primary.args={
    url:"" 
}

export const large= Template.bind({}); 
large.args={
    url:"" 
}
