import * as React from 'react';
import PropTypes from 'prop-types';
import TabList from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import RecipeTabTemplate from 'ui/templates/my/RecipeTabTemplate';
import PartyTabTemplate from 'ui/templates/my/PartyTabTemplate';
import CommentTabTemplate from 'ui/templates/my/CommentTabTemplate';
import Typography from 'ui/atoms/Typography';
import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';

import {Black5} from 'assets/colorSet';

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

const MyPostTemplate = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <HeaderBar />
      <Wrapper padding="72px 0 0 0">
        <Typography margin="1rem" fontWeight="600" fontSize="20px">
          나의 글
        </Typography>
        <ThemeProvider theme={theme}>
          <Box sx={{width: '100%'}}>
            <Box
              sx={{
                borderBottom: 16,
                borderColor: Black5,
              }}>
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
            <Wrapper padding="0 1rem">
              <TabPanel value={value} index={0}>
                <RecipeTabTemplate />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PartyTabTemplate />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CommentTabTemplate />
              </TabPanel>
            </Wrapper>
          </Box>
        </ThemeProvider>
      </Wrapper>
    </React.Fragment>
  );
};

export default MyPostTemplate;
