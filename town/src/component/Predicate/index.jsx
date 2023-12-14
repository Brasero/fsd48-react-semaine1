import {useTown} from "../../utils/context/townContext.jsx";
import Item from "./Item/index.jsx";

function Predicate() {

    const {towns} = useTown()

    return (
        <div>
            {
                towns.length > 0 && (
                    <ul>
                        {
                            towns.map(town => <Item key={town} town={town} />)
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default Predicate