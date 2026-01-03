import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logoLink}>
        <TimerIcon size={64} />
        <span>Pomodoro</span>
      </a>
    </div>
  );
};

export default Logo;
