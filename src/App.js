import React, { useState } from 'react'
import Chatbot from './components/chatbot/Chatbot'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Faq from './components/Faq'
import Help from './components/Help'
import './App.css'
import Slider from './components/Slider'

const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <div className="bot">
            <Route path="/" component={Chatbot} exact />
          </div>
          <Route path="/faq" component={Faq} />
          <Route path="/help" component={Help} />

          <Route path="/" component={Slider} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
