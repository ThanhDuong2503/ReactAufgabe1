import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import DogCard from "./components/DogCard";
import CatCard from "./components/CatCard";
import DogImage from "./components/DogImage";
import CatImage from "./components/CatImage";

const dog = {
  infos: "Dogs are just awesome!",
  imageUrl: "https://cdn.pixabay.com/photo/2018/02/08/16/09/dog-3139757_1280.jpg"
}

const cat = {
  infos: "Cats are awesome, too!",
  imageUrl: "https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089_1280.jpg"
}


function App() {

  // const [itemsToDisplay, setItemsToDisplay]= React.useState(dog);
  //
  // function displayDog() {
  //   setItemsToDisplay(dog);
  // }
  //
  // function displayCat() {
  //   setItemsToDisplay(cat);
  // }

  return (
    <div className="App">
    <Header><h1>AnimalCards</h1></Header>

      <MainContent>
        <DogCard infos={dog.infos}>
        </DogCard>
        <DogImage>
          <img src={dog.imageUrl} alt="Dog Picture"/>
        </DogImage>

        <CatCard infos={cat.infos}>
        </CatCard>
        <CatImage>
          <img src={cat.imageUrl} alt="Cat Picture"/>
        </CatImage>

        {/*<button onClick={displayDog}>show dog card</button>*/}
        {/*<button onClick={displayCat}>show cat card</button>*/}
        {/*<DogCard items={itemsToDisplay}></DogCard>*/}

      </MainContent>

      <Footer><h4>created on the first day learning React</h4></Footer>
    </div>
  );
}

export default App;
