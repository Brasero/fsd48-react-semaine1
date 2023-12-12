
function Message({message}) {
    const {length} = message

    return (
        <div>
            <span>{message}</span>
            <br/>
            <small>le message contient {length} caractères</small>
        </div>
    )
}

export default Message