import { Route, Routes } from "react-router";
import Pocketmon from "./components/Pocketmon";
import Book from "./components/Book";
import { NavLink } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import BookInfinite from "./components/BookInfinite";

function App() {
  return (
    <div className="container-fluid my-5 py-5">
      {/* 상단 메뉴 영역 */}
      <Menu/>
    

      {/* 본문 영역 */}
      <div className="row">
    <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1">
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/pocketmon" element={<Pocketmon/>}></Route>
      <Route path="/book" element={<Book/>}></Route>
      <Route path="/book2" element={<BookInfinite/>}></Route>
      </Routes>
    </div>
      </div>

    </div>
  );
}

export default App;
