import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import {signInWithGoogle, auth} from '../../firebase/firebase.util';
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

//class SignIn extends React.Component {
const SignIn = ({emailSignInStart,googleSignInStart}) => {
    
    const [userCredentials, setCredentials] = useState({email: "", password: ""});

    const {email, password} = userCredentials;

    // form submit handler
    const handleSubmit = async (event) => {
        event.preventDefault();

       emailSignInStart(email, password);
    };

    // form input change handler
    const handleChange = event => {
        // get event.target.name and event.target.value
        const {value, name} = event.target;
        // the name of the input should be the same as the name of the state
        setCredentials({...userCredentials, [name]: value});
    };

        // Form Input component to redner from inputs for resuability
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        value={email} 
                        handleChange={handleChange}
                        label = "Email"
                        required />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={password} 
                        handleChange={handleChange}
                        label = "Password"
                        required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
}

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    };
  }

export default connect(null, mapDispatchToProps)(SignIn);