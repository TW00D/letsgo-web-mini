import React from 'react';
import FloatingLabel from './main.js';
const target = document.getElementById('content');
React.render(<FloatingLabel autoComplete={false} errorMsg='Full name can contain only the alphabets and space'
 pattern={/^[a-z\s]+$/i}/>,target);		 
