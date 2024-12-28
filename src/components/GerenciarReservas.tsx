import React from 'react';
import styles from './css/GerenciarReservas.module.css';

const GerenciarReservas: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reserva}>
        <img
          src="https://garbeindustria.com.br/wp-content/uploads/elementor/thumbs/Auditorio-CDI-USP-Fibracitex-1243X683-%E2%80%93-2-1-qmi1lbi1gur4z3131mr123nu7hxfqtn16123e7ggoe.png" // URL da imagem do auditório
          alt="Auditório José Rocha Laranjeira"
          className={styles.imagem}
        />
        <h2>José Rocha Laranjeira</h2>
        <p>📍 DCET - Campus I</p>
        <p>Capacidade: 150 pessoas</p>
        <p>Recursos: Projetor, Sistema de Som, Microfone</p>
      </div>

      <div className={styles.reserva}>
        <img
          src="https://images.adsttc.com/media/images/5a9e/1ca4/f197/cc55/3300/00a9/slideshow/6.jpg?1520311457" // URL da imagem do auditório
          alt="Auditório José Rocha Laranjeira"
          className={styles.imagem}
        />
        <h2>Anísio Teixeira</h2>
        <p>📍 DCV - Campus V</p>
        <p>Capacidade: 135 pessoas</p>
        <p>Recursos: Projetor, Sistema de Som, Microfone</p>
      </div>

      <div className={styles.reserva}>
        <img
          src="https://images.adsttc.com/media/images/592c/fb73/e58e/ce98/ac00/007e/slideshow/IMG_0442.jpg?1496120177" // URL da imagem do auditório
          alt="Auditório José Rocha Laranjeira"
          className={styles.imagem}
        />
        <h2>Paulo Freire</h2>
        <p>📍 DCH - Campus III</p>
        <p>Capacidade: 145 pessoas</p>
        <p>Recursos: Projetor, Sistema de Som, Microfone</p>
      </div>
    </div>
  );
};

export default GerenciarReservas;
