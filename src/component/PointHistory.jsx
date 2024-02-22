import React, { useState, useEffect } from "react";
import {
  Avatar,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { formatDate } from "../utils/dateFormator";
import { green } from "@mui/material/colors";

const generateDummyPointHistory = () => {
  const currentDate = new Date();
  const dummyData = [
    {
      _id: 1,
      title: "Completed Task 1",
      xp: 50,
      createdAt: currentDate,
    },
    {
      _id: 2,
      title: "Completed Task 2",
      xp: 100,
      createdAt: new Date(currentDate.getTime() - 86400000),
    },
    {
      _id: 1,
      title: "Completed Task 1",
      xp: 50,
      createdAt: currentDate,
    },
    {
      _id: 1,
      title: "Completed Task 1",
      xp: 50,
      createdAt: currentDate,
    },
  ];
  return dummyData;
};

function PointHistoryPage() {
  const [pointHistory, setPointHistory] = useState([]);

  useEffect(() => {
    setPointHistory(generateDummyPointHistory());
  }, []);

  return (
    <Container maxWidth="md">
      <List>
        {pointHistory.map((historyItem, index) => (
          <React.Fragment key={historyItem._id}>
            <ListItem>
              <ListItemText
                style={{ fontFamily: "inherit" }}
                primary={historyItem.title}
                secondary={`${formatDate(historyItem.createdAt)}`}
              />
              <Avatar sx={{ bgcolor: green[500], width: 35, height: 35 }}>
                <Typography variant="body2" sx={{ fontSize: 12 }}>
                  +{historyItem?.xp}
                </Typography>
              </Avatar>
            </ListItem>
            {index !== pointHistory.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}

export default PointHistoryPage;
