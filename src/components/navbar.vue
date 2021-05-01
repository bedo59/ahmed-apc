<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/"
        ><img alt="Vue logo" src="../assets/log.png"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/gam3a">الجامعات</b-nav-item>.
          <b-nav-item href="/ma3had">المعاهد</b-nav-item>.
          <b-nav-item href="/tass2el">التسجيل</b-nav-item>.
          <b-nav-item href="about">عننا</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
