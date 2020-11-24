import React, { useState, useRef } from "react";

interface TestProps {
    message: string;
    otherMessage? : {
      info: string
    };
    onClickHandler?: () => void;
}

// you can use FC or FunctionComponent
const Test: React.FC<TestProps> = (props) => {
    const { message, otherMessage , onClickHandler } = props;
    const [counter, setCounter] = useState<number>(5);
    //do ref można użyć null jako wartość początkową
    const divRef = useRef<HTMLDivElement>(null);

    const showInConsole = (message: string | number) => {
        console.log(message);
        // setCounter((prevValue) => prevValue + 1)
    }

     // optional chaining
     const x = otherMessage?.info ?? message;
     console.log(x);

    return (
        <div ref={divRef}>
            <p>{message}</p>
            <button onClick={() => showInConsole(x)}>
                Wyświetl info w konsoli
            </button>
            <button onClick={() => showInConsole(counter)}>
                Wyświetl counter
            </button>
        </div>
    )
}

export default Test;