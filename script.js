// Ambil elemen DOM
const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('getWeather');
const weatherDisplay = document.getElementById('weather');
const locationDisplay = document.getElementById('location');
const temperatureDisplay = document.getElementById('temperature');
const descriptionDisplay = document.getElementById('description');
const iconDisplay = document.getElementById('icon');

// API Key OpenWeather (ganti dengan API key Anda)
const API_KEY = 'fc6dce9d8d2fa1176db492b1862d175a';

// Fungsi untuk mengambil data cuaca
async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`);

    if (!response.ok) {
      throw new Error('Kota tidak ditemukan!');
    }

    const data = await response.json();

    // Update DOM dengan data cuaca
    locationDisplay.textContent = `${data.name}, ${data.sys.country}`;
    temperatureDisplay.textContent = `Suhu: ${data.main.temp}°C`;
    descriptionDisplay.textContent = `Kondisi: ${data.weather[0].description}`;
    iconDisplay.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherDisplay.classList.remove('hidden');
  } catch (error) {
    alert(error.message);
  }
}

// Tambahkan event listener pada tombol
getWeatherButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert(' input nama kota yang ingin anda cek!');
  }
});
