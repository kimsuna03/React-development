import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { chartData3 } from "./data3";
import * as options from "./options";

am4core.useTheme(am4themes_animated);

function Column3() {
  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.yAxesAndPlotContainer.paddingTop = 30; // 상단 패딩 값 지정
    chart.data = chartData3.prevalence;

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "pathogenCode";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.fontSize = 12;
    categoryAxis.renderer.grid.template.disabled = true; //카데고리 보조선 (세로) 사용안함

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true; // 부가설명 안나오게
    valueAxis.renderer.minWidth = 50;

    let series = chart.series.push(new am4charts.ColumnSeries());

    series.dataFields.categoryX = "pathogenCode";
    series.dataFields.valueY = "allPositiveCasesCount";

    series.columns.template.width = am4core.percent(40); //막대 너비
    series.columns.template.tooltipX = am4core.percent(50); //툴팁위치 (X축기준)
    series.columns.template.tooltipY = am4core.percent(0); //툴팁위치 (Y축기준)
    series.columns.template.tooltipText = "[bold]{valueY}[/]";
    series.tooltip.pointerOrientation = "vertical"; // 도구설명 tooltip 위로 위치 변경
    series.tooltip.label.fontSize = "10"; // 도구설명 fontsize
    series.tooltip.label.textAlign = "middle"; // 도구설명 align
    series.columns.template.strokeWidth = 0;
    series.name = "Column series";
    series.columns.template.adapter.add("fill", function (fill, target) {
      // 막대그래프의 컬러
      return chart.colors.getIndex(target.dataItem.index);
    });
    series.alignLabels = true;

    // 스크롤바
    options.createScrollbarX(chart);
    options.createScrollbarY(chart);

    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.truncate = false;
    // labelBullet.label.text = "{valueY}/{runCount}";
    labelBullet.label.fontWeight = 700;
    labelBullet.label.fontSize = 10;

    // 우측 legend
    chart.legend = new am4charts.Legend();
    chart.legend.itemContainers.template.togglable = false; //legend 시리즈 눌렀을때 그래프 접히는 부분
    chart.legend.position = "right";

    chart.current = chartData3;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      style={{
        width: "100%",
        height: "550px",
      }}
    ></div>
  );
}
export default Column3;
