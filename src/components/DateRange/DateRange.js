import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import "./DateRange.scss"

function DateRange(props) {
    
  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className='date-picker' label={props.label} disablePast={true}/>
        </LocalizationProvider>
    </div>
  )
}

export default DateRange