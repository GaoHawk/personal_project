<template>
<div class="template">
  <child></child>
 Foo</div>
</template>
<script>
import Header from './header.vue'
export default {
   data(){
      return {
         name:'Foo'
      }
   },
   components:{
       'child':Header
   }
}
</script>
