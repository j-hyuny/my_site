$(window).ready(function () {
  draw(100, '.pie-chart1', '#3CACFF')
  draw(95, '.pie-chart2', '#FF9F0D')
  draw(70, '.pie-chart7', '#E7A328')
})

function draw(max, classname, colorname) {
  var i = 1
  var func1 = setInterval(function () {
    if (i < max) {
      color1(i, classname, colorname)
      i++
    } else {
      clearInterval(func1)
    }
  }, 10)
}
function color1(i, classname, colorname) {
  $(classname).css({
    background: 'conic-gradient(' + colorname + ' 0% ' + i + '%, #ffffff ' + i + '% 100%)'
  })
}

function replay() {
  draw(100, '.pie-chart1', '#3CACFF')
  draw(95, '.pie-chart2', '#FF9F0D')
  draw(70, '.pie-chart7', '#E7A328')
}
