import { useLocation, redirect, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function ArticleEdit() {

  const location = useLocation();
  const { article } = location.state;
  const navigate = useNavigate();

  const id = article.article.id
  const [title, setTitle] = useState(article.article.title)
  const [body, setBody] = useState(article.article.body)
  const [published, setPublished] = useState(article.article.published)

  const updateArticle = async e => {
    e.preventDefault();
    let response = await axios.put(`http://localhost:4000/articles/${id}.json`, {article: {title: title, body: body, published: published}})
    navigate(`/article/${id}`, {state: {article: response.data}});
  }

  const deleteArticle = async e => {
    e.preventDefault();
    navigate("/articles");
    let response = await axios.delete(`http://localhost:4000/articles/${id}.json`)
    
  }

	return (
    <div>
      <form method="post" onSubmit={updateArticle}>
        <input name="title" value={title} onChange={e => setTitle(e.target.value)} />
        <input name="body" value={body} onChange={e => setBody(e.target.value)} />
        <input name="published" type="checkbox" defaultChecked={published} onChange={e => setPublished(e.target.value)} />
        <button type="reset">Undo Changes</button>
        <button type="submit">Update Article</button>
      </form>
      <button onClick={deleteArticle}>Delete Article</button>      
    </div>
  )
}

export default ArticleEdit;