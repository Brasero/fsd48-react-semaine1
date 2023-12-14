import {useTown} from "../../utils/context/townContext.jsx";

function Input() {

    const {input, handleInputChange} = useTown()

    const handleChange = (e) => {
        const {value} = e.target
        handleInputChange(value)
    }

    return (
        <input type={'text'} name={'search'} value={input} onChange={handleChange} />
    )
}

export default Input