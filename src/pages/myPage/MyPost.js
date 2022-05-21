import * as React from 'react';
import PropTypes from 'prop-types';
import TabList from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import RecipeTab from 'pages/myPage/RecipeTab';
import PartyTab from 'pages/myPage/PartyTab';
import CommentTab from 'pages/myPage/CommentTab';

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: '#bababa',
          '&.Mui-selected': {
            color: '#000000',
            fontWeight: '800',
          },
        },
        indicator: {
          height: 0,
        },
      },
    },
  },
});

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{p: 3, padding: 0}}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MyPost() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h3>나의 글</h3>
      <ThemeProvider theme={theme}>
        <Box sx={{width: '100%'}}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <TabList
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
              TabIndicatorProps={{sx: {height: ''}}}>
              <Tab label="레시피" {...a11yProps(0)} />
              <Tab label="파티" {...a11yProps(1)} />
              <Tab label="댓글" {...a11yProps(2)} />
            </TabList>
          </Box>
          <TabPanel value={value} index={0}>
            <RecipeTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PartyTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CommentTab />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default MyPost;
