import { useState } from 'react'

function Checkout({ cart, onUpdateQuantity, onPlaceOrder, onBrowse }) {
  const [orderPlaced, setOrderPlaced] = useState(false)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function submitOrder(event) {
    event.preventDefault()
    onPlaceOrder()
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <section className="page checkout-page">
        <h1 className="display">Order received</h1>
        <p className="lede">Your demo order has been recorded. No payment was processed.</p>
        <button className="primary-button" type="button" onClick={onBrowse}>Return to catalog</button>
      </section>
    )
  }

  return (
    <section className="page checkout-page">
      <h1 className="display">Checkout</h1>
      {cart.length === 0 ? (
        <>
          <p className="lede">Your cart is empty.</p>
          <button className="primary-button" type="button" onClick={onBrowse}>Browse catalog</button>
        </>
      ) : (
        <>
          <div className="checkout-items">
            {cart.map((item) => (
              <article className="checkout-item" key={item.name}>
                <img src={item.image} alt="" width="96" height="72" />
                <div className="checkout-item-info">
                  <h2>{item.name}</h2>
                  <span className="type">${item.price.toLocaleString()} each</span>
                </div>
                <div className="quantity-controls" aria-label={`${item.name} quantity`}>
                  <button
                    type="button"
                    aria-label={`Remove one ${item.name}`}
                    onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}
                    >-</button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Add one ${item.name}`}
                    onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}
                  >+</button>
                </div>
                <strong className="price">${(item.price * item.quantity).toLocaleString()}</strong>
              </article>
            ))}
          </div>

          <div className="checkout-total">
            <span>Order total</span>
            <strong>${total.toLocaleString()}</strong>
          </div>

          <form className="checkout-form" onSubmit={submitOrder}>
            <h2>Customer details</h2>
            <label>
              Full name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Shipping address
              <textarea name="address" autoComplete="street-address" rows="3" required />
            </label>
            <p className="checkout-note">Demo checkout only. No payment or order is sent to a server.</p>
            <button className="primary-button" type="submit">Place demo order</button>
          </form>
        </>
      )}
    </section>
  )
}

export default Checkout
