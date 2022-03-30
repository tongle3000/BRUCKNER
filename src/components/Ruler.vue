<script lang="ts" setup>
import { reactive, computed, onMounted } from 'vue';
import { dragX } from '../utils/common';
// const props = defineProps({data: Object});
const props = defineProps({data: Object});
// interface IObj {
//     aggregatedAverage: number,
//     aggregatedMaximum: number,
//     aggregatedMinimum: number,
//     aggregatedSigma2: number,
//     aggregatedSigma2Percent: number,
//     meterCount: number,
//     referenceValue: number,
// }
// const obj: IObj = reactive({
//     aggregatedAverage: 19.828794479370117,
//     aggregatedMaximum: 20.571441650390625,
//     aggregatedMinimum: 19.008708953857422,
//     aggregatedSigma2: 0.40464022755622864,
//     aggregatedSigma2Percent: 2.0406698348566596,
//     meterCount: 4949,
//     referenceValue: 19.9,
// });


// 高度243px  46格
// 0.5 10个，一个0.05μm
// 尺子上下限是23格*0.05=1.15μm,  共46格 * 0.05 =2.30μm
// 画2个同样的svg, 绿色 svg 上下限是10格 1μm； 红色svg 上下无限制；value 差值超过上下限1μm，红色svg会超出显示，同时尺子的限值得加上超出的值；
const rulerConst: { space: number,default:number,rulerLeft: number, maxWidth:number } = reactive({
    space: 0.05,
    default: 20, // 或超出的值
    rulerLeft: 62,
    maxWidth: 1180
})
const rulerLeft:number = 62;

const rulerArr = computed(() =>{
    if(!props.data) return;
    const average: number = props.data.aggregatedAverage;

    const topNum = average + (rulerConst.default + 3) * rulerConst.space;
    const endNum = average- (rulerConst.default + 3) * rulerConst.space;
    const newArr = [];
    for (let i = endNum; i <= topNum; i = i + rulerConst.space) {
        newArr.push(i)
    }
    console.log('newArr',endNum, newArr)
    return newArr;
})

</script>
<template>
    <g class="measurements">
            <g class="diebolts hidden" />
            <g class="normalizedThicknessProfile">
                <g :style="{transform: `translateX(${rulerConst.rulerLeft}px)`}" style="fill: rgb(85, 85, 85);">
                    <path
                        class="measurment-scale-drag"
                        d="M-62,244 c 0 0 0 3 0 10 c 6.6 6.4 54 6.4 62 0 c 0 -7 0 -10 0 -10 H 0 z"
                        style="stroke: rgb(85, 85, 85);"
                        @mousedown="dragX($event, rulerConst, rulerLeft)"
                    />
                    <g class="decoration">
                        <rect
                            x="-31"
                            y="247"
                            width="1"
                            height="8"
                            class="decoratorLine middle"
                            fill="white"
                            style="pointer-events: none"
                        />
                        <rect
                            x="-34"
                            y="247"
                            width="1"
                            height="8"
                            class="decoratorLine left"
                            fill="white"
                            style="pointer-events: none"
                        />
                        <rect
                            x="-28"
                            y="247"
                            width="1"
                            height="8"
                            class="decoratorLine right"
                            fill="white"
                            style="pointer-events: none"
                        />
                    </g>
                    <g
                        class="measurment-scale"
                        fill="none"
                        font-size="10"
                        font-family="sans-serif"
                        text-anchor="start"
                        style="transform: translateX(-62px);"
                    >
                        <path
                            class="domain"
                            stroke="currentColor"
                            d="M6,243.5H0.5V0.5H6"
                            style="stroke: rgb(85, 85, 85);"
                        />



                            
                        <g
                            v-for="(item, ind) in rulerArr" :key="ind"
                            class="tick"
                            :class="{major: ind % 10 === 0}"

                            opacity="1"
                            :transform="`translate(0,${243 / ((rulerConst.default + 3) * 2) * (rulerArr.length - ind) })`"
                        >
                            <line stroke="currentColor" :x2="ind % 10 === 0 ? 6 : 3" style="stroke: rgb(85, 85, 85);" />
                            <text
                                fill="currentColor"
                                :x="ind % 10 === 0 ? 31 : 9"
                                dy="0.32em"
                                text-anchor="middle"
                                style="fill: rgb(85, 85, 85);"
                            >{{ind % 10 === 0 ? item.toFixed(2) : ''}}</text>
                        </g>


                    </g>
                    
                    
                    
                    
                    <g
                        class="measurment-scale-secondary"
                        fill="none"
                        font-size="10"
                        font-family="sans-serif"
                        text-anchor="end"
                    >
                        <path
                            class="domain"
                            stroke="currentColor"
                            d="M-6,243.5H0.5V0.5H-6"
                            style="stroke: rgb(85, 85, 85);"
                        />


                        <g
                            v-for="(item, ind) in rulerArr" :key="ind"
                            class="tick"
                            :class="{major: ind % 10 === 0}"

                            opacity="1"
                            :transform="`translate(0,${243 / ((rulerConst.default + 3) * 2) * (rulerArr.length - ind) })`"
                        >
                            <line stroke="currentColor" :x2="ind % 10 === 0 ? -6 : -3" style="stroke: rgb(85, 85, 85);" />
                            <text
                                fill="currentColor"
                                :x="ind % 10 === 0 ? -31 : -9"
                                dy="0.32em"
                                text-anchor="middle"
                                style="fill: rgb(85, 85, 85);"
                            >{{ind % 10 === 0 ? item.toFixed(2) : ''}}</text>
                        </g>

                    </g>


                    <rect
                        class="measurment-scale-background"
                        x="-62"
                        y="0"
                        height="243"
                        width="62"
                    />
                    <g class="mesurement-label" transform="translate(5, 16)">
                        <text style="fill: rgb(85, 85, 85);">
                            <tspan class="thicknessScaleLabel" x="0" y="0">µm</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </g>
</template>

<style scoped>

.measurment-scale-drag, .measurment-scale-background {
    opacity: 0.1;
    cursor: -webkit-grab;
}
.measurment-scale-drag {
    opacity: 0.5;
    transition: opacity 250ms;
    cursor: -webkit-grab;
}
.measurements:hover .measurment-scale-drag {
    opacity: 0.7;
}
.measurements .domain {
    display: none;
}
#profile .measurements .decoration, #profile .measurements .measurment-scale, #profile .measurements .measurment-scale-secondary, #profile-scale {
    shape-rendering: crispedges;
}

.measurment-scale,
.profile-scale {
    display: block;
    width: 100%;
    height: 100%;
    user-select: none;
}
</style>