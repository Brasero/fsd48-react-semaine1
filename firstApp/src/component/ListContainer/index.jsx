import './listContainer.css';
import ListItem from "../ListItem/index.jsx";

function ListContainer() {

    const items = [
        {
            name: 'Football',
            price: 49.99
        },
        {
            name: 'Baseball',
            price: 9.99
        },
        {
            name: 'Basketball',
            price: 79.99
        }
    ]

    return (
        <>
            <div className="listContainer">
                <div className="header">
                    <h3>Name</h3>
                    <h3>Price</h3>
                </div>
                <div className="content">
                    {
                        items.map(item => {
                            return <ListItem name={item.name} price={item.price} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ListContainer;