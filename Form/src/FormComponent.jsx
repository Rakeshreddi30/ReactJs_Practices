import React, { useState } from "react";

const object = {
  userName: "",
  country: "",
  isMarried: "No",
};
const FormComponent = () => {
  const [data, setData] = useState(object);

  const handleChange = (event) => {
      const { name, value } = event.target;
      setData({ ...data, [name]: value });
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(data);
    }
  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" name="userName" onChange={handleChange} autoComplete="name"/>
        <select name="country" id="" onChange={handleChange} autoComplete="country">
          <option value="" disabled>category</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="America">America</option>
          <option value="russia">Russia</option>
        </select>
        <label>
          <input
            type="radio"
            name="isMarried"
            value="Yes"
            onChange={handleChange}
            checked={data.isMarried==="Yes"}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="isMarried"
            value="No"
            onChange={handleChange}
            checked={data.isMarried==="No"}
          />
          No
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default FormComponent;
