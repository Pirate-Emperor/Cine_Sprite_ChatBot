import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import '../../App.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello! and Welcome to Cine Bot',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'Please tell me your name',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi,{previousValue} I am Cine Bot! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Analyzer Dashboard', trigger: '4' },
                { value: 2, label: 'Business Recommender', trigger: '3' },
                { value: 3, label: 'Database Search', trigger: '5' },
                { value: 4, label: 'Ranking', trigger: '6' },
              ],
            },
            {
              id: '3',
              message:
                'Our quiz-based movie picker finds the perfect movie for your mood, occasion and individual preferences in just a few minutes! Whether you’re watching a movie by yourself, joining a movie night with friends or going on a movie date with your crush – our quiz will guide you to an awesome choice!',
              trigger: 'qtype',
            },
            {
              id: '5',
              message:
                'Watching movies is fun, but figuring out what movie to watch next is a nerve-racking experience. All listed movies are hand-picked and manually tagged by film connoisseurs ensuring high quality recommendations',
              trigger: 'qtype',
            },
            {
              id: '4',
              message:
                'Can perform your very own analysis on the our created model to verify and generate the best ideas',
              trigger: 'qtype',
            },
            {
              id: '6',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Analyzer Dashboard', trigger: '4' },
                { value: 2, label: 'Business Recommender', trigger: '3' },
                { value: 3, label: 'Database Search', trigger: '5' },
                { value: 4, label: 'Ranking', trigger: '6' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-times"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fas fa-comment-dots " aria-hidden="true"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
