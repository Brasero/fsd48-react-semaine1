import './pairList.css';
import {usePair} from "../../utils/context/pairContext.jsx";

function PairList() {

    const {state, generatePairs} = usePair()

    return (
        <div className={'pair'}>
            <button onClick={generatePairs}>Générer des paires</button>
            <h3>Liste des pairs :</h3>
            {
                state.pairs.length > 0 ?
                    <ul>
                        {state.pairs.map((pair, index) => {
                            return <li key={index}>{pair.join(', ')}</li>
                        })}
                    </ul>
                    :
                    <div className={'empty'}>Aucune paire pour le moment.</div>
            }
        </div>
    )
}

export default PairList