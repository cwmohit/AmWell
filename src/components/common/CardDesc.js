import React from "react";

function CardDesc() {
  return (
    <div className="col-md-4 col-12 ">
      <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 style={{ color: "white" }} className="display-5">
            Another headline
          </h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-light shadow-sm mx-auto"
          style={{
            width: "80%",
            height: "300px",
            borderRadius: "21px 21px 0 0",
          }}
        ></div>
        <div class="d-grid gap-2 my-3">
          <button type="button" class="btn btn-light d-block">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDesc;
