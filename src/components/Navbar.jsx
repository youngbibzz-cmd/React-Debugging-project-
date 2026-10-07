function Navbar({ title }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <span className="brand-mark" aria-hidden="true">R</span>
      <p className="brand-title">{title}</p>
      <span className="nav-context">PERSONAL WORKSPACE</span>
    </nav>
  )
}

export default Navbar