import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography } from '@mui/material';
import { BadgeContent } from './BadgeContent';

export function CustomTabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box mt={5} sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary" 
        textColor="secondary"
        centered
      >
        <Tab 
          label={
            <Typography style={{ fontFamily:'Roboto',fontWeight:'bold' }}>
              Membership
            </Typography>
          }
        />
        <Tab 
          label={
            <Typography style={{ fontFamily:'Roboto',fontWeight:'bold' }}>
              Badge
            </Typography>
          }
        />
        <Tab 
          label={
            <Typography style={{ fontFamily:'Roboto',fontWeight:'bold' }}>
              Point History
            </Typography>
          }
        />
      </Tabs>
      {/* Content for each tab can be added here based on the selected tab */}
      {value === 0 && <Typography align='center'>Membership Content</Typography>}
      {value === 1 && <div>{<BadgeContent />}</div>}
      {value === 2 && <div>Point History Content</div>}
    </Box>
  );
}




