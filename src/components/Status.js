import React, { useState, useEffect } from 'react'
import { call } from '../services/StatusApisService';

const Status = ({ name, api }) => {
  useEffect(() => {
    const interval = setInterval(() => {
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button>{name}</button>
      <button className="bg-green-100">Up</button>
    </div>
  )
}

export default Status
