<template>
  <ul role="list" class="flex flex-wrap justify-center">
    <li
      class="mx-4 mt-8 flex flex-col rounded-xl border-2 bg-slate-50 px-4 py-4 dark:bg-slate-900"
    >
      <h3 class="text-center text-xl dark:text-white">
        Total locked DEV amount
      </h3>
      <div id="dev_chart"></div>
    </li>
    <li
      class="mx-4 mt-8 flex flex-col rounded-xl border-2 bg-slate-50 px-4 py-4 dark:bg-slate-900"
    >
      <h3 class="text-center text-xl dark:text-white">
        Total minted DAO tokens
      </h3>
      <div id="token_chart"></div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Slider',
  mounted() {
    function chart(id, startX, startY) {
      const margin = { top: 50, right: 10, bottom: 30, left: 50 }
      const width = 600 - margin.left - margin.right
      const height = 400 - margin.top - margin.bottom

      const svg = d3
        .select(`#${id}`)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      d3.json(`./data/${id}.json`).then(function (_data) {
        const data = []
        _data.forEach((d) => {
          data.push({ ...d, date: d3.timeParse('%Y-%m-%d')(d.date) })
        })

        const keys = ['mainnet', 'arb', 'polygon']
        const color = d3
          .scaleOrdinal()
          .domain(keys)
          .range(['#FF3815', '#D500E6', '#5B8BF5'])
        const stackedData = d3.stack().keys(keys)(data)

        const x = d3
          .scaleTime()
          .domain([
            startX,
            d3.max(data, function (d) {
              return d.date
            }),
          ])
          .range([0, width])

        svg
          .append('g')
          .attr('transform', `translate(0, ${height})`)
          .call(d3.axisBottom(x).ticks(5))

        const y = d3
          .scaleLinear()
          .domain([
            startY,
            d3.max(data, function (d) {
              return +(d.mainnet + d.arb + d.polygon)
            }),
          ])
          .range([height, 0])

        svg.append('g').call(d3.axisLeft(y).ticks(5))

        const areaChart = svg.append('g').attr('clip-path', 'url(#clip)')
        const area = d3
          .area()
          .x(function (d) {
            return x(d.data.date)
          })
          .y0(function (d) {
            return d[0] < startY ? y(startY) : y(d[0])
          })
          .y1(function (d) {
            return d[1] < startY ? y(startY) : y(d[1])
          })

        areaChart
          .selectAll('mylayers')
          .data(stackedData)
          .join('path')
          .attr('class', function (d) {
            return `${id}_area ${id}_${d.key}`
          })
          .style('fill', function (d) {
            return color(d.key)
          })
          .style('opacity', 0.8)
          .attr('d', area)

        const highlight = function (event, d) {
          d3.selectAll(`.${id}_area`).style('opacity', 0.1)
          d3.select(`.${id}_${d}`).style('opacity', 0.8)
        }

        const noHighlight = function (event, d) {
          d3.selectAll(`.${id}_area`).style('opacity', 0.8)
        }

        const size = 15
        svg
          .selectAll('myrect')
          .data(keys)
          .join('rect')
          .attr('x', 20)
          .attr('y', function (d, i) {
            return i * (size + 5)
          })
          .attr('width', size)
          .attr('height', size)
          .style('fill', function (d) {
            return color(d)
          })
          .style('opacity', 0.8)
          .on('mouseover', highlight)
          .on('mouseleave', noHighlight)

        svg
          .selectAll('mylabels')
          .data(keys)
          .join('text')
          .attr('x', 25 + size * 1.2)
          .attr('y', function (d, i) {
            return i * (size + 5) + size / 2
          })
          .style('fill', function (d) {
            return color(d)
          })
          .style('opacity', 0.8)
          .text(function (d) {
            return d
          })
          .attr('text-anchor', 'left')
          .style('alignment-baseline', 'middle')
          .on('mouseover', highlight)
          .on('mouseleave', noHighlight)
      })
    }
    chart('dev_chart', new Date(2020, 0, 1), 0)
    chart('token_chart', new Date(2020, 0, 1), 1560)
  },
}
</script>
