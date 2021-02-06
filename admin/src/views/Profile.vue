<template>
  <div>
    <h2>Profile</h2>
    <p>Name: {{ user.name }}</p>
    <br>
    <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="logout()">Logout</button>

  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
    name: 'Profile',
    data() {    
        return {    
            user: {    
                name: ''    
            }    
        }    
    },
    methods: {    
        getUserData: function() {    
            let self = this;
            axios.get("http://localhost:3500/api/user", { withCredentials: true }).then((response) => {    
                console.log(response);
                this.logged = true; 
                //console.log(this.logged);
                self.$set(this, "user", response.data.user);
            }).catch((errors) => {    
                console.log(errors);    
                router.push("/");    
            })    
        },
        logout: function(){
            axios.get("http://localhost:3500/api/logout", { withCredentials: true }).then((response) => {
                this.$set(this, "user", "");
                console.log(response.data);
                this.logged = false;  
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