export const Contacts = ({ listContacts }) => {
  return (
    <ul>
      {listContacts.map(listContact => (
        <li id = {listContact.id}>
          {listContact.name} : {listContact.number}
        </li>
      ))}
    </ul>
  );
};
