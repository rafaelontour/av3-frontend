import React, { useState, useEffect } from 'react';
import styles from './css/GerenciarUsuarios.module.css';
import { IconSearch } from '@tabler/icons-react';
import { usuarios } from './usuarios';

interface User {
  id: number;
  nome: string;
  matricula: string;
  cpf: string;
  email: string;
  perfil: string;
  status: string;
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Aprovado':
      return styles.statusAprovado;
    case 'Excluído':
      return styles.statusExcluido;
    case 'Desativado':
      return styles.statusDesativado;
    case 'Pendente':
      return styles.statusPendente;
    default:
      return '';
  }
};

const GerenciarUsuarios: React.FC = () => {

  const [users, setUsers] = useState(usuarios);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>)   => {
    setSearch(event.target.value);
    setPage(1); 
  };

  const filteredUsers = users.filter((user) => {
    const searchTerm = search.toLowerCase();
    return (
      user.nome.toLowerCase().includes(searchTerm) ||
      user.matricula.toLowerCase().includes(searchTerm) ||
      user.cpf.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.perfil.toLowerCase().includes(searchTerm) ||
      user.status.toLowerCase().includes(searchTerm)
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const indexOfLastUser = page * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);   
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>)   => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className={styles.titulo + " mt-5 ml-6"} >Gerenciar Usuários</h1>
        <div className={styles.caixaPesquisa}> 
        <IconSearch size={22} className={`absolute translate-y-1/2 ml-[10px] mt-[-10px] ${styles.iconeCinza}`} stroke={3} />
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={handleSearchChange}
            className={styles.caixaPesquisa}
          />
        </div>
      </div>

      <table className={`table-auto w-full ${styles.tabela}`}>
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Matrícula</th>
            <th className="px-4 py-2">CPF</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Perfil</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.nome}</td>
              <td className="border px-4 py-2">{user.matricula}</td>
              <td className="border px-4 py-2">{user.cpf}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.perfil}</td>
              <td className={`border px-4 py-2`}>
                <div className={getStatusClass(user.status)}>
                  {user.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={`flex justify-between items-center mt-4 ${styles.perPage}`}>
        <div>
          <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>   

          </select>
          {' '}
          Usuários por página
        </div>
        <div className={styles.pagination}>
            <button onClick={() => handleChangePage(page - 1)} disabled={page === 1}>
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handleChangePage(pageNumber)}
                className={pageNumber === page ? 'bg-blue-500 text-white' : ''}
              >
                {pageNumber}
              </button>
            ))}
            <button onClick={() => handleChangePage(page + 1)} disabled={page === totalPages}>
              &gt;
            </button>
          </div>
      </div>
    </div>
  );
};

export default GerenciarUsuarios;