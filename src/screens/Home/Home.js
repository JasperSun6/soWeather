import Header from "../../components/Header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="main">
        <p>Welcome to the weather app !</p>
        <p>Please search a place for weather</p>
      </div>
    </div>
  );
}

export default Home;
