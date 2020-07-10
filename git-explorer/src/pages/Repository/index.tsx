import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styled';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import logoImg from '../../assets/header-git-hub.svg';
import api from '../../service/api';


interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      console.log(response.data);

    })
  }, [params.repository]);
return (
  <>
  <Header>
    <img src={logoImg} alt=""/>
    <Link to={`/`}>
      <FiChevronLeft size={16}/>
      Voltar
    </Link>
  </Header>

  <RepositoryInfo>
    <header>
      <img src="https://avatars2.githubusercontent.com/u/36475975?s=460&u=bc6ff76fe3466b2700370db9e1c9a7cdcd5d741f&v=4" alt="Logo github"/>
      <div>
        <strong>rocketseat/unform</strong>
        <p>Descrição do repositório</p>
      </div>
    </header>
    <ul>
      <li>
        <strong>1800</strong>
        <span>Stars</span>
      </li>
      <li>
        <strong>48</strong>
        <span>Forks</span>
      </li>
      <li>
        <strong>67</strong>
        <span>Issues abertas</span>
      </li>
    </ul>
  </RepositoryInfo>

  <Issues>
    <Link to="/">
      <div>
        <strong>rocketseat/unform</strong>
        <p>Descrição do repositório</p>
      </div>

      <FiChevronRight size={20}/>
    </Link>
  </Issues>
  </>
  )
}

export default Repository;
