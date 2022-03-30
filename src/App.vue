<script setup lang="ts">
import BFilmTimeLine from './components/BFilmTimeLine.vue'
import Profile4scanLates from './components/Profile4scanLates.vue'
import * as api from './api';
import { reactive, onMounted, onBeforeUnmount } from 'vue';
import moment from 'moment';
import { getDateArray } from './utils/common'
import BarSvg from './views/html/BarSvg.vue'
import Map from './views/html/Map.vue'
import NDCRuler from './views/html/NDCRuler.vue'
import Profile from './views/Profile/index.vue';

interface IbFilmTimeLine {
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

const data: { bFilmTimeLine: IbFilmTimeLine[], timeLineArr: any [], profile4scanLatesData: object } = reactive({
	bFilmTimeLine: [],
	timeLineArr: [],
	profile4scanLatesData: {}
})

let timer: any = null;
let start: string, end: string, startTimeNum:number, endTimeNum:number, timeSpace:number;

onMounted(() => {
	getBFilmTimeLine();
	timer = setInterval(() => {
		getBFilmTimeLine()
	}, 20000)
})
const getBFilmTimeLine = async () => {
	start = moment(new Date()).subtract(12, 'hours').utc().toISOString();
	end = moment(new Date()).utc().toISOString();
	startTimeNum = new Date(start).getTime();
	endTimeNum = new Date(end).getTime();
	timeSpace = new Date(end).getTime() - new Date(start).getTime();


	data.timeLineArr = getDateArray();

	console.log('------------------', data.timeLineArr)


	try {
		const result: any = await api.getLineState({ start, end });

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
	} catch (error) {
		clearInterval(timer);
		timer = null;
	} finally {
		// 厚度数据接口
		api.getProfile4scanLatest().then(res => {
			console.log('厚度数据', res)
			data.profile4scanLatesData = res;
		})
	}
}
onBeforeUnmount(() => {
	clearInterval(timer);
	timer = null;
})

</script>

<template>
	<BFilmTimeLine :data="data.bFilmTimeLine" :timeLineArr="data.timeLineArr" />
	<div style="width: 1480px; height:350px; min-height: 300px;">
		<Profile :data="data.profile4scanLatesData" />
	</div>
	<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
	<!-- <ul>
		<li v-for="item in data.bFilmTimeLine">{{item.labelId}}</li>
	</ul> -->

	<Profile4scanLates :data="data.profile4scanLatesData" />
	<div>壮壮图</div>
	<BarSvg />
	<Map />
	<NDCRuler :data="data.profile4scanLatesData" />
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
