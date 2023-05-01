import React, { useState, useEffect } from 'react';

function App() {
  const [dogImgUrl, setDogImgUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImgUrl(data.message);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImgUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
