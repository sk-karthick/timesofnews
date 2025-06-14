import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;


    return (
        <div className='w-full border-b-[#cd4e28] border-b h-[50px] flex items-center justify-between px-4'>
            <ul className='flex items-center gap-4'>
                <li>World</li>
                <li>India</li>
                <li>Politics</li>
                <li>Technology</li>
                <li>Technology</li>
            </ul>
            <ul className='flex items-center gap-4'>
                <li>Sign in</li>
                <li>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar