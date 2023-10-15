export const SearchBar = ({ filter, onChengeContact }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={evt => onChengeContact(evt.target.value)}
        placeholder="Filter ..."
      />
    </div>
  );
};
