<template>
  <div>
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
                <div>
                  <label for="example-datepicker">Choose a date</label>
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="value"
                    class="mb-2"
                  ></b-form-datepicker>
                </div>
                <div>
                  <!-- Styled -->
                  ارفق ملفات اضافيه لك
                  <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                  <div class="mt-3">
                    Selected file: {{ file1 ? file1.name : "" }}
                  </div>

                  <!-- Plain mode -->
                </div>
                <div>
                  الجامعه:
                  <b-form-select class="mb-3">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >-- Please select an option --</b-form-select-option
                      >
                    </template>

                    <!-- These options will appear after the ones from 'options' prop -->
                    <b-form-select-option value="C"
                      >Option C</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option a</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option z</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option x</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option q</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option v</b-form-select-option
                    >
                    <b-form-select-option value="C"
                      >Option b</b-form-select-option
                    >
                  </b-form-select>
                </div>
                <div>
                  المجال:
                  <b-form-select class="mb-3">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >-- Please select an option --</b-form-select-option
                      >
                    </template>

                    <!-- These options will appear after the ones from 'options' prop -->
                    <b-form-select-option value="C"
                      >Option 1</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 2</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 3</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 4</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 5</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 6</b-form-select-option
                    >
                    <b-form-select-option value="C"
                      >Option 7</b-form-select-option
                    >
                  </b-form-select>
                </div>
              </div>

              <div>
                <b-form-group label="الشهادات:" v-slot="{ ariaDescribedby }">
                  <b-form-checkbox-group
                    id="checkbox-group-1"
                    v-model="selected"
                    :options="options"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-1"
                  ></b-form-checkbox-group>
                </b-form-group>
                <div>
                  Selected: <strong>{{ selected }}</strong>
                </div>
                <div>
                  المستوي:
                  <b-form-select class="mb-3">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >-- Please select an option --</b-form-select-option
                      >
                    </template>

                    <!-- These options will appear after the ones from 'options' prop -->
                    <b-form-select-option value="C"
                      >Option 1</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 2</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 3</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 4</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 5</b-form-select-option
                    >
                    <b-form-select-option value="D"
                      >Option 6</b-form-select-option
                    >
                    <b-form-select-option value="C"
                      >Option 7</b-form-select-option
                    >
                  </b-form-select>
                </div>

                <div>
                  <b-card bg-variant="light">
                    <b-form-group
                      label-cols-lg="3"
                      label="Shipping Address"
                      label-size="lg"
                      label-class="font-weight-bold pt-0"
                      class="mb-0"
                    >
                      <b-form-group
                        label="Street:"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="right"
                      >
                        <b-form-input id="nested-street"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label="City:"
                        label-for="nested-city"
                        label-cols-sm="3"
                        label-align-sm="right"
                      >
                        <b-form-input id="nested-city"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label="State:"
                        label-for="nested-state"
                        label-cols-sm="3"
                        label-align-sm="right"
                      >
                        <b-form-input id="nested-state"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label="Country:"
                        label-for="nested-country"
                        label-cols-sm="3"
                        label-align-sm="right"
                      >
                        <b-form-input id="nested-country"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label="Ship via:"
                        label-cols-sm="3"
                        label-align-sm="right"
                        class="mb-0"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-form-radio-group
                          class="pt-2"
                          :options="['Air', 'Courier', 'Mail']"
                          :aria-describedby="ariaDescribedby"
                        ></b-form-radio-group>
                      </b-form-group>
                    </b-form-group>
                  </b-card>
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
                send
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
<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
    };
  },
};
</script>
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
</style>
