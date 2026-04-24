import { useEffect, useState } from "react";
import { client } from "../sanityClient";

function Arbeidskrav() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "arbeidskrav"]`;
      const result = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Arbeidskrav;