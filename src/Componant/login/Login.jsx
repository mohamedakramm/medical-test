import React, { useEffect, useState } from "react";
import "./styleLogin.css";
import { Button, Container, Form, Row, Col, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
export default function Login() {
  const [signIn, toggle] = useState(true);
   
  const [signUpData, setSignUpData] = useState({
    
    name: "",
    email: "",
    mobile: "",
    address: "",
    sex: "",
    dateOfBirth: "",
    password: "",
    role: "user" // default role
  });
  
  const [signInData, setSignInData] = useState({
   
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5050/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpData)
      });
      if (response.ok) {
        toggle(true); // Switch to sign-in form upon successful sign-up
      } else {
        const message = await response.text();
        alert(message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

 
  // const handleSignInSubmit=(e)=>{
  //     e.preventDefault()
  //     fetch(  `http://localhost:5050/register/${signInData.name}` )
  //     .then((res)=>{
  //       return res.json();
  //     })
  //     .then((resp)=>{
  //       if(Object.keys(resp).length===0){
  //       alert("please enter valid user ");
  //       }else{
  //         if(resp.password===signInData.password){
  //           alert('success')
  //           sessionStorage.setItem('username',signInData.name)
  //           navigate('/')
  //         }else{
  //           alert("please enter valid credentials ");
  //         }
  //       }
  //     }).catch((error)=>{
  //       alert('An error occurred' + error);
  //     })
  // }
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5050/register'); 
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      const matchedUser = userData.find(user => user.email === signInData.email && user.password === signInData.password);
      if (matchedUser) {
        sessionStorage.setItem('user', JSON.stringify(matchedUser));
        if (matchedUser.role === 'admin') {
          navigate('/Dashboard'); // Navigate to admin dashboard
        } else {
          navigate('/'); // Navigate to home page
        }
      } else {
        alert('Login failed: Incorrect email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };
  
  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const SignUpContainer = signIn !== true ? 'SignUpContainerr' : 'SignUpContainer';
  const SignInContainer = signIn !== true ? 'SignInContainerr' : 'SignInContainer';
  const OverlayContainer = signIn !== true ? 'OverlayContainerr' : 'OverlayContainer';
  const Overlay = signIn !== true ? 'Overlayy' : 'Overlay';
  const LeftOverlayPanel = signIn !== true ? 'LeftOverlayPanell' : 'LeftOverlayPanel';
  const RightOverlayPanel = signIn !== true ? 'RightOverlayPanell' : 'RightOverlayPanel';

  return (
    <Container className="containerr">
      <Row>
        <Col xs={12} md={6}>
          <div className={SignUpContainer} data-signin-in={signIn}>
            <Form onSubmit={handleSignUpSubmit} className="form">
              <h1>Create Account</h1>
              
              <Form.Group controlId="Name">
                <Form.Control
                  type="text"
                  placeholder=" FullName"
                  className="input"
                  value={signUpData.name}
                  onChange={(event) => setSignUpData({ ...signUpData, name: event.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="Email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={signUpData.email}
                  onChange={(event) => setSignUpData({ ...signUpData, email: event.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="Mobile">
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  className="input"
                  value={signUpData.mobile}
                  onChange={(event) => setSignUpData({ ...signUpData, mobile: event.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="Gender" className="radio-container">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  type="radio"
                  value="male"
                  id="gender_male"
                  className="checkmark"
                  name="gender"
                  required
                  checked={signUpData.sex === "male"}
                  onChange={(event) => setSignUpData({ ...signUpData, sex: event.target.value })}
                  label="Male"
                />
                <Form.Check
                  type="radio"
                  value="female"
                  id="gender_female"
                  className="checkmark"
                  name="gender"
                  required
                  checked={signUpData.sex === "female"}
                  onChange={(event) => setSignUpData({ ...signUpData, sex: event.target.value })}
                  label="Female"
                />
              </Form.Group>

              <Form.Group controlId="Address">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  className="input"
                  value={signUpData.address}
                  onChange={(event) => setSignUpData({ ...signUpData, address: event.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="DateOfBirth">
                <Form.Control
                  type="date"
                  placeholder="Date Of Birth"
                  className="input"
                  value={signUpData.dateOfBirth}
                  onChange={(event) => setSignUpData({ ...signUpData, dateOfBirth: event.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="input"
                  value={signUpData.password}
                  onChange={(event) => setSignUpData({ ...signUpData, password: event.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="Role">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  value={signUpData.role}
                  onChange={(event) => setSignUpData({ ...signUpData, role: event.target.value })}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Control>
              </Form.Group>

              <Button type="submit" className="button">Sign Up</Button>
            </Form>
          </div>
          <div className={SignInContainer}>
            <Form onSubmit={handleSignInSubmit} className="form">
              <Form.Text>Sign in</Form.Text>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Enter email"
                  value={signInData.email}
                  onChange={(event) => setSignInData({ ...signInData, email: event.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={signInData.password}
                  onChange={(event) => setSignInData({ ...signInData, password: event.target.value })}
                  required
                />
              </Form.Group>
              <Form.Label className="forgot-password-link">Forgot your password?</Form.Label>
              <Button type="submit" className="button">Sign In</Button>
            </Form>
          </div>
          <div className={OverlayContainer} data-signin-in={signIn}>
            <div className={Overlay} data-signin-in={signIn}>
              <div className={LeftOverlayPanel} data-signin-in={signIn}>
                <title>Hello, Friend!</title>
                <p>Enter Your personal details and start journey with us</p>
                <Button onClick={() => toggle(true)} className="GhostButton">Sign In</Button>
              </div>
              <div className={RightOverlayPanel} data-signin-in={signIn}>
                <title>Welcome Back!</title>
                <p>To keep connected with us please sign in with your personal info</p>
                <Button onClick={() => toggle(false)} className="GhostButton">Sign Up</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
