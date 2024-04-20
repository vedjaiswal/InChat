import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


//import components
import FriendsList from './FriendsList';
import RequestList from './RequestList';
import AddFriend from './AddFriend';

export default function LabTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleChange}>
            <Tab label="Friends" value="1" />
            <Tab label="Requests" value="2" />
            <Tab label="Add Friend" value="3" />
          </TabList>
        </Box>
        <TabPanel style={{ padding : 0 }} value="1"><FriendsList/></TabPanel>
        <TabPanel style={{ padding : 0 }} value="2"><RequestList /></TabPanel>
        <TabPanel style={{ padding : 0 }} value="3"><AddFriend /></TabPanel>
      </TabContext>
    </Box>
  );
}
