import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef("");

    function searchCocktail() {
        setSearchTerm(searchValue.current.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    useEffect(() => {
        searchValue.current.focus();
    }, []);
    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
