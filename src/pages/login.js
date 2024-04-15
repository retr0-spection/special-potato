import GoogleIcon from '../icons/google.png'


const LoginPage = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundColor: "blue",
      }}
    >
      <section style={{ width: "60%", backgroundColor: "green", display:'flex', alignItems:'center',  }}>
        {/* form */}
        <section
          style={{
            backgroundColor: "purple",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:'100%'
          }}
        >
          {/* app name */}
          <section>
            <h1 class="logo-text">Espaza</h1>
            {/* welcome text */}

            <section>
              <p class="welcome-text">Welcome Back, Please Login to Get Started</p>
            </section>

            <section>
            <button style={{display:'flex', alignItems:'center', background:'white', borderRadius:'10px', borderWidth:'0px'}}>
              <img
                src={require('../icons/google.png')}
                alt="google-logo"
                width={"20"}
                height={"20"}
              />
              <p style={{paddingLeft:'10px'}}>Log in with Google</p>
            </button>
            </section>

          </section>
        </section>
      </section>
      <section style={{ width: "40%", backgroundColor: "yellow" }}>
        {/* other */}
      </section>
    </div>
  );
};

export default LoginPage;
