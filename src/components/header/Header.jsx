import { useState, useEffect } from 'react';
import styles from './header.module.css';

function Header() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      Header
    </div>
  );
}

export default Header;