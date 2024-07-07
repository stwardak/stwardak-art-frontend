import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtworkItem from '../components/ArtworkItem';

function Home() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/artworks')
      .then(response => {
        setArtworks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the artworks!', error);
      });
  }, []);

  return (
    <div>
      <main>
        <div>
          <h1>Artworks</h1>
          <ul>
            {artworks.map(artwork => (
              <ArtworkItem key={artwork.id} artwork={artwork} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;


// src/Pages/Home.js
// import React from 'react';

// function Home() {
//   const testImageUrl = 'https://i.imgur.com/dsQzZXq.jpeg';

//   return (
//     <div>
//       <main>
//         <div>
//           <h1>Test Image</h1>
//           <img src={testImageUrl} alt="Test Image" style={{ maxWidth: '100%' }} />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Home;
