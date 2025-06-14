import React, { useEffect, useState } from 'react'

const useNavScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return isScrolled
}

export default useNavScroll