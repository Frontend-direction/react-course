import ImageShow from "./ImageShow";

function ImageList({ images }) {

  const listOfImages = () => {
    console.log(images);
    return images.map(image => {
      return (
        <ImageShow image={image}/>
      )
    })
  }

  return (
    <div className="app">
      {listOfImages()}
    </div>
  );
}

export default ImageList;