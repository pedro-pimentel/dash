import React from "react";
import { useEffect, useState } from "react";
import api from "../../../api/api";

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

interface bairros{

}

export default function Users() {
    const [os, setOs] = useState<any[]>([]);
    let [bairro, setBairro] = useState<string[]>([]);
    let bairros: any[] | ((prevState: string[]) => string[]) = [];
    const getBairro = async () => {
        const { data } = await api.get("/os");
        data.map((datas: any) => (
            bairros.push(datas['bairro'])
        ));
        bairros.sort();
        setBairro(bairros);
    };
    const getOs = async () => {
        await api.get("/os").then((response) => setOs(response.data));
    };

    useEffect(() => {
        getBairro();
    }, []);

    return (
        <div className="OS">
            <h2>Listagem de O.S por bairro</h2>
            <ul>
                {bairro &&
                    bairro.map((data) => (
                        <li key={data}>
                            <Link to={`${data}`}>{data}</Link>
                            <br />
                            <br />
                        </li>
                    ))
                }
            </ul>
        </div>
    );

}