import axios from "axios";
import { useState } from "react";

function GalleryItem({ pic, fetchPics }) {

  const [displayMode, setDisplayMode] = useState(false);

// Function with PUT request to like a picture
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

// function that will toggle our display mode
function toggleMode() {
  console.log('switching mode of list item');
  setDisplayMode(!displayMode);
}

// function to decide what is rendered to the DOM based on 
const whichDisplay = (displayMode) => {
  const picDisplay = <img src= {pic.path}/>
  const descriptionDisplay = <p>{pic.description}</p>
  if (displayMode) {
    return descriptionDisplay;
  } else {
    return picDisplay;
  }
}

    return (
        <>
             <div>
                <div class ="displayed-div" onClick={toggleMode}>
                  {whichDisplay(displayMode)}
                </div>
                <button className="like-button" onClick={likePicture}>Like this Picture!</button>
                <p><span class="number-of-likes">{pic.likes}</span> people have liked this picture</p>
            </div>
        </>
    );
}

export default GalleryItem;