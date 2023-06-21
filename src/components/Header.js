const Header = () => {
  return (
    <header className="header">
      <div className="shadow">
        <div className="container header-container">
          <h1 className="header-container-h1">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="header-p">Nie wierz nam na słowo - sprawdź</p>
          <a className="button-offer" href="#offer">
            oferta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
