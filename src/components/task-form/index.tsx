import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../cycles";
import Button from "../default-button";
import Input from "../default-input";
import styles from "./styles.module.css";

const TaskForm = () => {
  return (
    <form action="" className={styles.taskForm}>
      <div className={styles.taskFormRow}>
        <Input
          type="text"
          id="task"
          labeltext="Tarefa"
          placeholder="Digite algo"
        />
      </div>

      <div className={styles.taskFormRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.taskFormRow}>
        <Cycles />
      </div>

      <div className={styles.taskFormRow}>
        <Button type="submit" icon={<PlayCircleIcon />} color="green" />
        <Button type="submit" icon={<StopCircleIcon />} color="red" />
      </div>
    </form>
  );
};

export default TaskForm;
