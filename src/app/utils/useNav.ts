'use client'

import { useState } from 'react'

const useNav = () => {
  const [isVisible, setIsVisible] = useState(false)
  return {
    isVisible,
    setIsVisible
  }
}

export default useNav
