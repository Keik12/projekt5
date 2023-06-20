const Main = () => {
  return (
    <main>
      <section id="specialist" class="specialist">
        <div class="container">
          <h2 class="specialist-h2">Nasi specjaliści</h2>
          <div class="specialist-details">
            <div class="circle circle-1"></div>
            <div class="text-wrapper">
              <p class="person">Imię Nazwisko [ dział ]</p>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbvel
                massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis
                nisi,tempor elementum lorem in, varius pellentesque ligula.
                Duisefficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </div>
          <div class="specialist-details">
            <div class="circle circle-2"></div>
            <div class="text-wrapper">
              <p class="person">Imię Nazwisko [ dział ]</p>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morb
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="offer" class="offer">
        <div class="container">
          <h2 class="offer-h2">Czym zajmuje się nasza firma?</h2>
          <div class="container-grid">
            <div class="box new-offer">
              <p>Usługa 1</p>
              <div class="dot-new"></div>
            </div>
            <div class="box">Usługa 2</div>
            <div class="box">Usługa 3</div>
            <div class="box">Usługa 4</div>
            <div class="box">Usługa 5</div>
            <div class="box">Usługa 6</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
