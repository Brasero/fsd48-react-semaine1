import './numberList.css';
import {usePair} from "../../utils/context/pairContext.jsx";

function NumberList() {

    const { addNumber, state } = usePair()

    return (
        <div className={'number'}>
            <div>
                <button onClick={addNumber}>Ajouter un nombre (entre 0 et 30)</button>
            </div>
            {
                state.numbers.length > 0 ?
                    <div className={'number_container'}>
                        {
                            state.numbers.map((number) => {
                                return <div key={number}>{number}, </div>
                            })
                        }
                    </div>
                    :
                    <div className={'empty'}>Aucun nombre pour le moment.</div>
            }
            {
                state.message !== '' && <span className={'error'}>{state.message}</span>
            }
        </div>
    )
}

export default NumberList