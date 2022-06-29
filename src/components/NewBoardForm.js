import { useState } from "react";

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    owner: "",
  });

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;

    setFormData(newFormData);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addBoardData({ title: formData.title, owner: formData.owner });

    setFormData({ title: "", owner: "" });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onFormChange}
      ></input>
      <label htmlFor="owner">Owner</label>
      <input
        type="text"
        name="owner"
        value={formData.owner}
        onChange={onFormChange}
      ></input>
      <input type="submit" value="Add Board"></input>
    </form>
  );
};

export default NewBoardForm;
