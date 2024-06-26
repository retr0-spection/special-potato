import React from "react";
import GoogleIcon from "../icons/google.png";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../zustand/store";
import { decodeToken } from "react-jwt";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { Rings } from "react-loader-spinner";


const SignupPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const navigate = useNavigate();
  const { setProfile } = useStore();

  const googleAuthRoute = async (payload) => {
    setSubmitting(true)
    setTimeout(async () => {
      const token = decodeToken(payload.credential);
  
      const profile = token
  
      // setTimeout(() => {
      //   setProfile(profile);
      //   navigate("/");
      // }, 5000);
  
      const res = await axios.post("https://espazaserver.azurewebsites.net/auth/authenticate", {token:payload.credential})
      setSubmitting(false)
  
      if (res.data){
        setProfile(res.data)
        navigate("/");
      }

    }, 3000)

  };

  return (
    <section
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
              <p class="hero-text">Hi there</p>
              <p class="meta-text">Let's get you started! Please enter you details</p>
            </section>

         
          

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
                </button>
               ): <GoogleLogin
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
                  <p style={{ paddingLeft: "10px" }}>Sign up with Google</p>
                </button> 
              </GoogleLogin>}
            </section>

            <section>
              <p>Already have an account?<a className="link" style={{fontSize:16, paddingLeft:10}} href="/login">Log in</a></p>
            </section>
          </section>
        </section>
      </section>
      <section
        style={{
          width: "40%",
          backgroundColor: "yellow",
          position: "relative",
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
            backgroundColor: "black",
            opacity:0.5
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
    </section>
  );
};

export default SignupPage;
