import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserLogin from './seeker/LoginPage';
import AdminLogin from './admin/LoginPage';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div>
      <div>
        <h1 style={{position:'relative',margin:'5px',display:'block'}}>New gen courses</h1> 
      </div >
      <BrowserRouter>
        <switch>
          <Route path="/user/login">
            <div >
                <UserLogin />
            </div>
          </Route>
          <Route path="/admin/login">
            <div >
              <AdminLogin />
            </div>
          </Route>
        </switch>
      </BrowserRouter>
      {/* <h4>Read carefully all the terms and conditions</h4> */}
    </div>
  );
}

export default App;
