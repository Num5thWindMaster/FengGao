<template>
  <div class="container">
<!--    <h1 class="text-center">Links</h1>-->
<!--    <hr />-->
<!--    <div class="grid-3_xs-1_sm-2_md-2" v-if="links.length">-->
<!--      <div-->
<!--        :key="index"-->
<!--        v-for="(link, index) in links"-->
<!--        class="col w-full"-->
<!--      >-->
<!--        <ExchangeLink-->
<!--          :link="link.link"-->
<!--          :title="link.title"-->
<!--          :desc="link.desc"-->
<!--          class="center"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--    <Nothing v-else />-->
    <div>
      <p style="font-size: 1.5em;font-weight: bold">People’s Hospital of Xinjiang Uygur Autonomous Region</p>
      <p>People's Hospital of Xinjiang Uygur Autonomous Region was founded in 1934 and is a large-scale comprehensive "Grade III Grade A Hospital" that integrates medical treatment, teaching, scientific research, prevention, and management.</p>
      <p>For more information, visit the hospital's website:</p>
      <p><a href="http://www.xjrmyy.com/" target="_blank">http://www.xjrmyy.com/</a></p>
    </div>
    <div>
      <p style="font-size: 1.5em;font-weight: bold">Feng Gao homepage of the hospital</p>
      <p><a href="http://www.xjrmyy.com/expert/info/2010/201008253087.html" target="_blank"> http://www.xjrmyy.com/expert/info/2010/201008253087.html</a></p>
    </div>
    <div>
      <p style="font-size: 1.5em;font-weight: bold">Xinjiang University</p>
      <p><a href="https://www.xju.edu.cn" target="_blank"> https://www.xju.edu.cn</a></p>
    </div>
  </div>
</template>

<script>
// import ExchangeLink from '@/components/ExchangeLink.vue'
// import Nothing from '@/components/Nothing.vue'

export default {
  name: 'Links',
  data: function () {
    return {
      links: this.getConfig('links.json').links,
      showFooterBar: true
    }
  },
  components: {
    // ExchangeLink,
    // Nothing
  },
  mounted: function () {
    this.changeTitle('Links')
  }
}
</script>
