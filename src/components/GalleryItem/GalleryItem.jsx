import axios from "axios";
import { useState } from "react";

function GalleryItem({ pic, fetchPics }) {

  const [displayMode, setDisplayMode] = useState(false)

    function likePicture() {
        console.log('liking picture at id:', pic.id);
        axios.put(`/gallery/like/${pic.id}`)
        .then((response) => {
          console.log("liked picture successfully");
          fetchPics();
        })
        .catch((err) => {
          alert("Error in liking picture");
          console.log("error in liking picture", err);
        });
    }

function toggleMode() {
  console.log('switching mode of list item');
  setDisplayMode(!displayMode);
}

const whichDisplay = () => {
  const picDisplay = <img src= {pic.path}/>
  const descriptionDisplay = <p>{pic.description}</p>
  if (displayMode) {
    return descriptionDisplay
  } else {
    return picDisplay
  }
}

console.log(whichDisplay());
    return (
        <>
             <div>
                <div class ="displayed-div" onClick={toggleMode}>
                  {whichDisplay(displayMode)}
                </div>
                <button className="like-button" onClick={likePicture}>Like this Picture!</button>
                <p>{pic.likes} people have liked this picture</p>
            </div>
        </>
    );
}

export default GalleryItem;