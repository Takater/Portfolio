import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Tooltip from '@mui/material/Tooltip';
import List from './List'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

function Project (props) {

    return (
        <Tooltip title={<List items={props.items} />} placement="bottom">
            <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
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
