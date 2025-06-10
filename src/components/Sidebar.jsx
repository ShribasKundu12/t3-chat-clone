import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.title}>T3.chat</div>
        <button className={styles.newChatButton}>
          New Chat
        </button>
        <input
          type="text"
          placeholder="Search your threads..."
          className={styles.searchInput}
        />
      </div>
      <div>
        <button className={styles.loginButton}>
          <span className="material-icons">logout</span> Login
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
