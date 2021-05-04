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
                  href="#portfolioModal1"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <div>
                    <b-button @click="showMsgOk">معلومات عن المدينه</b-button>
                  </div>

                  <div>
                    <b-button v-b-modal.modal-multi-1
                      ><img
                        class="img-fluid"
                        src="https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />INTERNATIONAL HOUSE</b-button
                    >

                    <b-modal
                      id="modal-multi-1"
                      size="lg"
                      title="First Modal"
                      ok-only
                      no-stacking
                    >
                      <p class="my-2">
                        <img
                          class="img-fluid"
                          src="https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        />First Modal
                      </p>
                      <router-link to="/tass2el">
                        <b-button variant="info">قدم</b-button>
                      </router-link>
                    </b-modal>
                  </div>
                </a>
                <div class="portfolio-caption"></div>
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
                  <div>
                    <b-button v-b-modal.modal-footer-sm
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal
                      id="modal-footer-sm"
                      title="BootstrapVue"
                      button-size="sm"
                    >
                      <p class="my-2">
                        <img
                          class="img-fluid"
                          src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/src/assets/img/portfolio/02-full.jpg?raw=true"
                          alt=""
                        />فانكوفر
                      </p>
                    </b-modal>
                  </div>
                  <div>
                    <b-button v-b-modal.modal-footer-lg
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/src/assets/img/portfolio/02-full.jpg?raw=true"
                        alt=""
                      />LAB</b-button
                    >

                    <b-modal
                      id="modal-footer-lg"
                      title="BootstrapVue"
                      button-size="lg"
                    >
                      <p class="my-1">
                        <img
                          class="img-fluid"
                          src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/src/assets/img/portfolio/02-full.jpg?raw=true"
                          alt=""
                        />فانكوفر
                      </p>
                      <router-link to="/tass2el">
                        <b-button variant="info">قدم</b-button>
                      </router-link>
                    </b-modal>
                  </div>
                </a>
                <div class="portfolio-caption"></div>
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
                  <div>
                    <b-button v-b-modal.modal-no-backdrop
                      >معلومات عن المدينه</b-button
                    >

                    <b-modal
                      id="modal-no-backdrop"
                      hide-backdrop
                      content-class="shadow"
                      title="BootstrapVue"
                    >
                      <p class="my-2">
                        <img
                          class="img-fluid"
                          src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/03-thumbnail.jpg?raw=true"
                          alt=""
                        />
                        أمريكا. سان فرانسيسكو سان دياجو ، واشنطن نيويورك بوسطن،
                        ميامي بريطانيا. لندن كامبريدج ، كندا مونتريال، تورونتو،
                        فانكوفر نيوزلاندا اوكلاند استراليا ايرلندا دبلن جنوب
                        أفريقيا كيب تاون
                      </p>
                    </b-modal>
                  </div>

                  <div>
                    <b-button v-b-modal.modal-center
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/03-thumbnail.jpg?raw=true"
                        alt=""
                      />EC</b-button
                    >

                    <b-modal id="modal-center" centered title="BootstrapVue">
                      <p class="my-4">
                        <img
                          class="img-fluid"
                          src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/03-thumbnail.jpg?raw=true"
                          alt=""
                        />Vertically centered modal!
                      </p>
                      <router-link to="/tass2el">
                        <b-button variant="info">قدم</b-button>
                      </router-link>
                    </b-modal>
                  </div>
                </a>
                <div class="portfolio-caption"></div>
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
                  <div></div>
                  <div>
                    <b-button v-b-modal.modal-scrollable
                      >معلومات عن المدينه</b-button
                    >

                    <b-modal
                      id="modal-scrollable"
                      scrollable
                      title="Scrollable Content"
                    >
                      <p class="my-4" :key="i">
                        <img
                          class="img-fluid"
                          src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        />فانكوفر
                      </p>
                    </b-modal>
                  </div>

                  <div>
                    <b-button v-b-modal.modal-tall
                      ><img
                        class="img-fluid"
                        src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />INLINGUA</b-button
                    >

                    <b-modal id="modal-tall" title="Overflowing Content">
                      <p class="my-4" :key="i">
                        <img
                          class="img-fluid"
                          src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        />
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <router-link to="/tass2el">
                        <b-button variant="info">قدم</b-button>
                      </router-link>
                    </b-modal>
                  </div>
                </a>
                <div class="portfolio-caption"></div>
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
                  <div>
                    <b-button v-b-modal.modalPopover
                      >معلومات عن المدينه</b-button
                    >

                    <b-modal
                      id="modalPopover"
                      title="Modal with Popover"
                      ok-only
                    >
                      <p>
                        <img
                          class="img-fluid"
                          src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                          alt=""
                        /><br />
                        فانكوفر
                      </p>
                    </b-modal>
                  </div>

                  <div>
                    <!-- Using modifiers -->
                    <b-button v-b-modal.my-modal
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      />ILAC</b-button
                    >
                    <!-- The modal -->
                    <b-modal id="my-modal"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      />Hello From My Modal!
                      <router-link to="/tass2el">
                        <b-button variant="info">قدم</b-button>
                      </router-link>
                    </b-modal>
                  </div>
                </a>
                <div class="portfolio-caption"></div>
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
                  <div>
                    <b-button v-b-modal.modal-1>معلومات عن المدينه</b-button>

                    <b-modal id="modal-1" title="BootstrapVue">
                      <p class="my-4">
                        <img
                          class="img-fluid"
                          src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/06-thumbnail.jpg?raw=true"
                          alt=""
                        /><br />كندا فكتوريا. ، فانكوفر
                      </p>
                    </b-modal>
                  </div>
                </a>
                <div>
                  <b-button @click="modalShow = !modalShow"
                    ><img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/06-thumbnail.jpg?raw=true"
                      alt=""
                    />Global Village</b-button
                  >

                  <b-modal v-model="modalShow"
                    ><img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/06-thumbnail.jpg?raw=true"
                      alt=""
                    />
                    Hello From Modal!
                    <router-link to="/tass2el">
                      <b-button variant="info">قدم</b-button>
                    </router-link>
                  </b-modal>
                </div>
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
                    <b-button v-b-modal="'m-modal23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="m-modal23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />تورونتو، اوتاوا، هاليفكس</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'y-modal28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />

                    CLLC
                  </b-button>
                </a>
                <b-modal id="y-modal28g3["
                  ><img
                    class="img-fluid"
                    src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                    alt=""
                  />Helloغغ From My Modal!</b-modal
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
                    <b-button v-b-modal="'maaa-modal23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="maaa-modal23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />أمريكا. سان دييغو ، كاليفورنيا بريطانيا. برايتون
                      لندن كندا. فانكوفر ، تورونتو
                    </b-modal>
                  </div>
                  <b-button v-b-modal="'yaaa-modal28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    Oxford international House
                  </b-button>
                </a>
                <b-modal id="yaaa-modal28g3["
                  ><img
                    class="img-fluid"
                    src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                    alt=""
                  />Helloغغ From My Modal!</b-modal
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
                    <b-button v-b-modal="'m-modal23f7jس'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="m-modal23f7jس"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />أمريكا نيويورك ، أوريجون ، سان فرانسيسكو، تاكسيس،
                      جنوب كاليفورنيا، فلوريدا كندا فانكوفر، تورنتو ، اونتاريو
                    </b-modal>
                  </div>
                  <b-button v-b-modal="'y-modal28gس3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    ELS
                  </b-button>
                </a>
                <b-modal id="y-modal28gس3["
                  ><img
                    class="img-fluid"
                    src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                    alt=""
                  />Helloغغ From My Modal!</b-modal
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
                    <b-button v-b-modal="'m-modal23f7ضضj'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="m-modal23f7ضضj"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />تورنتو فانكوفر
                    </b-modal>
                  </div>
                  <b-button v-b-modal="'y-modal28g3ض['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    ILSC
                  </b-button>
                </a>
                <b-modal id="y-modal28g3ض["
                  ><img
                    class="img-fluid"
                    src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                    alt=""
                  />Helloغغ From My Modal!</b-modal
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
                    <b-button v-b-modal="'m-modal23f7jqw'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="m-modal23f7jqw"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />توريتو، فانكوفر</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'y-modal28g3[qww'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    The Language Art Gallary
                  </b-button>
                </a>
                <b-modal id="y-modal28g3[qww"
                  ><img
                    class="img-fluid"
                    src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                    alt=""
                  />Helloغغ From My Modal!</b-modal
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
                    <b-button v-b-modal="'m-mqodal23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="m-mqodal23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />توريتو، فانكوفر
                    </b-modal>
                  </div>
                  <b-button v-b-modal="'y-mwqodal28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    Kaplan
                  </b-button>
                </a>
                <b-modal id="y-mwqodal28g3["
                  ><img
                    class="img-fluid"
                    src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                    alt=""
                  />Helloغغ From My Modal!</b-modal
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
  methods: {
    showMsgOk() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "Title from <i>HTML<i> string" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [h("strong", " فانكوفر، تورنتو ")]),

        h("b-img", {
          props: {
            src:
              "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "circle",
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "sm",
      });
    },
  },
};
</script>
