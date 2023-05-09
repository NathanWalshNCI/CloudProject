import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';

function ArticleListItem({article}) {  

	return (
    <div>
      <h2>Title: {article.title}</h2>
      <p>Body: {article.body}</p>
      <h4>Published: {String(article.published)}</h4>
      <Link to={`/article/${article.id}`} state={{ article: {article} }} >View Article</Link>
    </div>
  )
}

export default ArticleListItem;