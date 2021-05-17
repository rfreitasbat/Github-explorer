import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import "../styles/repositories.scss";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [ repositories , setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []) // Nunca deixa o useEffect sem o segundo parametro para não causar uma loop infinito.

    return (
        <section className='container'>
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                    // Todo vez que utilizarmos Map devemos passar uma Id unica para cada item dentro do map
                    // no React usamos o key para definir qual será o item, o key é do REACT!!!!
                })}
            </ul>
        </section>
    );
}