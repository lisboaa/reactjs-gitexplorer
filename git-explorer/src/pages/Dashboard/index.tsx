import React from 'react';
import logoImg from '../../assets/header-git-hub.svg';
import api from '../../service/api';
import { useEffect, useState } from 'react';
import { Title, Form, Repositories } from './style';
import { FiChevronRight } from 'react-icons/fi';
const Dashboard: React.FC = () => {

  return (
  <>
    <img src={logoImg} alt="Logo git Hub."/>
    <Title>Explore repositórios no GitHub</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositorio"/>
      <button>Pesquisar</button>
    </Form>
    <Repositories>
      <a href="">
        <img src="https://avatars2.githubusercontent.com/u/36475975?s=460&u=bc6ff76fe3466b2700370db9e1c9a7cdcd5d741f&v=4"
        alt="Doglão"/>
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy Peasy</p>
        </div>
        <FiChevronRight size={20}/>
      </a>

      <a href="">
        <img src="https://avatars2.githubusercontent.com/u/36475975?s=460&u=bc6ff76fe3466b2700370db9e1c9a7cdcd5d741f&v=4"
        alt="Doglão"/>
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy Peasy</p>
        </div>
        <FiChevronRight size={20}/>
      </a>

    </Repositories>
  </>
  )
}

export default Dashboard;
