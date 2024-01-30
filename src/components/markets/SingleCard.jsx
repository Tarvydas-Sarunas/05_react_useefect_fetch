
export default function SingleCard({mObj, deleteItem}) {

  return (
      <div className="card">
        <img src={mObj.image} className="card-img-top" alt={mObj.title} />
        <div className="card-body">
          <h5 className="card-title">{mObj.title}</h5>
          <p className="card-text">{mObj.price}</p>
          <a onClick={() => deleteItem(mObj.id)} className="btn">Istrinti</a>
        </div>
      </div>
  );
}
