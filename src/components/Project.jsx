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

    function ListSelect() {
        return (
            <List
                type="project"
                items={props.items}
            />
        )
    }

    return (
        <Tooltip title={<ListSelect />} placement="bottom">
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
