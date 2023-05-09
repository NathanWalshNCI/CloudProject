import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Article from './Article';

function ArticleView() {

  const location = useLocation();

  let articleToPass = {};
  if( location.state )
  {
    const { article } = location.state;
    if( article.hasOwnProperty('article') ) { articleToPass = article.article; }
    if( !article.hasOwnProperty('article') ) { articleToPass = article; }
  }

  return (
    <div>
      <Article article={articleToPass} /> 
    </div>
  )

}

export default ArticleView;