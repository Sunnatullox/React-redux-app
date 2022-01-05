
function NewsListItem({ name, discrioption, category, onDelet}) {
 
  let elementClasssName;
  switch (category) {
    case "Sport_News":
      elementClasssName = "bg-danger bg-gradient";
      break
    case "Covid_News":
      elementClasssName = "bg-primary bg-gradient";
      break
    case "Euro_News":
      elementClasssName = "bg-success bg-gradient";
      break
    default:
      elementClasssName = "bg-info bg-gradient";
  }

  return (
    <li className={`card flex-row text-white w-100 my-2 ${elementClasssName}`}>
      <div className="card-body">
          <h3 className="card-title fs-5 mt-1">{name}</h3>
            <p className="card-text fs-6">{discrioption}</p>
            <span className="position-absolute top-0 mt-2 end-90 translate-middle badge  bg-white">
              <button type="button" className="btn-close " aria-label="Close" onClick={onDelet}></button>
            </span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="News img"
        className="img-fluid w-25 d-inline"
        style={{"objectFit":"cover  "}}
      />
    </li>
  );
}

export default NewsListItem;
