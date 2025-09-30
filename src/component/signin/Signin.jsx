import React, { useState } from "react";
import "./Signin.css";
import image from "../../assets/shoes.png";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useAuth } from "../context/useAuth";
const Signin = () => {
  const [islogin, setislogin] = useState(false);
  const [forgoten, setforgoten] = useState(false);
  const [isreset, setisreset] = useState(false);
  const [isVerify, setisVerify] = useState(false);
  const [isPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login, signup, loginWithGoogle, loginWithFacebook } = useAuth();

  const handleLogin = async () => {
    setError('');
    const result = await login(email, password);
    if (result.success) {
      navigate("/home");
    } else {
      setError(result.error);
    }
  };

  const handleSignup = async () => {
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const result = await signup(name, email, password);
    if (result.success) {
      navigate("/home");
    } else {
      setError(result.error);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    const result = await loginWithGoogle();
    if (result.success) {
      navigate("/home");
    } else {
      setError(result.error);
    }
  };

  const handleFacebookLogin = async () => {
    setError('');
    const result = await loginWithFacebook();
    if (result.success) {
      navigate("/home");
    } else {
      setError(result.error);
    }
  };
  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="left-name">
          <img src={image} className="img" />
          <h1>ZYN</h1>
          <p>stylooo</p>
        </div>
      </div>
      <div className="signin-right">
        <div className="right-data">
          <div className="container">
            {!forgoten && <p>{islogin ? "welcome back" : "Welcome"}</p>}
            {!forgoten && (
              <h1>
                {islogin
                  ? "log in to Your Account "
                  : "sign up to Your Account"}
              </h1>
            )}

            {!isreset && (
              <p className="reset-p">
                {!isreset ? "Reset Password" : " check your email"}
              </p>
            )}

            <form className="form-input">
              {!isreset && (
                <>
                  {!islogin && (
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                  )}
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="johnsondeo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                    {forgoten && islogin && (
                      <button
                        className="reset"
                        onClick={() => {
                          setisreset(true);
                        }}
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </>
              )}
              {!isPassword && isreset && (
                <div className="reset-otp">
                  <h1>{isVerify ? "Password Reset" : "Check Your Email"}</h1>
                  <p>
                    
                    { isVerify ? (
                      <>
                        Your password has been successfully reset.
                        <br />
                        Click confirm to set a new password
                      </>
                    ) : (
                      <>
                        <p>
                          {" "}
                          We sent an OTP to
                          <span>Johnsondeo@nomail.com</span>
                          <br />
                          Enter 5 digit code that was mentioned in the email
                        </p>
                      </>
                    )}
                  </p>
                  { !isVerify && (
                    <div className="otp-button">
                      <input type="digit" className="otp-btn" />
                      <input type="digit" className="otp-btn" />
                      <input type="digit" className="otp-btn" />
                      <input type="digit" className="otp-btn" />
                      <input type="digit" className="otp-btn" />
                    </div>
                  )}

                  <button
                    className="verify-button"
                    onClick={() => {
                      setisVerify(true);
                      
                    }}
                  >
                    { isVerify ? "Confirm" : "Verify code"}
                  </button>

                  {!isVerify && (
                    <div className="resend-email">
                      <p> Haven't got the email yet? </p>
                      <a href="">Resend email</a>
                    </div>
                  )}
                </div>
              )}

              {/* {
                isPassword && (
                  <div className="form-group">
                    <input type="text" />
                  </div>
                
              } */}

              {forgoten && !islogin && (
                <div className="form-group">
                  <label> confirm Email</label>
                  <input type="email" placeholder="johnsondeo@gmail.com" />
                </div>
              )}

              {!forgoten && (
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              )}

              {!islogin && (
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
              )}

              {!forgoten && islogin && (
                <div className="remember">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Remember Me</p>
                  </div>
                  <div className="forgotten">
                    <a
                      href="#"
                      onClick={() => {
                        setforgoten(true);
                      }}
                    >
                      Forgot password
                    </a>
                  </div>
                </div>
              )}
              {!forgoten && (
                <div className="butn">
                  <button onClick={islogin ? handleLogin : handleSignup}>
                    {islogin ? "login" : "sign up"}
                  </button>
                </div>
              )}
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

              {!forgoten && (
                <div className="lines">
                  <div className="line1"></div>
                  <p>or</p>
                  <div className="line2"></div>
                </div>
              )}

              {!forgoten && (
                <div className="socialmedia-account">
                  <div className="google-login">
                    <button onClick={handleGoogleLogin}>
                      {" "}
                      <FcGoogle />{" "}
                      {islogin ? "log in with Google" : "sign up with Google"}
                    </button>
                  </div>
                  <div className="facebook-login">
                    <button onClick={handleFacebookLogin}>
                      {" "}
                      <RiFacebookCircleFill color="#039be5" />{" "}
                      {islogin
                        ? "log in with facebook"
                        : "sign up with facebook"}
                    </button>
                  </div>
                </div>
              )}

              {!forgoten && (
                <div className="login-here">
                  {islogin ? (
                    <>
                      <h3>Don’t have an account?</h3>
                      <a href="#" onClick={() => setislogin(false)}>
                        SIGN UP HERE
                      </a>
                    </>
                  ) : (
                    <>
                      <h3>Already have an account?</h3>
                      <a href="#" onClick={() => setislogin(true)}>
                        LOGIN HERE
                      </a>
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
