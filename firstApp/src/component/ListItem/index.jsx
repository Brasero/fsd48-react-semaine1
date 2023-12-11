
function ListItem({name, price}) {

    return (
        <div className={'item'}>
            <div className={'itemName'}>
                {name}
            </div>
            <div className={'itemPrice'}>
                {price}
            </div>
        </div>
    )
}

export default ListItem;