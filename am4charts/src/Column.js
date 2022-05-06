import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { data } from "./data";

am4core.useTheme(am4themes_animated);

function Column() {
  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.data = data.dashboardOverview;

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "monthText";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.tooltip.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true; // 부가설명 안나오게
    valueAxis.renderer.minWidth = 50;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true; //막내 그래프 순차적으로 노출
    series.dataFields.categoryX = "monthText";
    series.dataFields.valueY = "runCount";
    series.columns.template.width = am4core.percent(15); //막대 너비
    series.columns.template.tooltipX = am4core.percent(50); //툴팁위치 (X축기준)
    series.columns.template.tooltipY = am4core.percent(0); //툴팁위치 (Y축기준)
    series.columns.template.tooltipText = "{monthText}\n[bold]{valueY}[/]";
    series.tooltip.pointerOrientation = "vertical"; // 도구설명 tooltip 위로 위치 변경
    series.tooltip.label.fontSize = "10"; // 도구설명 fontsize
    series.tooltip.label.textAlign = "middle"; // 도구설명 align

    // 스크롤바
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.animationDuration = 500;
    // chart.scrollbarX.minHeight = 5;
    // chart.scrollbarX.background.fill = am4core.color("#F2F5F8");
    // chart.scrollbarX.background.fillOpacity = 1;
    // chart.scrollbarX.startGrip.width = 15;
    // chart.scrollbarX.startGrip.height = 15;
    // chart.scrollbarX.startGrip.background.fill = am4core.color("#8A98A7");
    // chart.scrollbarX.endGrip.width = 15;
    // chart.scrollbarX.endGrip.height = 15;

    // function customGrip(grip, color) {
    //   grip.icon.disabled = true;
    //   grip.background.fill = am4core.color(color);
    // }
    // customGrip(chart.scrollbarX.startGrip, "8A98A7");
    // customGrip(chart.scrollbarX.endGrip, "8A98A7");
    // let cellSize = 30;
    // chart.events.on("datavalidated", function (ev) {
    //   // Get objects of interest
    //   let chart = ev.target;
    //   let categoryAxis = chart.yAxes.getIndex(0);

    //   // Calculate how we need to adjust chart height
    //   let adjustHeight =
    //     chart.data.length * cellSize - categoryAxis.pixelHeight;

    //   // get current chart height
    //   let targetHeight = chart.pixelHeight + adjustHeight;

    //   // Set it on chart's container
    //   chart.svgContainer.htmlElement.style.height = targetHeight + "px";
    // });
    let columnTemplate = series.columns.template;

    columnTemplate.column.cornerRadiusTopLeft = 20;
    columnTemplate.column.cornerRadiusTopRight = 20;

    chart.current = data;
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}
export default Column;
