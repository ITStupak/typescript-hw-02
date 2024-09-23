import css from "./SearchBar.module.css";
import { SearchBarType } from "../../types";
import { ChangeEvent, FC, FormEvent, useState } from "react";

const SearchBar:FC<SearchBarType> = ({ onSubmit, toast }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!query.trim()) {
      return toast.error("Cannot be empty");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos 🔎"
          />
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
