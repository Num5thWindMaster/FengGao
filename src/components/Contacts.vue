<template>
  <div class="container" style="margin-top: 100px">
<!--    <h2 class="text-center">-->
<!--      Feng Gao, Ph.D-->
<!--    </h2>-->
    <div class="grid-3_xs-1_sm-2_md-2" v-if="contacts.length">
<!--      <div-->
<!--        v-for="(contact, index) in contacts"-->
<!--        :key="index"-->
<!--        class="col"-->
<!--      >-->
<!--        <a :href="contact.link" target="_blank">-->
<!--          <vs-card-->
<!--            type="3"-->
<!--            class="center"-->
<!--          >-->
<!--            <template #title>-->
<!--              <h3>{{ contact.name }}</h3>-->
<!--            </template>-->
<!--            <template #text>-->
<!--              <p>-->
<!--                {{ contact.value }}-->
<!--              </p>-->
<!--            </template>-->
<!--          </vs-card>-->
<!--        </a>-->
<!--      </div>-->
<!--      <h3 align="left">-->
<!--        Feng Gao, Ph.D-->
<!--      </h3>-->
<!--      <br><br><br><br>-->
      <div>
        <p style="font-size: 1.5em;font-weight: bold">Feng Gao, Ph.D</p>
        <p>Address: People's Hospital of Xinjiang Uygur Autonomous Region, No. 91, Tianchi Road, Tianshan District, Urumqi 830001, Xinjiang, China.</p>
        <p>Mobile: +86 13009698851</p>
        <p>E-mail: gf8851@gmail.com</p>
      </div>
    </div>
    <Nothing />
  </div>
</template>

<script>
import Nothing from '@/components/Nothing.vue'

export default {
  name: 'Contacts',
  computed: {
    contacts: function () {
      return this.getConfig().contacts
    }
  },
  components: {
    Nothing
  }
}
</script>
