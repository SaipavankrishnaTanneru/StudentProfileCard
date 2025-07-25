import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/Sidebar/Sidebar';
import StudentProfileContainer from './Containers/StudentContainers/StudentProfileCard';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <Header />
      </header>

      {/* Body */}
      <div className="app-body">
        {/* Sidebar */}
        <aside className="app-sidebar">
          <SideBar />
        </aside>

        {/* Main Content */}
        <main className="app-main-content">
          <StudentProfileContainer />
        </main>
      </div>
    </div>
  );
}

export default App;
