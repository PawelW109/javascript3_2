(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')

  const answer = document.getElementById('answer')

  cw1.addEventListener("click", async function() {

    const response = await fetch(
      `https://www.ncei.noaa.gov/cdo-web/api/v2/stations`,
      { headers: { 'token': 'nxVuAiWJgogLIxrabGxNpawhJzcStymS' } }
    )
    const result = await response.json();
    console.log(result)
    

  })

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
