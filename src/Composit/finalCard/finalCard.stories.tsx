import React from "react"
import FinalCard from "./finalCard"
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sizes } from "../../atomic/profilePic/Profile";
import { themes } from "../../atomic/tiles/Tile";


export default{
    title:"Design Composite/FinalCard",
    component : FinalCard,
    argTypes : {
        backgroundColor :{control : 'color'}
    }
}as ComponentMeta<typeof FinalCard>;

const Template : ComponentStory<typeof FinalCard> = (args)=><FinalCard {...args} />;
export const FinalCardElementDark = Template.bind({});
FinalCardElementDark.args= {
    size:Sizes.Medium,
    Psize: Sizes.Small,
    Isize:Sizes.Medium,
    theme:themes.secondary
}
export const FinalCardElementLight = Template.bind({});
FinalCardElementLight.args= {
    size:Sizes.Medium,
    Psize: Sizes.Small,
    Isize:Sizes.Medium,
    theme:themes.primary
}
