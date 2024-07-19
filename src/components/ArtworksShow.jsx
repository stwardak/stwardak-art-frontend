import React from 'react';

export function ArtworksShow(props) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!props.artwork) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Artwork Information</h1>
      <p>Title: {props.artwork.title}</p>
      <p>Medium: {props.artwork.medium}</p>
      <p>Description: {props.artwork.description}</p>
      {isAdmin && (
        <div className="space-x-4">
          <button onClick={() => props.onEdit(props.artwork)} className="bg-yellow px-4 rounded-full w-20 text-sm">Edit</button>
          <button onClick={() => props.onDelete(props.artwork.id)} className="bg-yellow px-4 rounded-full w-20 text-sm">Delete</button>
        </div>
      )}
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
