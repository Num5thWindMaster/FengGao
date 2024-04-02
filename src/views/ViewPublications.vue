<template>
  <div class="container">
<!--    <h1 class="text-center">Publications</h1>-->
    <hr />
    <ProjectDes/>
    <br />
    <div class="grid-3_xs-1_sm-2_md-2" v-if="projects.length">

    </div>
    <Nothing v-else />
  </div>
</template>

<script>
import Nothing from '@/components/Nothing.vue'
let ProjectDes = null
try {
  ProjectDes = require('@/../posts/data/pubs-des.md')
} catch (e) {
  ProjectDes = require('@/defaults/project-des.md')
}

export default {
  name: 'ViewPublications',
  components: {
    ProjectDes: ProjectDes.vue.component,
    Nothing
  },
  data: function () {
    return {
      projects: this.getConfig('projects.json').projects,
      showFooterBar: true
    }
  },
  mounted: function () {
    this.changeTitle('Publication')
  }
}
</script>
