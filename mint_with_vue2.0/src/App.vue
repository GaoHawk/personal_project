<template>
  <div id="app">
    <section class="page-demo" v-show="showHome">
      <div v-for="group in navs">
        <mt-cell
           v-html="group.name" @click.native="goRoute(group)">

        </mt-cell>
      </div>
    </section>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navs:[{name:'Foo',path:'/foo'},{name:'Bar',path:'/bar'},{name:'Toast',path:'/toast'}],
      showHome:sessionStorage.showHome == undefined?true:eval(sessionStorage.showHome)
    }
  },
  methods:{
      goRoute:function(item){
          console.log(item);
          this.showHome = !this.showHome;
          sessionStorage.showHome = this.showHome;
          console.log(this);
          this.$router.push({ path: item.path });
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* margin-top: 60px; */
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
