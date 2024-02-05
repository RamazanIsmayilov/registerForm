import Logo from '../img/logo.png'
import Google from '../img/google.png'
import Apple from '../img/apple.png'

export const SignUp = () => {
    return (
        <div className="register rounded-4 d-flex">
            <div className="left rounded-4 mx-2 my-2">
                <div className="container">
                    <div className="heading d-flex align-items-center mt-2">
                        <img width={90} src={Logo} alt="logo" />
                        <span className='text-light fw-bold'>Register Form</span>
                    </div>
                    <div className="hero mx-4 d-flex align-items-center">
                        <h2 className='fw-bold text-light'>Please, <br /> <span>register</span> for free</h2>
                    </div>
                    <div className="footer mt-5 mx-4 d-flex gap-5">
                        <a href="/" className='fw-bold text-decoration-none'>
                            <span>LogIn</span>
                        </a>
                        <a href="/" className='fw-bold text-decoration-none'>
                            <span>SignUp</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="container">
                    <div className="heading mt-5 mx-4">
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
                    <form className='mt-5 mx-4'>
                        <div className="mb-3">
                            <label className="form-label text-light opacity-75">Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-light opacity-75">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3 form-check d-flex align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label text-light">I agree to the <a href="/">Terms & Privacy</a></label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 fw-medium mt-2">Register</button>
                    </form>
                    <div className='footer mt-4  d-flex align-items-center justify-content-center'>
                        <span className='text-light d-flex gap-1 opacity-75'>Already a member?<a href="/">Login</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

