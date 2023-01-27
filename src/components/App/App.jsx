import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';


function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    console.log("I am running when my component renders for the first time");

    fetchPics();
  }, []);

  function fetchPics() {
    console.log('getting pictures from server');
    axios.get('/gallery') 
    .then((response) => {
      console.log("successfully retrieved data");
      setGalleryList(response.data);
    })
    .catch((err) => {
      alert("Error in retrieving data");
      console.log("error in retrieving data", err);
    });
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
      <GalleryList 
      galleryList={galleryList}
      fetchPics={fetchPics}
      />
      </div>
    );
}

export default App;
