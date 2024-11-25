import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .thenI(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
  };
  //   console.log(watch('name'));

  return (
    <>
    <Helmet>
        <title>Bistro Boss || signUP</title>
    </Helmet>

    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-600">
                  <small>name is required</small>
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-rose-600">
                  <small>email is required</small>
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 16,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*%])(?=.*[0-9])(?=.*[a-z]).{8}$/
                })}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">
                  <small>password is required</small>
                </span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-red-600">
                    <small>password should be minimum 8 length</small>
                </span>
              )}
              {errors.password?.type === 'maxLength' && (
                <span className="text-rose-600">
                    <small>password should be maximum 16 length</small>
                </span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className="text-rose-600">
                    <small>password must be one uppercase lowercase number and symbol</small>
                </span>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUP" />
            </div>
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                <Link to={'/login'}>Have you already account? Loing</Link>
                </a>
              </label>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;