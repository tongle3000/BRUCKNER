import moment from 'moment';

export const getDateArray = (endDate?: any, splitTime?: number, count?: number) => {
    if(!endDate) {
        endDate = new Date();
    }
    if(!splitTime) {
      splitTime = 5 * 60 * 1000; // 分钟
    }
    if(!count) {
      count= 12*12;
    }
    let endTime = endDate.getTime();
    const mod = endTime % splitTime;
    console.log(mod, endTime)
    if(mod > 0) {
      endTime -= mod;
    }
    console.log(mod, endTime)
    var dateArray = [];
    while(count-- > 0) {
        var d = new Date();
        d.setTime(endTime - count * splitTime);
        dateArray.push(moment(d).format('HH:mm'));
    }
    return dateArray;
}
