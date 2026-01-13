import { useEffect, useState } from "react";
import api from "./api";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const load = async () => {
    const res = await api.get("/contacts");
    setContacts(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <>
      <h2>Contacts Manager</h2>
      <ContactForm refresh={load}/>
      <ContactList contacts={contacts} refresh={load}/>
    </>
  );
}

export default App;
