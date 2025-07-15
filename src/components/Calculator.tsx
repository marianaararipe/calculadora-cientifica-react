import styles from "./Calculator.module.css";
import Display from "./Display";
import BasicButtons from "./BasicButtons";
/*import ScientificButtons from './ScientificButtons'*/

export default function Calculator() {
  const handleButtonClick = (value: string) => {
    console.log("Botão clicado:", value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <Display />

        <div className={styles.buttonsWrapper}>
          {/*<ScientificButtons />*/}
          <BasicButtons onButtonClick={handleButtonClick} />
        </div>
        
      </div>
    </div>
  );
}
