import React from 'react'

export default function MDBUserLogin() {
  return (
    <div>
        <section className="vh-100" style={{"background-color": "#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{"border-radius": "1rem"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
            </div>

          
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr className="my-4" />

            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-lg btn-block btn-primary" style={{"background-color":"#dd4b39"}}
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-lg btn-block btn-primary mb-2" style={{"background-color": "#3b5998;"}}
            
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
