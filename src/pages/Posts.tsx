import React from "react";
import {useEffect, useState} from "react";
import api from "../api/api";

import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
  } from "react-router-dom";

  export default function Posts(){
    const [posts, setPosts] = useState<any[]>([]);
    const { id } = useParams();
  }