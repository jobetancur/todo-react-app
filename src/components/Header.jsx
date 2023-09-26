import MoonIcon from "./icons/MoonIcon"

function Header() {

    

  return (
    <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl tracking-[.40em] font-semibold">
            TODO
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
    </header>
  )
}

export default Header