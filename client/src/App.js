// import "./index.css";
// import Home from "./routes/Home";
// import Noah from "./routes/Noah"; //Make sure to update route whenever changes are made.//
// import Alaina from "./routes/Alaina";
// import Bryan from "./routes/Bryan";
// import Login from "./components/LoginForm"
// import Signup from "./components/SignupForm"
// import { ApolloProvider } from '@apollo/react-hooks';
// import { BrowserRouter as NavLink } from 'react-router-dom';
// import { Route, Routes, Router } from 'react-router-dom'; 
// import ApolloClient from 'apollo-boost';

// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: '/graphql'
// });

// function App() {
//     return (
//       <ApolloProvider client={client}>
//         <Router>
//           <div class="container content-area">
//             <div>
//               <NavLink>
//                 <Route exact path="/" element={Home} />
//                 <Route exact path="/login" component={Login} />
//                 <Route exact path="/signup" component={Signup} />
//                 <Route exact path="/Noah" element={Noah} />
//                 <Route exact path="/Alaina" element={Alaina} />
//                 <Route exact path="/Bryan" element={Bryan} />
//               </NavLink>
//             </div>
//             <div>
              
//             </div>
//           </div>
//         </Router>
//       </ApolloProvider>
//     );
//   }
// export default App;

import './index.css'
import Home from "./routes/Home";
import Noah from "./routes/Noah"; //Make sure to update route whenever changes are made.//
import Alaina from "./routes/Alaina";
import Bryan from "./routes/Bryan";
import Login from "./components/LoginForm"
import Signup from "./components/SignupForm"
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

// import Apollo hooks and modules
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div class="container content-area">
        
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/Noah" component={Noah} />
              <Route exact path="/Alaina" component={Alaina} />
              <Route exact path="/Bryan" component={Bryan} />
            </Switch>
          </div>
          <div>
           
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;