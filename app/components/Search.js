"use client";
import { useEffect, useState } from "react";

export default function Search({ setName }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setName(search);
  }, [search]);

  return (
    <div className="search-container">
      <span className="search-icon">
        <ion-icon name="search-outline"></ion-icon>
      </span>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        autoComplete="true"
        placeholder="Search for a country..."
      />
    </div>
  );
}
