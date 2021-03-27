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
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const MaterialTableUser = (props) => {
  const [modal, setModal] = useState(false);

  const [title, setTitle] = useState('');
  const unitObject = {
    Account_Name      : '',
    Phone      : '',
    Fax: '',
    Website: ''
}
  const [unit, setUnit] = useState(unitObject);
  const [action, setAction] = useState('');
    console.log(props.settingData)
    console.log(props.infoData)
    let dataFieldNames = []
    const {settingData, infoData, tempInfoData,setInfoData,setTempInfoData } = props;
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


    const addData = () => {
      setUnit(unitObject)
      setTitle('Add User')
      setAction('Add')
      setModal(true);
  };

    const editData = (rowData) => {
      setUnit(rowData);
      setTitle('Edit Data');
      setAction('Save');
      setModal(true)
    }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUnit({...unit, [name]: value})
    console.log(unit)
}

  const handleSubmit = (e) => {
    e.preventDefault()
    if(action === "Add"){
      const newData = infoData;
      console.log(newData)
      newData.push(unit)
      console.log(newData)
      setInfoData(newData)
      // setTempInfoData(newData)
     
      console.log(infoData)
      setModal(false)
    }
    else{
      setModal(false)
    }
    
  }

    // const handleKeyword = (e) => {
    //     const val = infoData !== null && infoData.filter(userData => JSON.stringify(userData).toLowerCase().includes(e.target.value.toLowerCase()))
    //     console.log(val)
    // }
    return (
        <div>
        <TableContainer component={Paper}>
        <div className="row" style={{float:'right'}}>
            <div>
                <TextField id="filled-basic" label="Search" variant="filled" style={{marginRight:"0.6rem",marginBottom:"0.4rem"}} onChange={(e) => props.handleKeyword(e, settingData.field_api_name,settingData,infoData)} />
                <Button variant="contained" color="primary" style={{marginRight:"0.4rem",marginTop:"0.5rem"}} onClick={() =>  addData('Add')}>
                    Add New Data
                </Button>
                <Modal
                  className="container-fluid"
                  isOpen={modal}
                  size="lg"
                 
                >
                  <ModalHeader >{title}</ModalHeader>
                  <ModalBody>
                    <form onSubmit={handleSubmit} >
                      {dataFieldNames.map(inputField => (
                        <input type="text" className="form-control" name={inputField} placeholder={inputField} onChange={handleInputChange} defaultValue={unit[inputField]}  ></input>
                      ))}

                        <button className="btn btn-pill btn-sm btn-primary d-block ml-auto mt-2" type="submit" > {action} </button>
                        
                    
                    </form>
                  </ModalBody>
                </Modal>
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
            {tempInfoData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rowData) => (
              
              <TableRow key={rowData.id}>
                {dataFieldNames.map( field_name => {
                //  console.log(rowData)
                  return <TableCell align="left"> {rowData[field_name] }  </TableCell>
                })}    
                <TableCell align="right">
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button  onClick={() => editData(rowData)}>Edit</Button>
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
        count={tempInfoData !== null && tempInfoData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
    />

      </div>
    );
};

export default MaterialTableUser;