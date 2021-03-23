import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MaterialTable from './MaterialTableUser';
import { RecordDatas, SettingsDatas } from './Fakedata';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };
    
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    }));
    

const SubFormUser = () => {

    const classes = useStyles();
 
    const [mainData,setMainData] = useState(SettingsDatas)
    const [infoData,setInfoData] = useState(RecordDatas)
    
    const [value, setValue] = useState(() => mainData[0].field_api_name);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
      //delete_table_data
      const deleteRecordData = (event, field_api_name, id)=>{
        console.log(id)
        console.log(field_api_name)
        let temp_record_datas = infoData[field_api_name];
        console.log(temp_record_datas)
        const deletedDatas = temp_record_datas.filter((indvData) => {return (indvData.id !== id)});
        console.log(deletedDatas)
        let temp_data = {...infoData }; 
        temp_data[field_api_name] = deletedDatas; 
        setInfoData( temp_data );
        
      }

      const handleKeyword = (e,field_api_name) => {
        // console.log(field_api_name)
        let temp_record_datas = infoData[field_api_name];
        console.log(temp_record_datas)
        const val = temp_record_datas !== null && temp_record_datas.filter(userData => JSON.stringify(userData).toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(val)
       

      }
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              {mainData.map(settingData => (
            <Tab label={settingData.module}  value={settingData.field_api_name} id={settingData.field_api_name} aria-controls = {settingData.field_api_name} />
            ))}
          </Tabs>
        </AppBar>
        {/* <TabPanel value={value} index={0}>
          Item One
        </TabPanel> */}
        {mainData.map(settingData =>(
            <TabPanel value={value} index={settingData.field_api_name} >
                <MaterialTable  infoData={infoData[settingData.field_api_name]} setInfoData={infoData[settingData.field_api_name]} settingData={settingData} handleDeleteRecordData={ (event, field_api_name, id) =>deleteRecordData(event, field_api_name, id)} handleKeyword={ (e, field_api_name) =>handleKeyword(e,field_api_name)} />
            </TabPanel>
     
        ) )}
      </div>
    );
};

export default SubFormUser;