import { useEffect, useRef } from "react";
import styles from "./Display.module.css";

type DisplayProps = {
  expression: string;
  result: string;
};

export default function Display({ expression, result }: DisplayProps) {
  const expressionRef = useRef<HTMLDivElement>(null);

  // Função para scroll automático quando a  a expressão é atualizada
  useEffect(() => {
    if (expressionRef.current) {
      expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
    }
  }, [expression]);



  return (
    <div className={styles.display}>
      <div className={styles.expression} ref={expressionRef}>{expression}</div>
      <div className={styles.result}>{result ? ` ${result}` : ""}</div>
    </div>
  );
}
