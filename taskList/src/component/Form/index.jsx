
function Form ({dispatch, value, message}) {

    const handleSubmit= (e) => {
        e.preventDefault()
        dispatch({type: 'add'})
    }

    const handleChange = (e) => {
        const {value} = e.target
        dispatch({
            type: 'changeValue',
            payload: value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                message !== '' && <span>{message}</span>
            }
            <input type={"text"} onChange={handleChange} value={value} name={'task'} placeholder={'Votre tache'} />
            <input type={'submit'} value={'Ajouter'}/>
        </form>
    )
}

export default Form