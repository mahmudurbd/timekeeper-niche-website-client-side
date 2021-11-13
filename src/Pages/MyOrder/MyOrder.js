import React from 'react';

const MyOrder = (props) => {
    const {name,order,address} = props.order;
    console.log(props.order._id);
    const orderId = props.order._id;
    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data => {
            window.location.reload();
            console.log(data);
        })
    }
    return (
        <tr>
            <th scope="row">
            
            </th>
            <td>{order.name}</td>
            <td>{name}</td>
            <td>${order.price}</td>
            <td>{address}</td>
            <td>
            <button onClick={() => handleDelete(orderId)} type="button" className="btn btn-danger btn-sm px-3">
                <i className="fas fa-times"></i>
            </button>
            </td>
        </tr>
    );
};

export default MyOrder;