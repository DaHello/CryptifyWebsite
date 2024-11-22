//import "./Login.jsx";
import "../styles/Login.css";

export default function Home() {
  return (
    <div className="page-wrapper">
      <header className="top-bar">
        <h1 className="logo">Cryptify</h1>
        <nav className="nav-links">
          {/* <a
              onClick={() =>
                document
                  .getElementById("about-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </a>
            <a onClick={openForm}>Login</a> */}
        </nav>
      </header>
    </div>
  );
}
