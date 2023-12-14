import './item.css'
import {useTown} from "../../../utils/context/townContext.jsx";

function Item ({town}) {

    const {handleTownClick} = useTown()

    const handleClick = () => {
        handleTownClick(town)
    }

    return (
        <div className={'item'} onClick={handleClick}>{town}</div>
    )
}

export default Item