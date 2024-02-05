<script setup>
import AsideNav from '@/components/AsideNav/AsideNav.vue';
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import ProductsCatalog from '@/components/ProductsCatalog/ProductsCatalog.vue';
import ProductsViewed from '@/components/ProductsViewed/ProductsViewed.vue';
import Partners from '@/components/Partners/Partners.vue';
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';
import { ROUTES } from '@/app/router/helper';
import { useCategoriesStore } from '@/app/stores/modules/category'
import { useRoute } from 'vue-router';

const route = useRoute();

const categoryStore = useCategoriesStore();
const { currentCategory, currentCategoryWithPath } = categoryStore;
</script>

<style>
    #col-9-h1A {
        font-size: 12px;
        font-weight: 600;
        color: #000;
    }

    #col-9-h1A span {
        color: red;
    }

    #col-9-h1A span:hover {
        text-decoration: underline;
    }
</style>

<template>
    <LayoutDefault>
        <div class="text_page fav catalog">
            <div class="container row">
                <AsideNav />
                <div class="col-9 col-sm-12">
                    <p class="col-9-pA"><a href="/" id="col-9-h1A">Главная страница</a> > <a href="/" id="col-9-h1A">КАТАЛОГ СТРОЙМАТЕРИАЛОВ</a> > <a href="/" id="col-9-h1A">СТРОЙМАТЕРИАЛЫ</a> > <a href="/" id="col-9-h1A"><span>ИЗОЛЯЦИОННЫЕ МАТЕРИАЛЫ</span></a></p>
                    <div class="text_page_top">
                        <h1>{{ currentCategory(route.params?.id)?.name }}</h1>
                        <Bradscubs :bradscubs="currentCategoryWithPath(route.params?.id)" />
                    </div>
                    <div v-if="currentCategory(route.params?.id)?.subCategories" class="subsection row">
                        <RouterLink v-for="category in currentCategory(route.params?.id)?.subCategories" @key="category.id"
                            class="subsection_item" :to="ROUTES.catalog + '/' + category.id">{{ category.name }}
                        </RouterLink>
                    </div>
                    <ProductsCatalog :catalogId="route.params?.id" />
                 <div class="catalog_b_inf">
                <div class="container row">
               
                <div class="col-9 col-sm-12">
                    <ProductsViewed />
                 </div>
            </div>
        </div>
                </div>
            </div>
        </div>
       
        <Partners></Partners>
    </LayoutDefault>
</template>