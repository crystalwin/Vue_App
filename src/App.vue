<template>
  <div id="app">
    <common-header :sign="str"></common-header>
    <router-view/>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
export default {
  name: 'App',
  components:{
    CommonHeader,
  },
  data(){
    return{
      str:''
    }
  },
  created () {
    let url=this.$route.path;
    this.str=url.split('/')[1];
    if(this.str=="mymusiclist"){
      this.str='我的';
    }
    else if(this.str=="yun"){
      this.str='排行';
    }
    else{
      this.str='电影';
    }
  }
}
</script>

<style>
body{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  font-size: 0.32rem;
}
</style>
