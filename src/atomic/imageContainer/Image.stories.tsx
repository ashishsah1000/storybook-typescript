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
export const Small = Template.bind({}); 
Small.args={
    url:"http://lorempixel.com/400/200/" ,
    size:"small"
}

export const Medium= Template.bind({}); 
Medium.args={
    url:"http://lorempixel.com/400/200/" ,
    size:"medium"
}
export const Large= Template.bind({}); 
Large.args={
    url:"http://lorempixel.com/400/200/" ,
    size:"large"
}
