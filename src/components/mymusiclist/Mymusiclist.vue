<template>
    <div class="allbox">
        <div class="banner">
            <div class="imgbox">
                <!-- <transition name="fade"> -->
                <img v-for="(val,index) in images" :key="index" :src="val" v-if="index==nowindex">
                <!-- </transition> -->
            </div>
            <ul btnbox>
                <li v-for="(x,index) in images.length" :key="index" :class="{point:index==nowindex}" @click="change(index)"></li>
            </ul>
        </div><!--autoplay-->
        <aplayer  :list="musicList" v-if="isShow" :theme="'#DF4239'" 
            :music="musicList[0]"
        />
    </div>
</template>

<script>
    import CommonHeader from '@/components/common/Header'
    import Vue from 'vue'
    import axios from 'axios'
    import Aplayer from 'vue-aplayer'
    

    export default {
        components: {
            Aplayer
        },
        data(){
            return{
                musicList:[],
                isShow:false,
                nowindex:0,
                images:[
                    "http://p1.music.126.net/30kM62WMwdiav51re0F5pA==/109951163437422237.jpg",
                    "http://p1.music.126.net/8tlSzZjBTBGOSGuJDMrjoA==/109951163439399904.jpg",
                    "http://p1.music.126.net/QsSZB65FoSBDxoYg8J5s1Q==/109951163438191106.jpg",
                    "http://p1.music.126.net/VM-pl9x5IKoTGJW4r8v2sg==/109951163439404725.jpg",
                    "http://p1.music.126.net/YulcL_sTBI6RtgKRyuMwIQ==/109951163439399341.jpg"
                ],
            }
        },
        methods:{
            load(){
                axios.get(Vue.config.url+'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923').then(res =>{
                        res.data.songlist.forEach(obj => {
                            this.musicList.push({
                                src:'http://ws.stream.qqmusic.qq.com/C100'+obj.data.songmid+'.m4a?fromtag=0&guid=126548448',
                                title:obj.data.songname,
                                artist:obj.data.singer[0].name,
                                lrc:'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?callback=MusicJsonCallback_lrc&pcachetime=1494070301711&songmid='+obj.data.songmid+'&g_tk=5381&jsonpCallback=MusicJsonCallback_lrc&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8¬ice=0&platform=yqq&needNewCode=0',
                            });
                        });
                        this.isShow = true;
                        console.log(res.data.songlist);
                    }).catch(res => {
                });
            },
            change(oindex){
                this.nowindex=oindex;
            }
        },
        created(){
            this.load();
            setInterval(()=>{
                this.nowindex++;
                if(this.nowindex==this.images.length){
                    this.nowindex=0;
                }
            },2000)
        }
    }
</script>

<style scoped>
    .allbox{
        margin-top: 1.1rem;
    }
    .banner{
        width: 6.2rem;
        height: 3rem;
        background-color: #DF4239;
        margin: auto;
        border-radius: 0.12rem;
        position: relative;
    }
    .imgbox{
        width: 6.2rem;
        height: 3rem;
        position: relative;
    }
    .imgbox img{
        width: 6.2rem;
        border-radius: 0.12rem;
        position: absolute;
        left:0px;
        top:0px;
    }
    ul{
        margin: 0rem;
        padding: 0rem;
        position: absolute;
        bottom: 0.2rem;
        right: 0.1rem;
    }
    li{
        list-style: none;
        width: 0.16rem;
        height: 0.16rem;
        border-radius: 50%;
        background-color: #fff;
        float: left;
        opacity: 0.8;
        margin: 0.08rem;
    }
    .point{
        background-color: #DF4239;
    }
    /* .fade-enter{
        transform:translateX(100%);
    }
    .fade-enter-active, .fade-leave-active {
        transition: transform 1s;
    }
    .fade-leave, .fade-enter-to{
        transform:translateX(0);
    }
    .fade-leave-to{
        transform:translateX(-100%);
    } */
</style>