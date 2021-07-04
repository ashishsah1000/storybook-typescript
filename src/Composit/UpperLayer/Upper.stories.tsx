import React from "react"
import Upper from "./Upper"
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sizes } from "../../atomic/profilePic/Profile";
import { themes } from "../../atomic/tiles/Tile";


export default{
    title:"Design Composite/Upper",
    component : Upper,
    argTypes : {
        backgroundColor :{control : 'color'}
    }
}as ComponentMeta<typeof Upper>;

const Template : ComponentStory<typeof Upper> = (args)=><Upper {...args} />;
export const UpperElementDark = Template.bind({});
UpperElementDark.args= {
    Psize: Sizes.Small,
    Isize:Sizes.Medium,
    theme:themes.secondary
}
export const UpperElementLight = Template.bind({});
UpperElementLight.args= {
    Psize: Sizes.Small,
    Isize:Sizes.Medium,
    theme:themes.primary
}
