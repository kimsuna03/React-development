import * as am4core from "@amcharts/amcharts4/core";

const SCROLLBAR_COLOR_FILL = am4core.color("#cfd7df");
const SCROLLBAR_FILL_OPACITY = 1;

export const createScrollbarX = (chart, start, end) => {
  let scrollbarX = new am4core.Scrollbar();
  scrollbarX.animationDuration = 500;
  scrollbarX.minHeight = 5;
  scrollbarX.background.fill = am4core.color("#F2F5F8");
  scrollbarX.background.fillOpacity = 1;
  scrollbarX.thumb.background.fill = SCROLLBAR_COLOR_FILL;
  scrollbarX.thumb.background.fillOpacity = SCROLLBAR_FILL_OPACITY;
  scrollbarX.startGrip.width = 18;
  scrollbarX.startGrip.height = 18;
  scrollbarX.startGrip.background.fill = am4core.color("#8A98A7");
  scrollbarX.startGrip.icon.disabled = true;
  scrollbarX.endGrip.width = 18;
  scrollbarX.endGrip.height = 18;
  scrollbarX.endGrip.background.fill = am4core.color("#8A98A7");
  scrollbarX.endGrip.icon.disabled = true;
  if (!start && !end) {
    //TODO 데이터가 많은 경우 초기에 보여줄 범위 조정 필요
    if (chart.data.length > 18) {
      // 18개로 갯수 조정
      scrollbarX.end = (18 / chart.data.length).toFixed(2);
    }
  } else {
    if (start) scrollbarX.start = start;
    if (end) scrollbarX.end = end;
  }

  chart.scrollbarX = scrollbarX;
};

export const createScrollbarY = (chart) => {
  let scrollbarY = new am4core.Scrollbar();
  scrollbarY.animationDuration = 500;
  scrollbarY.thumb.background.fill = SCROLLBAR_COLOR_FILL;
  scrollbarY.thumb.background.fillOpacity = SCROLLBAR_FILL_OPACITY;
  scrollbarY.startGrip.background.fill = am4core.color("#8A98A7");
  scrollbarY.endGrip.background.fill = am4core.color("#8A98A7");
  scrollbarY.minWidth = 5;
  scrollbarY.startGrip.width = 18;
  scrollbarY.startGrip.height = 18;
  scrollbarY.startGrip.background.fill = am4core.color("#8A98A7");
  scrollbarY.startGrip.icon.disabled = true;
  scrollbarY.endGrip.width = 18;
  scrollbarY.endGrip.height = 18;
  scrollbarY.endGrip.background.fill = am4core.color("#8A98A7");
  scrollbarY.endGrip.icon.disabled = true;

  chart.scrollbarY = scrollbarY;
};

