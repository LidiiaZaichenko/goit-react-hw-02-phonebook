export const Contacts = ({ listContacts,oonDelete}) => {
  return (
    <ul>
      {listContacts.map(listContact => (
        <li key = {listContact.id}>
          {listContact.name} : {listContact.number}
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};
