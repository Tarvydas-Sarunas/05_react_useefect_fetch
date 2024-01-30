import React from 'react'
import TagsList from './TagsList'

export default function SinglePost(props) {
  const {pObj} = props
  console.log('props ===', props);
  return (
    <li className="card">
    <p>Post id: {pObj.id} </p>
    <p>User id: {pObj.userId} </p>
    <h3>{pObj.title}</h3>
    <p>{pObj.body.slice(0, 85)}... </p>
    <p>Likes: {pObj.reactions}</p>
    <hr />
    <TagsList list={pObj.tags}/>
    </li>
  )
}
