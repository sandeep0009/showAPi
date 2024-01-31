import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDescription = () => {
  const [show, setShow] = useState(null);
  const {id}=useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {show ? (
        <div className="show">
          <h2>{show.name}</h2>
          {show.image && show.image.medium && <img src={show.image.medium} alt="" />}
          <p>{show.summary}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDescription;
