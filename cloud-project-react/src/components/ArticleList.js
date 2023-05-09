import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleListItem from './ArticleListItem';
import {Link} from 'react-router-dom';


function ArticleList() {

  const [articleList, setArticleList] = useState([]);

  const getArticles = async () => {
    let articles = await axios.get("http://localhost:4000/articles", {headers: {Accept: "application/json"}})
    if( articles ) {setArticleList(articles.data);}
  }


  useEffect(() => {
    getArticles();
  }, []);
  

	return (
    <div>
      <h1>Articles</h1>
      <ul>
        {
          articleList.map( function( article, index) {
            return (
              <li key={index}>
                <ArticleListItem article={article} />
              </li>
            )          
          })
        }
      </ul>
      <Link to={`/article/new`}>Create New Article</Link>
    </div>
  )
}

export default ArticleList;