import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const LoginForm = ({errors, onSubmitCallback}) => {

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({ username, pass });
  };

  return (
    <Form onSubmit={submitForm}>
      <div className="divider d-flex align-items-center my-4"></div>
      <Form.Group control="username" className="form-outline mb-4">
        <Form.Label for="username" className="form-label">
          UserName
        </Form.Label>
        <Form.Control
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control form-control-lg"
          isInvalid={errors.username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="pass" className="form-outline mb-3">
        <Form.Label for="pass" className="form-label">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="form-control form-control-lg"
          isInvalid={errors.pass}
        />
        <Form.Control.Feedback type="invalid">
          {errors.pass}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="text-center text-lg-start mt-4 pt-2">
        <Button type="submit" className="btn btn-primary btn-lg">
          Iniciar sesión
        </Button>
      </div>
    </Form>
  );
};
