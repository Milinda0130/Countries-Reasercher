

loadItems();

async function loadItems() {

    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        // console.log(element);
        body += `


            
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png
            } alt="">
                  <div class="card-body">
                  <h2>${element.name.common}</h2>
                  <h2>${element.continents}</h2>
                     <a href="${element.maps.googleMaps}" target="_blank" class="btn btn-primary mt-2">View on Google Map</a>
                    <p class="card-text">${element.capital}</p>
                  </div>
                </div>
              </div>
              
        `;
    });


     
    // console.log(body);

    document.getElementById("row").innerHTML = body;

}


async function Search() {
  let country = document.getElementById("country").value;
  console.log(country);

  try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await res.json();

      let body = "";
      data.forEach(element => {
          body += `
              <div class="col-12 col-md-8 mx-auto mb-4">
    <div class="card shadow-lg" style="border-radius: 20px">
 <img src="${element.flags.png}" alt="Flag of ${element.name.common}" class="card-img-top" style="border-top-left-radius: 10px; border-top-right-radius: 20px; height: 300px">
                      <div class="card-body text-center">
                <h2 class="card-title">${element.name.common}</h2>

                <h4 class="text-muted">${element.region} - ${element.subregion}</h4>
                                              <p><strong>Capital:</strong> ${element.capital ? element.capital[0] : "N/A"}</p>
                          <p><strong>Population:</strong> ${element.population.toLocaleString()}</p>
                          
                    <p><strong>Area:</strong> ${element.area.toLocaleString()} km²</p>
                          
                    <p><strong>Currencies:</strong> ${Object.values(element.currencies || {})
                                       .map(currency => `${currency.name} (${currency.symbol})`).join(", ")}</p>
           <a href="${element.maps.googleMaps}" target="_blank" class="btn btn-primary mt-2">View on Google Map</a>
                      </div>
                  </div>
              </div>
          `;
      });

      document.getElementById("row").innerHTML = body;
  } catch (error) {
      console.error("Error fetching country data:", error);
      document.getElementById("row").innerHTML = `<p class="text-danger">Could not fetch country data. Please try again.</p>`;
  }
}



