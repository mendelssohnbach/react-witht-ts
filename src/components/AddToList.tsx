import React, { useState } from 'react';

const AddToList = () => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
      />
      <input
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddToList;
