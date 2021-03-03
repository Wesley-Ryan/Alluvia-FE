import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import PlaceHolder from "../assets/img/placeholder.png";

const AddSubscriptionForm = () => {
  const [showPWText, setShowPWTest] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log("SAY HI");
  };
  console.log("ERRORS =>", errors);

  return (
    <div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="addsub-container shadow"
      >
        <h2>Add New Subscription</h2>
        <img
          id="upload-placeholder"
          src={PlaceHolder}
          alt="Subscription Logo Placeholder"
        />
        <div className="upload-img-controls">
          <Button id="register" type="submit">
            Upload Image
          </Button>
          <Button id="cancel" type="submit">
            Cancel
          </Button>
        </div>
        <div className="form-container">
          <Form.Control
            type="text"
            isInvalid={errors.title ? true : false}
            placeholder="Title"
            name="title"
            ref={register({ required: true, max: 255, maxLength: 80 })}
          />
          <Form.Control.Feedback type="valid">
            You did it!
          </Form.Control.Feedback>
          <div className="addsub-cost">
            <Form.Control
              id="add-sub-text"
              type="text"
              isInvalid={errors.cost ? true : false}
              placeholder="Cost"
              name="cost"
              ref={register({ required: true, max: 255, maxLength: 100 })}
            />
            <Form.Control
              id="add-sub-text"
              type="text"
              isInvalid={errors.Date ? true : false}
              placeholder="Date"
              name="Date"
              ref={register({ required: true })}
            />
          </div>
          <Form.Control
            as="textarea"
            rows={3}
            type="text-area"
            isInvalid={errors.notes ? true : false}
            placeholder="Notes"
            name="notes"
            ref={register({ required: true })}
          />
          <Button id="register" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddSubscriptionForm;
