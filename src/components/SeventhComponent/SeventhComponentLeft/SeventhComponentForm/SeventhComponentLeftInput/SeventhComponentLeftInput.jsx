import "./SeventhComponentLeftInput.css";
import React, { useState } from "react";

export function SeventhComponentLeftInput({
  name,
  form,
  setForm,
  text,
  typeIs,
}) {
  const [focused, setFocused] = useState(false);
  const opac = focused ? "1" : "0";

  return (
    <>
      <p style={{ opacity: opac, transition: "all 0.4s ease 0s" }}>{text}</p>
      <input
        onChange={(event) => setForm(event.target.value)}
        value={form}
        name={name}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={text}
        type={typeIs}
      />
    </>
  );
}
