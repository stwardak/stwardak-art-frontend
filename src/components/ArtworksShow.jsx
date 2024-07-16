export function ArtworksShow(props) {
  return (
    <div>
      <h1>Artwork information</h1>
      <p>Name: {props.artwork.title}</p>
      <p>Description: {props.artwork.description}</p>
    </div>
  );
}