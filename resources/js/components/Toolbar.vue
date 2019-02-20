<template>
  <v-toolbar>
    <!--v-toolbar-side-icon></v-toolbar-side-icon-->
    <v-toolbar-title>Bitneurons</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn 
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        v-show="item.show" 
        flat>{{ item.title }}
      </v-btn>
      
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

  data() {
    return {
      items: [
        { title: 'Forum', to: '/forum', show: true },
        { title: 'Ask Question', to: '/ask', show: User.loggedIn() },
        { title: 'Category', to: '/category', show: User.admin() },
        { title: 'Login', to: '/login', show: !User.loggedIn() },
        { title: 'Logout', to: '/logout', show: User.loggedIn() },
      ]
    }
  },

  created() {
    EventBus.$on('logout', () => {
      User.logout()
    })
  }

}
</script>