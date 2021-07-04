import React from "react"
import Image from "./Image"
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sizes } from "../../atomic/profilePic/Profile";

export default{
    title:"Design Composite/Image",
    component : Image,
    argTypes : {
        backgroundColor :{control : 'color'}
    }
}as ComponentMeta<typeof Image>;

const Template : ComponentStory<typeof Image> = (args)=><Image {...args} />;
export const ImageElement = Template.bind({});
ImageElement.args= {
    size: Sizes.Medium
}
