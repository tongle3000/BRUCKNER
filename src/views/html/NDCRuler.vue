<script lang="ts" setup>
import { reactive, computed, onMounted } from 'vue';
import { dragX } from '../../utils/common';
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
    <svg id="profile" simplified>
        <defs>
            <clipPath id="contentClip">
                <rect x="0" y="0" width="100%" height="243" />
            </clipPath>
        </defs>

        <g class="dieboltIndicator" />



        <g id="tooltip" transform="translate(99, 0)" style="display: block;">
            <g>
                <rect height="243" width="190" x="0" y2="243" />
            </g>
            <g>
                <line stroke="black" stroke-width="2" y2="243" />
            </g>
            <g transform="translate(0, 0)">
                <g class="top" dominant-baseline="text-before-edge">
                    <g class="position">
                        <text style="font-weight: bold; fill: black">
                            <tspan text-anchor="middle" x="95" y="0">-4,965</tspan>
                            <tspan style="font-weight: normal; fill: black">mm</tspan>
                        </text>
                    </g>
                    <g class="avg">
                        <text style="font-weight: bold; fill: black">
                            <tspan text-anchor="end" x="60" y="28">19.45</tspan>
                            <tspan
                                style="font-weight: normal; fill: black"
                                text-anchor="start"
                                x="60"
                            >µm</tspan>
                        </text>
                        <rect
                            width="12"
                            height="12"
                            x="7"
                            y="30"
                            style="fill: #00B96D"
                            shape-rendering="crispedges"
                        />
                    </g>
                    <g class="deltaProfileThickness">
                        <text style="font-weight: bold; fill: black">
                            <tspan style="font-weight: normal; fill: black" y="28" x="99">Δ</tspan>
                            <tspan text-anchor="end" x="175" y="28">-0.01</tspan>
                            <tspan style="font-weight: normal; fill: black">µm</tspan>
                        </text>
                    </g>
                </g>
            </g>
            <g transform="translate(0, 0)" />
            <g transform="translate(0, 0)" />
            <g transform="translate(0, 0)" />
        </g>

        <g class="edge-cutter-lines" hidden />
        <g class="diebolts-lines hidden" />


        <g id="profile-scale" style="transform: translateY(243px);">
            <g
                class="profile-scale"
                fill="none"
                font-size="10"
                font-family="sans-serif"
                text-anchor="middle"
            >
                <path class="domain" stroke="currentColor" d="M0.5,5V0.5H1180.5V5" />
                <g class="tick" opacity="1" transform="translate(10.478591308071135,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(21.124827965868487,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(31.77106462366584,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(42.41730128146319,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-5,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(53.06353793926054,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(63.709774597057894,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(74.35601125485523,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(85.00224791265259,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(95.64848457044994,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-5,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(106.2947212282473,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(116.94095788604464,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(127.58719454384199,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(138.23343120163935,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(148.8796678594367,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-4,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(159.52590451723407,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(170.1721411750314,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(180.81837783282873,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(191.4646144906261,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(202.11085114842345,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-4,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(212.7570878062208,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(223.40332446401814,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(234.04956112181551,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(244.69579777961283,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(255.3420344374102,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-3,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(265.98827109520755,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(276.6345077530049,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(287.28074441080224,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(297.92698106859956,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(308.573217726397,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-3,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(319.2194543841943,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(329.8656910419917,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(340.511927699789,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(351.1581643575864,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(361.80440101538375,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-2,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(372.45063767318106,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(383.0968743309784,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(393.7431109887758,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(404.3893476465731,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(415.03558430437045,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-2,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(425.6818209621678,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(436.3280576199652,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(446.9742942777625,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(457.6205309355599,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(468.2667675933572,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-1,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(478.91300425115463,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(489.55924090895195,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(500.20547756674927,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(510.85171422454664,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(521.497950882344,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-1,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(532.1441875401413,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(542.7904241979387,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(553.436660855736,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(564.0828975135333,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(574.7291341713308,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">-500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(585.3753708291281,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(596.0216074869255,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(606.6678441447228,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(617.3140808025202,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(627.9603174603175,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">0</text>
                </g>
                <g class="tick" opacity="1" transform="translate(638.6065541181148,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(649.2527907759122,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(659.8990274337095,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(670.5452640915069,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(681.1915007493043,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(691.8377374071016,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(702.4839740648989,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(713.1302107226963,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(723.7764473804937,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(734.422684038291,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">1,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(745.0689206960883,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(755.7151573538856,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(766.3613940116832,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(777.0076306694805,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(787.6538673272778,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">1,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(798.3001039850751,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(808.9463406428724,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(819.5925773006697,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(830.2388139584672,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(840.8850506162645,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">2,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(851.5312872740618,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(862.1775239318592,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(872.8237605896566,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(883.4699972474539,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(894.1162339052513,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">2,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(904.7624705630486,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(915.4087072208459,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(926.0549438786433,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(936.7011805364406,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(947.3474171942381,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">3,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(957.9936538520354,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(968.6398905098328,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(979.2861271676301,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(989.9323638254274,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(1000.5786004832247,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">3,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(1011.2248371410221,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1021.8710737988195,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1032.5173104566168,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1043.163547114414,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(1053.8097837722114,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">4,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(1064.4560204300087,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1075.1022570878063,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1085.7484937456036,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1096.394730403401,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(1107.0409670611982,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">4,500</text>
                </g>
                <g class="tick" opacity="1" transform="translate(1117.6872037189955,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1128.333440376793,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1138.9796770345904,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick" opacity="1" transform="translate(1149.6259136923877,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
                <g class="tick major" opacity="1" transform="translate(1160.272150350185,0)">
                    <line stroke="currentColor" y2="8" y1="0" />
                    <text fill="currentColor" y="8" dy="10">5,000</text>
                </g>
                <g class="tick" opacity="1" transform="translate(1170.9183870079823,0)">
                    <line stroke="currentColor" y2="5" />
                    <text fill="currentColor" y="8" dy="0.71em" />
                </g>
            </g>
            <rect
                class="profile-scale-background"
                x="0"
                y="0"
                height="25"
                fill="rgba(0, 0, 0, 0)"
                width="1180"
            />
        </g>
        
        <g class="thicknessProfiles">
            <g class="lines" clip-path="url(#contentClip)" />
        </g>

        <g class="diebolts">
            <g class="area hidden" clip-path="url(#contentClip)" />
            <g class="line hidden" clip-path="url(#contentClip)" />
            <g class="lines hidden" clip-path="url(#contentClip)" />
        </g>
        <g class="actualValues">
            <g class="area hidden" clip-path="url(#contentClip)" />
        </g>
        <g class="gauge">
            <path
                class="area"
                shape-rendering="crispEdges"
                d="M456.027326666055,252L465.027326666055,252L465.027326666055,252L465.027326666055,243L465.027326666055,243L456.027326666055,243Z"
            />
        </g>

















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



        
    </svg>
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