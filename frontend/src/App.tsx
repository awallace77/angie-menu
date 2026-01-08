import AppNavigation from "./pages/AppNavigation";

function App() {
  const appTitle = "Angie's Dinner Picks";
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex flex-row gap-2.5 align-middle items-center">
          <img src="/logos/angie-logo.png" className="w-12 h-12" />
          <h1 className="text-2xl">{appTitle}</h1>
        </div>

        <AppNavigation />
      </div>
    </>
  );
}

export default App;
