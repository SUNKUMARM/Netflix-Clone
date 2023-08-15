import "./App.css";
import LoginPage from "./components/pages/login page/LoginPage";
// import LandingPage from "../src/components/pages/landingPage/LandingPage";
// import Requests from "./api/requests";
// import Banner from "./components/banner/Banner";
// import NavBar from "./components/navbar/NavBar";
// import Row from "./components/row/Row";

function App() {
  return (
    <div className="app">
      <LoginPage />
      {/* <LandingPage /> */}
      {/* <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;

//0e5e053e766730813e35433bbd09cd1d
//https://api.themoviedb.org/3/movie/550?api_key=0e5e053e766730813e35433bbd09cd1d
