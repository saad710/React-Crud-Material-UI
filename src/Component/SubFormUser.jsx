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
import { TextField } from '@material-ui/core';

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
    const [tempInfoData,setTempInfoData] = useState(RecordDatas)
    
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
        let temp_data = {...infoData, ...tempInfoData }; 
        temp_data[field_api_name] = deletedDatas; 
        setInfoData( temp_data );
        setTempInfoData(temp_data);
        
      }

    //   const handleKeyword = (e,field_api_name) => {
    //     // console.log(field_api_name)
    //     let temp_record_datas = infoData[field_api_name];
    //     console.log(temp_record_datas)
    //     const val = temp_record_datas !== null && temp_record_datas.filter(userData => JSON.stringify(userData).toLowerCase().includes(e.target.value.toLowerCase()))
    //     console.log(val)

    //   }

      //Search_table_data
      const handleKeyword = (e,field_api_name,settingData) => {
       
        let dataFieldNames = [];
        settingData.fields.forEach(field => {
          dataFieldNames = [...dataFieldNames, field.api_name];
        });
        
        console.log(dataFieldNames)
        console.log(settingData)

        //row_try

        let valueData = []
        infoData[field_api_name].map(rowData => {
        dataFieldNames.forEach((dataField) =>  {
          valueData = [...valueData, rowData[dataField]]
          console.log(valueData)
          // setSearchData(rowData[dataField])
            
              // setTempInfoData(temp_data)
           
            // let temp_data ={...tempInfoData,...infoData}
            // temp_data[field_api_name] = val;
            // setTempInfoData(temp_data)
         
         
        })
        })
  
        const val =  valueData  && valueData.filter(userData => userData.toString().toLowerCase().includes(e.target.value.toLowerCase()))
      
        console.log(val)
        const valData = val.toString()
        console.log(valData)
       
          let temp_data ={...tempInfoData,...infoData}
          // temp_data[field_api_name] = infoData[field_api_name].filter(m => Object.values(m).some(v => v === valData));
          // temp_data[field_api_name] = infoData[field_api_name].filter(m => Object.values(m).includes(valData));
          //    setTempInfoData(temp_data)
          //   console.log(tempInfoData)
         
          val.forEach(v => {
            temp_data[field_api_name] = infoData[field_api_name].filter(m => Object.values(m).includes(v) );
           
  
          })
       
          setTempInfoData(temp_data)
            console.log(tempInfoData)
        //Column_try

        // const data = ['Account_Name','Phone']
        // var result = [];
        // let temp_record_datas = [];
       
        
        // dataFieldNames.forEach((dataField) =>  {
        //   temp_record_datas = [...temp_record_datas,infoData[field_api_name].map(info => info[dataField] )];
          
        // })
       
        // console.log(temp_record_datas)
        // console.log(infoData[field_api_name])
      
        
        // const val = temp_record_datas !== null && temp_record_datas.filter(userData => JSON.stringify(userData).toLowerCase().includes(e.target.value.toLowerCase()))
        // console.log(val)
        // let temp_data ={...tempInfoData,...infoData}
        // temp_data[field_api_name] = val;
        // setTempInfoData(temp_data)
      }

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              {mainData.map(settingData => (
            <Tab label={settingData.module}  value={settingData.field_api_name} id={settingData.field_api_name} aria-controls = {settingData.field_api_name} />
            ))}
               
          </Tabs>
          {/* <TextField id="filled-basic" label="Search" variant="filled" style={{float:"right"}}  /> */}
        </AppBar>
        {/* <TabPanel value={value} index={0}>
          Item One
        </TabPanel> */}
        {mainData.map(settingData =>(
            <TabPanel value={value} index={settingData.field_api_name} >
                <MaterialTable tempInfoData={tempInfoData[settingData.field_api_name]}  infoData={infoData[settingData.field_api_name]} setInfoData={setInfoData} setTempInfoData={tempInfoData[settingData.field_api_name]} settingData={settingData} handleDeleteRecordData={ (event, field_api_name, id) =>deleteRecordData(event, field_api_name, id)} handleKeyword={ (e, field_api_name,settingData,infoData) =>handleKeyword(e,field_api_name,settingData,infoData)} />
            </TabPanel>
     
        ) )}
      </div>
    );
};

export default SubFormUser;