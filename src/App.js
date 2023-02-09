import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticleList } from "./components/ArticlesList";
import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
