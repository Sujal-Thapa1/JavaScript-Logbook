const longitude = document.querySelector('.longitude');
const latitude = document.querySelector('.latitude');
const weather_icon = document.querySelector('.weather-icon');

const weather = () => {
    const input = document.querySelector('#number').value;
    const target = document.querySelector('#second');

    target.innerHTML = '';

    if (!latitude || !longitude) {
        console.error("Latitude or Longitude is not defined.");
        return;
    }

    const data = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        data.then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        data.then(value => value.json()).then (value2 => 
            value2.forEach(Element => {
            data.hourly.temperature_2m.forEach((temp, index) => {
                const tempDiv = document.createElement('div');
                const temph4 = document.createElement('h4');
                const tempP = document.createElement('p');
                temph4.textContent = `Hour ${index}:`;
                tempP.textContent = `Temperature: ${temp}°C`;
                tempDiv.appendChild(temph4);
                tempDiv.appendChild(tempP);
                target.appendChild(tempDiv);
            });
        });
    );
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
