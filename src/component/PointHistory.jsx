import React, { useState, useEffect } from 'react';
import { Container,  List, ListItem, ListItemText } from '@mui/material';
import { getUserPointHistory } from '../utils/fetchPointHistory';
import { formatDate } from '../utils/dateFormator';

function PointHistoryPage() {
  const [pointHistory, setPointHistory] = useState([]);

  useEffect(() => {
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
            style={{fontFamily: 'inherit'}}
              primary={historyItem.title}
              secondary={`XP: ${historyItem.xp}, Date: ${formatDate(historyItem.createdAt)}`}
              />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PointHistoryPage;
