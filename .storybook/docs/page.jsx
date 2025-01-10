import React from 'react';
import {ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle, Title} from '@storybook/addon-docs';
import {ImportInfo, LinkToSource} from './blocks';


export const page = () => (
    <>
        <div>
            <Title />
            <LinkToSource />
        </div>
        <Subtitle />
        <ImportInfo />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
    </>
);

