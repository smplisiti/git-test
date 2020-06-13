import React from "react";

class SignIn extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm"></div>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            >
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </input>
          </div>
        </form>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div class="form-group">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">
              Remember Me
            </label>
          </input>
        </div>
        <button type="submit" class="btn btn-primary ml-5">
          Submit
        </button>
      </div>
    );
  }
}

export default SignIn;
