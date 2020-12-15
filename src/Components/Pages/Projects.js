import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const mainStyle = {
    position: 'relative',
    top:'100px',
    
}

export default function Projects() {


    return (

        <main className="main-container" style={mainStyle}>
            <Container maxWidth="lg" className="">
                <Grid container spacing={3}>
                {/* Project Placeholder */}
                    <Grid item xs={12} md={4} lg={3}>
                    <Paper className="fixed-paper-height">
                    Pretend Project
                    
                    </Paper>
                </Grid>
                <Grid>
                    <Paper>
                        Pretend Project
                    </Paper>
                </Grid>
                <Grid>
                    <Paper>
                        Pretend Project
                    </Paper>
                </Grid>
                </Grid>
            </Container>
        </main>
    );
}