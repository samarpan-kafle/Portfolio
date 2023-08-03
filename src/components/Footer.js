import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container py-4 px-4 px-md-3 bg-primary">
        <div className="row">
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Footer</h5>
          </div>
          <div className="col-6 col-lg-2  mb-3">
            <h5>Links</h5>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Guides</h5>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Projects</h5>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Community</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
