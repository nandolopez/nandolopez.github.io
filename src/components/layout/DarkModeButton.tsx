

import { useEffect } from 'preact/hooks';

export const DarkModeButton = () => {


    const onToggleDarkMode = async () => {
        const local = localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
        document.documentElement.classList.remove('dark')
        if (local === 'dark') {
            document.documentElement.classList.add('dark')
        }
        localStorage.setItem('theme', local)
    }

    useEffect(() => {
        const local = localStorage.getItem('theme')
        if (local === null) {
            const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : 'light'
            localStorage.setItem('theme', theme)
            if (theme) {
                document.documentElement.classList.add('dark')
            }
        } else {
            if (local === 'dark') {
                document.documentElement.classList.add('dark')
            }
        }
    }, [])

    return (
        <div
            class="bg-gray-900/60 backdrop-blur flex items-center gap-4 justify-center px-2 py-1 md:size-12 size-10 rounded-full"
        >
            <button onClick={() => onToggleDarkMode()} className="btn btn-ghost hover:bg-transparent hover:border-none hover:shadow-none cursor-pointer">☀️</button>
        </div>

    )
}