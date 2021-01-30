import React from "react";

const Show = ({ venue }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>{venue.city}</p>
      <p>{venue.season}</p>
      <br />
      <br />
    </div>
  );
};

export default Show;
