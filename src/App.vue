<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="fas fa-bars"
        />

        <q-toolbar-title>
        LAHOOT לחות - להזיע מול המסך
        </q-toolbar-title>

        <p style="color: black"> {{displayName}}</p>
        <q-btn @click="login()" color="blue">התחבר</q-btn>
        <q-btn @click="logout()" color="red">התנתק</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item>

        <q-item-section>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import firebaseInstance from './middleware/firebase'

export default {
  name: 'LayoutDefault',

  data () {
    return {
      leftDrawerOpen: false,
      userId:'',
      displayName:''
    }
  },
  methods:{
    login() {
      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      firebaseInstance.firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            window.user = result.user;
            this.userId = window.user.uid;
            this.$router.push(`/user/${this.userId}`);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
          })
    },
    logout() {
      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      firebaseInstance.firebase.auth()
          .signOut()
          .then(() =>{
            this.userId = false;
            this.$router.push(`/`)
          })


    }

  },
  created() {
    if (window.user.uid) {
      this.userId = window.user.uid;
      this.$router.push(`/user/${this.userId}/`)
      this.displayName = window.user.displayName
    }

  }
}
</script>

<style>
</style>
