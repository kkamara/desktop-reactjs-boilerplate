import React from 'react';

import "./HomeComponent.scss";

export default function HomeComponent() {
  const openChildWindow = () => {
      window.api.send("openChildWindow");
  }

  const renderChildWindowButton = () => {
      return <>
          <button
              onClick={openChildWindow}
              className="btn btn-primary"
          >
              Open Child Window
          </button>
      </>
  }

  return (
    <div className='container home-container'>
      <div className="text-center">
        {renderChildWindowButton()}
      </div>
    </div>
  )
}
