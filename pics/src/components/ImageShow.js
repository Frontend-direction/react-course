
function ImageShow({ image }) {
  return (
    <img 
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description} 
          style={{ width: '100px'}}
        />
  );
}

export default ImageShow;