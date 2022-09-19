import React from 'react';
import axios from 'axios';
import '../styles/form.scss';


class SignUp extends React.Component {
    constructor(){
        super();
    }
    handleFormSubmit = async e =>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const userName = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const confirmedPassword = e.target.elements.confirm.value;

        if(password !== confirmedPassword){
            console.log("Passwords do not match");
        } else{
            const newUser = {
                firstName: userName,
                lastName:userName,
                email,
                password
            }
            console.log(newUser);

            try{
                const config = {
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                }
                const body = JSON.stringify(newUser);
                const res = await axios.post('/api/user', body, config);
                console.log(res.data);
            } catch(e){
                console.log(e);
            }
        }
    }

    render(){
        return (
            <form className="form" onSubmit={this.handleFormSubmit}>
            <h3 className="form__heading">SIGNUP</h3>
            <input 
              className="form__input" 
              placeholder="Email Address" 
              type="email" 
              name="email"
            />
            <input 
              className="form__input" 
              placeholder="Username" 
              type="text" 
              name="username"
            />
            <input 
              className="form__input" 
              placeholder="Password" 
              type="password" 
              name="password"
            />
            <input 
              className="form__input" 
              placeholder="Confirm Password" 
              type="password" 
              name="confirm"
            />
            <input
              className="form__btn"
              type="submit"
              name="submit"
              value="Sign Up"
            />
          </form>
        )
    }
}

export default SignUp;