import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./test.css";

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

function App() {
  const [query, setQuery] = useState("naruto");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://api.jikan.moe/v3/search/anime?q=naruto",
    {
      results: [],
    }
  );

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          doFetch(`https://api.jikan.moe/v3/search/anime?q=${query}`);

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.results.map((item) => (
            <div className="ro">
              <div className="column">
                <div className="card">
                  <h1>{item.title}</h1>
                  {movie.image_url ? <img className="" alt="" /> : <p>NoImage</p>}
                  <img src={item.image_url} />
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default App;
