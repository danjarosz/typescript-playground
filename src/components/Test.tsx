import React, { PureComponent } from "react";

interface TestProps {
    message?: string,
    otherMessage? : {
      info: string
    }
    onClickHandler: () => void
}

class Test extends PureComponent<TestProps> {

    render() {
      const { message, otherMessage , onClickHandler } = this.props;

      // optional chaining
      const x = otherMessage?.info ?? 'default value if otherMessage is undefined';
      console.log(x);

        return (
            <div>
                <p>{message}</p>
                <button onClick={onClickHandler}>
                  Wyświetl info w konsoli
                </button>
            </div>
        )
    }
}

export default Test;