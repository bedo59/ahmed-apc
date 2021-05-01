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
            <router-link to="/about">عننا</router-link>|
            <router-link to="/tass2el">التسجيل</router-link> |
            <router-link to="/ma3had">المعاهد</router-link> |
            <router-link to="/gam3a">الجامعات</router-link> 
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
