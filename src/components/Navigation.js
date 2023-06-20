const Navigation = () => {
  return (
    <nav class="nav">
      <div class="container nav-container">
        <span class="nav-span">moja firma</span>
        <ul class="nav-list">
          <li>
            <a class="specialist-link" href="#specialist">
              o nas
            </a>
          </li>
          <li>
            <a class="offer-link" href="#offer">
              oferta
            </a>
          </li>
          <li>
            <a class="disabled">kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
