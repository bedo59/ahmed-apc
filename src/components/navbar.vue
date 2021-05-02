<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/"
        ><img alt="Vue logo" src="../assets/log.png"
      /></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="aqq">
            <b-button variant="outline-primary">
            <router-link to="/gam3a">الجامعات</router-link> 
            </b-button>
            <b-button variant="outline-primary">
            <router-link to="/ma3had">المعاهد</router-link> 
            </b-button>
             <b-button variant="outline-primary">
            <router-link to="/tass2el">التسجيل</router-link> 
            </b-button>
            <b-button variant="outline-primary">
            <router-link to="/5admaat">خدمات</router-link>
            </b-button>
            <b-button variant="outline-primary">
            <router-link to="/about">عننا</router-link>
            </b-button>
           
            
            
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.aqq {
  background-color: cornsilk;
}
</style>
