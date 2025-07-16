import { useState } from "react";
import { evaluate } from "mathjs";

import styles from "./Calculator.module.css";
import Display from "./Display";
import BasicButtons from "./BasicButtons";
/*import ScientificButtons from './ScientificButtons'*/

export default function Calculator() {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState("");



  const handleButtonClick = (value: string) => {

    /* Limpar tudo */
    if (value === "AC") {
      setExpression("0");
      setResult("");
      return;
    }

    /* Apaga um caractere */
    if (value === "⌫") {
      setExpression((prev) => {
        //se só tiver 1 caractere, volta para "0"
        const updated = prev.length === 1 ? "0" : prev.slice(0, -1); 

        // Atualiza resultado parcial com a nova expressão
        try {
          const formatted = updated
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/−/g, "-");

            //
          if (/^[0-9+\-*/().\s]+$/.test(formatted)) {
            const evalResult = evaluate(formatted);
            setResult(evalResult.toString());
          } else {
            setResult("");
          }
        } catch {
          setResult("");
        }

        return updated;
      });

      return;
    }

    
    if (value === "=") {
      try {
        const formatted = expression
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/−/g, "-");

        
        const evalResult = evaluate(formatted);

        setExpression(evalResult.toString());
        setResult("");
      } 
      
      catch (error) {
        setExpression("Erro");
        setResult("");
      }
      return;
    }

    // Continua montando expressão normalmente
    if (expression === "0") {
      setExpression(value);
    } 
    
    else {
      setExpression((prev) => {
        const newExpr = prev === "0" ? value : prev + value;

        // Calcular resultado parcial com base na nova expressão
        try {
          const formatted = newExpr
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/−/g, "-");

          if (/^[0-9+\-*/().\s]+$/.test(formatted)) {
            const evalResult = evaluate(formatted);

            setResult(evalResult.toString());
          } else {
            setResult("");
          }
        } catch {
          setResult("");
        }

        return newExpr;
      });
    }

    // Calcula resultado parcial
    try {
      const formatted = expression
        .replace(/÷/g, "/")
        .replace(/×/g, "*")
        .replace(/−/g, "-");

      const evalResult = evaluate(formatted);

      setResult(evalResult.toString());
    } catch {
      setResult("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <Display expression={expression} result={result} />

        <div className={styles.buttonsWrapper}>
          {/*<ScientificButtons />*/}
          <BasicButtons onButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}
