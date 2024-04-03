<template>
  <div>
    <div class="container">
      <div class="text-center">
        <div class="center">
<!--          <Avatar size="300" home="true" />-->
          <img src="img/portrait3.jpg" width="200" height="250">
        </div>
        <h1>{{ config.name }}</h1>
      </div>
      <div class="home-left" >
<!--        <h4 style="color: #666666">{{ config.username }}</h4>-->
        <p>{{ config.description }}</p>
        <p>Research Interests: Early gastric cancer, inflammatory bowel disease, celiac disease.</p>
        <h1>Education</h1>
        <p>Ph.D., Internal and digestive medicine, Ruijin Hospital Affiliated to Shanghai Second Medical University,2003</p>
        <p>M.S., Internal and digestive medicine, School of Medicine, Xinjiang Medical University,2001</p>
        <p>B.S., Clinical Medicine, School of Medicine, Medical College of Soochow University,1987</p>
        <h2>About Dr. Gao</h2>
        <p>Feng Gao joined the Gastroenterology Department of the People's Hospital of Xinjiang Uygur Autonomous Region, engaging in frontline clinical work. He came to the People's Hospital of Xinjiang Uygur Autonomous Region from the Medical College of Soochow University.</p>
        <p>He is a Distinguished Professor of Gastroenterology Department of the People's Hospital of Xinjiang Uygur Autonomous Region. He leads He led the establishment and development of the Gastroenterology Department's system at the People's Hospital of Xinjiang Uygur Autonomous Region. His expertise includes Complex and challenging digestive diseases, early-stage gastrointestinal tumors, therapeutic procedures under digestive endoscopy, celiac disease, inflammatory bowel disease. He was the first recipient from Xinjiang to receive the international endoscopy award "Endoscopy Prize - Digestive Endoscopy Award".</p>
      </div>
<!--      <h2>Latest Posts</h2>-->
      <hr/>
<!--      <div class="grid-3_xs-1_sm-2_md-2" v-if="posts.length">-->
<!--        <div-->
<!--          :key="index"-->
<!--          v-for="(post, index) in posts.slice(Math.max(posts.length - 6, 0)).reverse()"-->
<!--          class="col"-->
<!--        >-->
<!--          <PostCard :post="post" class="center" />-->
<!--        </div>-->
<!--      </div>-->
<!--      <Nothing v-else />-->
    </div>
  </div>
</template>

<script>
// import Avatar from '@/components/Avatar.vue'
// import PostCard from '@/components/PostCard.vue'
// import Nothing from '@/components/Nothing.vue'

export default {
  name: 'Home',
  components: {
    // Avatar
    // PostCard,
    // Nothing
  },
  data: function () {
    return {
      posts: this.getConfig('posts.json').posts,
      config: this.getConfig().config,
      showFooterBar: false
    }
  },
  mounted: function () {
    this.changeTitle('Home')
  }
}
</script>
