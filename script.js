const CORSPROXY_API_KEY = "f14ec467";
const NOAA_API_KEY = "nxVuAiWJgogLIxrabGxNpawhJzcStymS";

(function() {
  const cw1 = document.getElementById('cw1')
  const cw1t = document.getElementById('cw1t')

  cw1.addEventListener("click", async function() {

    const url = `https://www.ncei.noaa.gov/cdo-web/api/v2/stations?limit=${10}`;

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

  const cw2 = document.getElementById('cw2')
  const cw2t = document.getElementById('cw2t')

  cw2.addEventListener("click", async function() {
    const url = `https://www.ncei.noaa.gov/cdo-web/api/v2/locationcategories?limit=${10}`;

    const params = new URLSearchParams({
      key: CORSPROXY_API_KEY,
      url: url,
    })

    const response = await fetch(
      `https://corsproxy.io/?` + params,
      { headers: { token: NOAA_API_KEY } }
    )

    let text = "<table><tr><th>Station ID</th><th>Name</th></tr>";

    const result = await response.json();

    result.results.forEach(st => {
      let id = st.id;
      let name = st.name;
      let latitude = st.latitude;
      let longitude = st.longitude;
      if(id == undefined)
        id = "-";
      if(name == undefined)
        name = "-";
      text += `<tr><td>${id}</td><td>${name}</td></tr>`
    });
    
    text += "</table>";
    cw2t.innerHTML = text;
  })



  const cw3 = document.getElementById('cw3')
  const cw3t = document.getElementById('cw3t')
  const cw3l = document.getElementById('cw3l')
  const cw3di = document.getElementById('cw3di')
  const cw3dx = document.getElementById('cw3dx')
  cw3.addEventListener("click", async function() {
    const limit = cw3l.value;
    const minDate = cw3di.value;
    const maxDate = cw3dx.value;
    let url = `https://www.ncei.noaa.gov/cdo-web/api/v2/stations?limit=${limit}`;
    
    if(minDate != ""){
      url += "&startdate=" + minDate;
    }
    if(maxDate != ""){
      url += "&enddate=" + maxDate;
    }

    console.log(minDate)
    console.log(maxDate)
    console.log(url)

    const params = new URLSearchParams({
      key: CORSPROXY_API_KEY,
      url: url,
    })

    const response = await fetch(
      `https://corsproxy.io/?` + params,
      { headers: { token: NOAA_API_KEY } }
    )
    let text = "<table><tr><th>Station ID</th><th>Name</th><th>Latitude</th><th>Lonitude</th><th>Date min</th><th>Date max</th></tr>";

    const result = await response.json();
    console.log(result)

    if(result.results){
      result.results.forEach(st => {
        let id = st.id;
        let name = st.name;
        let latitude = st.latitude;
        let longitude = st.longitude;
        let mindate = st.mindate;
        let maxdate = st.maxdate;
        if(id == undefined)
          id = "-";
        if(name == undefined)
          name = "-";
        if(latitude == undefined)
          latitude = "-";
        if(longitude == undefined)
          longitude = "-";
        if(mindate == undefined)
          mindate = "-";
        if(maxdate == undefined)
          maxdate = "-";
        text += `<tr><td>${id}</td><td>${name}</td><td>${latitude}</td><td>${longitude}</td><td>${mindate}</td><td>${maxdate}</td></tr>`
      });
      
      text += "</table>";
      cw3t.innerHTML = text;
    }
    else{
      cw3t.innerHTML = "";
    }
  })

})();
