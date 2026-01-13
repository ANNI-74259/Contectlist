import api from "../api";

export default function ContactList({ contacts, refresh }) {
  const del = async (id) => {
    await api.delete(`/contacts/${id}`);
    refresh();
  };

  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          {c.name} - {c.email} - {c.phone}
          <button onClick={() => del(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
