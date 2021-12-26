import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import login from '../../../images/login.png'
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ContextUser} from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';





const Login = () => {
    // const [newUser, setNewUser] = useState(false)
    const app = initializeApp(firebaseConfig)
    const provider = new GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(ContextUser);
    const history = useHistory();
    const location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } };
   
    const { register, handleSubmit, formState: { errors } } = useForm();

    

    const handleGoogle=()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setLoggedInUser(user)
                console.log(user.displayName)
                history.replace(from);  
               
                
                // console.log(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
        
            });
    }

    return (
        <div className="container">
            <div className="row mt-5 pt-5 ms-5">
                <div className="col-md-5 m-3 pt-5">
                    <div className="card p-4 m-4">
                        <div className="card-body">
                            <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <input className='form-control' placeholder='Email' {...register("email")} /> <br />

                                <input className='form-control' placeholder='Password' {...register("password", { required: true })} />
                                {errors.password && <span>This field is required</span>} <br />
                                <p className='text-danger'>Forgot your password ?</p>
                                <button type="submit" className='btn btn-brand form-control text-white'>Sign In</button>
                            </form>
                            <p className='text-center'>OR</p>
                            <button onClick={handleGoogle} className='btn btn-brand form-control text-white'>Login With Google</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{ height: '500px' }} src={login} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Login;