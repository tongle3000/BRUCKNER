<script lang="ts" setup>
import { reactive, computed, onMounted } from 'vue';
const props = defineProps({
    data: Object,
    clipPath: String,
    fillColor: String,
    svgSize: Object
});

const obj: { defaultNum: number, space: number } = reactive({
    defaultNum: 121.5, // 121.5,
    space: 1
});
const firstX = 75; // 起始x坐标

const slices = computed(() => {
    const data = props.data?.slices;
    if(!data || !props.svgSize) return; // 可能还没拿到数据，所以要先判断下；
    const length = props.data?.slices.length;
    const oneSliceWidth = (props.svgSize.width- firstX) / length; // props.svgWidth-75 为svg的宽度；1个数据占多少像素
    const firstY = 16.5682 ; // 200 5   243 x (初始y站2.5格)
    const referenceValue = props.data?.referenceValue;
    const startValue = referenceValue - obj.space;
    const endValue = referenceValue + obj.space;
    const middleValue = (referenceValue - startValue) * obj.defaultNum;

    // 数据变化放大缩小 querySelector, querySelectorAll
    // const dom = document.querySelectorAll('.thicknessProfile, .tolerance');
    // if(dom.length !== 0) {
    //     for (let i = 0; i < dom.length; i++) {
    //         dom[i].setAttribute('transform', `scaleY(${obj.space}); translateY(${-121.5 * obj.space + 121.5}px)`);
    //     }
    // }
    // ?.setAttribute('transform', `scale(1, ${obj.space})`);

    let totalStr='', lineStr='', bgStr = '';

    for (let i = 0; i < length * 2; i++) {
        // 创建svg值的曲线图；
        if(i < length) {
            const space = 'L' +(firstX + (i+1) * oneSliceWidth);
            // 左上角坐标为 0，0
            // 用 item.value - startValue 刚好和坐标匹配；
            // 用 endValue - item.value 值刚好相反，相当于以左下角为（0，0）坐标；
            const newValue = (endValue - data[i].value) * obj.defaultNum;

            // 大于830/2 -1 = 414时, // 下面空格 , 都可以
            const str = ',' + newValue + space;

            totalStr = totalStr.concat(str+str);

            lineStr = lineStr.concat(','+ middleValue + space + ','+ middleValue + space)
        } else { // 循环数组长度 填中间的值，闭合svg;
            const space = 'L' + (firstX + (length * 2 - i - 1) * oneSliceWidth);
            let str = ','+ middleValue + space;
            // 最后一个 不用再加 L和后面的值；
            const itemStr = i !== length*2 - 1 ? str + str : str + ','+ middleValue; 
            totalStr = totalStr.concat(itemStr);
            lineStr = lineStr.concat(itemStr)
        }
    }
    
    bgStr = `M${firstX} ${firstY} H ${props.svgSize.width} V ${props.svgSize.height-43} H ${firstX} Z`;

    return {
        area: 'M' + firstX + totalStr + 'Z',
        line: 'M' + firstX + lineStr + 'Z',
        bgStr
    };
})

</script>
<template>
    <!-- 淡绿色背景 -->
    <g class="tolerance">
        <g class="area" :clip-path="clipPath">
            <path class="area" shape-rendering="crispEdges" :d='slices?.bgStr'></path>
        </g>
    </g>
    <!-- 停机或数据超出 红色 -->
    <g class="thicknessProfile">
        <g class="area" style='fill: #e40b28' :clip-path="clipPath">
            <path class="area" shape-rendering="crispEdges" :d='slices?.area'></path>
        </g>
    </g>
    <!-- 标准 绿色 -->
    <g class="normalizedThicknessProfile">
        <g class="area" :style='`fill: ${fillColor}`' :clip-path="clipPath">
            <path class="area" shape-rendering="crispEdges" :d='slices?.area'></path>
        </g>
        <g class="line" :style='`fill: ${fillColor}`' :clip-path="clipPath">
            <path class="line" shape-rendering="crispEdges" :d='slices?.line'></path>
        </g>
    </g>

</template>
<style lang="less">

.tolerance path {
    fill: #2ad402;
    opacity: 0.1;
}
.thicknessProfile {
    --color: #e40b28;
    color: var(--color);
    fill: var(--color);
}

#div1 {
  background-color: var(--main-bg-color);
  color: var(--main-txt-color);  
  padding: var(--main-padding);
}

#div2 {
  background-color: var(--main-bg-color);
  color: var(--main-txt-color);
  padding: var(--main-padding);
}

#div3 {
  background-color: var(--main-bg-color);
  color: var(--main-txt-color);
  padding: var(--main-padding);
}
</style>