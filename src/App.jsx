import { useState } from "react";
import { Header } from "./Components/Layout/Header";
import { Sidebar } from "./Components/Layout/Sidebar";
import { Dashboard } from "./Components/Dashboard/Dashboard";

function App() {
  const [SideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300 ">
        <div className="flex h-screen overflow-hidden">
          <Sidebar
            collapsed={SideBarCollapsed}
            onToggle={() => setSideBarCollapsed(!SideBarCollapsed)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header
              SidebarCollapsed={SideBarCollapsed}
              onToggleSidebar={() => setSideBarCollapsed(!SideBarCollapsed)}
            />

            <main className="flex-1 overflow-y-auto bg-transparent">
              <div className="p-6 space-y-6">
                {currentPage === 'dashboard' && <Dashboard /> }
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
