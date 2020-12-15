import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const mainStyle = {
    position: 'relative',
    top:'100px',
    
}

export default function Tasks() {


    return (

        <main className="main-container" style={mainStyle}>
            <Container maxWidth="lg" className="">
                <Grid container spacing={2}>
                {/* Groups Placeholder */}
                    <Grid item xs={12} md={4} lg={3}>
                    <Paper className="fixed-paper-height">
                    Unfinished Tasks go here
                    
                    </Paper>
                </Grid>
                <Grid>
                    <Paper>
                        Finished tasks go here
                    </Paper>
                </Grid>
                
                </Grid>
            </Container>
        </main>
    );
}