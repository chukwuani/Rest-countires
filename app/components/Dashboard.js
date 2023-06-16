import Filter from "../components/Filter";
import Header from "../components/Header";
import Search from "../components/Search";
import Countries from "../components/Countries";
import { useState, useEffect } from "react";

export default function Dashboard({ name, setName }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        name === ""
          ? "https://restcountries.com/v3.1/all"
          : `https://restcountries.com/v3.1/name/${name}`
      );
      let result = await response.json();

      setData(result);
      console.log(data);
    }

    fetchData();
  }, [name]);

  return (
    <main>
      <Header />

      <section className="search-filter-section">
        <Search setName={setName} />
        <Filter />
      </section>

      <section className="homepage-result">
        {data.length > 0 ? (
          data.map((item) => (
            <Countries
              name={item.name.common}
              key={item.name.common}
              id={item.area}
              flag={item.flags.png}
              alt={item.flags.alt}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          ))
        ) : (
          <p className="bold">{data.message}</p>
        )}
      </section>
    </main>
  );
}
