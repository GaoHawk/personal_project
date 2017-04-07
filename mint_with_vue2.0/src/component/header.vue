<template>
  <mt-header title="TOp">
    <div slot="left" >
      <mt-button icon="back" @click.native="back"></mt-button>
    </div>
    <mt-button slot="right" icon="more"></mt-button>
  </mt-header>
</template>
<script>

  export default {
     data(){
        return {
           name:'Foo'
        }
     },
     methods:{
        back:function(){
           console.log(this);
           console.log('back')
           this.$router.go(-1);
           this.$parent.$parent.showHome = !this.$parent.$parent.showHome;
           sessionStorage.showHome = this.$parent.$parent.showHome;
        }
     }

  }
</script>
