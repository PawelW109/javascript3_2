const CORSPROXY_API_KEY = "f14ec467";
const NOAA_API_KEY = "nxVuAiWJgogLIxrabGxNpawhJzcStymS";

(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw1t = document.getElementById('cw1t')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')

  const answer = document.getElementById('answer')

  cw1.addEventListener("click", async function() {

    const url = `https://www.ncei.noaa.gov/cdo-web/api/v2/stations?limit=${100}`;

    const params = new URLSearchParams({
      key: CORSPROXY_API_KEY,
      url: url,
    })

    const response = await fetch(
      `https://corsproxy.io/?` + params,
      { headers: { token: NOAA_API_KEY } }
    )
    let text = "<table><tr><th>Station ID</th><th>Name</th><th>Latitude</th><th>Lonitude</th></tr>";

    const result = await response.json();
    console.log(result)

    result.results.forEach(st => {
      let id = st.id;
      let name = st.name;
      let latitude = st.latitude;
      let longitude = st.longitude;
      if(id == undefined)
        id = "-";
      if(name == undefined)
        name = "-";
      if(latitude == undefined)
        latitude = "-";
      if(longitude == undefined)
        longitude = "-";
      text += `<tr><td>${id}</td><td>${name}</td><td>${latitude}</td><td>${longitude}</td></tr>`
    });
    
    text += "</table>";
    cw1t.innerHTML = text;

  })

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
