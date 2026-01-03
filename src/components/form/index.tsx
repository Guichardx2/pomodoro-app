
type TaskFormContainerProps = {
  children: React.ReactNode;
};

const TaskFormContainer = ({ children }: TaskFormContainerProps) => {
  return (
    <form action="" className="taskFormContainer">
      {children}
    </form>
  );
};

export default TaskFormContainer;
