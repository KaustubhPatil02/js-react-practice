import React, { useState } from "react";

const Forms=()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms;


// uncontrolled forms
// import React, { useRef } from "react";

// function UncontrolledForm() {
//   const nameInputRef = useRef();
//   const emailInputRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", nameInputRef.current.value);
//     console.log("Email:", emailInputRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" ref={nameInputRef} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" ref={emailInputRef} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default UncontrolledForm;
