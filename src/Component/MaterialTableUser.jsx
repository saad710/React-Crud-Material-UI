import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TablePagination, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const MaterialTableUser = (props) => {
    console.log(props.settingData)
    console.log(props.infoData)
    let dataFieldNames = []
    const {settingData, infoData, setInfoData } = props;
    // let keyword = {infoData}
    // console.log(keyword)
    // const [tempInfoData,setTempInfoData] = useState(keyword)
    console.log(props.setInfoData)

    //store_field_name
    settingData.fields.forEach(field => {
        dataFieldNames = [...dataFieldNames, field.api_name];
      });
    console.log(dataFieldNames)

    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // const handleKeyword = (e) => {
    //     const val = infoData !== null && infoData.filter(userData => JSON.stringify(userData).toLowerCase().includes(e.target.value.toLowerCase()))
    //     console.log(val)
    // }
    return (
        <div>
        <TableContainer component={Paper}>
        <div className="row" style={{float:'right'}}>
            <div>
                <TextField id="filled-basic" label="Search" variant="filled" style={{marginRight:"0.6rem",marginBottom:"0.4rem"}} onChange={(e) => props.handleKeyword(e, settingData.field_api_name)} />
                <Button variant="contained" color="primary" style={{marginRight:"0.4rem",marginTop:"0.5rem"}}>
                    Add New Data
                </Button>
            </div>
        </div>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow >
              {settingData.fields.map(field => {
                return (<TableCell>{field.display_name}</TableCell>)
              })}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {infoData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rowData) => (
              <TableRow key={rowData.id}>
                {dataFieldNames.map( field_name => {
                  return <TableCell align="left"> {rowData[field_name] }  </TableCell>
                })}    
                <TableCell align="right">
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button >Edit</Button>
                    <Button onClick={(event) => props.handleDeleteRecordData(event, settingData.field_api_name, rowData.id)} >Delete</Button>
                  </ButtonGroup>
                </TableCell>          
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            <TablePagination
        rowsPerPageOptions={[1,5,10, 25, 100]}
        component="div"
        count={infoData !== null && infoData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
    />

      </div>
    );
};

export default MaterialTableUser;