import React from "react";
import {useEffect, useState} from "react";
import api from "../../../api/api";

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

export default function Users(){
    const [os, setOs] = useState<any[]>([]);
    const [bairro, setBairro] = useState<any[]>([]);
    // const GetBairro = async () => {
    //     await api.get("/os").then((response) => setOs(response.data));
    // };
    const getOs = async () => {
       const { data } =  await api.get("/os");
       console.log(data[0]['bairro']);
    };

    useEffect(() => {
        getOs();
    }, []);

    return(
        <div className="OS">
            <h2>Listagem de O.S por bairro</h2>
            <ul>
                {os &&
                    os.map((data) =>(
                        <li key={data.id}>
                            <Link to={`${data.numero_ordem_servico}`}>{data.nome_cliente}</Link>
                            <br />
                            <br />
                        </li>
                    ))
                } 
            </ul>
        </div>
    );

}