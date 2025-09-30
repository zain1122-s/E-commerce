import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import './OrderHistory.css';

const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/orders', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your orders.</div>;
  }

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="order-history">
      <h1>Your Order History</h1>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-item">
              <h3>Order #{order._id}</h3>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Total: €{order.totalAmount}</p>
              <p>Status: {order.status}</p>
              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item-detail">
                    <img src={item.product.image} alt={item.product.name} />
                    <div>
                      <p>{item.product.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: €{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;