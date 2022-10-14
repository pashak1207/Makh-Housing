import "./SeventhComponentForm.css";
import { SeventhComponentLeftInput } from "./SeventhComponentLeftInput/SeventhComponentLeftInput";
import { useState } from "react";
import emailjs from "emailjs-com";

export function SeventhComponentForm({ left }) {
  const [focused, setFocused] = useState(false);
  const opac = focused ? "1" : "0";

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function eventFunction(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        left.send.service,
        left.send.template,
        e.target,
        left.send.apiKey
      )
      .then(
        (result) => {
          alert("Your message was sent!");
        },
        (error) => {
          alert("Error: " + error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="seventh-component__form">
      <form onSubmit={eventFunction} action="#">
        <SeventhComponentLeftInput
          form={fname}
          setForm={setFname}
          text={left.inputs[0].text}
          typeIs={left.inputs[0].typeIs}
          name={left.inputs[0].name}
        />
        <SeventhComponentLeftInput
          form={email}
          setForm={setEmail}
          text={left.inputs[1].text}
          typeIs={left.inputs[1].typeIs}
          name={left.inputs[1].name}
        />
        <SeventhComponentLeftInput
          form={phone}
          setForm={setPhone}
          text={left.inputs[2].text}
          typeIs={left.inputs[2].typeIs}
          name={left.inputs[2].name}
        />
        <p style={{ opacity: opac }}>Your Message</p>
        <textarea
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={left.taxtarea.text}
          name={left.taxtarea.name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
