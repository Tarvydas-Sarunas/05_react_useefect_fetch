import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"

export default function Post() {

  const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
  const dummyUrl = 'https://dummyjson.com/posts'

  const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(false)
const [inputValue, setInputValue] = useState('')
const [selectValue, setSelectValue] = useState('')

  // 1. kuriu stats kur bus saugomi duomenys
 const [postsArr, setPostsArr] = useState([])



  // 2. Parsisiusti duomenis kai uzsikraus viskas naudoju useEffect
  useEffect(() => {
    // getPosts()
    getPostsDummy()
  }, [])

//  function getPosts() {
//   fetch(postsUrl)
//     .then((resp) => resp.json())
//     .then((postsUrlArr) => {
//       setPostsArr(postsUrlArr.slice(0, 10))
//     })
//     .catch(error => {
//     console.warn('ivyko klaida:', error);
//     setError('Ivyko klaida')
//     })
//     .finally(() => {
// setIsLoading(false)
//     })
//  }

 function getPostsDummy() {
  fetch(dummyUrl)
    .then((resp) => resp.json())
    .then((gotObjBack) => {
      setPostsArr(gotObjBack.posts)
    })
    .catch(error => {
    console.warn('ivyko klaida:', error);
    setError('Ivyko klaida')
    })
    .finally(() => {
setIsLoading(false)
    })
 }

function sortByLikes() {
// i setPostArr funkcija paduoti postsArr versija kuri yra isrykiuota, ne modifikuojant postsArr
// kad nemodifikuoti orginalo geriausia tureti jo kopija

// du galimi keliai 
// 1. su slice
const postsArrCopy = postsArr.slice()
// 2. su spred operatoriumi kuri mes daznai naudosime
// cia sakau kad darau arr kuriame iskleisiu viska kas yra postsArr

// pasidarome shalow copija kuri kopijuoja tik virsu bet ne vidu
const postsArrCopy2 = [...postsArr]
// atliekame veiksma
postsArrCopy2.sort((aObj, bObj) => aObj.reactions - bObj.reactions)
// atnaujiname state su kopija
setPostsArr(postsArrCopy2)
}

function showOnly(howmany) {
  console.log('showOnly');
  // pasidaryti kopija
  const postsArrCopija = postsArr.slice()
  // padaryti su slice nuo 0 iki 5
  const kiekfiltruoti = postsArrCopija.slice(0, howmany)
  setPostsArr(kiekfiltruoti)
}

function showOnly5() {
  // padaryti su slice nuo 0 iki 5
  const pasirinkta = postsArr.slice(0, 5)
  setPostsArr(pasirinkta)
}

function handleInput(e) {
console.log('e.target.value ===', e.target.value);
const inputValue = e.target.value
setInputValue(inputValue)
}
function handleSelect(e) {
  console.log('e.target.value ===', e.target.value);
  const selectValue = e.target.value
    showOnly(selectValue)
  
}

// 3. atnaujinti states su gautu is fetch ir itrauktu i setPostsArr 
return <div>
    <h2>Posts</h2>
    {error && <h3>{error}</h3>}
    {postsArr.length === 0 && isLoading === false && !error && <h3>No users found</h3>}
    {isLoading === true && <h1>Loading...</h1>}
      <h2>input value: {inputValue}</h2>
    <fieldset className="flex">
      <legend>
        Filters
      </legend>
      <button className="btn" onClick={sortByLikes}>sort by likes</button>
      <button className="btn" onClick={showOnly5}>show 5 posts</button>
      <input onChange={handleInput} type="text" placeholder="kazkas"/>
      <select onChange={handleSelect} value={selectValue}>
        <option disabled value=''>How many to show</option>
        <option value='5'>5 posts</option>
        <option value='10'>10 posts</option>
        <option value='15'>15 posts</option>
      </select>
    </fieldset>
    <ul className="grid unlisted">
      {postsArr.map((pObj) => <SinglePost key={pObj.id} pObj={pObj} />
      )}
    </ul>
  </div>
}