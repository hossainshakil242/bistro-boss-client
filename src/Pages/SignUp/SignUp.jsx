import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);
    const onSubmit = data => {
        createUser(data.email,data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    return (
        <>
        <Helmet>
            <title>Bistro Boss | Signup</title>
        </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUP Now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register('name', { required: true })} placeholder="Full Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500"><small>Name field is required</small></span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register('email', { required: true })} placeholder="Your Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500"><small>Email field is required</small></span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 16,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <span className="text-rose-500"><small>password must be minimun 6 characters</small></span>}
                                {errors.password?.type === 'maxLength' && <span className="text-rose-500"><small>password must be max 10 characters</small></span>}
                                {errors.password?.type === 'pattern' && <span className="text-rose-500"><small>password must be one uppercase,lowercase,number and special character</small></span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Signup" />
                                <p className="text-center"><small>Already Have an account?<Link to='/login' className="underline text-primary">Login</Link></small></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;