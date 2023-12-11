import Number from "../Number/index.jsx";

function Wrapper() {

    const numbers = [ 4, 3, 7]

    return (
        <>
            {
                numbers.map(num => {
                    return <Number num={num} />
                })
            }
        </>
    )
}

export default Wrapper;