<script setup lang="ts">
import { reactive, onMounted, onBeforeUnmount, computed } from 'vue';
import BFilmTimeLine from './components/BFilmTimeLine.vue'
import * as api from './api';
import moment from 'moment';
import { getDateArray } from './utils/common'
import BarSvg from './views/html/BarSvg.vue'
import Map from './views/html/Map.vue'
import Profile from './views/Profile/index.vue';

interface IBFilmTimeLine {
	_class?: string;
    startTimestamp?: string;
    endTimestamp?: string;
    invalid?: false;
    id?: string;
    type?: string;
    labelId?: string;
    qualityGrade?: string;
    qualityGradeLabel?: string;
    rating?: string;
    laboratoryDataAvailable?: boolean;
	cut?: boolean;
	width?: number;
	x?: number;
}

interface IData {
	bFilmTimeLine: IBFilmTimeLine[],
	timeLineArr: any [],
	profile4scanLatesData: object,
}

const data: IData = reactive({
	bFilmTimeLine: [],
	timeLineArr: [],
	profile4scanLatesData: {}
})

let timer:any = null;

const getBFilmTimeLine = () => {
	const newDate = new Date();
	const start: string = moment(newDate).subtract(12, 'hours').utc().toISOString();
	const end: string = moment(newDate).utc().toISOString();
	const startTimeNum:number = new Date(start).getTime();
	const endTimeNum:number = newDate.getTime();
	const timeSpace:number = endTimeNum - startTimeNum;

	api.getLineState({ start, end }).then((result: any) => {

		let totalWidth = 0;
		data.bFilmTimeLine = result.map((item: any, ind: number) => {
			const width = ind === 0 ? (new Date(item.endTimestamp).getTime() - startTimeNum) * 1880 / timeSpace
				: ind === result.length - 1
				? (endTimeNum - new Date(item.startTimestamp).getTime()) * 1880 / timeSpace
				: (new Date(item.endTimestamp).getTime() - new Date(item.startTimestamp).getTime()) * 1880 / timeSpace;
			
			item = {
				...item,
				width,
				x: totalWidth
			}
			totalWidth += width;
			return item;
		})
		console.log('data.bFilmTimeLine', data.bFilmTimeLine);
		console.log(result);
	}).catch((error) => {
		// clearInterval(timer);
		// timer = null;
	})
}
//
// 厚度数据接口
const getThickness = () => {
	api.getProfile4scanLatest().then(res => {
		console.log('厚度数据', res)
		data.profile4scanLatesData = res;
	})
}

// 正常第一个色； 停机第二色；
const fillColor = computed(() => {
    return true ? 'rgb(0, 185, 109)' : 'rgb(227, 64, 160)';
})


const countData = () => {
	data.timeLineArr = getDateArray();
	getBFilmTimeLine();
	getThickness();
} 

onMounted(() => {
	countData();
	timer = setInterval(() => {
		countData();
	}, 60000)
})

onBeforeUnmount(() => {
	clearInterval(timer);
	timer = null;
})

</script>

<template>
	<BFilmTimeLine :data="data.bFilmTimeLine" :timeLineArr="data.timeLineArr" />
	<div style="width: 1480px; height:300px; min-height: 300px;">
		<Profile :data="data.profile4scanLatesData" :fillColor="fillColor" />
	</div>
	<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
	<!-- <ul>
		<li v-for="item in data.bFilmTimeLine">{{item.labelId}}</li>
	</ul> -->

	<div>壮壮图</div>
	<BarSvg />
	<Map />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1920px;
  height: auto;
  padding: 0;
  margin: 0;
}
</style>
