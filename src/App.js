import AppHeader from "./components/header";
import AppSidebar from "./components/sidebar";
import AppDashboard from "./components/dashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="app-body-items">
        <AppSidebar />
        <AppDashboard />
      </div>
    </div>
  );
}

export default App;
