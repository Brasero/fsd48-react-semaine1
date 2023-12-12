import {useEffect} from "react";
import Button from "../Button/index.jsx";

function ButtonList({button, handleClick}) {



    return (
        <div>
            {
                button.map((button) => {
                    return <Button button={button} handleClick={handleClick} />
                })
            }
        </div>
    )
}

export default ButtonList;