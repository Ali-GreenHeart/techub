import { useEffect } from "react"
import { BsSun, BsMoon } from "react-icons/bs"

const DarkMode = ({ theme, setTheme }) => { // Accept theme and setTheme as props

    // Load the theme from localStorage (if available) on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light"
        setTheme(savedTheme)
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode-body")
        }
    }, [setTheme]) // Add setTheme to dependency array

    // Toggle the theme and save it in localStorage
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.body.classList.toggle("dark-mode-body")
        localStorage.setItem("theme", newTheme)
    }

    return (
        <button className="theme-toggle-button" onClick={toggleTheme}>
            {theme === "light" ? <BsMoon size={25} /> : <BsSun size={25} />}
        </button>
    )
}

export default DarkMode
