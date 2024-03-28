"use client";
const fetchFortunes = async () => {
  const url = "http://192.168.100.23:3001/fortune/getAllFortunes";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchFortunes;
