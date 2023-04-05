import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticleList } from "./components/ArticlesList";
import Header from "./components/Header";
import Article from "./components/Article";
import Profile from "./components/Profile";
import { UserProvider } from "./context/UserContext";
import Cooking from "./components/Cooking";
import Coding from "./components/Coding";
import Football from "./components/Football";

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
            <Route path="/coding" element={<Coding />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/football" element={<Football />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
