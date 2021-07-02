import React from "react"
import Tile, { themes } from "./Tile"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title:"Design Atomic/Tiles",
    component : Tile,
    argTypes : {
        backgroundColor :{control : 'color'}
    }
}as ComponentMeta<typeof Tile>;

const Template : ComponentStory<typeof Tile> = (args)=><Tile {...args} />;
export const light = Template.bind({});
light.args= {
    theme : themes.primary,
    size: "card-large"
}
export const dark = Template.bind({});
dark.args= {
    theme : themes.secondary,
    size: "card-large"
}