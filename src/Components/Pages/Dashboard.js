import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Deposits from './Deposits';
import TaskList from './TaskList';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const mainStyle = {
  position: 'relative',
  top:'100px',
  
}


export default function Dashboard() {
  
  const [value, onChange] = useState(new Date());
  
  
  return (
     
      <main className="main-container" style={mainStyle}>
        <Container maxWidth="lg" className="">
          <Grid container spacing={3}>
            {/* Calendar */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className="fixed-paper-height">
        
                <Calendar 
                  onChange={onChange} 
                  value={value} 
                />
              </Paper>
            </Grid>
            {/* Placeholder */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className="fixed-paper-height">
                <Deposits />
              </Paper>
            </Grid>
            {/* Current Tasks */}
            <Grid item xs={12}>
              <Paper className="current-task-list">
                <TaskList />
              </Paper>
            </Grid>
          </Grid>
  
        </Container>
      </main>
  
  );
}