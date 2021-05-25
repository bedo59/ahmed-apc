<template>
  <div class="mv">
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Agents</h2>
          <h3>Big companies</h3>
        </div>
        <div class="row">
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
                <b-button to="/rosyaa" variant="danger">
                  <img
                    class="img-fluid"
                    src="https://product.statnano.com/resource/amar_university_world/files/images/21/1/thumbnail_69454725556c75c5ad7a5452a66f14d5.jpg"
                    alt=""
                  />
                </b-button>
              </a>
              <div class="bbb">
                <b-card
                  title="APA UNITED TECHNOLOGY COMPOANY"
                  tag="article"
                  style="max-width: 60rem"
                  class="mb-2"
                >
                  <b-card-text>
                    APA manufactures around 300 products that are produced and
                    controlled in a strict process. In particular, the quality
                    is assured according to GMP-WHO standard. With the motto of
                    True Value - True Success, APA deserves to be a reliable
                    partner to work with and develop the company together.
                  </b-card-text>

                  <b-button to="/rosyaa" variant="primary">Go somewhere</b-button>
                </b-card>
              </div>
            </div>
          </div>

          <div class="col-lg-8 col-sm-6 mb-4 mb-sm-0">
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
                <b-button variant="danger" to="/omann">
                 <img
                    class="img-fluid"
                    src="https://nhadatcanthoinfo.vn/wp-content/uploads/2021/03/Logo-Thien-Quan-Group-300x300.png"
                    alt=""
                  />
                </b-button>
              </a>
            </div>
            <div class="bbb">
              <b-card
                title="Thien Quaan company"
                tag="article"
                style="max-width: 40rem"
                class="mb-8"
              >
                <b-card-text>
                  THIEN QUAN was established in 2012 and located in industrial
                  park Tra Noc I, Binh Thuy district, Can Tho city, Vietnam. In
                  2015, Thien Quan Joint Stock Company has established a
                  veterinary and aquaculture medicine factory in compliance with
                  the international standard of the World Health Organization-
                  GMP-WHO standard. Thien Quan offer a wide portfolio of
                  veterinary medicine, nutritions, complementary feed and
                  aquatic products with appropriate packaging and serving to
                  address all the needs of farms and livestock households. The
                  quality of our products has been highly appreciated and
                  accepted in Vietnam and other foreign countries thanks to
                  their therapeutic significance and economical features.
                </b-card-text>

                <b-button to="/omann" variant="primary">Go somewhere</b-button>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About-->
  </div>
</template>
<style scoped>
.mv {
  margin: 25px;
  padding: 30px;
  background-color: rgb(131, 109, 81);
  color: rgb(131, 109, 81);
}
.bbb {
  margin: 10px;
}
</style>
