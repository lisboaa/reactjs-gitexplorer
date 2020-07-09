import React, { useEffect, useState, FormEvent } from 'react';
import logoImg from '../../assets/header-git-hub.svg';
import api from '../../service/api';
import { Title, Form, Repositories } from './style';
import { FiChevronRight } from 'react-icons/fi';

interface RepositoryDTO {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<RepositoryDTO[]>([]);

    async function handleAddRepository(
      event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
      event.preventDefault();

      const response = await api.get<RepositoryDTO>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

    }
  return (
  <>
    <img src={logoImg} alt="Logo git Hub."/>
    <Title>Explore repositórios no GitHub</Title>

    <Form onSubmit={handleAddRepository}>
      <input
      value={newRepo}
      onChange={(e) => setNewRepo(e.target.value)}
      type="text"
      placeholder="Digite o nome do repositorio"/>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      {repositories.map(repository => (
        <a href="teste" key={repository.full_name}>
          <img src={repository.owner.avatar_url}
          alt={repository.owner.login}/>
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        ))}

    </Repositories>
  </>
  )
}

export default Dashboard;
