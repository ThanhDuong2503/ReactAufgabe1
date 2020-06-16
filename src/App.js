import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CardImage from "./components/CardImage";
import CardBody from "./components/CardBody";
import "./components/Card.css"
import "./components/CardImage.css"

const husky = {
  title: "Husky",
  infos: "A husky is a sled dog used in polar regions. One can differentiate huskies from other dog types " +
      "by their fast pulling-style. " +
      "They represent an ever-changing cross-breed of the fastest dogs." +
      "Huskies are also kept as pets, and groups work to find new pet homes " +
      "for retired racing and adventure-trekking dogs.",
  imageUrl: "https://cdn.pixabay.com/photo/2018/02/08/16/09/dog-3139757_1280.jpg"
}

const snowleopard = {
  title: "Snow Leopard",
  infos: "The snow leopard (Panthera uncia), also known as the ounce, is a large cat native to the mountain " +
      "ranges of Central and South Asia. It is listed as Vulnerable on the IUCN Red List because the global " +
      "population is estimated to number less than 10,000 mature individuals and is expected to decline " +
      "about 10% by 2040. It inhabits alpine and subalpine zones at elevations " +
      "from 3,000 to 4,500 m (9,800 to 14,800 ft), ranging from eastern Afghanistan to Mongolia and western China. " +
      "In the northern range countries, it also lives at lower elevations.",
  imageUrl: "https://cdn.pixabay.com/photo/2017/08/18/14/00/leopard-2655096_1280.jpg"
}

function App() {

  const [itemsToDisplay, setItemsToDisplay] = React.useState(husky);

  function displayHusky() {
    setItemsToDisplay(husky);
  }

  function displaySnowLeopard() {
    setItemsToDisplay(snowleopard);
  }

  return (
    <div className="App">
    <Header><h1>AnimalCards</h1></Header>

      <MainContent>

        <button onClick={displayHusky}>show Husky card</button>

        <button onClick={displaySnowLeopard}>show Snow Leopard card</button>

        <div className="Card">
          <CardBody title={itemsToDisplay.title} infos={itemsToDisplay.infos} >
          </CardBody>

          <CardImage>
          <img className="CardImage" src={itemsToDisplay.imageUrl} alt="Picture"/>
          </CardImage>
        </div>

      </MainContent>

      <Footer><h4>created on the first day learning React</h4></Footer>
    </div>
  );
}

export default App;
