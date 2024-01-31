import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setData(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {data.map((i) => (
        <div className="container" key={i.id}>
          <div className="container-inside">
            {i.show.image && i.show.image.medium && (
              <img src={i.show.image.medium} alt="" />
            )}

            <h2>{i.show.name}</h2>
            <span>Language: {i.show.language}</span>

            <div className="button2">
              <Link className="button" to={`/show/${i.show.id}`}>To see the description</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
