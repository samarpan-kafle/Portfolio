import React from "react";
import cardPic from "./../assets/tiger.jpg";

export default function Contact() {
  return (
    <div className="py-5 px-5" style={{ height: "100vh" }}>
      <h3 className="text-center">Personal Details</h3>
      <div className=" pt-5 d-flex justify-content-center align-items-center py-5">
        <div className="card  container ">
          <div className="card-body  text-center d-flex justify-content-evenly">
            <div className="d-flex flex-column align-items-center">
              <div
                className="bg-primary border rounded-circle d-flex justify-content-center align-items-center"
                style={{ height: 80, width: 80 }}
              >
                <i className="bi bi-geo-alt-fill text-center h1 text-light" />
              </div>
              <a
                className="nav-link fw-bold"
                href="https://www.google.com/maps/place/Diyo+Banquet/@27.7229963,85.3391678,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb199ff1557c45:0x3685b728afad6d31!8m2!3d27.7229963!4d85.3417481!16s%2Fg%2F11qp0gdb27?entry=ttu"
              >
                Kathmandu 44600
              </a>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div
                className="bg-primary border rounded-circle d-flex justify-content-center align-items-center"
                style={{ height: 80, width: 80 }}
              >
                <i className="bi bi-telephone text-center h1 text-light" />
              </div>
              <a className="nav-link fw-bold" href="phone:+9779807310282">
                9807310282
              </a>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div
                className="bg-primary border rounded-circle d-flex justify-content-center align-items-center"
                style={{ height: 80, width: 80 }}
              >
                <i className="bi bi-envelope-at-fill text-center h1 text-light" />
              </div>
              <a
                className="nav-link fw-bold"
                href="mailto:kaflesamarpan1@gmail.com"
              >
                kaflesamarpan1@gmail.com
              </a>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div
                className="bg-primary border rounded-circle d-flex justify-content-center align-items-center"
                style={{ height: 80, width: 80 }}
              >
                <i className="bi bi-facebook text-center h1 text-light" />
              </div>
              <a
                className="nav-link fw-bold"
                href="https://www.facebook.com/kaflesamarpan/"
                target="blank"
              >
                Samarpan
              </a>
            </div>
          </div>
          <div className="p-5 d-flex justify-content-evenly gap-5">
            <form className=" d-flex row">
              <div className="mb-3 d-flex">
                <div className="col pe-3">
                  <label for="fname" className="form-label fw-bold">
                    First name:
                  </label>
                  <input
                    type="text"
                    className="form-control  border-dark"
                    id="fname"
                  />
                </div>
                <div className="col">
                  <label for="lname" className="form-label fw-bold">
                    Last name:
                  </label>
                  <input
                    type="text"
                    className="form-control  border-dark"
                    id="lname"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="InputEmail1" className="form-label fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control  border-dark"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text fw-bold">
                  Your email id will not be shared with anyone else.
                </div>
              </div>
              <div className="mb-3 fw-bold">
                <label for="InputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control  border-dark"
                  id="InputPassword"
                />
              </div>
              <button
                type="submit"
                value="Submit"
                className="btn mb-3 btn-primary"
              >
                Submit
              </button>
            </form>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%", height: 400 }}
            >
              <img src={cardPic} className="img-fluid" alt="Responsive image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
