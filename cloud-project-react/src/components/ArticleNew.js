import { useLocation, redirect, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function ArticleNew() {

  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const createArticle = async e => {
    e.preventDefault();
    let response = await axios.post("http://localhost:4000/articles.json", {article: {title: title, body: body}})
    if(response) { navigate(`/article/${response.data.id}`, {state: {article: response.data}}); }
  }



	return (
    <div>
      <form method="post" onSubmit={createArticle}>
        <input name="title" value={title} onChange={e => setTitle(e.target.value)} />
        <input name="body" value={body} onChange={e => setBody(e.target.value)} />
        <button type="submit">Create Article</button>
      </form>     
    </div>
  )
}

export default ArticleNew;