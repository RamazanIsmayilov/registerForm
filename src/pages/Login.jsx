import Logo from '../img/logo.png'
import Google from '../img/google.png'
import Apple from '../img/apple.png'
import { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  const defaultUser = {
    email: 'ramazan@gmail.com',
    pass: 'ramazan2005'
  }

  const notifyWarning = () => toast.warn('Please enter your email address and password', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });

  const notifySuccess = () => toast.success('Registration is successful', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });

  const notifyDanger = () => toast.error('Email or password is incorrect', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });

  const formSubmit = e => {
    e.preventDefault();
    if (!email || !pass) {
      notifyWarning();
    } else {
      if (defaultUser.email === email && defaultUser.pass === pass) {
        notifySuccess();
      } else {
        notifyDanger();
      }
    }
  }


  const [show, setShow] = useState(false);
  const eyeShow = () => {
    setShow(!show);
  }
  return (
    <div className="register rounded-4 d-flex">
      <div className="left rounded-4 mx-2 my-2">
        <div className="container">
          <div className="heading d-flex align-items-center mt-2">
            <img width={90} src={Logo} alt="logo" />
            <span className='text-light fw-bold'>Register Form</span>
          </div>
          <div className="hero mx-4 d-flex align-items-center">
            <h2 className='fw-bold text-light'>Please, <br /> <span>Login</span> for free</h2>
          </div>
          <div className="footer mt-5 mx-4 d-flex gap-5">
            <NavLink to="/login" className='fw-bold text-decoration-none'>LogIn</NavLink>
            <NavLink to="/" className='fw-bold text-decoration-none'>SignUp</NavLink>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="container">
          <div className="heading mt-3 mx-4">
            <h2 className='text-light fw-bold'>Get Started Now</h2>
            <span className='text-light opacity-75'>Enter your credentials to access your account</span>
          </div>
          <div className="buttons d-flex mx-4 mt-4 gap-4">
            <button className='btn btn-dark d-flex align-items-center gap-2 py-2 px-3'>
              <img width={15} src={Google} alt="" />
              <span className='opacity-75 fw-bold'>Log in with Google</span>
            </button>
            <button className='btn btn-dark d-flex align-items-center gap-2 py-2 px-3'>
              <img width={15} src={Apple} alt="" />
              <span className='opacity-75 fw-bold'>Log in with Apple</span>
            </button>
          </div>
          <div className="line text-light d-flex align-items-center gap-4 mx-4 opacity-75">
            <span>_________________</span>
            <p className='mt-4'>or</p>
            <span>__________________</span>
          </div>
          <form onSubmit={formSubmit} className='mt- mx-4'>
            <div className="mb-3">
              <label className="form-label text-light opacity-75">Email address</label>
              <input type="email" className="form-control" onChange={e => { setEmail(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="form-label text-light opacity-75">Password</label>
              <div className='input-group'>
                <input type={show ? "text" : "password"} className="form-control" onChange={e => { setPass(e.target.value) }} />
                <button onClick={eyeShow} className="btn text-light border-secondary" type="button">{show ? <i class="fa-regular  fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}</button>
              </div>
            </div>
            <div className="mb-3 form-check d-flex align-items-center gap-2">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label text-light">I agree to the <a href="/">Terms & Privacy</a></label>
            </div>
            <button type="submit" className="buttons btn w-100 fw-medium mt-2 text-light">Register</button>
            <ToastContainer />
          </form>
          <div className='footer mt-4  d-flex align-items-center justify-content-center'>
            <span className='text-light d-flex gap-1 opacity-75'>Not registered??<Link to="/">SignUp</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login