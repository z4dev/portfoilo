import React, { useState } from "react";
import ErrorMsg from "../ErrorMsg";
import axios from "axios";
import { API_URL } from "../../config/api";
import "./style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null); // To store the response message

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
      setResponseMessage(null); // Reset previous response message

      try {
        const response = await axios.post(API_URL, formData);
        setResponseMessage({
          type: "success",
          message: response.data.message || "Message sent successfully!",
        });
      } catch (error) {
        setResponseMessage({
          type: "error",
          message: error.response?.data?.message || "Failed to send message!",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="contact-form">
      <form id="contactForm" method="post" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              className="input-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChanges}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              className="input-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChanges}
            />
            {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Subject"
              className="input-control"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChanges}
            />
            {errors.subject && <ErrorMsg>{errors.subject}</ErrorMsg>}
          </div>
          <div className="input-group">
            <textarea
              placeholder="Message"
              className="input-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChanges}
            ></textarea>
            {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
          </div>
          <div className="submit-btn">
            <button
              type="submit"
              className="btn"
              id="send-message"
              disabled={isLoading}
            >
              {!isLoading ? "Send Message" : "Sending..."}
            </button>
          </div>
        </div>
      </form>

      {responseMessage && (
        <div
          className={`alert ${
            responseMessage.type === "success" ? "alert-success" : "alert-error"
          }`}
        >
          {responseMessage.message}
        </div>
      )}
    </div>
  );
};

export default Form;
