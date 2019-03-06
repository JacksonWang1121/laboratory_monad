const formatTime = date => {
  const year = date.getFullYear()
  const month = formatNum(date.getMonth() + 1);
  const day = formatNum(date.getDate());
  const hour = formatNum(date.getHours());
  const minute = formatNum(date.getMinutes());
  const second = formatNum(date.getSeconds());

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

//自定义格式化日期
const formatDate = date => {
  const year = date.getFullYear()
  const month = formatNum(date.getMonth() + 1);
  const day = formatNum(date.getDate());

  return [year, month, day].map(formatNumber).join('-')
}

//自定义格式化两位数
const formatNum = num => {
  //若传入的数字在0~9的范围内，则拼凑成两位数
  if(num>=0 && num<=9) {
    return "0"+num;
  }
  return num;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
