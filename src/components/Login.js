import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className="register-container">
        <Form.Control
          type="text"
          placeholder="first_name"
          name="first_name"
          ref={register({ required: true, max: 255, maxLength: 80 })}
        />
        <Form.Control
          type="text"
          placeholder="last_name"
          name="last_name"
          ref={register({ required: true, max: 255, maxLength: 100 })}
        />
        <Form.Control
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, max: 255, pattern: /^\S+@\S+$/i })}
        />
        <Form.Control
          type="text"
          placeholder="password"
          name="password"
          ref={register({ required: true, max: 255 })}
        />
        <Form.Control
          type="text"
          placeholder="confirm password"
          name="confirm password"
          ref={register({ required: true, max: 255 })}
        />
        <div className="mb-2">
          <Button id="register" type="submit">
            Submit
          </Button>
          <Button id="register" type="cancel" variant="danger">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}
