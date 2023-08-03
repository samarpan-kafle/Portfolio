import React from "react";

export default function Services() {
  return (
    <div
      className="py-5 
    "
      style={{ height: "100vh" }}
    >
      <h3 className="text-center">Services Provided</h3>
      <div className=" px-5 pb-5">
      <div className="d-flex flex-row justify-content-evenly pt-5">
        <div className="card flex-column col-md-3">
          <div className="card-body text-center">
            <i
              class="fa-solid fa-lightbulb fa-shake"
              style={{ color: "#ffd43b", fontSize: "40px" }}
            />
            <p className="fw-bold fs-4">Creativeness</p>
            <p>
              Creativity is at the heart of everything I do. I take pride in my
              ability to think outside the box and bring fresh and innovative
              ideas to every project I undertake.When you choose me, you can be
              assured of a web development experience that is not only
              technically sound but also exudes creativity and ingenuity at
              every turn. Let my creative expertise elevate your online
              presence and take your digital journey to new and exciting
              heights.
            </p>
          </div>
        </div>
        <div className="card flex-column col-md-3">
          <div className="card-body  text-center d-flex flex-column ">
            <i
              class="fa-solid fa-award fa-beat "
              style={{ color: "#df2a2a", fontSize: "40px" }}
            />
            <p className="fw-bold fs-4">Top Quality</p>
            <p>
              I am dedicated to deliver top-quality services for all our
              clients. Quality is the cornerstone of my work, and I pride myself
              on the excellence that permeates every aspect of my projects. From
              responsive design to efficient coding, I leave no stone unturned
              in crafting websites that not only look impressive but also
              function flawlessly across all devices.I deliver products that
              stand out in the digital landscape.
            </p>
          </div>
        </div>
        <div className="card flex-column col-md-3">
          <div className="card-body  text-center d-flex flex-column">
            <i
              class="fa-solid fa-calendar-check fa-bounce "
              style={{ color: "#001c40", fontSize: "35px" }}
            />

            <p className="fw-bold fs-4">On Time Submission</p>
            <p>
              I take great pride in my commitment to provide on-time submission
              for all projects. Meeting deadlines is at the core of my work
              philosophy, as I understand the significance of timely deliveries
              in ensuring client satisfaction and project success.
              <br />I firmly believe that on-time submission is a testament to
              my professionalism, reliability, and efficiency, and I strive to
              maintain the highest standards of quality while meeting project
              deadlines.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
