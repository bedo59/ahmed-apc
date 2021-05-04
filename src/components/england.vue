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
                        src="../assets/glo.png"
                        alt=""
                      />(University of Gloucestershire, Park Campus)</b-button
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
                          src="../assets/glo.png"
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
                        />جامعة في إكسيت، إنجلترا
                      </p>
                    </b-modal>
                  </div>
                  <div>
                    <b-button v-b-modal.modal-footer-lg
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/src/assets/img/portfolio/02-full.jpg?raw=true"
                        alt=""
                      />(University of Exeter)</b-button
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
                        />Thissssss modal has large footer buttons
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
                        /><br />جامعة بحثية في نورويتش، إنجلترا
                      </p>
                    </b-modal>
                  </div>

                  <div>
                    <b-button v-b-modal.modal-center
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/03-thumbnail.jpg?raw=true"
                        alt=""
                      />(University of East Anglia)</b-button
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
                        />جامعة في بلفاست، أيرلندا الشمالية
                      </p>
                    </b-modal>
                  </div>

                  <div>
                    <b-button v-b-modal.modal-tall
                      ><img
                        class="img-fluid"
                        src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />(Queen's University Belfast)</b-button
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
                          src="../assets/le.png"
                          alt=""
                        />
                        جامعة في نيوكاسل أبون تاين، إنجلترا
                      </p>
                    </b-modal>
                  </div>

                  <div>
                    <!-- Using modifiers -->
                    <b-button v-b-modal.my-modal
                      ><img
                        class="img-fluid"
                        src="../assets/le.png"
                        alt=""
                      />(Newcastle University)</b-button
                    >
                    <!-- The modal -->
                    <b-modal id="my-modal"
                      ><img
                        class="img-fluid"
                        src="../assets/le.png"
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
                          src="../assets/gg.png"
                          alt=""
                        />جامعة في غلازغو، سكوتلندا
                      </p>
                    </b-modal>
                  </div>
                </a>
                <div>
                  <b-button @click="modalShow = !modalShow"
                    ><img
                      class="img-fluid"
                      src="../assets/gg.png"
                      alt=""
                    />(Glasgow Caledonian University)</b-button
                  >

                  <b-modal v-model="modalShow"
                    ><img
                      class="img-fluid"
                      src="../assets/gg.png"
                      alt=""
                    />
                    Hello From Modal!
                    <router-link to="/tass2el">
                      <b-button variant="info">قدم</b-button>
                    </router-link>
                  </b-modal>
                </div>
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
                    <b-button v-b-modal="'my-modal231'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal231"
                      ><img
                        class="img-fluid"
                        src="../assets/m.png"
                        alt=""
                      /><br />جامعة في مانشستر، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal2834'">
                    <img
                      class="img-fluid"
                      src="../assets/m.png"
                      alt=""
                    /><br />
                    (Manchester Metropolitan University)
                  </b-button>
                </a>
                <b-modal id="my-modal2834"
                  ><img
                    class="img-fluid"
                    src="../assets/m.png"
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
                    <b-button v-b-modal="'my-modal23722'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23722"
                      ><img
                        class="img-fluid"
                        src="../assets/vv.png"
                        alt=""
                      /><br />
                      Glasnevin ، دبلن 9، دبلن، أيرلندا جامعة في برايتون،
                      إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal2873'">
                    <img
                      class="img-fluid"
                      src="../assets/vv.png"
                      alt=""
                    /><br />
                    (University of Sussex)
                  </b-button>
                </a>
                <b-modal id="my-modal2873"
                  ><img
                    class="img-fluid"
                    src="../assets/vv.png"
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
                    <b-button v-b-modal="'my-modal23712'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23712"
                      ><img
                        class="img-fluid"
                        src="../assets/su.png"
                        alt=""
                      /><br />جامعة في غلدفورد، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28324'">
                    <img
                      class="img-fluid"
                      src="../assets/su.png"
                      alt=""
                    /><br />
                    (University Of Surrey)
                  </b-button>
                </a>
                <b-modal id="my-modal28324"
                  ><img
                    class="img-fluid"
                    src="../assets/su.png"
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
                    <b-button v-b-modal="'my-modal23777'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23777"
                      ><img
                        class="img-fluid"
                        src="../assets/de.png"
                        alt=""
                      /><br />جامعة في غلازغو، سكوتلندا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal77283'">
                    <img
                      class="img-fluid"
                      src="../assets/de.png"
                      alt=""
                    /><br />
                    (University of Strathclyde)
                  </b-button>
                </a>
                <b-modal id="my-modal77283"
                  ><img
                    class="img-fluid"
                    src="../assets/de.png"
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
                    <b-button v-b-modal="'my-moda1l237'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-moda1l237"
                      ><img
                        class="img-fluid"
                        src="../assets/ro.png"
                        alt=""
                      /><br />كلية في ايجهام، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-moda2l283'">
                    <img
                      class="img-fluid"
                      src="../assets/ro.png"
                      alt=""
                    /><br />
                    (Royal Holloway)
                  </b-button>
                </a>
                <b-modal id="my-moda2l283"
                  ><img
                    class="img-fluid"
                    src="../assets/ro.png"
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
                    <b-button v-b-modal="'my-modal28837'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal28837"
                      ><img
                        class="img-fluid"
                        src="../assets/she.png"
                        alt=""
                      /><br />جامعة في شفيلد، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal27783'">
                    <img
                      class="img-fluid"
                      src="../assets/she.png"
                      alt=""
                    /><br />
                    (The University of Sheffield)
                  </b-button>
                </a>
                <b-modal id="my-modal27783"
                  ><img
                    class="img-fluid"
                    src="../assets/she.png"
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
                    <b-button v-b-modal="'my-m1odal237'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-m1odal237"
                      ><img
                        class="img-fluid"
                        src="../assets/liv.png"
                        alt=""
                      /><br />جامعة في ليفربول، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-m2odal283'">
                    <img
                      class="img-fluid"
                      src="../assets/liver.png"
                      alt=""
                    /><br />
                    (Liverpool John Moores University)
                  </b-button>
                </a>
                <b-modal id="my-m2odal283"
                  ><img
                    class="img-fluid"
                    src="../assets/liv.png"
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
                    <b-button v-b-modal="'my-modal23q7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23q7"
                      ><img
                        class="img-fluid"
                        src="../assets/nnr.png"
                        alt=""
                      /><br />جامعة في لينكون، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28w3'">
                    <img
                      class="img-fluid"
                      src="../assets/nn.png"
                      alt=""
                    /><br />
                    (University of Lincoln)
                  </b-button>
                </a>
                <b-modal id="my-modal28w3"
                  ><img
                    class="img-fluid"
                    src="../assets/nnr.png"
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
                    <b-button v-b-modal="'m1y-modal237'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="m1y-modal237"
                      ><img
                        class="img-fluid"
                        src="../assets/eeq.png"
                        alt=""
                      /><br />جامعة في ليدز، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'m2y-modal283'">
                    <img
                      class="img-fluid"
                      src="../assets/ee.png"
                      alt=""
                    /><br />
                    (University of Leeds)
                  </b-button>
                </a>
                <b-modal id="m2y-modal283"
                  ><img
                    class="img-fluid"
                    src="../assets/eea.png"
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
                    <b-button v-b-modal="'3my-modal237'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="3my-modal237"
                      ><img
                        class="img-fluid"
                        src="../assets/laa.png"
                        alt=""
                      /><br />جامعة في لانكشاير، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'4my-modal283'">
                    <img
                      class="img-fluid"
                      src="../assets/laa.png"
                      alt=""
                    /><br />
                    (Lancaster University)
                  </b-button>
                </a>
                <b-modal id="4my-modal283"
                  ><img
                    class="img-fluid"
                    src="../assets/laa.png"
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
                    <b-button v-b-modal="'1my-modal237'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="1my-modal237"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />مؤسسة تعليمية في لندن ، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'2my-modal283'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة هدرسفيلد - لندن
                  </b-button>
                </a>
                <b-modal id="2my-modal283"
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
                    <b-button v-b-modal="'my-1modal237'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-1modal237"
                      ><img
                        class="img-fluid"
                        src="../assets/kaa.png"
                        alt=""
                      /><br />جامعة في كنجستون، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-2modal283'">
                    <img
                      class="img-fluid"
                      src="../assets/ka.png"
                      alt=""
                    /><br />
                    (Kingston University)
                  </b-button>
                </a>
                <b-modal id="my-2modal283"
                  ><img
                    class="img-fluid"
                    src="../assets/kaa.png"
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
                    <b-button v-b-modal="'my-modal237'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal237"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في تامبا، فلوريدا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal283'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة جنوب فلوريدا
                  </b-button>
                </a>
                <b-modal id="my-modal283"
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
                    <b-button v-b-modal="'my-modal23t7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23t7"
                      ><img
                        class="img-fluid"
                        src="../assets/dur.png"
                        alt=""
                      /><br />جامعة في درم إنجلترا
                      </b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28r3'">
                    <img
                      class="img-fluid"
                      src="../assets/dur.png"
                      alt=""
                    /><br />
                    (Durham University)
                  </b-button>
                </a>
                <b-modal id="my-modal28r3"
                  ><img
                    class="img-fluid"
                    src="../assets/dur.png"
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
                    <b-button v-b-modal="'my-modal23fqqq7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23fqqq7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة خاصة في ناشفيل، تينيسي</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28gww3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    Lipscomb University
                  </b-button>
                </a>
                <b-modal id="my-modal28gww3"
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
                    <b-button v-b-modal="'my-modal23fq7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23fq7"
                      ><img
                        class="img-fluid"
                        src="../assets/ab.png"
                        alt=""
                      /><br />جامعة في أبردين، سكوتلندا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28gw3'">
                    <img
                      class="img-fluid"
                      src="../assets/ab.png"
                      alt=""
                    /><br />
                    (University of Aberdeen)
                  </b-button>
                </a>
                <b-modal id="my-modal28gw3"
                  ><img
                    class="img-fluid"
                    src="../assets/ab.png"
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
                    <b-button v-b-modal="'my-modal23qf7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23qf7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />كلية في جسر ، إنجلترا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal281g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    كلية بيلربيز
                  </b-button>
                </a>
                <b-modal id="my-modal281g3"
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
                    <b-button v-b-modal="'my-moodal23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-moodal23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة خاصة في واكو، تكساس</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-moudal28g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة بايلور
                  </b-button>
                </a>
                <b-modal id="my-moudal28g3"
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
                    <b-button v-b-modal="'my-modal23f7qq'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23f7qq"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في شيكاغو، إلينوي</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28g3ww'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة دي بول
                  </b-button>
                </a>
                <b-modal id="my-modal28g3ww"
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
                    <b-button v-b-modal="'my-modeeal23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modeeal23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في ويست هارتفورد، كونيتيكت</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal282g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة هارتفورد
                  </b-button>
                </a>
                <b-modal id="my-modal282g3"
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
                    <b-button v-b-modal="'my-modal23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في هاريسونبورغ، فرجينيا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28gaa3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة جيمس ماديسون
                  </b-button>
                </a>
                <b-modal id="my-modal28gaa3"
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
                    <b-button v-b-modal="'my-mo111dal23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-mo111dal23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في بروكلين، نيويورك</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-mo222dal28g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    (Long Island University Brooklyn)
                  </b-button>
                </a>
                <b-modal id="my-mo222dal28g3"
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
                    <b-button v-b-modal="'my-modal23fc7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23fc7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في بوكا راتون، فلوريدا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28gv3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة لين
                  </b-button>
                </a>
                <b-modal id="my-modal28gv3"
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
                    <b-button v-b-modal="'my-modal2ee3f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal2ee3f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في بيلينغام، واشنطن</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28gbc3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    Western Washington University
                  </b-button>
                </a>
                <b-modal id="my-modal28gbc3"
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
                    <b-button v-b-modal="'my-modaml23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modaml23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />كوربوس كريستي تكساس</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modahl28g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة إيه أند إم تكساس
                  </b-button>
                </a>
                <b-modal id="my-modahl28g3"
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
                    <b-button v-b-modal="'myvv-modal23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="myvv-modal23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة عامة في فورت كولنز، كولورادو</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'myv-modal28g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة ولاية كولورادو
                  </b-button>
                </a>
                <b-modal id="myv-modal28g3"
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
                    <b-button v-b-modal="'my-modawcl23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modawcl23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في ماديسون، نيو جيرسي</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modawccl28g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة درو
                  </b-button>
                </a>
                <b-modal id="my-modawccl28g3"
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
                    <b-button v-b-modal="'my-mow1dal23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-mow1dal23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة خاصة في مقاطعة ناسو، نيويورك</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modwwwwal28g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة هوفسترا
                  </b-button>
                </a>
                <b-modal id="my-modwwwwal28g3"
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
                    <b-button v-b-modal="'my-qmodal23f7'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-qmodal23f7"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة عامة في نورمال، إلينوي</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-nqmodal28g3'">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة إلينوي ستيت
                  </b-button>
                </a>
                <b-modal id="my-nqmodal28g3"
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
                    <b-button v-b-modal="'my-modal23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في هنغتينغتون، فيرجينيا الغربية</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة مارشال
                  </b-button>
                </a>
                <b-modal id="my-modal28g3["
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
                    <b-button v-b-modal="'mqqy-modal23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="mqqy-modal23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في كورفاليس، أوريغون</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'mqqqy-modal28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة أوريجون ستيت
                  </b-button>
                </a>
                <b-modal id="mqqqy-modal28g3["
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
                    <b-button v-b-modal="'mymodal23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="mymodal23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في سانت لويس، ميزوري</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal288g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة سانت لويس
                  </b-button>
                </a>
                <b-modal id="my-modal288g3["
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
                    <b-button v-b-modal="'my-modal23f7j.'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal23f7j."
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة بحثية في توسكالوسا، ألاباما</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal28g3,['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة ألاباما
                  </b-button>
                </a>
                <b-modal id="my-modal28g3,["
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
                    <b-button v-b-modal="'my-modal/23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal/23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في بوسطن، ماساتشوستس</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal2[8g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    Suffolk University
                  </b-button>
                </a>
                <b-modal id="my-modal2[8g3["
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
                    <b-button v-b-modal="'mly-modal23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="mly-modal23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في تكسون، أريزونا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'mlly-modal28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    (The University of Arizona)
                  </b-button>
                </a>
                <b-modal id="mlly-modal28g3["
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
                    <b-button v-b-modal="'my-modal2n3f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-modal2n3f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة عامة في بولمان، واشنطن</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-modal2nn28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    (Washington State University)
                  </b-button>
                </a>
                <b-modal id="my-modal2nn28g3["
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
                    <b-button v-b-modal="'m-modal23f7j'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="m-modal23f7j"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في تامبا، فلوريدا</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'y-modal28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    جامعة جنوب فلوريدا
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
                    <b-button v-b-modal="'my-monnndal23f'"
                      >معلومات عن المدينه</b-button
                    >
                    <b-modal id="my-monnndal23f"
                      ><img
                        class="img-fluid"
                        src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                        alt=""
                      /><br />جامعة في كينت، أوهايو</b-modal
                    >
                  </div>
                  <b-button v-b-modal="'my-mmnnndal28g3['">
                    <img
                      class="img-fluid"
                      src="https://github.com/StartBootstrap/startbootstrap-agency/blob/master/dist/assets/img/portfolio/05-thumbnail.jpg?raw=true"
                      alt=""
                    /><br />
                    (Kent State University)
                  </b-button>
                </a>
                <b-modal id="my-mmnnndal28g3["
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
        domProps: { innerHTML: "جامعة عامة في شلتنهام، إنجلترا" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          h("strong", "(جامعة عامة في شلتنهام، إنجلترا)"),
        ]),

        h("b-img", {
          props: {
            src:
              "../assets/glo.png",
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
