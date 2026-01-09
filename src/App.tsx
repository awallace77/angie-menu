import AppNavigation from "./pages/AppNavigation";

function App() {
  const appTitle = "Dinner Date";
  return (
    <>
      <div className="p-5 flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-row gap-2.5 align-middle items-center justify-center">
          <img src="/logos/angie-logo.png" className="w-12 h-12" />
          <h1 className="text-3xl font-bold text-white uppercase text-center">
            {appTitle}
          </h1>
        </div>
        <p className="text-gray-400 italic text-sm">
          Reservation for two please...
        </p>

        <p className="text-gray-400 italic text-sm text-center">
          Angie, I made this app for you to build our custom dinner menu. Pick
          what you'd like and send the final menu my way for prep. <br />
          &lt;3
        </p>
        <AppNavigation />
      </div>
    </>
  );
}

export default App;
