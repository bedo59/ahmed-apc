<template>
  <div>
    <div>
      <b-card
        overlayblob
        img-src="https://thumbs.dreamstime.com/b/graduates-people-throw-square-academic-cap-oxford-cap-vector-illustration-eps-82281827.jpg"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
    </div>
    <div class="bbb">
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Universities</h2>
            <h3 class="section-subheading text-muted">APC EUCATION NETWORK</h3>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <router-link to="/egybt">
                    <b-button variant="success">
                      <img
                        alt="Vue logo"
                        src="https://sites.google.com/site/elmundouno3/_/rsrc/1335342727602/paises-de-europa/irlanda/irlanda.jpg?height=215&width=320"
                      />
                    </b-button>
                  </router-link>
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Ireland</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <router-link to="/englandd">
                    <b-button variant="success">
                      <img
                        class="img-fluid"
                        src="https://besthqwallpapers.com/Uploads/26-5-2019/94067/thumb-flag-of-united-kingdom-4k-stone-background-grunge-flag-europe.jpg"
                        alt=""
                      />
                    </b-button>
                  </router-link>
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">ENGLAND</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <router-link to="/america">
                    <b-button variant="success">
                      <img
                        class="img-fluid"
                        src="https://cdn.sotor.com/thumbs/fit630x300/52095/1596976355/%D8%B9%D9%84%D9%85_%D9%86%D9%8A%D9%88%D8%B2%D9%84%D9%86%D8%AF%D8%A7:_%D8%A3%D9%84%D9%88%D8%A7%D9%86%D9%87_%D9%88%D9%85%D8%B9%D8%A7%D9%86%D9%8A%D9%87%D8%A7%D8%8C_%D9%88%D8%B3%D8%A8%D8%A8_%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1_%D9%87%D8%B0%D8%A7_%D8%A7%D9%84%D8%B4%D9%83%D9%84_%D9%84%D9%87.jpeg"
                        alt=""
                      />
                    </b-button>
                  </router-link>
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">New Zealand</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <router-link to="/rosyaa">
                    <b-button variant="success">
                      <img
                        class="img-fluid"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/280px-Flag_of_Australia_%28converted%29.svg.png"
                        alt=""
                      />
                    </b-button>
                  </router-link>
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Australia</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <router-link to="/elsodann">
                    <b-button variant="success">
                      <img
                        class="img-fluid"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/280px-Flag_of_the_United_States.svg.png"
                        alt=""
                      />
                    </b-button>
                  </router-link>
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">USA</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <router-link to="/omann">
                    <b-button variant="success">
                      <img
                        class="img-fluid"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/280px-Flag_of_Canada_%28Pantone%29.svg.png"
                        alt=""
                      />
                    </b-button>
                  </router-link>
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
