
// import React, { useState, useEffect, useRef } from 'react';
// import './style.css';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faItalic } from '@fortawesome/free-solid-svg-icons';
// import { updatefilmy } from '../utils/Auths';
// import { useParams, useNavigate } from 'react-router-dom';


// function convertDateStringToDate(dateString) {
//   const [year, month, day] = dateString.split('-').map(Number);
//   return new Date(year, month - 1, day); // Month is zero-based (0-11)
// }

// function Update() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const navigate = useNavigate();
//   const params = useParams();

//   // Define state variables for form fields
//   const [FirstName, setName] = useState('');
//   const [LastName, setLast] = useState('');
//   const [DOB, setDob] = useState(null);
//   const [Study, setSearchTerm] = useState('');
//   const [StartDate, setStartdate] = useState(null);
//   const [EndDate, setEnddate] = useState(null);
//   const [CurrentSalary, setCurrentsalary] = useState('');
//   const [Description, setDescription] = useState('');

//   // Retrieve parameters from the URL
//   const {
//     id,
//     FirstName: urlFirstName,
//     LastName: urlLastName,
//     DOB: urlDOB,
//     Study: urlStudy,
//     StartDate: urlStartDate,
//     EndDate: urlEndDate,
//     CurrentSalary: urlCurrentSalary,
//     Description: urlDescription,
//   } = params;

//   // Initialize state variables with URL parameters if available
//   useEffect(() => {
//     setName(urlFirstName || '');
//     setLast(urlLastName || '');
//     setDob(urlDOB ? convertDateStringToDate(urlDOB) : null);
//     setSearchTerm(urlStudy || '');
//     setStartdate(urlStartDate ? convertDateStringToDate(urlStartDate) : null);
//     setEnddate(urlEndDate ? convertDateStringToDate(urlEndDate) : null);
//     setCurrentsalary(urlCurrentSalary || '');
//     setDescription(urlDescription || '');
//   }, [
//     urlFirstName,
//     urlLastName,
//     urlDOB,
//     urlStudy,
//     urlStartDate,
//     urlEndDate,
//     urlCurrentSalary,
//     urlDescription,
//   ]);

//   // Handle form submission to update data
//   const familyadd = () => {
//     const formattedDOB = DOB ? DOB.toISOString().split('T')[0] : null;
//     const formattedStartDate = StartDate ? StartDate.toISOString().split('T')[0] : null;
//     const formattedEndDate = EndDate ? EndDate.toISOString().split('T')[0] : null;

//     updatefilmy(id, {
//       FirstName,
//       LastName,
//       DOB: formattedDOB,
//       Study,
//       StartDate: formattedStartDate,
//       EndDate: formattedEndDate,
//       CurrentSalary,
//       Description,
//     })
//       .then((res) => {
//         console.log(res, 333);
//         // You can navigate to a success page or handle the response as needed
//       })
//       .catch((err) => {
//         console.log(err);
//         // Handle the error as needed
//       });
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

    
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const [selectedSuggestions, setSelectedSuggestions] = useState([]);
//     const inputRef = useRef(null);

