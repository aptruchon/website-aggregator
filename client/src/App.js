import React, { useState } from "react";

const App = () => {
  const [url, setURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ url });
    setURL("");
  };

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
