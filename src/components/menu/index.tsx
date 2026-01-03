import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLink}>
        <HouseIcon size={24} />
      </a>
      <a href="#" className={styles.menuLink}>
        <HistoryIcon size={24} />
      </a>
      <a href="#" className={styles.menuLink}>
        <SettingsIcon size={24} />
      </a>
      <a href="#" className={styles.menuLink}>
        <SunIcon size={24} />
      </a>
    </nav>
  );
};

export default Menu;
