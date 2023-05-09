import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import ArticleView from './components/ArticleView';
import ArticleEdit from './components/ArticleEdit';
import ArticleNew from './components/ArticleNew';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route exact path="/articles" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleView />} />
          <Route path="/article/:id/edit" element={<ArticleEdit />} />
          <Route path="/article/new" element={<ArticleNew />} />
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
