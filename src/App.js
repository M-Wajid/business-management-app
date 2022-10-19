import { ThemeProvider } from '@mui/system';
import { AppBar, Button} from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';

function App() {
  useEffect(()=>{
    document.title = "Business Management App";
  },[]);
  
  return (
    <ThemeProvider theme={theme}>
      <container
        maxwidth = "xl"
        sx = {{
          backgroud: '#fff'
        }}
      >
        <Appbar />
        {
          /*
          Banner
          Promotion
          title
          Products
          footer
          Search box
          Appdrawer
          */
        }
        <Button variant='contained'>test</Button>
      </container>
    </ThemeProvider>
  );
}

export default App;
