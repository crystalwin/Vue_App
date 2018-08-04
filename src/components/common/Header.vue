<template>
    <div class="headbox">
        <div class="otitle">{{title}}</div>
        <div class="leftbox">
            <ul class="buttonbox">
                <router-link to="/mymusiclist/Mymusiclist"><li :class="{'mine':isA,'mine1':isB}" @click="change1()"></li></router-link>
                <router-link to="/yun/Yun"><li :class="{'yun':isC,'yun1':isD}" @click="change2()"></li></router-link>
                <router-link to="/movielist/Movielist"><li :class="{'movie':isE,'movie1':isF}" @click="change3()"></li></router-link>
            </ul>
        </div>
        <div class="otitle otitle2"></div>
    </div>
</template>/

<script>
    export default {
        props:['sign'],
        data(){
            return{
                title:'音乐',
                isA:false,
                isB:true,
                isC:true,
                isD:false,
                isE:true,
                isF:false
            }
        },
        methods:{
            change1(){
                this.title='音乐',
                this.isA=false;
                this.isB=true;
                this.isC=true;
                this.isD=false;
                this.isE=true;
                this.isF=false;
            },
            change2(){
                this.title='视频',
                this.isA=true;
                this.isB=false;
                this.isC=false;
                this.isD=true;
                this.isE=true;
                this.isF=false;
            },
            change3(){
                this.title='电影',
                this.isA=true;
                this.isB=false;
                this.isC=true;
                this.isD=false;
                this.isE=false;
                this.isF=true;
            }
        }
    }
</script>

<style scoped>
    ul{
        padding: 0px;
        margin: 0px;
    }
    li{
        list-style: none;
        float: left;
        width: 1rem;
        height: 1rem;
    }
    .headbox{
        width: 100%;
        height: 1rem;
        background-color: #DF4239;
        color: #fff;
        display: flex;
        position: fixed;
        top: 0rem;
        z-index: 1;
    }
    .otitle{
        height: 1rem;
        width: 1rem;
        line-height: 1rem;
        color: #fff;
        text-indent: 0.2rem;
        float: left;
    }
    .leftbox{
        flex-grow: 1;
    }
    .buttonbox{
        width: 3.6rem;
        overflow: hidden;
        margin: 0 auto;
    }
    .mine,.yun{
        margin-right: 0.2rem;
    }
    .mine1,.yun1{
        margin-right: 0.2rem;
    }
    .mine{
        background-image: url('../../assets/music.png');
        background-repeat: no-repeat;
        background-size: 0.5rem 0.5rem;
        background-position: 0.25rem 0.25rem;
    }
    .yun{
        background-image: url('../../assets/yun.png');
        background-repeat: no-repeat;
        background-size: 0.5rem 0.5rem;
        background-position: 0.25rem 0.25rem;
    }
    .movie{
        background-image: url('../../assets/movie.png');
        background-repeat: no-repeat;
        background-size: 0.5rem 0.6rem;
        background-position: 0.25rem 0.2rem;
    }
    .mine1{
        background-image: url('../../assets/music2.png');
        background-repeat: no-repeat;
        background-size: 0.5rem 0.5rem;
        background-position: 0.25rem 0.25rem;
    }
    .yun1{
        background-image: url('../../assets/yun2.png');
        background-repeat: no-repeat;
        background-size: 0.5rem 0.5rem;
        background-position: 0.25rem 0.25rem;
    }
    .movie1{
        background-image: url('../../assets/movie2.png');
        background-repeat: no-repeat;
        background-size: 0.5rem 0.6rem;
        background-position: 0.25rem 0.2rem;
    }
    .otitle2{
        background-image: url('../../assets/search.png');
        background-repeat: no-repeat;
        background-size: 0.5rem 0.5rem;
        background-position: 0.25rem 0.25rem;
    }
</style>