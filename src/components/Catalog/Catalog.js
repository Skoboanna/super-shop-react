import React, { useRef, useState } from "react";
import HeaderBig from "../HeaderBig";
import Products from "../ProductsList";
import Footer from "../Footer";

const Catalog = () => {
  const inputRef = useRef();
  const [filterValue, updateFilterValue] = useState("");
  const [inputValue, updateInputValue] = useState("");

  return (
    <div>
      <div className="container">
        <HeaderBig title="Catalog" />
        <div className="catalog">
          <div className="column-left">
            <div className="filter">
              <div className="filter-header">
                <h4>Search</h4>
              </div>
              <div>
                <input
                  ref={inputRef}
                  onChange={() => updateInputValue(inputRef.current.value)}
                  type="text"
                  placeholder="search..."
                ></input>
              </div>
              <h4>Manufacturer</h4>
              <div>
                <div>
                  <div>
                    <input
                      type="radio"
                      name="manufacturer"
                      id="all"
                      value="all"
                      onChange={() => updateFilterValue("")}
                    />
                    <label for="all">All</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="manufacturer"
                      id="apple"
                      value="apple"
                      onChange={() => updateFilterValue("Apple")}
                    />
                    <label for="apple">Apple</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="manufacturer"
                      id="dell"
                      value="dell"
                      onChange={() => updateFilterValue("Dell")}
                    />
                    <label for="dell">Dell</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-right">
            <Products manufacture={filterValue} input={inputValue} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Catalog;
