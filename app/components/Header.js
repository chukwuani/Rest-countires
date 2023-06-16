"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const localValue = localStorage.getItem("MODE");

  const [darkMode, setDarkMode] = useState(() => {
    return localValue == null ? false : JSON.parse(localValue);
  });

  useEffect(() => {
    const body = document.querySelector("body");
    darkMode ? body.classList.add("dark") : body.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("MODE", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header>
      <h4>Where in the world?</h4>

      <div className="theme-toggle">
        {darkMode && (
          <span
            className="light-mode"
            onClick={() => {
              setDarkMode(false);
            }}>
            <ion-icon name="sunny-outline"></ion-icon>

            <p>Light Mode</p>
          </span>
        )}

        {!darkMode && (
          <span
            className="dark-mode"
            onClick={() => {
              setDarkMode(true);
            }}>
            <ion-icon name="moon-outline"></ion-icon>

            <p>Dark Mode</p>
          </span>
        )}
      </div>
    </header>
  );
}
