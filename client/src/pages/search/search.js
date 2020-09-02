// import './search.css';

import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  let curResults;

  const getResults = () => {
    fetch(`/skillsearch?query=${query}`)
      .then((results) =>
        // console.log(results);
        results.json()).then((list) => {
        curResults = list;
        console.log('hi');
        console.log(curResults);
       }).then(() => showResults());
      //});
  };

  const showResults = () => {
    for (const result in curResults) {
      console.log(result);
      const r = document.createElement('P');
      r.innerText = result.key;
      document.getElementById('results').appendChild(r);
    }
  };

  return (
    <div id="content">
    {console.log('hi')}
      <form>
        <input
          id="query"
          type="text"
          autoComplete="off"
          onChange={(event) => { setQuery(event.target.value); }}
        />
        <button onClick={getResults}>
          Submit
        </button>
      </form>
      <div id="results" />
    </div>
  );
};

export default Search;
