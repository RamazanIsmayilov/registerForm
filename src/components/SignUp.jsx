import Logo from '../img/logo.png'

export const SignUp = () => {
    return (
        <div className="register rounded-4 d-flex">
            <div className="left rounded-4 mx-2 my-2">
                <div className="heading d-flex align-items-center mx-3 mt-2">
                    <img width={90} src={Logo} alt="logo" />
                    <span className='text-light fw-bold'>Register Form</span>
                </div>
                <div className="hero mx-5">
                    <h2 className='fw-bold text-light'>Please, <br /> <span>register</span> for free</h2>
                </div>
                <div className="footer mt-5 mx-5 d-flex gap-5">
                    <a href="/" className='fw-bold text-decoration-none'>
                        <span>LogIn</span>
                    </a>
                    <a href="/" className='fw-bold text-decoration-none'>
                        <span>SignUp</span>
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="heading"></div>
            </div>
        </div>
    )
}

