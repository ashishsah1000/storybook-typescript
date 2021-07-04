import React from "react"
import Profile,{ Sizes } from "./Profile"
import { themes } from "../tiles/Tile";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default{
    title:"Design Atomic/Profile",
    component : Profile,
    argTypes : {
        backgroundColor :{control : 'color'}
    }
}as ComponentMeta<typeof Profile>;

const Template : ComponentStory<typeof Profile> = (args)=><Profile {...args} />;
export const ProfileLight = Template.bind({});
ProfileLight.args= {
    Size:Sizes.Small,
    theme:themes.primary
}
export const ProfileDark = Template.bind({});
ProfileDark.args= {
    Size:Sizes.Small,
    theme:themes.secondary
}
