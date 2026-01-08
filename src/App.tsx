import AppNavigation from "./pages/AppNavigation";

function App() {
  const appTitle = "Dinner Picks";
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex flex-row gap-2.5 align-middle items-center justify-center">
          <img src="/logos/angie-logo.png" className="w-12 h-12" />
          <h1 className="text-3xl font-bold text-white uppercase text-center">
            {appTitle}
          </h1>
        </div>
        <AppNavigation />
      </div>
    </>
  );
}

export default App;
