import React from "react";

import Stack from "@mui/material/Stack";

const Display = (props) => {
  return (
    <>
      {/* <Stack spacing={2} direction="row"> */}
      <div className="data">
        <div className="data_header">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
      </div>
      <div className="data">
        <div className="data_header">
          <h4>{props.name}</h4>
          <h4>{props.email}</h4>
          <Stack>
            <DeleteIcon color="error" />
          </Stack>
        </div>
      </div>
      {/* </Stack> */}
    </>
  );
};

export default Display;
