async function getDataWithToken(url, token) {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const url = "http://localhost:5003/api/hobbittalk";
const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjhiMGIyOGY3OTc2ZTZjYWI1MjkxYiIsImlhdCI6MTcwOTEzODE3NywiZXhwIjoxNzA5MjI0NTc3fQ._7QJZg9Y8NbnU76xjcbkaldU-raIsQMH47lFZGDaEfQ";

getDataWithToken(url, bearerToken)
  .then((data) => {
    console.log("Data received", data);
    // do something with the data
  })
  .catch((error) =>
    // Handle errors
    {
      console.error("Error fetching data:", error);
    }
  );

export default async function Main() {
  return (
    <div>
      <h1>Main comp</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
    </div>
  );
}
