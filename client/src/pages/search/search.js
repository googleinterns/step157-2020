import './search.css';

import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  let curResults;

  const getResults = () => {
    const results = fetch('/searchJava?query=' + query)
      .then((r) => r.json())
      .then((list) => {
          curResults = list;
      });
  }

  return(
    <div id="content">
      <form>
        <input
          id="query"
          type="text"
          autoComplete="off"
          onChange={ (event) => { setQuery(event.target.value); }}
        />
        <button onClick={ getResults() }>
          Submit
        </button>
      </form>
      <div>
        <p>Results</p>
        <ul>
          { curResults }
        </ul>
      </div>
    </div>
  );
};

export default Search;