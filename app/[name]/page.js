import Header from "../components/Header";

export default async function page({ params }) {
  const { name } = params;
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
  let result = await response.json();

  const native = result.map((item) =>
    item.name.nativeName ? Object.values(item.name.nativeName) : "None"
  );
  const lang = result.map((item) => (item.languages ? Object.values(item.languages) : "None"));
  const curr = result.map((item) => (item.currencies ? Object.values(item.currencies) : "None"));

  return (
    <div>
      <Header />
      {result.map((item) => (
        <section key={item.capital} className="details-page">
          <a href="/">Back</a>

          <section className="detail-section">
            <img src={item.flags.png} alt={item.flags.alt} className="flag-side" />

            <article>
              <h1>{item.name.official}</h1>

              <div className="more-info">
                <div className="more-info-left">
                  <p className="capital">
                    <span className="bold">Native Name : </span>
                    {native[0][0].common ? native[0][0].common : "None"}
                  </p>

                  <p className="population">
                    <span className="bold">Population : </span>
                    {item.population}
                  </p>

                  <p className="region">
                    <span className="bold">Region : </span>
                    {item.region}
                  </p>

                  <p className="region">
                    <span className="bold">Sub Region : </span>
                    {item.subregion ? item.subregion : "None"}
                  </p>

                  <p className="capital">
                    <span className="bold">Capital : </span>
                    {item.capital ? item.capital : "None"}
                  </p>
                </div>

                <div className="more-info-right">
                  <p className="capital">
                    <span className="bold">Top Level Domain : </span>
                    {item.tld[0]}
                  </p>

                  <p className="population">
                    <span className="bold">Currencies : </span>
                    {curr[0][0].name ? curr[0][0].name : "None"}
                  </p>

                  <p className="region">
                    <span className="bold">Languages : </span>
                    {lang.map((item) => item)}
                  </p>
                </div>
              </div>

              <div className="border-countries">
                <p className="capital">
                  <span className="bold">Border Countires : </span>

                  {item.borders
                    ? item.borders.map((item) => (
                        <button key={item} type="button">
                          {item}
                        </button>
                      ))
                    : "None"}
                </p>
              </div>
            </article>
          </section>
        </section>
      ))}
    </div>
  );
}
