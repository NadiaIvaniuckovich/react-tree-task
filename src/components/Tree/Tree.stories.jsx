import React from 'react';
import { Box } from '@mui/material';

import Tree from './Tree';

export default {
    title: 'Example/Tree',
    component: Tree,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const nodesList = [
    { key: '0', parentKey: null, children: ['1', '2', '3'] },
    { key: '1', parentKey: '0', children: ['11', '12', '13'] },
    { key: '11', parentKey: '1' },
    { key: '12', parentKey: '1', children: ['121'] },
    { key: '121', parentKey: '12' },
    { key: '13', parentKey: '1' },
    { key: '2', parentKey: '0', children: ['21', '22', '23'] },
    { key: '21', parentKey: '2', children: ['211'] },
    { key: '211', parentKey: '21', children: ['2111'] },
    { key: '2111', parentKey: '211', children: ['21111'] },
    { key: '21111', parentKey: '2111', children: ['211111'] },
    { key: '211111', parentKey: '21111', children: ['2111111'] },
    { key: '2111111', parentKey: '211111', children: ['21111111'] },
    { key: '21111111', parentKey: '2111111', children: ['211111111'] },
    { key: '211111111', parentKey: '21111111', children: ['2111111111'] },
    { key: '2111111111', parentKey: '211111111', children: ['21111111111'] },
    { key: '21111111111', parentKey: '2111111111', children: ['211111111111'] },
    { key: '211111111111', parentKey: '21111111111', children: ['2111111111111'] },
    { key: '2111111111111', parentKey: '211111111111', children: [] },
    { key: '22', parentKey: '2' },
    { key: '23', parentKey: '2', children: [] },
    { key: '3', parentKey: '0', children: ['31', '32', '33'] },
    { key: '31', parentKey: '3' },
    { key: '32', parentKey: '3' },
    { key: '33', parentKey: '3', children: ['331'] },
    { key: '331', parentKey: '33' },
];

const Template = (args) => (
    <Box height="200px" width="220px" border="1px solid rgb(224, 224, 224)">
        <Tree {...args} />
    </Box>
);

export const Base = Template.bind({});
Base.args = { nodesList };
