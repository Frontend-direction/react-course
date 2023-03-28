import { createContext, useState, useCallback } from 'react';
import { fetchData } from '../fake-api';

const BookingContext = createContext();

const Provider = ({ children}) => {
  const [range, setRange] = useState({ start: null, end: null});
  const [appartments, setAppartments] = useState([]);

  const setStartDate  = (date) => {
    if(!!range.end && date > range.end) throw new Error('Start date must be before end date');

    setRange(prev => ({...prev, start: date}));
  }

  const setEndDate = (date) => {
    if(!!range.start && date < range.start) throw new Error('End date must be before start date');

    setRange(prev => ({...prev, end: date}));
  }

  const fetchAppartments = useCallback(async () => {
    if(!range.start || !range.end) return;

    const data = await fetchData();

    setAppartments(data);
  }, [range]);

  const share = {
    range,
    appartments,
    setStartDate,
    setEndDate,
    fetchAppartments
  }

  return (
    <BookingContext.Provider value={share}>
      {children}
    </BookingContext.Provider>
  )
}

export { Provider, BookingContext }