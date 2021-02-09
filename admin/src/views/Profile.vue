<template>
  <div>
    <chat @hideChat="chatActive = !chatActive" v-show="chatActive" :slideOver="chatActive" :adminName="adminName"></chat>
    <h2>Profile</h2>
    <p>Name: {{ user.name }}</p>
    <br />
    <button
      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="logout()"
    >
      Logout
    </button>
    <div class="inline-flex rounded-md shadow ml-1 z-40">
      <a
        href="#"
        @click="chatActive = !chatActive"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Chat
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import chat from '../components/Chat.vue'
export default {
    name: 'Profile',
    components: {
        chat
    },
    data() {    
        return {    
            user: {    
                name: '',    
            },
            chatActive: false,
            adminName: ''    
        }    
    },
    methods: {
        getUserData: function() {    
            let self = this;
            axios.get("http://localhost:3500/api/user", { withCredentials: true }).then((response) => {    
                //console.log(response);
                this.logged = true; 
                //console.log(this.logged);
                self.$set(this, "user", response.data.user);
                this.adminName = response.data.user.username;
            }).catch((errors) => {    
                console.log(errors);    
                router.push("/");    
            })    
        },
        logout: function(){
            axios.get("http://localhost:3500/api/logout", { withCredentials: true }).then((response) => {
                this.$set(this, "user", "");
                console.log(response.data);
                this.$emit("logout");  
                router.push('/');
            }).catch((errors) =>{
                console.log(errors);
            });
        }    
    },
    mounted() {    
        this.getUserData();  
    },
    props: {
        logged: Boolean
    }
    
}
</script>