import AppRoutes from "./routes/AppRoutes";
import { GameProvider } from "./context/GameProvider";

function App() {
  return (
    <>
      <GameProvider>
        <AppRoutes />
      </GameProvider>
    </>
  );
}

export default App;
