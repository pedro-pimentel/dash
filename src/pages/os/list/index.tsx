import React from "react";
import {useEffect, useState} from "react";
import api from "../../../api/api";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Users(){
    const [os, setOs] = useState<any[]>([]);
    const getOs = async () => {
        await api.get("/os/").then((response) => setOs(response.data));
    };

    useEffect(() => {
        getOs();
    }, []);

    return(
        <div className="os">
            <h2>Listagem de O.S por bairro</h2>
            <ul>
                {os &&
                    os.map((user) =>(
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