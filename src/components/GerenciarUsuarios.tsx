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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleStatusClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleStatusChange = (status: string) => {
    if (selectedUser) {
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? { ...user, status } : user
      );
      setUsers(updatedUsers);
      setConfirmationMessage(`O usuário ${selectedUser.nome} foi alterado para ${status}`);
      closeModal();
      setConfirmationModalOpen(true);
      setTimeout(() => {
        setConfirmationModalOpen(false);
        setConfirmationMessage(null);
      }, 3000); // A confirmação desaparece após 3 segundos
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className={styles.titulo + " mt-5 ml-6"}>Gerenciar Usuários</h1>
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
                <div
                  className={`${getStatusClass(user.status)} ${styles.statusLabel}`}
                  onClick={() => handleStatusClick(user)}
                  style={{ cursor: 'pointer' }}
                >
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
              className={pageNumber === page ? 'bg-purple-500 text-white' : ''}
            >
              {pageNumber}
            </button>
          ))}
          <button onClick={() => handleChangePage(page + 1)} disabled={page === totalPages}>
            &gt;
          </button>
        </div>
      </div>

      {isModalOpen && selectedUser && (
        <div className={`${styles.modalOverlay} ${isModalOpen ? styles.visible : ''}`} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <h2>
              O usuário <strong>{selectedUser.nome}</strong> está com status <strong>{selectedUser.status}</strong>, deseja alterar para:
            </h2>
            <div className={styles.modalButtons}>
              <button
                className={styles.aprovadoBtn}
                onClick={() => handleStatusChange('Aprovado')}
              >
                Aprovado
              </button>
              <button
                className={styles.excluidoBtn}
                onClick={() => handleStatusChange('Excluído')}
              >
                Excluído
              </button>
              <button
                className={styles.desativadoBtn}
                onClick={() => handleStatusChange('Desativado')}
              >
                Desativado
              </button>
              <button
                className={styles.pendenteBtn}
                onClick={() => handleStatusChange('Pendente')}
              >
                Pendente
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmationModalOpen && (
        <div className={`${styles.modalOverlay} ${confirmationModalOpen ? styles.visible : ''}`}>
          <div className={styles.confirmationModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.confirmationIcon}>
              ✔️
            </div>
            {confirmationMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default GerenciarUsuarios;
