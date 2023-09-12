import React, { useState, useEffect } from "react";
import axios from 'axios';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import { getUsers, deletefamily } from "../utils/Auths";
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import SearchBar from "material-ui-search-bar";


function User() {
    let navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState([]);
    const apiUrl = 'https://sweede.app/DeliveryBoy/Get-Employee/';

    useEffect(() => {

        axios.get(apiUrl)
            .then((response) => {

                setEmployeeData(response.data);
                console.log(response.data, '1233')
            })
            .catch((error) => {

                console.error('Error:', error);
            });
    }, []);



    const [deleted, setDeleted] = useState(false);
    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };





    ;
    return (
        <>
            <Box >

                <Grid container spacing={2} >


                    <Grid item xs>

                    </Grid>
                    <Grid item xs={8}>
                        <h2 style={{ textAlign: 'initial', }}>Employee List</h2>
                        <TableContainer component={Paper} >
                            <Table aria-label="simple table">

                                <TableHead>
                                    <TableRow>
                                        <TableCell >
                                            <Box>
                                                Name

                                            </Box>
                                        </TableCell>
                                        <TableCell align="left" >
                                            <Box >
                                                DOB

                                            </Box>
                                        </TableCell>
                                        <TableCell align="left" >
                                            Start Date
                                        </TableCell>
                                        <TableCell align="left" >
                                            End Date
                                        </TableCell>
                                        <TableCell align="left" >
                                            Description
                                        </TableCell>
                                        <TableCell align="right" >

                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        employeeData.map((row, index) => {
                                            return (
                                                <>
                                                    <TableRow style={index % 2 ? { background: "#f9fafd" } : { background: "white" }}>
                                                        <TableCell align="left" > {row.FirstName}{row.LastName}</TableCell>
                                                        <TableCell align="left" >{row.DOB}</TableCell>
                                                        <TableCell align="left" >
                                                            {/* <Moment date={row.StartDate} format="YYYY/MM/DD" /> */}
                                                            {row.StartDate}
                                                        </TableCell>
                                                        <TableCell align="left"  >
                                                            {row.EndDate}
                                                        </TableCell>
                                                        <TableCell align="left" >
                                                            {/* <Moment fromNow>
                                                            {row.last_login}
                                                        </Moment> */}
                                                            {row.Description}
                                                        </TableCell>
                                                        <TableCell align="right" >
                                                            <div>
                                                                <Button
                                                                    id="basic-button"
                                                                    aria-controls={open ? 'basic-menu' : undefined}
                                                                    aria-haspopup="true"
                                                                    aria-expanded={open ? 'true' : undefined}
                                                                    onClick={handleClick}
                                                                >
                                                                    <DragIndicatorIcon />
                                                                </Button>
                                                                <Menu
                                                                    id="basic-menu"
                                                                    anchorEl={anchorEl}
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    MenuListProps={{
                                                                        'aria-labelledby': 'basic-button',
                                                                    }}
                                                                >
                                                                    <MenuItem onClick={handleClose}><RemoveRedEyeIcon className="icon" />View</MenuItem>
                                                                    <MenuItem   onClick={() => {
                                                                        navigate(`/update/${row.id}/${row.FirstName}/${row.LastName}/${row.DOB}/${row.Study}/${row.StartDate}/${row.EndDate}/${row.CurrentSalary}/${row.Description}`)
                                                                    }}><CreateIcon className="icon" />Edit</MenuItem>
                                                                    <MenuItem onClick={() => {
                                                                        if (window.confirm("Are you sure you want to delete this family ")) {
                                                                           
                                                                            deletefamily(row.id)
                                                                                .then(() => {
                                                                                    setDeleted(!deleted);
                                                                                    window.location.reload()
                                                                                })
                                                                                .catch(err => {
                                                                                  
                                                                                    console.error("Error deleting item:", err);
                                                                               
                                                                                });
                                                                        }
                                                                    }}>
                                                                        Delete
                                                                    </MenuItem>

                                                                </Menu>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs>

                    </Grid>



                </Grid>
            </Box>
        </>
    )
};
export default User;



