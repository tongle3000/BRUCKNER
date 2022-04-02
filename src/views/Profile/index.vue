<script setup lang="ts">
    import Thickness from './Thickness.vue';
    import Ruler from '../../components/Ruler.vue';
    // import ProfileScale from '../../components/ProfileScale.vue';
    import { reactive, onMounted, computed } from 'vue';
    defineProps({data: Object, fillColor: String});
    const svgSize: any = reactive({
        width: 1000,
        height: 243
    })
    
    onMounted(() => {
        svgSize.width = document.getElementById('profile')?.clientWidth;
        svgSize.height = document.getElementById('profile')?.clientHeight;
        console.log('000000000000', document.getElementById('profile')?.clientHeight)
    })

</script>

<template>
    <svg id="profile" simplified>
        <defs>
            <clipPath id="contentClip">
                <rect x="0" y="0" width="100%" height="243" />
            </clipPath>
        </defs>
        <!-- 厚度svg -->
        <Thickness
            clipPath="url(#contentClip)"
            :data="data"
            :fillColor="fillColor"
            :svgSize="svgSize"
        />

        <!-- 薄膜 高度25 -->
        <!-- <ProfileScale :svgSize="svgSize" /> -->

        <!-- 移动尺子 -->
        <Ruler :data="data" :svgSize="svgSize" />
        <g class="dieboltIndicator" />
    </svg>
</template>
<style lang="less" scoped>
#profile {
    width: calc(100% + 1px);
    height: calc(100% - 32px);
    background-color: #fff;
}
</style>

