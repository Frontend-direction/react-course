import { DatePicker as MUIDataPicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function DatePicker ({ label, value, setValue, errorMessage }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDataPicker 
          label={label}
          value={value}
          disablePast
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            textField: {
              helperText: errorMessage,
            },
          }}
      />
    </LocalizationProvider>
  )
};


export default DatePicker;