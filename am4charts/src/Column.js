import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Grip } from "@amcharts/amcharts4/.internal/core/elements/Grip";

am4core.useTheme(am4themes_animated);

function ColumnSeries(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    let data = [
      {
        country: "Lithuania",
        litres: 501,
      },
      {
        country: "Czechia",
        litres: 301,
      },
      {
        country: "Ireland",
        litres: 201,
      },
      {
        country: "Germany",
        litres: 165,
      },
      {
        country: "Australia",
        litres: 139,
      },
      {
        country: "Austria",
        litres: 128,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The 77755",
        litres: 50,
      },
      {
        country: "The 2222",
        litres: 50,
      },
      {
        country: "The 5555",
        litres: 233,
      },
      {
        country: "The 3333",
        litres: 233,
      },
      {
        country: "The 344",
        litres: 233,
      },
      {
        country: "Th",
        litres: 233,
      },
      {
        country: "The",
        litres: 233,
      },
      {
        country: "T23232her",
        litres: 233,
      },
      {
        country: "T33332s",
        litres: 233,
      },
    ];
    // let visits = 10;

    // for (let i = 1; i < 20; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //   data.push({
    //     date: new Date(2020, 0, i),
    //     name: "name" + i,
    //     value: visits,
    //   });
    // }

    x.data = data;

    let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.title.text = "Countries";

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.title.text = "Litres sold (M)";

    let series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "litres";
    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    x.scrollbarX = new am4charts.XYChartScrollbar();
    x.scrollbarX.animationDuration = 500;
    x.scrollbarX.minHeight = 5;
    x.scrollbarX.background.fill = am4core.color("#F2F5F8");
    x.scrollbarX.background.fillOpacity = 1;
    x.scrollbarX.startGrip.width = 15;
    x.scrollbarX.startGrip.height = 15;
    x.scrollbarX.startGrip.background.fill = am4core.color("#8A98A7");
    x.scrollbarX.endGrip.width = 15;
    x.scrollbarX.endGrip.height = 15;

    function customGrip(grip, color) {
      grip.icon.disabled = true;
      grip.background.fill = am4core.color(color);
    }
    customGrip(x.scrollbarX.startGrip, "8A98A7");
    customGrip(x.scrollbarX.endGrip, "8A98A7");

    let columnTemplate = series.columns.template;
    columnTemplate.width = 10;
    columnTemplate.column.cornerRadiusTopLeft = 20;
    columnTemplate.column.cornerRadiusTopRight = 20;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
export default ColumnSeries;
