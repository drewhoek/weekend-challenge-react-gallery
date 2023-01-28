import axios from "axios";

function GalleryItem({ pic, fetchPics }) {

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
    return (
        <>
             <div>
                <img src= {pic.path}/>
                <p>{pic.description}</p>
                <button className="like-button" onClick={likePicture}>Like this Picture!</button>
                <p>{pic.likes} people have liked this picture</p>
            </div>
        </>
    );
}

export default GalleryItem;