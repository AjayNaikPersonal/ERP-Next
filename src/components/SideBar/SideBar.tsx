'use client'
import './SideBar.css'
import Link from 'next/link';



export default function SideBar() {

  const toggleSidebar = () => document.body.classList.toggle("open");

  return (
    <main>
      <nav className="sidebar">
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button
              type="button"
              className="sidebar-burger"
              onClick={toggleSidebar}
            ></button>
            <img src="/assets/blocklord-logo.png" className="sidebar-logo" />
          </header>
          <nav className="sidebar-menu">
            <button type="button">
              <img src="/assets/icon-home.svg" />
              <span>Home</span>
            </button>
            <button type="button" className="has-border">
              <img src="/assets/icon-settings.svg" />
              <span>Settings</span>
            </button>
            <button type="button">
              <img src="/assets/icon-blockchain.svg" />
              <Link href="/plan"><span>Project Plan</span></Link>
            </button>
            <button type="button">
              <img src="/assets/icon-database.svg" />
              <Link href="/kanban"><span>Kanban Board</span></Link>
            </button>
            <button type="button">
              <img src="/assets/icon-speaker.svg" />
              <span>AudioVibe</span>
            </button>
            <button type="button" className="has-border">
              <img src="/assets/icon-acoustic.svg" />
              <span>SoundBlast</span>
            </button>
            <button type="button">
              <img src="/assets/icon-folders.svg" />
              <span>Folders</span>
            </button>
            <button type="button">
              <img src="/assets/icon-levels.svg" />
              <span>Levels</span>
            </button>
            <button type="button">
              <img src="/assets/icon-accounts.svg" />
              <span>Accounts</span>
            </button>
            <button type="button">
              <img src="/assets/icon-lock.svg" />
              <span>Security</span>
            </button>
          </nav>
        </div>
      </nav>
    </main>
  );
}
