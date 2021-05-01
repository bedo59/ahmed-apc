<template>
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
                <img
                  class="img-fluid"
                  src="https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
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
                <img
                  class="img-fluid"
                  src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/src/assets/img/portfolio/02-full.jpg?raw=true"
                  alt=""
                />
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
                <img
                  class="img-fluid"
                  src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/03-thumbnail.jpg?raw=true"
                  alt=""
                />
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
                <img
                  class="img-fluid"
                  src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
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
                <img
                  class="img-fluid"
                  src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                  alt=""
                />
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
                <img
                  class="img-fluid"
                  src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/06-thumbnail.jpg?raw=true"
                  alt=""
                />
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
    <!-- video-->
    <div class="bbb">
      <video-embed src="https://youtu.be/0mfMBv_vEQY"></video-embed>
    </div>
    <!-- Contact-->
    <div class="bbb">
      <section class="page-section" id="contact">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="row align-items-stretch mb-5">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group mb-md-0">
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone *"
                    required="required"
                    data-validation-required-message="Please enter your phone number."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group form-group-textarea mb-md-0">
                  <textarea
                    class="form-control"
                    id="message"
                    placeholder="Your Message *"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div id="success"></div>
              <button
                class="btn btn-primary btn-xl text-uppercase"
                id="sendMessageButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <!-- Footer-->
      <footer class="footer py-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 text-lg-left">
              Copyright © Your Website 2020
            </div>
            <div class="col-lg-4 my-3 my-lg-0">
              <a class="btn btn-dark btn-social mx-2" href="#!"
                ><i class="fab fa-twitter"></i
              ></a>
              <a class="btn btn-dark btn-social mx-2" href="#!"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a class="btn btn-dark btn-social mx-2" href="#!"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
            <div class="col-lg-4 text-lg-right">
              <a class="mr-3" href="#!">Privacy Policy</a>
              <a href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
      <!-- Portfolio Modals-->
    </div>
  </div>
</template>

<style>
.page-section {
  padding: 6rem 0;
  background-color: #bebeba;
}
.page-section h2.section-heading {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
.page-section h3.section-subheading {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  section {
    padding: 9rem 0;
  }
}
::-moz-selection {
  background: #fed136;
  text-shadow: none;
}

::selection {
  background: #fed136;
  text-shadow: none;
}

img::-moz-selection {
  background: transparent;
}

img::selection {
  background: transparent;
}

img::-moz-selection {
  background: transparent;
}

.btn-xl {
  padding: 1.25rem 2.5rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.125rem;
  font-weight: 700;
}

.btn-social {
  height: 2.5rem;
  width: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 100%;
}

.bbb {
  padding: 50px;
}
</style>
