import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../api";
import { Button, FormLabel, Input, MenuItem, Select } from "@mui/material";
import useStore from "../../../zustand/store";

const UserEdit = () => {
  const { id } = useParams();
  const [role, setRole] = React.useState('customer')
  const [user, setUser] = React.useState(null)
  const { profile } = useStore();
  const navigate = useNavigate();



  const deleteUser = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + profile.token,
      },
    };

    const res = await API.USER.delete(id, config);
    if (res.data) {
      navigate("/admin/management");
    }
  }

  const changeDetails = async () => {

    const payload = {
      role
    };

    const config = {
      headers: {
        Authorization: "Bearer " + profile.token,
      },
    };

    const res = await API.USER.modify(id, payload, config);
    if (res.data) {
      navigate("/admin/management");
    }
  };

  const getUserById = async () => {
    const config = {
        headers: {
          Authorization: "Bearer " + profile.token,
        },
      };

    const res = await API.USER.getById(id, config);

    if (res.data) {
      setUser(res.data);
      console.log(res.data);
    }
  };

  useEffect(() => {
    getUserById();
  }, []);


  return (
    <div style={{ display: "flex" }}>
   
     {user ? <section style={{ width: "100%" }}>
        <section>
          <h3 style={{ fontSize: 24 }}>Edit User</h3>
        </section>
        <section>
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="Product Name"
            value={user.fname}
            style={{ width: "100%" }}
            disabled
          />
        </section>
        <section>
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="First Name"
            value={user.lname}
            style={{ width: "100%" }}
            disabled

          />
        </section>
        <section>
          <FormLabel>Email</FormLabel>

          <Input
            placeholder="Email"
            value={user.email}
            disabled
            style={{ width: "100%" }}
          />
        </section>
        <section>
        <FormLabel>Role</FormLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={"customer"}>Customer</MenuItem>
              <MenuItem value={"staff"}>Staff</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
            </Select>
        </section>
     
        <section style={{display:'flex', justifyContent:'space-between'}}>
        <Button
            onClick={changeDetails}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Edit
          </Button>
          {profile.email != user.email ?
          <Button

            onClick={deleteUser}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Delete
          </Button> : null}
        </section>
      </section> : null}
    </div>
  );
};

export default UserEdit;