//     const allSuggestions = ['BE', 'M.Tech', 'MBA', 'B.Tech'];

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (inputRef.current && !inputRef.current.contains(event.target)) {
//                 setShowSuggestions(false);
//             }
//         }

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleInputChange = (event) => {
//         const inputValue = event.target.value;
//         setSearchTerm(inputValue);

//         const filteredSuggestions = allSuggestions.filter((suggestion) =>
//             suggestion.toLowerCase().includes(inputValue.toLowerCase())
//         );

//         setSuggestions(filteredSuggestions);
//         setShowSuggestions(true);
//     };

//     const toggleSuggestion = (suggestion) => {
//         setSelectedSuggestions((prevSelected) => {
//             if (prevSelected.includes(suggestion)) {
//                 return prevSelected.filter((item) => item !== suggestion);
//             } else {
//                 return [...prevSelected, suggestion];
//             }
//         });
//     };

//     const handleCheckboxChange = (suggestion) => {
//         toggleSuggestion(suggestion);
//     };

   

//     const handleTextChange = (e) => {
//         setDescription(e.target.value);
//     };

//     const handleIconClick = (iconName) => {
//         // Perform actions when an icon is clicked
//         console.log(`Icon clicked: ${iconName}`);
//     };

    
//     return (
//         <div className="App">
//             <Box>
//                 <Grid container spacing={3}>
//                     <Grid item xs></Grid>
//                     <Grid item xs={6}>
//                         <div>
//                             <h2>Employee Registration Form</h2>
//                         </div>
//                         <Grid container spacing={2}>
//                             <Grid item xs={6}>
//                                 <h5 className="text-align">First Name</h5>
//                                 <div className="input-container">
//                                     <input
//                                         type="text"
//                                         className="input-field"
//                                         placeholder="Enter your name"
//                                         value={FirstName}
//                                         onChange={(e) => {
//                                             setName(e.target.value);
//                                         }}
//                                     />
//                                 </div>
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <h5 className="text-align">Last Name</h5>
//                                 <div className="input-container">
//                                     <input
//                                         type="text"
//                                         className="input-field"
//                                         placeholder="Enter your name"
//                                         value={LastName}
//                                         onChange={(e) => {
//                                             setLast(e.target.value);
//                                         }}
//                                     />
//                                 </div>
//                             </Grid>
//                         </Grid>

//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <h5 className="text-align">DOB</h5>
//                                 <div className="input-container">
//                                     <DatePicker
//                                         selected={DOB}
//                                         onChange={(date) => {
//                                             setDob(date);
//                                         }}
//                                         dateFormat="yyyy-MM-dd" 
//                                       //  dateFormat= "YYYY-MM-DD"
//                                         placeholderText="Enter your dob"
//                                     />
//                                 </div>
//                             </Grid>
//                         </Grid>

//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <h5 className="text-align">Study</h5>
//                                 <div className="input-container">
//                                     <input
//                                         type="text"
//                                         id="search-bar"
//                                         placeholder="Search"
//                                         value={Study}
//                                         onChange={handleInputChange}
//                                         ref={inputRef}
//                                         style={{
//                                             width: '45rem',
//                                             padding: '10px',
//                                             background: 'aliceblue',
//                                         }}
//                                     />
//                                     {showSuggestions && (
//                                         <ul
//                                             id="search-results"
//                                             style={{
//                                                 position: 'absolute',
//                                                 listStyle: 'none',
//                                                 padding: 0,
//                                                 margin: 0,
//                                                 border: '1px solid #ccc',
//                                                 display: 'block',
//                                                 position: 'absolute',
//                                                 backgroundColor: '#f9f9f9',
//                                                 minWidth: '160px',
//                                                 boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
//                                                 zIndex: 1,
//                                                 width: '49%',
//                                             }}
//                                         >
//                                             {suggestions.map((suggestion, index) => (
//                                                 <li
//                                                     key={index}
//                                                     style={{
//                                                         padding: '10px',
//                                                         cursor: 'pointer',
//                                                         display: 'flex',
//                                                         alignItems: 'center',
//                                                         justifyContent: 'space-between',
//                                                         backgroundColor: selectedSuggestions.includes(
//                                                             suggestion
//                                                         )
//                                                             ? '#f2f2f2'
//                                                             : 'transparent',
//                                                     }}
//                                                 >
//                                                     <span>{suggestion}</span>
//                                                     <input
//                                                         type="checkbox"
//                                                         checked={selectedSuggestions.includes(suggestion)}
//                                                         onChange={() => handleCheckboxChange(suggestion)}
//                                                         style={{ marginLeft: '5px' }}
//                                                     />
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     )}
//                                 </div>
//                             </Grid>
//                         </Grid>

//                         <Grid container spacing={2}>
//                             <Grid item xs={6}>
//                                 <h5 className="text-align">Start Date</h5>
//                                 <div className="input-container">
//                                     <DatePicker
//                                         selected={StartDate}
//                                         onChange={(date) => {
//                                             setStartdate(date);
//                                         }}
//                                         dateFormat="MM/dd/yyyy"
//                                         // dateFormat= "YYYY-MM-DD"
//                                         placeholderText="2-6-22"
//                                     />
//                                 </div>
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <h5 className="text-align">End Date</h5>
//                                 <div className="input-container">
//                                     <DatePicker
//                                         selected={EndDate}
//                                         onChange={(date) => {
//                                             setEnddate(date);
//                                         }}
//                                         dateFormat="MM/dd/yyyy"
//                                         // dateFormat= "YYYY-MM-DD"
//                                         placeholderText="7-7-23"
//                                     />
//                                 </div>
//                             </Grid>
//                         </Grid>

//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <h5 className="text-align">Current Salary</h5>
//                                 <div className="input-container">
//                                     <input
//                                         type="text"
//                                         className="input-field"
//                                         placeholder="300000"
//                                         value={CurrentSalary}
//                                         onChange={(e) => {
//                                             setCurrentsalary(e.target.value);
//                                         }}
//                                     />
//                                 </div>
//                             </Grid>
//                         </Grid>

