import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, fetchPics }) {

    return(
        <>
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