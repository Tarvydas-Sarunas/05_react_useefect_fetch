import { useEffect } from "react";
import { useState } from "react"

export default function UsersList() {
console.log('UsersList susikure');
// parsisiuti duomenis is api

const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(false)
// 1. sukurti state kur bus saugomi duomenys

const [usersArr, setUsersArr] =  useState([])
// console.log('usersArr ===', usersArr);
// 2. parsiusti duomenis tik uzsikrovus componentui (useEffect)
// useEffect paleis musu funkcija kai pasikeis priklausomybiu masyvas
// useEffect(fn, [priklausomybiu masyvas])
useEffect(() => {
  console.log('ivyko efektas')
  // fetch https://jsonplaceholder.typicode.com/users parsiusti ir iskonsologinti

  // function getUsers() {
  //   fetch(usersUrl)
  //     .then((resp) => resp.json())
  //     .then((userObj) => {
  //       generateUsersMap(userObj);
  //     })
  //     .catch((err) => {
  //       console.warn("klaida generatePosts", err);
  //     });
  // }
const url ='https://jsonplaceholder.typicode.com/users'

getUsers()
function getUsers() { 
  setIsLoading(true)
  fetch(url)
  .then((resp) => resp.json())
  .then((userArrUrl) =>  {
    setUsersArr(userArrUrl)
  setIsLoading(false)
  })
  .catch((err) => {
  console.warn("klaida generatePosts", err);
  setError('ivyko klaida')
   })
   .finally(() => {setIsLoading(false)})
    
   
  }
 
}, [])
// 3. atnaujinti state su gautais duomenimis

  const usersArrEmpty = usersArr.length === 0
  return <div>
    <h2>Users</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus impedit vel minima nihil! Facilis explicabo, perspiciatis voluptatum saepe id dicta ut quidem maxime nostrum alias nesciunt, aspernatur neque? Voluptatum nulla ab distinctio id sapiente corporis iure a quas quasi maiores vitae harum, deserunt tempora! Tempora quasi mollitia odit ducimus explicabo.</p>
    {error && <h3>{error}</h3>}
    {usersArr.length === 0 && isLoading === false && !error && <h3>No users found</h3>}
    {isLoading === true && <h1>Loading...</h1>}
    <ul>
      {usersArr.map((uObj) => <li key={uObj.id}>
        <h3>{uObj.name}</h3>
        <p>{uObj.email} </p>
      </li>)}
    </ul>
  </div>
}