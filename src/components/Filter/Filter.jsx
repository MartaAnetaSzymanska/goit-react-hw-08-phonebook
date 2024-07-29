import { useDispatch } from "react-redux";
import { change } from "../../redux/slices/filterSlice";
import { useState } from "react";
import css from "./Filter.module.scss";

export const Filter = () => {
  const dispatch = useDispatch();
  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (ev) => {
    const filterInputValue = ev.target.value;
    setFilterInput(filterInputValue);
    dispatch(change(filterInputValue));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>Find contact by name:</label>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={handleFilterChange}
      />
    </div>
  );
};
