import React from 'react'

export default function TagsList({list = []}) {
  return (
    <><h4>Tags</h4>
    <ul className="unlisted flex">{list.map((tag) => <li key={tag} className="tag flex f-wrap">{tag}</li>)}
    </ul></>
  )
}
