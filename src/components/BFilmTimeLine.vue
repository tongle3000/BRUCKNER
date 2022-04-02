<script lang="ts" setup>
import * as icons from '../utils/icons';
defineProps<{ data: any, timeLineArr: any }>();
const left = 10; // 左边预留10像素的宽度，好显示时间；
const fiveMinuteWidth = 1880 / (12 * 12); // 5分钟的宽度
const splitTime = 5 * 60 * 1000; // 5分钟时间
const firstWidthTime = splitTime - new Date().getTime() % splitTime; // 首个宽度的时间(毫秒)
const firstWidth = firstWidthTime * fiveMinuteWidth / splitTime; // 换算成宽度px

const obj:any = {
    TDO_FILMBREAK: '破膜',
    SHUTDOWN: '停机',
    STABILIZING: '稳定',
    THREADING: '牵引崐穿引',
    OPERATOR: '操作员'
    // 操作员
    // OPERATOR: {
    //     STABILIZING: '稳定',
    //     THREADING: '牵引崐穿引',
    // },
}
</script>
<template>
<div class="b-film-time-line">
    <svg id="timeline">
        <g id="rolls">
            <foreignObject
                v-if="data.length > 0"
                height="28"
                v-for="(roll, ind) in data"
                :class="{
                    'b-status-grade_1 b-status-grade_total_4': ind < data.length - 1 && !roll.status,
                    'b-status-good_roll': ind === data.length - 1 && !roll.status,
                    ['b-status-'+ roll.status?.toLowerCase()]: roll.status
                }"
                :width="roll.width"
                :x="10 + roll.x"
            >
            </foreignObject>
        </g>
        <g id="rolls-labels">
            <text
                v-if="data.length > 0"
                v-for="(roll, ind) in data"
                dominant-baseline="middle"
                text-anchor="middle"
                :x="ind === data.length - 1 ? roll.x+roll.width / 2 : roll.x+roll.width/2 + 20"
                y="15"
                :opacity="roll.width >= 100 ? 1 : 0"
                class="b-status-grade_1"
            >{{roll.labelId || obj[roll?.reason?.reasonType]}}</text>
        </g>
        <g id="rolls-icons">
            <g v-if="data.length > 0" v-for="(roll, ind) in data.filter((item:any,i:number) => !item.status && i!==data.length-1)" shape-rendering="auto"
                :style="{transform: `translate(${roll.width >= 120 ? roll.x + roll.width / 2 - 50 : roll.x + roll.width / 2}px, 6px) scale(0.9)`}"
            >
                <path :d="icons.rollPath" fill="#FFF"></path>
            </g>
        </g>
        <g id="timeScale" transform="translate(0,28)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
            <path class="domain" stroke="currentColor" d="M10.5,0.5H1890.5"></path>
            <g
                v-for="(time, i) in timeLineArr"
                class="tick"
                :class="{ minor: i % 12 === 0}"
                opacity="1"
                :transform="`translate(${ firstWidth + fiveMinuteWidth * i + left},0)`"
            >
                <line stroke="currentColor" :y2="i % 12 === 0 ? 9 : 6"></line>
                <text v-if="i % 12 === 0" fill="#000" y="14" dy="0.71em">{{time}}</text>
            </g>
        </g>
    </svg>
</div>
</template>
<style lang="less">
svg {
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 13px;
    box-sizing: border-box;
    shape-rendering: crispEdges;
    transform-origin: 0px 0px;
}
.b-film-timeline {
    display: block;
    position: relative;
    color: #fff;
    height: 54px;
    width: 100%;
}
#rolls-labels text {
    fill: #fff;
    font-size: 13px;
}
text {
    display: block;
    white-space: nowrap;
}
#rolls {
    foreignObject {
        display: block;
        overflow: hidden;
        color: #fff;
        box-sizing: border-box;
        border-radius: 2px;
        cursor: pointer;
        border-right: 1px solid white;
        border-bottom: 1px solid white;
    }
}
#timeScale path {
    fill: none;
    stroke: grey;
    stroke-width: 1px;
}
.b-status-grade_1 {
    background-color: green;
}
.b-status-good_roll, .b-status-productive {
    background-color: #5ab348;
}
.b-status-undefined, .b-status-cutback, .b-status-threading, .b-status-pur_speedup, .b-status-pur_thread, .b-status-tdo_speedup, .b-status-tdo_thread, .b-status-chr_thread, .b-status-mdo_thread, .b-status-initial, .b-status-exb_thread, .b-status-pur2_thread, .b-status-tdo2_thread, .b-status-tdo2_speedup, .b-status-pur3_thread, .b-status-wba_thread, .b-status-ovn_thread, .b-status-ovn_speedup {
    background:linear-gradient(#ffd399 39.9%, #ff9200 40%);}
.b-status-stabilizing {
    background: linear-gradient(#f2df91 0%, #fff0b3 19.9%, #F5C600 25%);
}
#timeScale line {
    stroke: #898989;
    stroke-width: 1px;
}
#timeScale .minor line {
    stroke-opacity: .6;
}

.b-status-shutdown:hover {
    background: linear-gradient( #969695 79.9%, #2e2d2c 80%);;
}

.b-status-shutdown {
    background:linear-gradient( #7c7c7b 79.9%, #2e2d2c 80%);
    }

// 冲洗
    // --b-color-purging-alt: #bf9358;
    // --b-color-purging-hover: #cca979;
    // --b-color-purging-alt-hover: #956a33;
    //     --b-color-purging: #8E4A00;
    // --b-color-purging-alt: #bf9358;
    // --b-color-purging-hover: #cca979;
    // --b-color-purging-alt-hover: #956a33;
.b-status-purging {
    background:  linear-gradient(#bf9358 59.9%, #8E4A00 60%);
}
.b-status-purging:hover {
    background: linear-gradient(#cca979 59.9%, #956a33 60%);
}
</style>