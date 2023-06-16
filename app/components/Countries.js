import Image from "next/image";

export default function Countries({ name, id, population, flag, region, capital, alt }) {
  const formatPopulation = population.toLocaleString();
  return (
    <a href={`${name}`} className="country">
      <img src={flag} width={500} height={500} alt={alt} className="country-flag" />

      <div className="country-stats">
        <h5 className="name">{name}</h5>

        <p className="population">
          <span className="bold">Population : </span>
          {formatPopulation}
        </p>
        <p className="region">
          <span className="bold">Region : </span>
          {region}
        </p>
        <p className="capital">
          <span className="bold">Capital : </span>
          {capital}
        </p>
      </div>
    </a>
  );
}
