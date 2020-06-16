import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CardImage from "./components/CardImage";
import CardBody from "./components/CardBody";
import "./components/Card.css"
import "./components/CardImage.css"
import "./components/Button.css"

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

const dolphin = {
  title: "Dolphin",
  infos: "Dolphin is a common name of aquatic mammals within the infraorder Cetacea. The term dolphin usually " +
      "refers to the extant families Delphinidae (the oceanic dolphins), Platanistidae (the Indian river dolphins)," +
      " Iniidae (the New World river dolphins), and Pontoporiidae (the brackish dolphins), " +
      "and the extinct Lipotidae (baiji or Chinese river dolphin). There are 40 extant species " +
      "named as dolphins. Dolphins range in size from the 1.7-metre-long (5 ft 7 in) long and 50-kilogram " +
      "(110-pound) Maui's dolphin to the 9.5 m (31 ft 2 in) and 10-metric-ton (11-short-ton) killer whale. " +
      "Several species exhibit sexual dimorphism, in that the males are larger than females. " +
      "They have streamlined bodies and two limbs that are modified into flippers. " +
      "Though not quite as flexible as seals, some dolphins can travel at 55.5 km/h (34.5 mph).",
  imageUrl: "https://cdn.pixabay.com/photo/2016/09/18/09/54/sea-1677647_1280.jpg"
}

function App() {

  const [itemsToDisplay, setItemsToDisplay] = React.useState(snowleopard);

  function displayHusky() {
    setItemsToDisplay(husky);
  }

  function displaySnowLeopard() {
    setItemsToDisplay(snowleopard);
  }

  function displayDolphin() {
    setItemsToDisplay(dolphin);
  }

  return (
    <div className="App">

    <Header><h1>AnimalCards</h1></Header>

      <MainContent>

        <button className="Button" onClick={displayHusky}>show Husky card</button>

        <button className="Button" onClick={displaySnowLeopard}>show Snow Leopard card</button>

        <button className="Button" onClick={displayDolphin}>show Dolphin card</button>

        <div className="Card">
          <CardBody title={itemsToDisplay.title} infos={itemsToDisplay.infos} >
          </CardBody>

          <CardImage>
          <img className="CardImage" src={itemsToDisplay.imageUrl} alt=""/>
          </CardImage>
        </div>

      </MainContent>

      <Footer><h4>created on the first day learning React</h4></Footer>

    </div>
  );
}

export default App;
