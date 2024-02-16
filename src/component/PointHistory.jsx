import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { getUserPointHistory } from '../utils/fetchPointHistory';

function PointHistoryPage() {
  const [pointHistory, setPointHistory] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    getUserPointHistory()
      .then((res)=>{
        console.log(res)
        setPointHistory(res.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container maxWidth="md">
     
      <List>
        {pointHistory.map(historyItem => (
          <ListItem key={historyItem._id}>
            <ListItemText
              primary={historyItem.title}
              secondary={`XP: ${historyItem.xp}, Date: ${new Date(historyItem.createdAt).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PointHistoryPage;
