import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
    return (
        <Box sx={{ width: 500, minHeight: 829 }}>
            <Masonry columns={3} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        <Label>{index + 1}</Label>
                        <img
                            src={`${item.img}?w=162&auto=format`}
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}

const itemData = [
    {
        img: 'https://i.imgur.com/sCZRoXM.png',
        title: 'Apollo CIE',
    },
    {
        img: 'https://i.imgur.com/VIfiJ2U.png',
        title: 'Babblebots',
    },
    {
        img: 'https://i.imgur.com/7ZOZjGd.png',
        title: 'ChatGPT Outage for over 24 Hours Causes Frustration',
    },
    {
        img: 'https://i.imgur.com/gdKhvEQ.png',
        title: 'Google is partnering with Indian healthcare entities like Apollo Hospitals to put MedPaLM to the test and collect large datasets for training it',
    },
    {
        img: 'https://i.imgur.com/cQH5krM.png',
        title: 'GPT 4 Tripped Out Fact',
    },
    {
        img: 'https://i.imgur.com/hz2EzhJ.png',
        title: 'Microdose on Adobe_s Firefly ',
    },
    {
        img: 'https://i.imgur.com/Yh1HGVB.png',
        title: 'Microdose on ChatSonic',
    },
    {
        img: 'https://i.imgur.com/Ojuoz4t.png',
        title: 'Microdose on Google AI Bard',
    },
    {
        img: 'https://i.imgur.com/1oalFB2.png',
        title: 'Microdose on Google',
    },
    {
        img: 'https://i.imgur.com/8U5Uvnc.png',
        title: 'Microdose on zeroGPT',
    },
    {
        img: 'https://i.imgur.com/vuwQ4WD.png',
        title: 'Project Vaani',
    },
];