import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/forms/LoginForm";

const Login = () => {

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
          navigate("/");
        }
      });
    
      const login = ({ email, password }) => {
        const errors = {};
        setErrors(errors);
    
        if (!validator.isEmail(email)) {
          errors.email = "El correo electronico es invalido";
        }
    
        if (validator.isEmpty(password)) {
          errors.password = "La contrasena no puede estar vacia";
        }
    
        if (!isObjEmpty(errors)) {
          setErrors(errors);
          return;
        }
    
        dispatch(loginUser({ email, password }))
          .then((response) => {})
          .catch((err) => {
            setErrors({ auth: "No se puede iniciar sesion con esos credenciales" });
          });
      };

  return (
    <section className="vh-100 m-auto">
      <div className="container-fluid h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="/imgs/BBVA.jpeg"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <LoginForm errors={errors} onSubmitCallback={login}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
