const submitbtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const real_val = document.getElementById('real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle');

const getInfo = async (event) => {
    event.preventDefault();
    let cityvalue = cityName.value;
    if (cityvalue === '') {
        city_name.innerText = `input can't be empty`;
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=fa45092194ef451c45d3d1ee76ba24bd`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main; 
            if(tempMood == "Sunny"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }else if(tempMood == "Rainy"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud'></i>"
            }

            datahide.classList.remove('data_hide');

            console.log(data);


        } catch (error) {
            city_name.innerText = `invaild city name`;
            datahide.classList.add('data_hide');
        }

    }




}

submitbtn.addEventListener('click', getInfo);
