import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography } from '@mui/material';
import { BadgeContent } from './BadgeContent';
import PointHistoryPage from './PointHistory';

export function CustomTabPanel() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={5} sx={{ width: '100%' }}>
  <Tabs
    sx={{ textTransform: "none" }}
    value={value}
    onChange={handleChange}
    indicatorColor="secondary"
    textColor="secondary"
    centered
  >
    <Tab
      sx={{ textTransform: "none", ml: 2, mr: 2 }} 
      
      label={
        <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Membership
        </Typography>
      }
    />
    <Tab
      sx={{ textTransform: "none", ml: 2, mr: 2 }} 
      label={
        <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Badges
        </Typography>
      }
    />
    <Tab
      sx={{ textTransform: "none", ml: 2, mr: 2 }} 
      label={
        <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Point History
        </Typography>
      }
    />
  </Tabs>
  {value === 0 && <Typography mt={10} sx={{fontFamily:'sans-serif'}} align='center'>Welcome To Membership Section</Typography>}
  {value === 1 && (
    <div style={{ maxHeight: '220px', overflowY: 'auto' }}>
      <BadgeContent />
    </div>
  )}
  {value === 2 && (
    <div style={{ maxHeight: '220px', overflowY: 'auto' }}>
      <PointHistoryPage />
    </div>
  )}
</Box>

  );
}
