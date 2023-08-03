import React from "react";

export default function About() {
  return (
    <div className="py-5 px-5" style={{ height: "100vh" }}>
      <h3 className="text-center">Profile</h3>
      <div className="d-flex flex-row justify-content-evenly pt-5 px-5">
        <div className="flip-card  flex-column col-md-6 pe-4">
          <div className="flip-card-inner card-body tex">
            <div className="flip-card-front d-flex justify-content-center align-items-center">
              <i
                class="fa-solid fa-lightbulb fa-shake"
                style={{ color: "#ffd43b", fontSize: "40px" }}
              />
              <div className="flip-card-font">
                <p className="fw-bold fs-4">About Me</p>
              </div>
            </div>
            <div className="flip-card-back">
              <p>I am front-end web developer</p>
            </div>
          </div>
        </div>
        <div
          className="flip-card ps-4
         flex-column col-md-6"
        >
          <div className="flip-card-inner card-body tex">
            <div className="flip-card-front d-flex justify-content-center align-items-center">
              <i
                class="fa-solid fa-circle-info fa-beat-fade"
                style={{ color: "#df2a2a", fontSize: "40px" }}
              />
              <div className="flip-card-font">
                <p className="fw-bold fs-4">Details</p>
              </div>
            </div>
            <div className="flip-card-back">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
