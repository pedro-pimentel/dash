import React from "react";
import {useEffect, useState} from "react";
import api from "../../api/api";

import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
  } from "react-router-dom";

  export default function Posts(){
    const [posts, setPosts] = useState<any[]>([]);
    const { id } = useParams();

    const getPosts = async (id:number) => {
      await api.get(`/users/${id}/posts`)
        .then((response) => setPosts(response.data));
    }

    useEffect(() => {
      if(id) {getPosts(+id)}
    }, []);

    return(
      <div className="App">
        <h2>Listagem de Posts de usuários</h2>
        <Link to={`new`}>Criar Posts</Link>
        <ul>
          {posts &&
            posts.map((post) =>(
              <li>
                <Link to={`new/${post.id}`}></Link>
                <b>{post.tittle}</b>
              </li>
            ))}
        </ul>
      </div>
    )
  }