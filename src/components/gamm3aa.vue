<template>
<div>
  <div>
  <b-card
    overlay
    img-src="https://picsum.photos/1024/480/?image=54"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
</div>
<div class="bbb">
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
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
                  class="img-fluid"
                  src="https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                </b-button>
                </router-link>
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Threads</div>
                <div class="portfolio-caption-subheading text-muted">
                  Illustration
                </div>
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
                <router-link to="/america">
                <b-button variant="success">
                <img
                  class="img-fluid"
                  src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/src/assets/img/portfolio/02-full.jpg?raw=true"
                  alt=""
                />
                </b-button>
                </router-link>
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Explore</div>
                <div class="portfolio-caption-subheading text-muted">
                  Graphic Design
                </div>
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
                <router-link to="/englandd">
                <b-button variant="success">
                <img
                  class="img-fluid"
                  src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/03-thumbnail.jpg?raw=true"
                  alt=""
                />
                </b-button>
                </router-link>
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Finish</div>
                <div class="portfolio-caption-subheading text-muted">
                  Identity
                </div>
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
                  src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                </b-button>
                </router-link>
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Lines</div>
                <div class="portfolio-caption-subheading text-muted">
                  Branding
                </div>
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
                  src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                  alt=""
                />
                </b-button>
                </router-link>
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Southwest</div>
                <div class="portfolio-caption-subheading text-muted">
                  Website Design
                </div>
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
                  src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/06-thumbnail.jpg?raw=true"
                  alt=""
                />
                </b-button>
                </router-link>
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Window</div>
                <div class="portfolio-caption-subheading text-muted">
                  Photography
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
</div>
</template>