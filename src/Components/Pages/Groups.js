import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const mainStyle = {
    position: 'relative',
    top:'100px',
    
}

export default function Groups() {


    return (

        <main className="main-container" style={mainStyle}>
            <Container maxWidth="lg" className="">
                <Grid container spacing={3}>
                {/* Groups Placeholder */}
                    <Grid item xs={12} md={4} lg={3}>
                    <Paper className="fixed-paper-height">
                    Pretend Group 1

                    Group Member 1
                    Group Member 2
                    etc.
                    
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