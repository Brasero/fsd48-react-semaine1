import Message from "../Message/index.jsx";

function Messages({messages}) {
    const {length} = messages

    return (
        <div>
            <span>Le tableau contient {length} élèments</span>
            {
                messages.map((message, index) => {
                    return <Message message={message.message} key={index}/>
                })
            }
        </div>
    )
}

export default Messages