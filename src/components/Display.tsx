import styles from "./Display.module.css";

type DisplayProps = {
  expression: string;
  result: string;
};

export default function Display({ expression, result }: DisplayProps) {
  return (
    <div className={styles.display}>
      <div className={styles.expression}>{expression}</div>
      <div className={styles.result}>{result ? ` ${result}` : ""}</div>
    </div>
  );
}
