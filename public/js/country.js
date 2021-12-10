const getName = (e) => {
    const country = e.id.toLowerCase()

    fetch("http://localhost:3000/country?name=" + country).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error)
            } else {
                // console.log(data.Flag)
                const main = document.querySelector('.side-section .country-main')

                main.innerHTML = `
                <button class="btn-close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="country-flag center">
                    <img src=${data.Flag}>
                </div>
                <div class="country-info">
                    <div class="as-title">
                        <h1 class="country-name">
                            ${data.Country}
                            <i class="fas fa-volume-up pronouncer" title="Pronounce name"></i>
                        </h1>
                        // <h3 class="country-name-alt"></h3>
                    </div>

                    <div class="mb">
                        <label>Capital</label>
                        <p class="country-capital val">${data.Capital}</p>
                    </div>

                    <div class="mb">
                        <label>Region</label>
                        <p class="country-region val">${data.Region}</p>
                    </div>

                    <div class="mb">
                        <label>Continent</label>
                        <p class="country-continent val">${data.Continent}</p>
                    </div>

                    <div class="mb">
                        <label>Area</label>
                        <p class="country-area val">${data.Area_sqkm}</p>
                    </div>

                    <div class="mb">
                        <label>Population</label>
                        <p class="country-population val">${data.Population}</p>
                    </div>
                </div>
                `
            }

            document.querySelector('.side-section').classList.add("show")
            document.querySelector('.btn-close').addEventListener('click', () => {
                document.querySelector('.side-section').classList.remove("show")
            })

            document.querySelector('.section-2-wrapper').classList.add('show-country')
            document.querySelector('.btn-close').addEventListener('click', () => {
                document.querySelector('.section-2-wrapper').classList.remove('show-country')
            })

            // Pronouncer
            const pronouncer = document.querySelector('.pronouncer')

            pronouncer.addEventListener('click', () => {
                window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.querySelector('.as-title .country-name').textContent));
            })
            // End of Pronouncer
        })
    })
}