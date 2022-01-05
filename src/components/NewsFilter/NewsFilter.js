import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassNames from "classnames";
import Spinner from "../Spinner";
import Error from "../style/Error.css";
import { activeFilterChanged,filterfetchingnews } from "./NewsFilterSlice"

function NewsFilter() {
  const { filterLoadingStatus, activFilter, filters } = useSelector(state => state.reducerFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterfetchingnews())
    //eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Spinner />;
  } else if(filterLoadingStatus === "error") {
    return <Error />;
  }

  const renderFilters = (arr) => {
    if(arr.length === 0) {
      return <h5 className="text-center mt-5">Filters doesn't found</h5>
    }
    return arr.map(({ name, className, label, }) => {
      const btnClasses = ClassNames("btn h-25", className,{
        "active": name === activFilter
      });
      return (
        <button
          key={name}
          id={name}
          className={btnClasses}
          onClick={() => dispatch(activeFilterChanged(name))}
          style={{"fontSize":"10px" }}
        >
          {label}
        </button>
      );
    });
  };

  const elements =renderFilters(filters)

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="form-label">
          Filters by category
        </p>
        <div className="btn-group">
        {elements}
        </div>
      </div>
    </div>
  );
}

export default NewsFilter;
