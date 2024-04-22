import React from "react";
import GoogleIcon from "../icons/google.png";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);

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
        <h1 class="logo-text">Espaza</h1>
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

            <form>
              <label for="email">Email</label>
              <br />
              <input
                className="input-field"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
            </form>
            <button
              className="button"
              style={{ width: "100%", backgroundColor: "#7A52D6" }}
            >
              Login
            </button>

            <section style={{ marginTop: "10px" }}>
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
            </section>

            <section>
              <p >Don't have an account?<a className="link" style={{fontSize:16, paddingLeft:10}} href="/signup">Sign up</a></p>
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
    </div>
  );
};

export default LoginPage;
