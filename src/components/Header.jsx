import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"

function Header() {

    const [ theme, setTheme ] = useState(localStorage.theme);

    const toggleTheme = () => {
      setTheme(theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light');
    }

    useEffect(() => {

      theme === 'light' ? 
        document.documentElement.classList.remove('dark') 
          : 
        document.documentElement.classList.add('dark');

    }, [theme])

  return (
    <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl tracking-[.40em] font-semibold">
            TODO
          </h1>
          <button onClick={toggleTheme} className="mr-2">
            {
              theme === 'light' ? <MoonIcon /> : <SunIcon />
            }
          </button>
        </div>
    </header>
  )
}

export default Header