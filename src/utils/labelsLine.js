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

          const xLine = x >= halfWidth ? x + 60 : x - 60;
          const yLine = y >= halfHeight ? y + 60 : y - 60;
          const extraXLine = x >= halfWidth ? 60 : -60;
          const textGap = x >= halfWidth ? 5 : -5;
          const textAlignment = x >= halfWidth ? "left" : "right";
          const outOfDiv = y >= 230 ? -50 : 0;

          ctx.beginPath();
          ctx.lineWidth = 3;
          ctx.moveTo(x, y);
          ctx.lineTo(xLine, yLine);
          ctx.lineTo(xLine + extraXLine, yLine);
          ctx.strokeStyle = dataset.backgroundColor[index];
          ctx.stroke();

          //draw text

          ctx.font = "bold 20px Arial";

          //position of text
          ctx.textAlign = textAlignment;
          ctx.textBaseline = "middle";
          ctx.fillStyle = dataset.backgroundColor[index];
          ctx.fillText(chart.data.labels[index], xLine + extraXLine, yLine);
          ctx.fillText(
            `${dataset.data[index]} gr`,
            xLine + extraXLine + textGap,
            yLine + 25 + outOfDiv
          );
        });
      });
    },
  };
}
