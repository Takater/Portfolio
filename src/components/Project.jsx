import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Tooltip from '@mui/material/Tooltip';
import List from './List'
import { useMediaQuery } from 'react-responsive';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


function Project (props) {
    
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const ButtonBaseStyle = {
        width: isMobile ? '80px' : '128px',
        height: isMobile ? '80px' : '128px'
    }

    return (
        <Tooltip title={<List items={props.items} />} placement="bottom">
            <Grid item>
            <ButtonBase sx={ButtonBaseStyle}>
                <Img alt="complex" className="projectIcon" src={props.image} />
            </ButtonBase>
            <Typography gutterBottom variant="subtitle1" component="div">
                    {props.title}
                </Typography>
            </Grid>
        </Tooltip>
    );
}

export default Project;
