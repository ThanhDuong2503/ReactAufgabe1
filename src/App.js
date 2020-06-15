import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CardImage from "./components/CardImage";
import Cardbody from "./components/Cardbody";

const dog = {
  title: "Dog",
  infos: "Dogs are just awesome!",
  imageUrl: "https://cdn.pixabay.com/photo/2018/02/08/16/09/dog-3139757_1280.jpg"
}

const cat = {
  title: "Cat",
  infos: "Cats are awesome, too!",
  imageUrl: "https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089_1280.jpg"
}

function App() {

  const [itemsToDisplay, setItemsToDisplay]= React.useState(dog);

  function displayDog() {
    setItemsToDisplay(dog);
  }

  function displayCat() {
    setItemsToDisplay(cat);
  }

  return (
    <div className="App">
    <Header><h1>AnimalCards</h1></Header>

      <MainContent>

        <button onClick={displayDog}>show dog card</button>
        <button onClick={displayCat}>show cat card</button>


          <Cardbody title={itemsToDisplay.title} infos={itemsToDisplay.infos} >
          </Cardbody>

          <CardImage>
          <img src={itemsToDisplay.imageUrl} alt="Picture"/>
          </CardImage>


      </MainContent>

      <Footer><h4>created on the first day learning React</h4></Footer>
    </div>
  );
}

export default App;
