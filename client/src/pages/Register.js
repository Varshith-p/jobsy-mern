import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, displayAlert, showAlert, registerUser, user } =
    useAppContext();
  const navigate = useNavigate();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentuser = { name, email, password };
    if (isMember) {
      console.log("Already member");
    } else {
      registerUser(currentuser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <React.Fragment>
      <form>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-block"
          disabled={isLoading}
        >
          Submit
        </button>
        <p id="is-member">
          {values.isMember ? "Not a member?" : "Already a member?"}
          <button className="btn-member" onClick={toggleMember} type="button">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </React.Fragment>
  );
};

export default Register;
