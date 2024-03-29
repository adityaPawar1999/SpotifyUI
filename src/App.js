
import { ThemeProvider } from 'styled-components';
import MainContainer from './Components/MainContainer';
	import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const theme = {
    colors:{
      Green: '#1ED760',
      Black: '#000000',
      White: '#FFFFFF',
      LightGray: '#393939',
      DarGray: '#121212'
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContainer/>
    </ThemeProvider>
  );
}

export default App;
