import React, { useState, useEffect } from "react";
import axios from 'axios'



const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    // wikipedia api func
    const search = async () => {
      const { data } = await axios.get('https://ko.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: "*",
          format: 'json',
          srsearch: term,
        }
      })
      setResult(data.query.search);
    }

    if (term && !result.length) {
      search()
    } else {
      // if there were no key stroke then do search func after 500ms.
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500)

      return () => {
        clearTimeout(timeoutId);
      }


    }
  }, [term])

  const renderedResult = result.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a className='ui button'
            href={`https://ko.wikipedia.org?curid=${result.pageid}`}

          >Go</a>
        </div>
        <div className='content'>
          <div className='header'>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className='ui called list'>
        {renderedResult}
      </div>
    </div>
  );
};
export default Search;
