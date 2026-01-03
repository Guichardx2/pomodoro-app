import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labeltext?: string;
} & React.ComponentProps<"input">;

const Input = ({ type, id, labeltext, ...props }: InputProps) => {
  return (
    <>
      {labeltext && <label htmlFor={id}>{labeltext}</label>}
      <input type={type} id={id} {...props} className={styles.input} />
    </>
  );
};

export default Input;
