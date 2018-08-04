<template>
    <div class="bigbox">
            <div class='box' v-for="(val,index) in movielist2" :key="index">
                <router-link :to="{name:'Movielise',params:{omovielist:movielist[index].id}}" >
                <div class="oimg">
                    <img :src="val.img">
                </div>
                <div class="intro">
                    <p class="title">{{val.tCn}}</p>
                    <p class="test">{{val.movieType}}<br> {{val.aN1}} {{val.aN2}}</p>
                    <p class="test t2">{{val.commonSpecial}}</p>
                </div>
                </router-link>
            </div>
        <div class="imgbox">
            <img src="@/assets/loading.gif" alt="" v-show="isShow">
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        data(){
            return{
                movielist:[],
                movielist2:[],
                target:10,
                isShow:false
            }
        },
        methods:{
            load(otarget){
                axios.get(Vue.config.url+'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290').then(res =>{
                        this.movielist = res.data.ms;
                        this.movielist2=this.movielist.slice(0,otarget)
                        console.log(this.movielist2);
                    }).catch(res => {
                });
            },
            details(index){
                console.log(index);
            }
        },
        created() {
            this.load(this.target);
            window.onscroll=()=>{
                let scrilltop=document.documentElement.scrollTop||document.body.scrollTop;
                let clientHeight=document.documentElement.clientHeight;
                let height=document.documentElement.scrollHeight;
                if(scrilltop+clientHeight==height){
                    if(this.target>=this.movielist.length){
                        this.isShow = false;
                        this.target=this.movielist.length;
                    }else{
                        this.isShow = true;
                        this.target+=10;
                        this.load(this.target);
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .bigbox{
        width: 100%;
        overflow: hidden;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 0.32rem;
    }
    .title{
        margin: 0px;
        padding: 0px;
    }
    .box{
        height: 2rem;
        margin: 0.2rem;
        border-bottom: 0.02rem solid #F3F3F3;
        display: flex;
    }
    .oimg{
        width: 1.6rem;
        height: 2rem;
        margin-right: 0.2rem;
        float: left;
    }
    .oimg img{
        width: 1.6rem;
        height: 2rem;
    }
    .test{
        font-size: 0.28rem;
        color: #838383;
        margin: 0.1rem 0rem;
        overflow: hidden;
    }
    .t2{
        margin: 0px;
        padding: 0px;
    }
    .imgbox img{
        display: block;
        margin: auto;
    }
    a{
        width: 100%;
        text-decoration: none;
        color: #000;
    }
</style>