export const ContactItem = ({ contact: { id,name, number }, onDelete }) => {
  return (
    <div>
      {name} : {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
