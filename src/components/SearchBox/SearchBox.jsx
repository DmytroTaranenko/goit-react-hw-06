import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p className={css.searchBox}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Enter contact name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
