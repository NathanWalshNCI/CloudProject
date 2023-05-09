import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';

function Article({article}) {

	return (
    <div>
      <h2>Title: {article.title}</h2>
      <p>Body: {article.body}</p>
      <Link to={`/article/${article.id}/edit`} state={{ article: {article} }} >Edit Article</Link>
      <Link to={`/articles`}>View All Articles</Link>
    </div>
  )
}

export default Article;