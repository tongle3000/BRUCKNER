<script setup lang="ts">
    import Thickness from './Thickness.vue';
    import Ruler from '../../components/Ruler.vue';
    import ProfileScale from '../../components/ProfileScale.vue';
    import { ref, onMounted, computed } from 'vue';
    defineProps({data: Object});
    const width = computed(() => {
        return document.getElementById('profile').width.animVal.value;
    });
    onMounted(() => {
        console.log('-------------------------------------999999',
        document.getElementById('profile').width.animVal)
    })

</script>

<template>
    <svg id="profile" ref="svg" simplified>
        <defs>
            <clipPath id="contentClip">
                <rect x="0" y="0" width="100%" height="243" />
            </clipPath>
        </defs>
        <Thickness clipPath="url(#contentClip)" :data="data" />
        <ProfileScale />
        <Ruler :data="data" />
        <g class="dieboltIndicator" />
    </svg>
</template>
<style lang="less" scoped>
#profile {
    width: calc(100% + 1px);
    height: calc(100% - 60px);
    background-color: #fff;
}
</style>

