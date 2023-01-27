import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, fetchPics }) {

    return(
        <>
        <p>Here is my gallery!</p>
        <div id="gallery-container">
        {galleryList.map((pic) => (
            <GalleryItem 
            key={pic.id}
            pic={pic}
            fetchPics={fetchPics}
            />
        ))}
        </div>
        </>
    );
}

export default GalleryList;