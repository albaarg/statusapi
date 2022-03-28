import React, {useState, useEffect}from 'react'

const Status = ({name, api}) => {
  useEffect(() => {
    const interval = setInterval(() => {
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <button>{name}</button>
    </div>
  )
}

export default Status
