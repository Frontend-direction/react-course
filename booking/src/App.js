import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './containers/Layout';
import { Provider } from './context/bookingsContext';

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Provider>
        <Layout />
      </Provider>
    </ThemeProvider> 
  );
}

export default App;
