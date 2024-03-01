export default function labelsLine() {
  return {
    id: "doughnutLabelsLine",
    afterDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;

      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const { x, y } = datapoint.tooltipPosition();

          if (dataset.data[index] < 3) return;

          //draw line
          const halfWidth = width / 2;
          const halfHeight = height / 2;
          const textWidth = ctx.measureText(chart.data.labels[index]).width;

          const xLine =
            x >= halfWidth
              ? window.innerWidth < 600
                ? x + 15
                : x + 60
              : window.innerWidth < 600
              ? x - 15
              : x - 60;
          const yLine = y >= halfHeight ? y + 70 : y - 70;
          const extraXLine =
            x >= halfWidth
              ? window.innerWidth < 600
                ? 20
                : 35
              : window.innerWidth < 600
              ? -20
              : -35;

          const textGap =
            x >= halfWidth
              ? window.innerWidth < 600
                ? 2
                : 5
              : window.innerWidth < 600
              ? -2
              : -5;
          const textAlignment = x >= halfWidth ? "left" : "right";
          const outOfDiv = y >= 230 ? -50 : 0;

          ctx.beginPath();
          ctx.lineWidth = window.innerWidth < 600 ? 2 : 3;
          ctx.moveTo(x, y);
          ctx.lineTo(xLine, yLine);
          ctx.lineTo(xLine + extraXLine, yLine);
          ctx.strokeStyle = dataset.backgroundColor[index];
          ctx.stroke();

          //draw text

          ctx.font =
            window.innerWidth < 600 ? "bold 15px Arial" : "bold 20px Arial";

          //position of text
          ctx.textAlign = textAlignment;
          ctx.textBaseline = "middle";
          ctx.fillStyle = dataset.backgroundColor[index];
          ctx.fillText(chart.data.labels[index], xLine + extraXLine, yLine);
          ctx.fillText(
            `${dataset.data[index]} gr`,
            xLine + extraXLine + textGap,
            yLine + (window.innerWidth < 600 ? 15 : 25)
          );
        });
      });
    },
  };
}
