import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import Display from "./Display";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Header = () => {
  const [form, setForm] = useState({});
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(-1);

  const addData = () => {
    setData([...data, form]);
    setForm({});
    // setEmail("");
  };
  const removedata = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const editData = (index) => {
    setEdit(index);
  };

  return (
    <>
      <div className="header">
        <h1>Record Keeping</h1>
      </div>
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            value={form.name}
            label="Name"
            variant="outlined"
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <TextField
            id="outlined-basic"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_header">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
          <h4>Edit</h4>
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index} className="data">
            <div className="data_header">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <DeleteIcon onClick={() => removedata(index)} color="error" />
              </Stack>
              <Stack>
                <EditIcon onClick={() => editData(index)} color="success" />
              </Stack>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Header;

// onClick={deleteData}
