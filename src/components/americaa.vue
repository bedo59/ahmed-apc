<template>
  <div >
    
    <div class="mk">
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Products</h2>
          </div>
          <div class="row">
           <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal5"
                >
                  <b-button variant="danger">
                     <b-button v-b-modal="'my-modal303'">
                    <img
                      class="img-fluid"
                      src="../assets/metnos.png"
                      alt=""
                    /><br />
                    MENTOS
                  </b-button>
                  </b-button>
                </a>
                <b-modal id="my-modal303"
                  ><img
                    class="img-fluid"
                    src="../assets/metnos.png"
                    alt=""
                  />MENTOS</b-modal
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
                  <b-button variant="danger">
                     <b-button v-b-modal="'my-modal302'">
                    <img
                      class="img-fluid"
                      src="../assets/pro.png"
                      alt=""
                    /><br />
                    PRO AMINOVIT
                  </b-button>
                  </b-button>
                </a>
                <b-modal id="my-modal302"
                  ><img
                    class="img-fluid"
                    src="../assets/pro.png"
                    alt=""
                  />PRO AMINOVIT</b-modal
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
                  <b-button variant="danger">
                     <b-button v-b-modal="'my-modal301'">
                    <img
                      class="img-fluid"
                      src="../assets/he.png"
                      alt=""
                    /><br />
                   HEPACARNITINE
                  </b-button>
                  </b-button>
                </a>
                <b-modal id="my-modal301"
                  ><img
                    class="img-fluid"
                    src="../assets/he.png"
                    alt=""
                  /> HEPACARNITINE</b-modal
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
                  <b-button variant="danger">
                     <b-button v-b-modal="'my-modal3011'">
                    <img
                      class="img-fluid"
                      src="../assets/ol.png"
                      alt=""
                    /><br />
                    Oligo Extra
                  </b-button>
                  </b-button>
                </a>
                <b-modal id="my-modal3011"
                  ><img
                    class="img-fluid"
                    src="../assets/ol.png"
                    alt=""
                  /> Oligo Extra</b-modal
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
                  <b-button variant="danger">
                     <b-button v-b-modal="'my-modal301w'">
                    <img
                      class="img-fluid"
                      src="../assets/ca.png"
                      alt=""
                    /><br />
                    Catomax
                  </b-button>
                  </b-button>
                </a>
                <b-modal id="my-modal301w"
                  ><img
                    class="img-fluid"
                    src="../assets/ca.png"
                    alt=""
                  />Catomax</b-modal
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
                  <b-button variant="danger">
                     <b-button v-b-modal="'my-modal301e'">
                    <img
                      class="img-fluid"
                      src="../assets/di1.png"
                      alt=""
                    /><br />
                    DINAMINERAL
                  </b-button>
                  </b-button>
                </a>
                <b-modal id="my-modal301e"
                  ><img
                    class="img-fluid"
                    src="../assets/di1.png"
                    alt=""
                  />DINAMINERAL</b-modal
                >
                <div class="portfolio-caption"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <b-button to="/elsodann">all products</b-button>
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
<style scoped>
.mk{
  background-color: burlywood;
  color: rgb(126, 125, 125);
}
</style>