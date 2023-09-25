import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
  return (
    <div
      className="
        bg-[url('./assets/images/bg-mobile-light.jpg')]
        bg-contain
        bg-no-repeat
        bg-gray-200
        min-h-screen
      "
    >
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl tracking-[.40em] font-semibold">
            TODO
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="inline-block  border-2 w-5 h-5 rounded-full"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="rounded-md w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-6">
        <div className="bg-white rounded-md">
          <article className="flex py-6 gap-4 border-b px-4">
            <button className="inline-block  border-2 w-5 h-5 rounded-full flex-none"></button>
            <p className="grow text-gray-600">
              Complete online JavaScript curse
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex py-6 gap-4 border-b px-4">
            <button className="inline-block  border-2 w-5 h-5 rounded-full flex-none"></button>
            <p className="grow text-gray-600">
              Complete online JavaScript curse
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex py-6 gap-4 border-b px-4">
            <button className="inline-block  border-2 w-5 h-5 rounded-full flex-none"></button>
            <p className="grow text-gray-600">
              Complete online JavaScript curse
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">3 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4">
        <div
          className="bg-white mt-6 p-4 flex justify-center gap-8 text-gray-500 font-semibold 
        rounded-md"
        >
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center mt-14 text-gray-500">
        Drag and drop to reorded list
      </section>
    </div>
  );
}

export default App;
