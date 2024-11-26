import "../styles/Login.css"; // import the form for the login

export default function Header() {
  return (
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
  );
}
