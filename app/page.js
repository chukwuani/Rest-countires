"use client";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name]);

  return <Dashboard name={name} setName={setName} />;
}
