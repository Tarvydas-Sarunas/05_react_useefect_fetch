import { useEffect, useState } from "react"
import TagsList from "./TagsList"
import SinglePost from "./SinglePost"

export default function Post() {

  const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
  const dummyUrl = 'https://dummyjson.com/posts'

  const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(false)

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
      setPostsArr(gotObjBack.posts.slice(0, 10))
    })
    .catch(error => {
    console.warn('ivyko klaida:', error);
    setError('Ivyko klaida')
    })
    .finally(() => {
setIsLoading(false)
    })
 }

// 3. atnaujinti states su gautu is fetch ir itrauktu i setPostsArr 
return <div>
    <h2>Posts</h2>
    {error && <h3>{error}</h3>}
    {postsArr.length === 0 && isLoading === false && !error && <h3>No users found</h3>}
    {isLoading === true && <h1>Loading...</h1>}
    <ul className="grid unlisted">
      {postsArr.map((pObj) => <SinglePost key={pObj.id} pObj={pObj} />
      )}
    </ul>
  </div>
}