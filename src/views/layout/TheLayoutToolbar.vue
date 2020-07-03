<template>
<v-app-bar app>

     <v-app-bar-nav-icon v-if="!searchBar" @click.stop="toggleNavbar">
        <v-icon>{{ toggleNavbarIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <v-icon v-if="searchBar" @click="closeSearch">mdi-arrow-left</v-icon>
    <v-slide-x-transition>
      <autocomplete v-if="searchBar" />
    </v-slide-x-transition>

    <breadcrumbs v-if="!searchBar" />
    <v-spacer />
    <search-button v-if="!searchBar" />
    <full-screen v-if="!searchBar" />
    <notification v-if="!searchBar" />
    <profile v-if="!searchBar" />


</v-app-bar>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import Breadcrumbs from '../widget/AppBreadcrumbs.vue';
import FullScreen from '../widget/AppFullScreen.vue';
import Localization from '../widget/AppLocalization.vue';
import Notification from '../widget/AppNotification.vue';
import Autocomplete from '../widget/AppAutocomplete';
import SearchButton from '../widget/AppSearch';
import Profile from '../widget/AppProfile.vue';

export default {
    name: 'TheLayoutToolbar',
    data: () => ({}),
    components: {
        Breadcrumbs,
        FullScreen,
        Localization,
        Notification,
        Profile,
        Autocomplete,
        SearchButton
    },
    computed: {
        ...mapGetters([
            'toolbarDense',
            'navbarShow',
            'searchBar'
        ]),
        toggleNavbarIcon() {
            return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase';
        },
    },
    methods: {
        toggleNavbar() {
            this.$store.dispatch('NavbarToggle');
        },
        closeSearch() {
            this.$store.dispatch('SetSearchBar', false);
        },
    },
};
</script>
