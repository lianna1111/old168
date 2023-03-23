import { createRouter, createWebHistory } from "vue-router";
import index from "../components/index.vue"
import about from "../components/about.vue"
import contact from '../components/contact.vue'
import dance from '../components/dance.vue'
import search from '../components/search.vue'
import edu from '../components/edu.vue'
import game from '../components/game.vue'
import news from '../components/news.vue'

import certificate from '../components/cert/certificate.vue'
import examiner from '../components/cert/examiner.vue'
import Registered from '../components/cert/Registered.vue'
import review from '../components/cert/review.vue'
import teacher from '../components/cert/teacher.vue'

import category from '../components/news/category.vue'
import GameNews from '../components/news/GameNews.vue'
import mainProduce from '../components/news/mainProduce.vue'

import ab1 from '../components/about/ab1.vue'
import ab2 from '../components/about/ab2.vue'
import ab3 from '../components/about/ab3.vue'
import ab4 from '../components/about/ab4.vue'
import ab5 from '../components/about/ab5.vue'

import produce from '../components/game/produce.vue'
import links from '../components/game/links.vue'
import amazing from '../components/game/amazing.vue'
import audios from '../components/game/audios.vue'
import download from '../components/game/download.vue'

import latinVideo from '../components/edu/latinVideo.vue'
import folkVideo from '../components/edu/folkVideo.vue'
import hiphopVideo from '../components/edu/hiphopVideo.vue'

import music from '../components/edu/music.vue'
import introduce from '../components/edu/introduce.vue'

import classic from '../components/dance/classic.vue'
import Folk from '../components/dance/Folk.vue'
import Hiphop from '../components/dance/Hiphop.vue'
import Belly from '../components/dance/Belly.vue'
import Latin from '../components/dance/Latin.vue'
import modern from '../components/dance/modern.vue'
import Sasabu from '../components/dance/Sasabu.vue'
import yoga from '../components/dance/yoga.vue'
import Ballet from '../components/dance/Ballet.vue'
import tap from '../components/dance/tap.vue'
import Cheerleading from '../components/dance/Cheerleading.vue'
import Artistic from '../components/dance/Artistic.vue'
import Jazz from '../components/dance/Jazz.vue'
import Pole from '../components/dance/Pole.vue'

import newsDetail from '../components/news/newsDetail.vue'
import ArticleDetail from '../components/ArticleDetail.vue'

import health from '../components/health.vue'
import photoDetail from '../components/photoDetail.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        // const routes = [
        { path: '/', name: "index", component: index },

        {
        path: '/about', component: about, redirect: '/about/ab1',
            children: [
                { path: 'ab1', component: ab1, name: "ab1" },
                { path: 'ab2', component: ab2, name: "ab2" },
                { path: 'ab3', component: ab3, name: "ab3" },
                { path: 'ab4', component: ab4, name: "ab4" },
                { path: 'ab5', component: ab5, name: "ab5" },
            ]
        },
        {
            path: '/contact',
            component: contact,
        },
        {
            path: '/dance',
            component: dance,
            redirect: '/dance/classic',
            children: [
                { path: 'classic', component: classic, name: "classic" },
                { path: 'Latin', component: Latin, name: "Latin" },
                { path: 'Hiphop', component: Hiphop, name: "Hiphop" },
                { path: 'Belly', component: Belly, name: "Belly" },
                { path: 'modern', component: modern, name: "modern" },
                { path: 'Sasabu', component: Sasabu, name: "Sasabu" },
                { path: 'yoga', component: yoga, name: "yoga" },
                { path: 'Ballet', component: Ballet, name: "Ballet" },
                { path: 'Folk', component: Folk, name: "Folk" },
                { path: 'tap', component: tap, name: "tap" },
                { path: 'Cheerleading', component: Cheerleading, name: "Cheerleading" },
                { path: 'Artistic', component: Artistic, name: "Artistic" },
                { path: 'Jazz', component: Jazz, name: "Jazz" },
                { path: 'Pole', component: Pole, name: "Pole" },
            ]
        },
        {
            path: '/search',
            component: search,
            redirect: '/search/certificate',
            children: [
                { path: '', component: certificate, name: "certificate" },
                { path: 'certificate', component: certificate, name: "certificate", },
                { path: 'examiner', component: examiner, name: "examiner", },
                { path: 'Registered', component: Registered, name: "Registered", },
                { path: 'review', component: review, name: "review", },
                { path: 'teacher', component: teacher, name: "teacher", }
            ]
        },
        {
            path: '/edu',
            component: edu,
            redirect: '/edu/latinVideo',
            children: [
                { path: 'latinVideo', component: latinVideo, name: "latinVideo" },
                { path: 'folkVideo', component: folkVideo, name: "folkVideo" },
                { path: 'hiphopVideo', component: hiphopVideo, name: "hiphopVideo" },
                { path: 'music', component: music, name: "music" },
                { path: 'introduce', component: introduce, name: "introduce" },
            ]
        },
        {
            path: '/game',
            component: game,
            redirect: '/game/produce',
            children: [
                { path: 'produce', component: produce, name: "produce" },
                { path: 'links', component: links, name: "links" },
                { path: 'download', component: download, name: "download" },
                { path: 'audios', component: audios, name: "audios" },
                { path: 'amazing', component: amazing, name: "amazing" },
            ]
        },
        {
            path: '/news',
            component: news,
            redirect: '/news/category',
            children: [
                { path: 'category', component: category, name: "category" },
                { path: 'GameNews', component: GameNews, name: "GameNews" },
                { path: 'mainProduce', component: mainProduce, name: "mainProduce" }
            ]
        },
        { path: '/newsDetail', component: newsDetail, name: "newsDetail" },
        { path: '/ArticleDetail', component: ArticleDetail, name: "ArticleDetail" },
        { path: '/health', component: health, name: "health" },
        { path: '/photoDetail', component: photoDetail, name: "photoDetail" },




    ]
})

// ];
// const router = createRouter({
//     history: createWebHistory(),
//     routes: routes
// });
export default router