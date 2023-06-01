import React from 'react'

export default function Main() {
  return (
    <>
      <h1>I am App Component</h1>
      <button onClick={(() => {
        electron.notificationApi.sendNotification('My custom notification!')
      })}>Notify</button>
    </>
  )
}
