import moment from 'moment';

/**
 * 算出12个小时梅分钟的时间数组
 * @param endDate 最新时间
 * @param splitTime 5分钟一格
 * @param count 12小时总共多少个
 * @returns 
 */
export const getDateArray = (endDate?: any, splitTime?: number, count?: number) => {
    if (!endDate) {
      endDate = new Date();
    }
    if (!splitTime) {
      splitTime = 5 * 60 * 1000; // 分钟
    }
    if (!count) {
      count = 12 * 12;
    }
	// 获取最新时间转换成毫秒
    let endTime = endDate.getTime();
	// 最新时间除以5分钟的 余数
    const mod = endTime % splitTime;

    if (mod > 0) {
      endTime -= mod; // 减去 得到最新的5分钟倍数的 时间；
    }

    var dateArray = [];
	// 循环 144次 （144格 5分钟每格）
    while (count-- > 0) {
      var d = new Date();
	  // 设置每个5分钟倍数的时间
      d.setTime(endTime - count * splitTime);
	  // 转换成时分，推到数组里
      dateArray.push(moment(d).format('HH:mm'));
    }
    return dateArray;
}

/**
 * 
 * @param e dom
 * @param ruler rulerLeft:起始x值，用于后面改值；maxWidth：拖动的最大的宽度
 * @param rulerLeft 常量，62；
 */

export const dragX = (e: any, ruler: { rulerLeft:number}, width: any, rulerLeft:number) => {

	const startX = e.clientX;
	const num = ruler.rulerLeft;

	// 拖动，改变响应性对象里的值。
	document.onmousemove = (e:any) => {
		const distance = e.clientX - startX;
		if(num + distance >= rulerLeft && num + distance <= width) {
			ruler.rulerLeft = num + distance;
		}
	}
	document.onmouseup = (e) => {
		document.onmousemove = null;
		document.onmouseup = null;
	};
}

const constants = () => {
  return { 
    COLORS: ["#FF9900", "#FF9900", "#FF9900", "#F89C05", "#F1A009", "#EAA30E", "#E3A713", "#DCAA17", "#D5AE1C", "#CEB120", "#C7B525", "#C0B82A", "#B9BC2E", "#B3BF33", "#ACC338", "#A5C63C", "#9ECA41", "#97CD46", "#90D14A", "#89D44F", "#82D853", "#7BDB58", "#74DF5D", "#6DE261", "#66E666", "#77E877", "#88EB88", "#99EE99", "#AAF1AA", "#BBF4BB", "#CCF7CC", "#DDF9DD", "#EEFCEE", "#FFFFFF", "#EBFFFF", "#D8FFFF", "#C4FFFF", "#B1FFFF", "#9DFFFF", "#89FFFF", "#76FFFF", "#62FFFF", "#4EFFFF", "#3BFFFF", "#27FFFF", "#14FFFF", "#00FFFF", "#00F1FB", "#00E3F7", "#00D4F2", "#00C6EE", "#00B8EA", "#00AAE6", "#009CE1", "#008EDD", "#0080D9", "#0071D4", "#0063D0", "#0055CC", "#0047C8", "#0039C4", "#002BBF", "#001CBB", "#000EB7", "#0000B3", "#0000B3", "#0000B3"],
    SLICE_SIZE_IN_PIXELS: { x: 2, y: 2 },
    MAP_SIZE: { width: 1319, height: 712, heightWithProfile: 569 },
    COLOR_MAP_SIZE: { width: 42, numberOfMajors: 9, overflowHeight: 6, underflowHeight: 4, outsideValuesPadding: 2 }, MAP_PREVIEW_SIZE: { height: 67, paddingLeft: 0 },
    COLOR_MAP_OUTSIDE_COLORS: { overflow: "#CD0000", underflow: "#CA00FF", padding: "#FFF", gap: "#B0BEC5" },
    MIN_DATE: 15147612e5, DATA_UPDATE_DELAY: 6e4,
    PROFILE_TYPES: {
      "4Scan": "TYPE_SELECTOR_FOUR_SCAN_TEXT",
    SingleScan: "TYPE_SELECTOR_SINGLE_SCAN_TEXT" },
    DEFAULT_TIME_WINDOW: 108e5,
    DEFAULT_TIME_WINDOW_PREVIEW: 36e5,
    STATUS_UPDATE_DELAY: 3e5,
    STATUS_BAR_WIDTH: 16,
    MAP_PADDING_LEFT: 88,
    COLOR_MAP_WIDTH: 61,
    COLOR_MAP_WIDTH_WITH_PADDING: 60,
    STATUSES_REQUIRE_LINE: ["GOOD_ROLL", "GRADE_1", "GRADE_2", "GRADE_3", "GRADE_4", "RECYCLABLE", "NON_RECYCLABLE"], ZOOM_LIMITS: { MAX: 288e5, MIN: 9e5 },
    MAX_NUMBER_OF_STORED_PROFILES: 1500,
    MAX_NUMBER_OF_STORED_PROFILES_FOR_PREVIEW: 600,
    TREND: {
      PADDING_LEFT_WITHOUT_SCALE: 228,
      LEFT_WITH_TREND: 212,
      LEFT_WITHOUT_TREND: 0,
      PADDING_LEFT_WITH_TREND: 299,
      PADDING_LEFT_WITHOUT_TREND: 88,
      ROLL_CHANGE_LINES_WITH_TREND: 71 
    },
    TOLERANCE_OF_DISCARDING_DATA: 216e5,
    PROFILE_WIDTH: 1491,
    PROFILE_HEIGHT_WITH_MARGIN: 143,
    MISSING_PROFILE_COLOR_MAX_LIMIT: 5,
    LINE_ROUNDING_CORRIGATION: -1,
    VALUE_RANGE_MAPPING_TYPES: { AUTOMATIC: "auto", MANUAL: "manual" },
    CLICKABLE_STATUSES: ["GOOD_ROLL", "GRADE_1", "GRADE_2", "GRADE_3", "GRADE_4", "RECYCLABLE", "non_recyclable"], PROFILE_HEIGHT: { JUST_SCALE: 65, FULL: 200 },
    NUM_OF_DIGITS_BY_DEFAULT: 2, BLACK_COLOR: "black"
  }
}

