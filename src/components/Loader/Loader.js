import "./Loader.css";

function Loader({ loading }) {
  return <>{loading ? <div className="loader"></div> : null}</>;
}

export default Loader;
