import React from "react";

const Card = (props) => {
  return (
    <>

      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imagesrc} className="card-img-top" alt="not available" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
            Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems. Developers form a key part of the IT team and may be required to modify existing software products or develop entirely new resources.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere no
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
