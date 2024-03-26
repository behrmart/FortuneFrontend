// pages/Fortune.js

import React, { useState, useEffect } from "react";

const Fortune = () => {
  const [fortune, setFortune] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.100.23:3001/fortune/random",
          { next: { revalidate: 3600 } }
        );
        const data = await response.json();
        console.log(data);
        setFortune(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Random Fortune</h1>
      {fortune ? (
        <div>
          <p>{fortune.fortune_id}</p>
          <p>- {fortune.fortune_message}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fortune;
