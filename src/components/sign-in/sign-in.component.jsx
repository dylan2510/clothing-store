import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    // form submit handler
    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            // sign in using firebase email and password
            await auth.signInWithEmailAndPassword(email, password);

            // reset the state after sign in
            this.setState({email: '', password: ''});
        }
        catch (error) {
            console.log(error);
        }

        this.setState({email: '', password: ''});
    };

    // form input change handler
    handleChange = event => {
        // get event.target.name and event.target.value
        const {value, name} = event.target;
        // the name of the input should be the same as the name of the state
        this.setState({[name]: value});
    };

    render(){
        // Form Input component to redner from inputs for resuability
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label = "Email"
                        required />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label = "Password"
                        required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;