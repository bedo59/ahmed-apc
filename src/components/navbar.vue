<template>
<div class="bll">
    <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand @click="gohome" href="/">
      <b-icon-brightness-fill-high></b-icon-brightness-fill-high>
      <img alt="Vue logo" src="../assets/log.png" /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
<b-nav-item href="/gam3a">الجامعات</b-nav-item>.
        <b-nav-item href="about">المعاهد</b-nav-item>.
        
        <b-nav-item href="about">التسجيل</b-nav-item>

        
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  </div>
</template>
