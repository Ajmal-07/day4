import logo from './logo.svg'
//import './App.css'
import { AppBar, Button, List, ListItem } from '@material-ui/core';
function App(){
  const day="Morning"
  return(
    <div>
      <AppBar color='primary' position='static'>
        <h1>Header</h1>

      </AppBar>
      {/* <h1 style={{color:'red',fontFamily:"monospace"}}>Hello,Good {day}..!</h1> */}
      <h1>Hello,Good {day}..!</h1>
      <Button class='btn'>Click here.!</Button>
    </div>
  );
}
export default App;