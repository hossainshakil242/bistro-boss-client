import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Login = () => {
    const [disable, setDisable] = useState(true);

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result;
                console.log(user);
                // sweet alert
                Swal.fire({
                    position: "center]",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        } else {
            Swal.fire({
                icon: "error",
                title: "captcha wrong"
              });
        }

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <LoadCanvasTemplate />
                                    <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="type the captcha above" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={disable} className='btn btn-primary' type="submit" value="Login" />
                                    <p className='text-center'><small>New Here? <Link to='/signup' className='underline text-primary'>Create an Account</Link></small></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;