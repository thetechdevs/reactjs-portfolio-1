import React, { useState } from "react";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #000;
`;

const Spinner = () => {
  let [color] = useState("#f6ca00");
  return (
    <>
      <PacmanLoader color={color} css={override} size={30} margin={5} />
    </>
  );
};

export default Spinner;
