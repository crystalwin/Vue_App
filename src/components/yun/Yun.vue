<template>
    <div class="container">
        <div class="eyevideo">
            <video-player  class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :options="playerOptions"
                :playsinline="true"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
            ></video-player>
        </div>
        <div class="playlist">
            <ul>
                <li class="movilist" v-for="(val,index) in MVList" :key="index" @click="mvplay(val.playUrl,val.cover.homepage)">
                    <img :src="val.cover.homepage" class="oimg">
                    <div class="mvtitle">{{val.title}}
                        <div class="mvtime">#{{val.category}} {{(val.duration-val.duration%60)/60}}' {{val.duration%60}}''</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import {videoPlayer} from 'vue-video-player'
    import '../../../node_modules/video.js/dist/video-js.css'
    import '../../../node_modules/vue-video-player/src/custom-theme.css'
    import '../../../src/assets/myvideo.css'
    // import '../../../node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.js'
    export default {
        components: {
            videoPlayer
        },
        data(){
            return{
                MVList:[],
                mvsrc:'',
                mvphoto:'',
                playerOptions: {}
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods:{
            load(){
                axios.get(Vue.config.url+'http://baobab.kaiyanapp.com/api/v4/tabs/selected').then(res =>{
                    for(let i=0;i<res.data.itemList.length;i++){
                        if(res.data.itemList[i].type=='video'){
                            this.MVList.push(res.data.itemList[i].data);
                        }
                    }
                   this.playerOptions= {
                        muted: true,
                        language: 'zh-CN',
                        playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: "video/mp4",
                            src: this.MVList[0].playUrl
                        }],
                        poster: this.MVList[0].cover.homepage,
                    }
                    console.log(this.MVList);
                    }).catch(res => {
                });
            },
            mvplay(mvurl,mvphoto){
                 this.playerOptions= {
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: mvurl
                    }],
                    poster: mvphoto,
                }
            }
        },
        created(){
            this.load();
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        overflow: hidden;
    }
    .eyevideo{
        margin-top: 1rem;
        width: 100%;
        height: 4rem;
        position: fixed;
        top: 0rem;
    }
    .playlist{
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        margin-top: 5rem;
    }
    .movilist{
        height: 2rem;
        display: flex;
        flex-direction: row;
    }
    ul{
        padding: 0rem;
        margin:0rem;
    }
    li{
        list-style: none;
        border-bottom: 0.02rem solid #F3F3F3;
    }
    .oimg{
        margin: 0.12rem;
        height: 1.76rem;
        width: 2.2rem;
    }
    .mvtitle{
        padding-right: 0.12rem;
        display: flex;
        flex-direction: column;
        margin: 0.12rem 0rem;
    }
    .mvtime{
        font-size: 0.28rem;
        color:#838383;
        margin: 0.2rem 0rem;
    }
</style>