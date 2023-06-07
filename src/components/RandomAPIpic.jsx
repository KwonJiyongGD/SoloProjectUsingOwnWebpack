import React, { useState, useEffect } from 'react';

const PictureShower = () => {
  const apiUrl =
    'https://api.thecatapi.com/v1/images/search?api_key=live_AAbT1nR0MgyalgczCPU7cBZzNmwpR5zg1LwOJvZlVUUx1aGvCG8bW7yyDLQ4hhqT';

  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const randomIndex = Math.floor(Math.random() * data.length);
          const selectedImage = data[randomIndex].url;
          setRandomImage(selectedImage);
        })
        .catch((error) => console.log('Error in PictureShower Component'));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="random-image-container">
      {randomImage && (
        <div className="random-image">
          <div className="image-square">
            <img src={randomImage} alt="Some random picture from API call" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PictureShower;
