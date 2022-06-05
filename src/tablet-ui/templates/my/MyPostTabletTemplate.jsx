import React from 'react';
import PropTypes from 'prop-types';
import TabList from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import RecipeTabTabletTemplate from 'tablet-ui/templates/my/RecipeTabTabletTemplate';
import PartyTabTabletTemplate from 'tablet-ui/templates/my/PartyTabTabletTemplate';
import CommentTabTabletTemplate from 'tablet-ui/templates/my/CommentTabTabletTemplate';

import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import TabletHeaderBar from 'tablet-ui/templates/header/TabletHeaderBar';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Divider from 'tablet-ui/atoms/Divider';
import HeadTitle from 'tablet-ui/atoms/HeadTitle';

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
          mt: '10px',
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

const MyPostTabletTemplate = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabletWrapper>
      <TabletHeaderBar />
      <Wrapper padding="88px 64px 0 64px">
        <HeadTitle title="나의 글"></HeadTitle>
      </Wrapper>
      <ThemeProvider theme={theme}>
        <Box sx={{width: '100%'}}>
          <Box
            sx={{
              borderBottom: 16,
              borderColor: Black5,
              padding: '24px 0',
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
              <RecipeTabTabletTemplate />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PartyTabTabletTemplate />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <CommentTabTabletTemplate />
            </TabPanel>
          </Wrapper>
        </Box>
      </ThemeProvider>
    </TabletWrapper>
  );
};

export default MyPostTabletTemplate;
