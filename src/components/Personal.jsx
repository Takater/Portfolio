import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Project from './Project'
import imgHTML from '../images/html.png'
import devFullStack from '../images/devFullStack.png'
import automation from '../images/automation.png'
import web3 from '../images/web3.png'

function Personal () {

    function Link (props) {
        const LinkStyle = {
            color: props.text === "In Progress" && '#0ff'
        }
        return (<a target="_blank" rel="noreferrer" style={LinkStyle} className="project-link" href={props.href}>{props.text}</a>);
    }

    return (
        <div id="personal-projects">
            <h2>Personal Projects</h2>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto 20% auto 25%',
                    flexGrow: 1,
                    backgroundColor: '#EEF6F6',
                }}
            >
                <Grid container spacing={4}>
                    <Project
                        image={imgHTML}
                        title="Front-End Only"
                        items = {[
                            <Link href="https://github.com/Takater/Portfolio" text="This Portfolio"/>,
                            <Link href="https://github.com/Takater" text="In Progress"/>
                        ]}
                    />
                    <Project
                        image={devFullStack}
                        title="Full Stack Web Apps"
                        items = {[
                            <Link href="https://github.com/Takater/CS50x-FinalProject" text="Game Zone (Cs50x Final Project)"/>,
                            <Link href="https://github.com/Takater/MyStocks" text="My Stocks App"/>,
                            <Link href="https://github.com/Takater" text="In Progress"/>
                        ]}
                    />
                    <Project
                        image={web3}
                        title="Web 3.0"
                        items = {[
                            <Link href="https://github.com/Takater" text="In Progress"/>
                        ]}
                    />
                    <Project
                        image={automation}
                        title="Automation Projects"
                        items = {[
                            <Link href="https://github.com/Takater/HR-Automation-WhatsApp-WebScrapping" text="VBA Automated WhatsApp Messaging"/>,
                            <Link href="https://github.com/Takater" text="In Progress"/>
                        ]}
                    />
                </Grid>
            </Paper>
        </div>
    );
}

export default Personal;