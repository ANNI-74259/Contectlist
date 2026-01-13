import { useState } from "react";
import api from "../api";

export default function ContactForm({ refresh }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const submit = async () => {
    await api.post("/contacts", form);
    setForm({ name: "", email: "", phone: "" });
    refresh();
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input placeholder="Phone" onChange={e => setForm({...form, phone:e.target.value})}/>
      <button onClick={submit}>Add</button>
    </div>
  );
}
