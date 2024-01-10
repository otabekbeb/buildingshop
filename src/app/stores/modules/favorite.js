import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useFavoritesStore = defineStore('favorite', () => {
    const favorites = ref(
        JSON.parse(localStorage.getItem('favorites'))
    );
    const favoriteCount = computed(() => favorites?.value?.length ?? 0);

    const checkFavorite = (id) => favorites?.value?.findIndex(item => item.id === id) !== -1;

    const favoriteAdd = favorite => {
        favorites.value = [...favorites.value, favorite];
    };

    const favoriteUpdate = (favorite, id) => {
        const index = favorites.value?.findIndex(favorite => favorite.id === id);

        if (index === -1) return;

        favorites.value[index] = favorite;
    };

    const favoriteRemove = id => {
        const index = favorites.value?.findIndex(favorite => favorite.id === id);
        const oldFavorites = [...favorites.value];
        oldFavorites.splice(index, 1);

        favorites.value = oldFavorites;
    }

    const favoriteClear = () => {
        favorites.value = [];
    }

    watch(favorites, () => {
        const favoritesJson = JSON.stringify(favorites.value);
        localStorage.setItem('favorites', favoritesJson);
    });

    return { favorites, favoriteCount, checkFavorite, favoriteAdd, favoriteUpdate, favoriteRemove, favoriteClear };
});