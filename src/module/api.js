export const fetchRandomImage = async () => {
  try {
    const response = await fetch(
      'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true'
    );
    const apiData = await response.json();
    return apiData[0]; // Get the image URL from the response
  } catch (error) {
    console.error('Error fetching random image:', error);
    return null;
  }
};

export default fetchRandomImage;
