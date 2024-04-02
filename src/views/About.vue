<template>
  <div>
    <AboutMe />
    <div class="centered">
      <img src="img/xjrmyy3.jfif" alt="Image" align="center" height="250" width="600"/>
    </div>
    <Contacts />
  </div>
</template>

<script>
// import AboutMe from '@/components/AboutMe.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'About',
  components: {
    // AboutMe,
    Contacts
  },
  mounted: function () {
    this.changeTitle('Contact')
  }
}
</script>
<style>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
}

</style>
