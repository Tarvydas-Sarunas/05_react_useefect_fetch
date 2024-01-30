import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

export default function MarketList() {

  const [getUrlArr, setGetUrlArr] = useState([]);

  useEffect(() => {
    const url = 'https://sophisticated-humane-dandelion.glitch.me';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setGetUrlArr(data))
      .catch(error => {
        console.warn('Une erreur est survenue:', error);
      });
  }, []);

  function removeItem(itemId) {
const deleted = getUrlArr.filter((obj) => obj.id !== itemId)
setGetUrlArr(deleted)
  }
  
  return (
    <div className="grid">
      {getUrlArr.map((mObj) => (
        <SingleCard key={mObj.id} mObj={mObj} deleteItem={removeItem} />
      ))}
    </div>
  );
}
