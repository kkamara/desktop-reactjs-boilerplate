import React from 'react'
import { createRoot, } from 'react-dom/client'

import Main from './Main'
import './index.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Main />,
  </React.StrictMode>
)
