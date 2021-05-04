<template>
  <div>
    <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=3"
      img-alt="Card Image"
      text-variant="white"
      title="Image Overlay"
      sub-title="Subtitle"
    >
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the
        card's content.
      </b-card-text>
    </b-card>
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
                  href="#portfolioModal5"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                    <b-button v-b-modal="'my-modal2'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal2"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في أوكلاند، نيوزيلندا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة أوكلاند
                  </b-button>
                </a>
                <b-modal id="my-modal3"
                  ><img
                    class="img-fluid"
                    src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                    alt=""
                  />Helloغغ From Myyyyy Modal!</b-modal
                >
                <div class="portfolio-caption"></div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
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
                    <b-button v-b-modal="'my-modal4'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal4"
                      ><img
                        class="img-fluid"
                        src="../assets/waicato.png"
                        alt=""
                      /><br />جامعة في أوكلاند،qqqqqq نيوزيلندا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal5'">
                    <img
                      class="img-fluid"
                      src="../assets/waicato.png"
                      alt=""
                    /><br />
                    جامعة وايكاتو
                  </b-button>
                </a>
                <b-modal id="my-modal5"
                  ><img
                    class="img-fluid"
                    src="../assets/waicato.png"
                    alt=""
                  />Helloغغ Frooooooom Myyyyy Modal!</b-modal
                >
                <div class="portfolio-caption"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>
