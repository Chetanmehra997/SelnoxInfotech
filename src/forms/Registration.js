
import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItalic } from '@fortawesome/free-solid-svg-icons';
import { addfamilymenu } from '../utils/Auths';
import { Navigate, useNavigate } from 'react-router-dom';

function Registration() {
    const [selectedDate, setSelectedDate] = useState(null);
const navigate = useNavigate()
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [Study, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedSuggestions, setSelectedSuggestions] = useState([]);
    const inputRef = useRef(null);

    const allSuggestions = ['BE', 'M.Tech', 'MBA', 'B.Tech'];

    useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchTerm(inputValue);

        const filteredSuggestions = allSuggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);
    };

    const toggleSuggestion = (suggestion) => {
        setSelectedSuggestions((prevSelected) => {
            if (prevSelected.includes(suggestion)) {
                return prevSelected.filter((item) => item !== suggestion);
            } else {
                return [...prevSelected, suggestion];
            }
        });
    };

    const handleCheckboxChange = (suggestion) => {
        toggleSuggestion(suggestion);
    };

    const [Description, setDescription] = useState('');

    const handleTextChange = (e) => {
        setDescription(e.target.value);
    };

    const handleIconClick = (iconName) => {
        // Perform actions when an icon is clicked
        console.log(`Icon clicked: ${iconName}`);
    };

    const [FirstName, setName] = useState('');
    const [LastName, setLast] = useState('');
    const [DOB, setDob] = useState(null); // Changed to use null for the DatePicker initial state
    const [study, setStudy] = useState('');
    const [StartDate, setStartdate] = useState(null); // Changed to use null for the DatePicker initial state
    const [EndDate, setEnddate] = useState(null); // Changed to use null for the DatePicker initial state
    const [CurrentSalary, setCurrentsalary] = useState('');

    function familyadd() {
        const formattedDOB = DOB ? DOB.toISOString().split('T')[0] : null; // Format DOB if it's not null
        const formattedStartDate = StartDate ? StartDate.toISOString().split('T')[0] : null; // Format start date if it's not null
        const formattedEndDate = EndDate ? EndDate.toISOString().split('T')[0] : null; // Format end date if it's not null

        let value = {
            FirstName,
            LastName,
            DOB: formattedDOB,
            Study,
            StartDate: formattedStartDate,
            EndDate: formattedEndDate,
            CurrentSalary,
            Description,
        };

        addfamilymenu(value)
            .then((res) => {
                console.log(res, 123);
                // Add any navigation logic here if needed
                navigate('/user')
            })
            .catch((err) => {
                console.log('err', err.response.data.message);
            });
    }

    return (
        <div className="App">
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs></Grid>
                    <Grid item xs={6}>
                        <div>
                            <h2>Employee Registration Form</h2>
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <h5 className="text-align">First Name</h5>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="Enter your name"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <h5 className="text-align">Last Name</h5>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="Enter your name"
                                        onChange={(e) => {
                                            setLast(e.target.value);
                                        }}
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <h5 className="text-align">DOB</h5>
                                <div className="input-container" >
                                <div style={{ width: '100%' }}>
                                    <DatePicker
                                        selected={DOB}
                                        onChange={(date) => {
                                            setDob(date);
                                        }}
                                        style={{width:'100px'}}
                                        dateFormat="yyyy-MM-dd" // Customize the date format
                                        placeholderText="Enter your dob"
                                    />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <h5 className="text-align">Study</h5>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        id="search-bar"
                                        placeholder="Search"
                                        value={Study}
                                        onChange={handleInputChange}
                                        ref={inputRef}
                                        style={{
                                            width: '45rem',
                                            padding: '10px',
                                            background: 'aliceblue',
                                        }}
                                    />
                                    {showSuggestions && (
                                        <ul
                                            id="search-results"
                                            style={{
                                                position: 'absolute',
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: 0,
                                                border: '1px solid #ccc',
                                                display: 'block',
                                                position: 'absolute',
                                                backgroundColor: '#f9f9f9',
                                                minWidth: '160px',
                                                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                                                zIndex: 1,
                                                width: '49%',
                                            }}
                                        >
                                            {suggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        padding: '10px',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        backgroundColor: selectedSuggestions.includes(
                                                            suggestion
                                                        )
                                                            ? '#f2f2f2'
                                                            : 'transparent',
                                                    }}
                                                >
                                                    <span>{suggestion}</span>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedSuggestions.includes(suggestion)}
                                                        onChange={() => handleCheckboxChange(suggestion)}
                                                        style={{ marginLeft: '5px' }}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <h5 className="text-align">Start Date</h5>
                                <div className="input-container">
                                    <DatePicker
                                        selected={StartDate}
                                        onChange={(date) => {
                                            setStartdate(date);
                                        }}
                                        dateFormat="MM/dd/yyyy"
                                        placeholderText="2-6-22"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <h5 className="text-align">End Date</h5>
                                <div className="input-container">
                                    <DatePicker
                                        selected={EndDate}
                                        onChange={(date) => {
                                            setEnddate(date);
                                        }}
                                        dateFormat="MM/dd/yyyy"
                                        placeholderText="7-7-23"
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <h5 className="text-align">Current Salary</h5>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="300000"
                                        onChange={(e) => {
                                            setCurrentsalary(e.target.value);
                                        }}
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <h5 className="text-align">Description</h5>
                                <div className="input-container">
                                    {/* <FontAwesomeIcon
                                        icon={faItalic}
                                        className="icon"
                                        onClick={() => handleIconClick('Italic')}
                                    /> */}
                                    <textarea
                                        id="myTextarea"
                                        placeholder="Enter text..."
                                        style={{ width: '99%', background: 'aliceblue' }}
                                        value={Description}
                                        onChange={handleTextChange}
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <div className="btn">
                            <Button variant="contained" style={{ width: '100%', marginRight: '3rem',background: 'whitesmoke' }}>
                                Cancel
                            </Button>

                            <Button variant="contained" style={{ width: '100%',background: 'gray', }} onClick={familyadd}>
                                Save
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs></Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Registration;
