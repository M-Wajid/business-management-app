import { ThemeProvider } from '@mui/system';
import {Container} from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Footer from './components/footer';
import Products from './components/products';

function App() {
  useEffect(()=>{
    document.title = "Business Management App";
  },[]);
  
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxwidth = "xl"
        sx = {{
          backgroud: '#fff'
        }}
      >
        <Appbar />
        <Banner />
        <Products />
        <Footer/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
