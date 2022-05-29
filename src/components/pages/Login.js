import React from "react";
import Amwell from "../../assets/amwell.jpeg";

function Login() {
  return (
    <main
      class="form-signin row"
      style={{
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <form
        className="col-md-4 col-12"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <img class="mb-4" src={Amwell} alt="" width="100" />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
}

export default Login;
