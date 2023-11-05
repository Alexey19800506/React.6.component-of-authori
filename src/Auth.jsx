import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';



class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      preloader:true
    };
  }

handleLogin = () => {
  setTimeout(()=>this.setState({  
    preloader:false
  }),2000)
  this.setState({  
    isLoggedIn: true,   
  })
}

handleLogout = () => {
  this.setState({
    isLoggedIn: false,
  });
}
    render() {
        let button;
        if(this.state.isLoggedIn) {
          if(this.state.preloader) {
           button = <Spinner/>
          } else {
            button = <Logout onLogout={this.handleLogout} />
          }         
        } else {
          button = <Login onLogin={this.handleLogin}/>
        }         
        return (
          <div className='panel'> 
            {
              button                                
            }           
          </div>
        );
    }
}
   
export default Auth;

