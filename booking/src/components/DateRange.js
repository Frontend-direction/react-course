import { useContext, useState } from 'react';
import DatePicker from "../components/DatePicker";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { BookingContext } from "../context/bookingsContext";

function DateRange() {
  const { range, setStartDate, setEndDate } = useContext(BookingContext);
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');

  const onStartDateChange = (date) => {
    try {
      setStartDate(date);
      setStartDateError('');
    } catch (error) {
      setStartDateError(error.message);
    }
  }

  const onEndDateChange = (date) => {
    try {
      setEndDate(date);
      setEndDateError('')
    } catch (error) {
      setEndDateError(error.message);
    }
  }
  
  return (
    <>
      <Grid2 xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
          <DatePicker 
            label='FROM' 
            value={range.start} 
            setValue={onStartDateChange} 
            errorMessage={startDateError}   
          />  
        </Box>
      </Grid2>
      <Grid2 xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
          <DatePicker 
            label='TO' 
            value={range.end} 
            setValue={onEndDateChange}
            errorMessage={endDateError}
          />
        </Box>
      </Grid2>
    </>
  )
}

export default DateRange;