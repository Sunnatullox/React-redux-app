import { useHttp } from "../../hook/useHttp";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import Error from "../style/Error.css";
import NewsListItem from "../NewsListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { newsDeleted, fetchnews, filteredNewsSelected } from "./NewsListSlice";
import "../style/NewsList.css";

function NewsList() {

   const filterdNews = useSelector(filteredNewsSelected)
  const  filterLoadingStatus = useSelector( state => state.filterLoadingStatus);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchnews())
    //eslint-disable-next-line
  }, []);

  const onDelet = useCallback((id) => {
    request(`https://reactreduxmyapp.herokuapp.com/news/${id}`, "DELETE")
      .then((data) => console.log(data + "DELETE"))
      .then(dispatch(newsDeleted(id)))
      .catch(() => dispatch("NEWS_FETCHING_ERROR"));

    //eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filterLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return <CSSTransition timeout={500} classNames="item">
      <h4 className="tetx-center mt-5">News doesn't exists</h4> 
      </CSSTransition>
    }
    return arr.map(({ id, ...props }) => {
        return (
          <CSSTransition key={id} timeout={500} classNames="item">
         <NewsListItem onDelet={() => onDelet(id)} {...props} />
          </CSSTransition>
        );
      }).reverse();
  };

  const element = renderNewsList(filterdNews);

  return <TransitionGroup component="ul">
    {element}
    </TransitionGroup>;
}

export default NewsList;
