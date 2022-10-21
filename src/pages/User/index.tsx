import React from "react";
import {useEffect, useState} from "react";
import api from "../../api/api";

import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Users(){
    const [users, setUsers] = useState<any[]>([]);
    const getUsers = async () => {
        await api.get("/users").then((response) => setUsers(response.data));
    };

    useEffect(() => {
        getUsers();
    }, []);

    return(
        <div className="App">
            <h2>Listagem de usuários</h2>
            <ul>
                {users &&
                    users.map((user) =>(
                        <li key={user.id}>
                            <Link to={`${user.id}/posts`}>{user.name}</Link>
                            <br />
                            <br />
                        </li>
                    ))
                } 
            </ul>
        </div>
    );

}