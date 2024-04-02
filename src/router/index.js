import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/errors/NotFound.vue'
import Links from '../views/Links.vue'
import ViewResearch from '../views/ViewProjects.vue'
import ViewPublications from '../views/ViewPublications.vue'
import ViewAwards from '../views/ViewAwards.vue'

// import ViewPost from '../views/ViewPost.vue'
// import ViewTag from '../views/ViewTag.vue'
// import ViewTags from '../views/ViewTags.vue'
// import ViewProjects from '../views/ViewProjects.vue'
// import ViewPosts from '../views/ViewPosts.vue'
const children = []

let Posts = null
try {
  Posts = require('../../posts/data/posts.json1')
} catch (e) {
  Posts = require('@/defaults/posts.json')
}

Posts.posts.map(post => {
  children.push({
    path: post.id,
    component: async function () {
      let value
      await import(`@/../posts/${post.id}.md`).then((val) => {
        value = val
      })
      return value.vue.component
    }
  })
})
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/research',
    name: 'ViewResearch',
    component: ViewResearch
  },
  {
    path: '/pubs',
    name: 'ViewPublications',
    component: ViewPublications
  },
  {
    path: '/awards',
    name: 'ViewAwards',
    component: ViewAwards
  },
  // {
  //   path: '/posts',
  //   name: 'ViewPosts',
  //   component: ViewPosts
  // },
  // {
  //   path: '/posts',
  //   name: 'ViewPost',
  //   component: ViewPost,
  //   children: children
  // },
  // {
  //   path: '/tags/:tag',
  //   name: 'ViewTag',
  //   component: ViewTag
  // },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/tags',
  //   name: 'ViewTags',
  //   component: ViewTags
  // },
  // {
  //   path: '/projects',
  //   name: 'ViewProjects',
  //   component: ViewProjects
  // },

  {
    path: '/links',
    name: 'Links',
    component: Links
  },
  // {
  //   path: '/research',
  //   name: 'Research',
  //   component: Research
  // },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
