import React from "react";
import GoogleIcon from "../icons/google.png";
import useStore from "../zustand/store";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { decodeToken, useJwt } from "react-jwt";
import API from "../api";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const navigate = useNavigate();
  const { setProfile } = useStore();

  // const submit = async () => {
  //   // setSubmitting(true)
  //   // const payload = {
  //   //   email,
  //   // };

  //   const res = await axios.get("https://espazaserver.azurewebsites.net/");

  //   console.log(res);

  //   // setTimeout(() => {
  //   //       setProfile(password);
  //   //       navigate("/");
  //   //       setSubmitting(false)
  //   // }, 3000)
  // };

  const googleAuthRoute = async (payload) => {
    setSubmitting(true)
    setTimeout(async () => {
      const token = decodeToken(payload.credential);
  
      const profile = token
  
      // setTimeout(() => {
      //   setProfile(profile);
      //   navigate("/");
      // }, 5000);
  
      const res =  await API.AUTH.authenticate(payload.credential)
      setSubmitting(false)
  
      if (res.data){
        console.log(res.data)
        setProfile(res.data)
        navigate("/");
      }

    }, 3000)
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      <section style={{ width: "60%" }}>
        {/* form */}
        <h1 class="logo-text">espaza</h1>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10%",
            width: "100%",
          }}
        >
          {/* app name */}
          <section>
            {/* welcome text */}

            <section>
              <p class="hero-text">Welcome Back</p>
              <p class="meta-text">Welcome Back! Please enter you details</p>
            </section>

            {/* <form>
              <label for="email">Email</label>
              <br />
              <input
                className="input-field"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <br />
              <label for="password">Password</label>
              <br />
              <input
                className="input-field"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <br />
              <section
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <section
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                  }}
                >
                  <input
                    id="checkbox"
                    type="checkbox"
                    value={remember}
                    onChange={(e) => setRemember(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <label for="checkbox" style={{ fontSize: 12 }}>
                    Remember for 30 days
                  </label>
                </section>
                <a href="#" className="link">
                  Forgot password
                </a>
              </section>
            </form> */}
            {/* <button
              className="button"
              style={{
                width: "100%",
                backgroundColor: "#7A52D6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              // onClick={submit}
              disabled={submitting}
            >
              {submitting ? (
                <Rings
                  visible={true}
                  height="30"
                  width="30"
                  color="white"
                  ariaLabel="rings-loading"
                />
              ) : (
                "Login"
              )}
            </button> */}

            <section style={{ marginTop: "10px" }}>
            {submitting ? (
               <button
               style={{
                 display: "flex",
                 width: "100%",
                 justifyContent: "center",
                 alignItems: "center",
                 padding: 0,
                 paddingLeft: 10,
                 paddingRight: 10,
                 background: "white",
                 borderRadius: "5px",
                 borderWidth: 0,

               }}
             >
               <Rings
                  visible={true}
                  height="30"
                  width="30"
                  color="gray"
                  ariaLabel="rings-loading"
                /> 
                </button>):   <GoogleLogin
                onSuccess={googleAuthRoute}
                onError={() => {
                  console.log("Login Failed");
                }}
              >
           <button
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                    paddingLeft: 10,
                    paddingRight: 10,
                    background: "white",
                    borderRadius: "5px",
                    borderWidth: "1px",
                  }}
                >
                  <img
                    src={require("../icons/google.png")}
                    alt="google-logo"
                    width={"20"}
                    height={"20"}
                  />
                  <p style={{ paddingLeft: "10px" }}>Log in with Google</p>
                </button>
              </GoogleLogin>}
            </section>

            <section>
              <p>
                Don't have an account?
                <a
                  className="link"
                  style={{ fontSize: 16, paddingLeft: 10 }}
                  href="/signup"
                >
                  Sign up
                </a>
              </p>
            </section>
          </section>
        </section>
      </section>
      <section
        style={{
          width: "40%",
          position: "relative",
          backgroundColor:'white'
        }}
      >
        {/* other */}
        <video
          style={{ height: "100vh", width: "40vw", objectFit: "cover" }}
          src={require("../videos/hero.mp4")}
          loop
          autoPlay
          muted
        />
        <span
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
        <p
          style={{
            textAlign: "center",
            fontSize: 40,
            color: "white",
            fontWeight: "bold",
            position: "absolute",
            top: "30%",
            left: 0,
            right: 0,
          }}
        >
          Bringing Spazas to You
        </p>
      </section>
    </div>
  );
};

export default LoginPage;
