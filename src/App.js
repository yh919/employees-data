// import "./styles.css";
import React, { useEffect, useState , useRef } from "react";
import axios from "axios";


export default function App() {
  const [term, setTerm] = useState("ReactJS");
  const [result, setResult] = useState([]);
  const termRef = useRef('')

  useEffect(() => {
    termRef.current = term;
  })

  const prevTerm = termRef.current

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResult(respond.data.query.search);
    };
   
    if (!result.length) {
      if (term) {
        search();
      } 
    } else if (prevTerm !== term) {
      const debounceSearch = setTimeout(() => {
        if (term) {
          search();
        } 
      }, 1200)
   
   
      return () => {
     
        clearTimeout(debounceSearch);
      }
    }
  }, [prevTerm, result.length, term]);

  
  const fetchResult = result.map((e) => {
    return (
      < tr key = { e.pageid } >
        <th scope="row">{e.pageid}</th>
        <td>{e.title}</td>
        <td><span dangerouslySetInnerHTML={{ __html: e.snippet }} /></td>
      </tr >
      
    )
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="my-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Search Input
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => setTerm(e.target.value)}
              value={term ? term : null}
              placeholder="Enter"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
              </tr>
            </thead>
            <tbody>
              {fetchResult}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
