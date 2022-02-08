import React, { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/eutelmo/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])

  return ( 
    <section className="repository-List">
      <h1>Lista de Repositorios </h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
        
      </ul>
        
    </section>
   );
}

export default RepositoryList;