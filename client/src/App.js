import React, { useState } from "react";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [url, setURL] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ url });
    setURL("");
    sendURL();
  };

  async function sendURL() {
    try {
      const request = await fetch("http://localhost:4000/api/url", {
        method: "POST",
        body: JSON.stringify({
          url,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      
      const data = await request.json();

      if(data.message) {
        setLoading(false)
      }
    } catch(err) {
      console.log(err);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home">
      <form className="home__form">
        <h2>Website Aggregator</h2>
        <input
          type='url'
          name='url'
          id='url'
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <button onClick={handleSubmit}>ADD WEBSITE</button>
      </form>
    </div>
  );
};

export default App;
