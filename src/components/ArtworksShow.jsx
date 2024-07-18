// export function ArtworksShow(props) {
//   return (
//     <div>
//       <h1>Artwork information</h1>
//       <p>Name: {props.artwork.title}</p>
//       <p>Name: {props.artwork.medium}</p>
//       <p>Description: {props.artwork.description}</p>
//       <p>Description: {props.artwork.image_url}</p>
//       {/* {props.artwork.image_url && <img src={`http://localhost:3000${artwork.image_url}`} alt={artwork.title} style={{ maxWidth: '100%' }} />} */}
//     </div>
//   );
// }

import React from 'react';

export function ArtworksShow(props) {
  return (
    <div>
      <h1>Artwork Information</h1>
      <p>Title: {props.artwork.title}</p>
      <p>Medium: {props.artwork.medium}</p>
      <p>Description: {props.artwork.description}</p>
      {/* Check if image_url is present and then display the image */}
      {props.artwork.image_url && (
        <img
          src={`http://localhost:3000${props.artwork.image_url}`}
          alt={props.artwork.title}
          style={{ maxWidth: '20%' }}
        />
      )}
    </div>
  );
}
