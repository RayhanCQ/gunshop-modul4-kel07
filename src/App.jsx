import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Catalog from './pages/Catalog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Checkout from './pages/Checkout.jsx'
import './App.css'

function App() {
  const [tab, setTab] = useState('Catalog')
  const [cart, setCart] = useState([])

  function addToCart(gun) {
    setCart((items) => {
      const existing = items.find((item) => item.name === gun.name)
      return existing
        ? items.map((item) => item.name === gun.name ? { ...item, quantity: item.quantity + 1 } : item)
        : [...items, { ...gun, quantity: 1 }]
    })
  }

  function updateQuantity(name, quantity) {
    setCart((items) => items
      .map((item) => item.name === name ? { ...item, quantity } : item)
      .filter((item) => item.quantity > 0))
  }

  function placeOrder() {
    setCart([])
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="shell">
      <Header tab={tab} onTab={setTab} cartCount={cartCount} />

      <main className="main">
        {tab === 'Catalog' && <Catalog onAddToCart={addToCart} />}
        {tab === 'About' && <About />}
        {tab === 'Contact' && <Contact />}
        {tab === 'Checkout' && (
          <Checkout
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onPlaceOrder={placeOrder}
            onBrowse={() => setTab('Catalog')}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
