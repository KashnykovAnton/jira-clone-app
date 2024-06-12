import React from "react";
import s from "./InputText.module.css";

const InputText = ({ name, onChange, errors, value }) => {
  const text =
    name === "name" ? "The name must be 30 characters or fewer." : "The description must be 100 characters or fewer.";
  return (
    <div>
      <label>
        {name}
        <input
          className={s.inputField}
          type="text"
          name={name}
          placeholder={text}
          required
          onChange={onChange}
          value={value}
        />
        {errors?.name & (name === "name") ? <p className={s.validationError}>{text}</p> : null}
        {errors?.description & (name === "description") ? <p className={s.validationError}>{text}</p> : null}
      </label>
    </div>
  );
};

export default InputText;
