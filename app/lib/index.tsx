import React, { useState } from "react";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import { Button } from "./button";
import styles from "./index.module.css";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({ name }) => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello {name}! 🎉</h1>

      <div className={styles.descriptionContainer}>
        <p>
          I&apos;m just a regular React component, but my implementation was
          loaded at runtime!
        </p>
        <p>
          You pressed my button <strong>{value} times</strong>!
        </p>
      </div>

      <Button onClick={() => setValue((value) => value + 1)}>Press me!</Button>
    </div>
  );
};

export default ExampleTinyFrontend;
