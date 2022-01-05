import { useState } from "react";
import { useHttp } from "../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { newsCreated } from "./NewsList/NewsListSlice";

export default function NewsAddForm() {

  const [name, setName] = useState("");
  const [discrioption, setDiscrioption] = useState("");
  const [category, setCategory] = useState("");
  const { filters, filterLoadingStatus } = useSelector(state => state.reducerFilter)
  const dispatch = useDispatch();
  const {request} = useHttp();


  const onSubmitHendel= (e)=> {
      e.preventDefault();
    const newNews = {id: v4(), name, discrioption, category};
    request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
    .then(() => console.log("Add News"))
    .then(dispatch(newsCreated(newNews)))
    .catch(err => console.log(err))


    setName("")
    setDiscrioption("")
    setCategory("")
  }

  const  renderFilters = (filters, status)=> {
    if(status === "loading"){
      return <option>Loading options</option>
    }else if(status === "error"){
      return <option>Error options</option>
    }

    if(filters && filters.length > 0 ){
      return filters.map(({name, label})=>{
        //eslint-disable-next-line
        if(name === "all") return;
        return<option key={name} value={name}>{label}</option>
      })
    }
  }
  



  return (
    <form className="botder p-4 shadow-lg rounded" onSubmit={onSubmitHendel}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for new News
        </label>
        <input
          type="text"
          required
          name="name"
          className="form-control"
          id="name"
          placeholder="What is name of news"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tetx" className="form-label fs-4">
          Descrption
        </label>
        <textarea
          type="text"
          required
          name="text"
          className="form-control"
          id="tetx"
          placeholder="What is your news about?"
          style={{ height: "120px" }}
          value={discrioption}
          onChange={(e) => setDiscrioption(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Choose category of news
        </label>
        <select required className="form-select" id="category" name="category" value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option >Category of News...</option>
          {renderFilters(filters, filterLoadingStatus)}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-dark w-100 shadow-lg text-white "
      >
        Create News
      </button>
    </form>
  );
}
