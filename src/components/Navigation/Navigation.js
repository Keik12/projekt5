const Navigation = () => {
  return (
    <nav className="nav">
      <div className="container nav-container">
        <span className="nav-span">moja firma</span>
        <ul className="nav-list">
          <li>
            <a className="specialist-link" href="#specialist">
              o nas
            </a>
          </li>
          <li>
            <a className="offer-link" href="#offer">
              oferta
            </a>
          </li>
          <li>
            <a
              className="disabled"
              href="#disabled"
              onClick={(e) => e.preventDefault()}
            >
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
