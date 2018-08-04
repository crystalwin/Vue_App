<template>
    <div class="obox">
        <img :src="movielist.img" class="top">
        <div class="zhezhao"></div>
        <div class="bottombox">
           <div class="jianjie">  {{movielist.story}}</div>
        </div>
        <div class="topbox">
                <img :src="movielist.img" class="banner">
                <div class="leftbox">
                    <p class="titke">{{movielist.name}}<br><span class="eng">{{movielist.nameEn}}</span></p>
                    <!-- <span class="eng">{{movielist.nameEn}}</span> -->
                    <div class="score">{{movielist.overallRating}}</div>
                    <p class="otitle">
                        <span>{{movielist.mins}}<br></span>
                        <span v-for="(val,index) in movielist.type" :key="index">{{val}} </span>
                        <br>
                        <span>{{movielist.releaseDate}} {{movielist.releaseArea}}上映</span>
                    </p>
                </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        data(){
            return{
                omovie:0,
                movielist:{},
            }
        },
        methods:{
            load(otarget){
                axios.get(Vue.config.url+'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId='+otarget).then(res =>{
                        this.movielist = res.data.data.basic;
                        console.log(this.movielist);
                    }).catch(res => {
                });
            },
        },
        created(){
            this.omovie=this.$route.params.omovielist
            console.log(this.omovie);
            this.load(this.omovie);
        }
    }
</script>

<style scoped>
    .obox{
        margin-top: 1rem;
        width: 100%;
        overflow: hidden;
        z-index: 1;
    }
    .top{
        width: 100%;
        display:block;
        position: absolute;
        top: 1rem;
    }
    .zhezhao{
        width: 100%;
        height: 2.6rem;
        background-color: #000;
        opacity: .6;
        position: absolute;
        top: 1rem;
        z-index: 1;
    }
    .bottombox{
        width: 100%;
        height: 8rem;
        background-color:#fff;
        overflow: hidden;
        position: absolute;
        top: 3.5rem;
        z-index: 10;

    }
    .topbox{
        overflow: hidden;
        margin-left: 0.2rem;
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 1.9rem;
        z-index: 20;
    }
    .leftbox{
        margin-left: 0.2rem;
    }
    .banner{
        width: 2.44rem;
        height: 3.64rem;
        border: 0.08rem solid #fff;
    }
    .titke{
        /* margin-bottom: 0rem; */
        font-size: 0.36rem;
        font-weight: 700;
        color: #fff;
    }
    .eng{
        font-size: 0.28rem;
        color: #fff;
    }
    .score{
        width: 0.7rem;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
        color: #fff;
        background-color: #DF4239;
        margin:0.12rem 0rem;
    }
    .otitle{
        font-size: 0.24rem;
        margin-top: 0rem;
    }
    .jianjie{
        padding: 0.2rem;
        position: relative;
        top: 2.2rem;
    }
</style>