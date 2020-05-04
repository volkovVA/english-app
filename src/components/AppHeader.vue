<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item,i) in menuItems" :key="`navdrawer${i}`">
            <v-icon class="mr-5" v-html="item.icon"></v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark class="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'I Learn English'"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="(item, i) in menuItems" :key="i" :to="item.route" text>
            <v-icon left v-html="item.icon"></v-icon>
            {{ item.title }}
          </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    menuItems() {
      return [
        {
          icon: 'visibility',
          title: 'Читать',
          route: '/books',
        },
        {
          icon: 'extension',
          title: 'Учить слова',
          route: '/words',
        },
        {
          icon: 'account_circle',
          title: 'Мой кабинет',
          route: '/profile',
        },
        {
          icon: 'exit_to_app',
          title: 'Выйти',
          route: '/logout',
        },
        {
          icon: 'input',
          title: 'Войти',
          route: '/sign',
        },
        {
          icon: 'lock_open',
          title: 'Зарегистрироваться',
          route: '/signup',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>