import React from "react";
import { useForm } from "react-hook-form";

function FormValidationHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidationHook;
