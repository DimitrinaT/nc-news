import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticleList } from "./components/ArticlesList";
import Header from "./components/Header";
import Article from "./components/Article";
import Profile from "./components/Profile";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/articles/:article_id" element={<Article />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