//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <h5 className="text-align">Description</h5>
//                                 <div className="input-container">
//                                     <FontAwesomeIcon
//                                         icon={faItalic}
//                                         className="icon"
//                                         onClick={() => handleIconClick('Italic')}
//                                     />
//                                     <textarea
//                                         id="myTextarea"
//                                         placeholder="Enter text..."
//                                         style={{ width: '99%', background: 'aliceblue' }}
//                                         value={Description}
//                                         onChange={handleTextChange}
//                                     />
//                                 </div>
//                             </Grid>
//                         </Grid>

//                         <div className="btn">
//                             <Button variant="contained" style={{ width: '100%', marginRight: '3rem' }}>
//                                 Cancel
//                             </Button>

//                             <Button variant="contained" style={{ width: '100%' }} onClick={familyadd}>
//                                 Save
//                             </Button>
//                         </div>
//                     </Grid>

//                     <Grid item xs></Grid>
//                 </Grid>
//             </Box>
//         </div>
//     );
// }

// export default Update;







import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItalic } from '@fortawesome/free-solid-svg-icons';
import { updatefilmy } from '../utils/Auths';
import { useParams, useNavigate } from 'react-router-dom';

function convertDateStringToDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // Month is zero-based (0-11)
}

function Update() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  // Define state variables for form fields
  const [FirstName, setName] = useState('');
  const [LastName, setLast] = useState('');
  const [DOB, setDob] = useState(null);
  const [Study, setSearchTerm] = useState('');
  const [StartDate, setStartdate] = useState(null);
  const [EndDate, setEnddate] = useState(null);
  const [CurrentSalary, setCurrentsalary] = useState('');
  const [Description, setDescription] = useState('');

  // Retrieve parameters from the URL
  const {
    id,
    FirstName: urlFirstName,
    LastName: urlLastName,
    DOB: urlDOB,
    Study: urlStudy,
    StartDate: urlStartDate,
    EndDate: urlEndDate,
    CurrentSalary: urlCurrentSalary,
    Description: urlDescription,
  } = params;

  // Initialize state variables with URL parameters if available
  useEffect(() => {
    setName(urlFirstName || '');
    setLast(urlLastName || '');
    setDob(urlDOB ? convertDateStringToDate(urlDOB) : null);
    setSearchTerm(urlStudy || '');
    setStartdate(urlStartDate ? convertDateStringToDate(urlStartDate) : null);
    setEnddate(urlEndDate ? convertDateStringToDate(urlEndDate) : null);
    setCurrentsalary(urlCurrentSalary || '');
    setDescription(urlDescription || '');
  }, [
    urlFirstName,
    urlLastName,
    urlDOB,
    urlStudy,
    urlStartDate,
    urlEndDate,
    urlCurrentSalary,
    urlDescription,
  ]);

  // Handle form submission to update data
  const familyadd = () => {
    const formattedDOB = DOB ? DOB.toISOString().split('T')[0] : null;
    const formattedStartDate = StartDate ? StartDate.toISOString().split('T')[0] : null;
    const formattedEndDate = EndDate ? EndDate.toISOString().split('T')[0] : null;

    updatefilmy(id, {
      FirstName,
      LastName,
      DOB: formattedDOB,
      Study,
      StartDate: formattedStartDate,
      EndDate: formattedEndDate,
      CurrentSalary,
      Description,
    })
      .then((res) => {
        console.log(res, 333);
      navigate("/user")
      })
      .catch((err) => {
        console.log(err);
        // navigate("/")
      });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    
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

   

    const handleTextChange = (e) => {
        setDescription(e.target.value);
    };

    const handleIconClick = (iconName) => {
        // Perform actions when an icon is clicked
        console.log(`Icon clicked: ${iconName}`);
    };

    
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
                                        value={FirstName}
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
                                        value={LastName}
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
                                <div className="input-container">
                                    <DatePicker
                                        selected={DOB}
                                        onChange={(date) => {
                                            setDob(date);
                                        }}
                                        dateFormat="yyyy-MM-dd" 
                                      //  dateFormat= "YYYY-MM-DD"
                                        placeholderText="Enter your dob"
                                    />
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
                                        // dateFormat= "YYYY-MM-DD"
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
                                        // dateFormat= "YYYY-MM-DD"
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
                                        value={CurrentSalary}
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
                                    <FontAwesomeIcon
                                        icon={faItalic}
                                        className="icon"
                                        onClick={() => handleIconClick('Italic')}
                                    />
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
                            <Button variant="contained" style={{ width: '100%', marginRight: '3rem' }}>
                                Cancel
                            </Button>

                            <Button variant="contained" style={{ width: '100%' }} onClick={familyadd}>
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

export default Update;
