import React from "react";
import Card from "./Card";
import Data from "./Data";

const Service = () => {
  return (
    <>
      <div className="text-center my-4">
        <h1>Wellcome To Service Page</h1>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

         {
          Data.map((val, index)=>{
            return <Card
              imagesrc={val.imgsrc}
              title={val.title}
              key={index}
            />
          })
         }
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
