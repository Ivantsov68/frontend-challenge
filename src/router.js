import { createRouter, createWebHistory } from 'vue-router'
import AllCats from '@/components/AllCats'
import LikeCats from '@/components/LikeCats'

const routes = [
    {
        path: '/frontend-challenge/',
        name: 'AllCats',
        component: AllCats
    },
    {
        path: '/frontend-challenge/like-cats',
        name: 'LikeCats',
        component: LikeCats,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router