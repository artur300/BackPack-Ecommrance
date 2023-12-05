
// scripts/slide_menu.js

const countries = 
[
    {
        name: 'Israel',
        cities: [
            'Jerusalem', 'Tel Aviv', 'Haifa', 'Beersheba', 'Netanya', 'Ashdod', 'Herzliya', 'Rishon LeZion', 'Petah Tikva', 'Holon', 'Rehovot', 'Bat Yam', 'Raanana', 'Hod HaSharon', 'Kfar Saba', 'Ramat Gan', 'Modiin', 'Gedera', 'Eilat', 'Tiberias'
        ]
    },
    {
        name: 'United States',
        cities: [
            'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Columbus', 'Indianapolis', 'Seattle', 'Denver', 'Washington', 'Boston', 'Atlanta'
        ]
    },
    {
        name: 'Russia',
        cities: [
            'Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod', 'Kazan', 'Chelyabinsk', 'Omsk', 'Samara', 'Rostov-on-Don', 'Ufa', 'Volgograd', 'Krasnoyarsk', 'Perm', 'Voronezh', 'Saratov', 'Krasnodar', 'Tolyatti', 'Izhevsk', 'Ulyanovsk'
        ]
    },
    {
        name: 'China',
        cities: [
            'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chongqing', 'Tianjin', 'Wuhan', 'Chengdu', 'Nanjing', 'Hangzhou', 'Xian', 'Shijiazhuang', 'Zhengzhou', 'Changsha', 'Jinan', 'Qingdao', 'Suzhou', 'Dalian', 'Fuzhou', 'Hefei'
        ]
    },
    {
        name: 'Germany',
        cities: [
            'Berlin', 'Hamburg', 'Munich', 'Frankfurt', 'Cologne', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Hannover', 'Nuremberg', 'Bremen'
        ]  
    }
    
];




function showDropDown(clickedElement, countryList, regionList) 
{
        const dropdownList = clickedElement.nextElementSibling;
        const icon = clickedElement.querySelector('.icon');
        const selectedText = clickedElement.querySelector('.select');

        if (dropdownList.style.opacity === '1') 
        {
            dropdownList.style.opacity = '0';
            dropdownList.style.visibility = 'hidden';
            icon.classList.remove('rotate-up');
        } 
        else 
        {
            dropdownList.style.opacity = '1';
            dropdownList.style.visibility = 'visible';
            icon.classList.add('rotate-up');

            // Check if it's the country dropdown or region dropdown
            let list;

            if (dropdownList.id === 'countryList') 
            {
                list = countryList;
            } 
            else 
            {
                list = regionList;
            }

            // Populate dropdown options
            list.innerHTML = '';
            list.parentElement.querySelector('.select').textContent = 'Select'; // Reset the selected text

            countries.forEach(country => {
                const listItem = document.createElement('div');
                listItem.className = 'dropdown-list_item';
                listItem.textContent = country.name;
                listItem.addEventListener('click', () => {
                    selectedText.textContent = country.name;
                    // If it's the country dropdown, populate the region dropdown
                    if (dropdownList.id === 'countryList') 
                    {
                        populateRegionDropdown(country.cities);
                    }
                });
                list.appendChild(listItem);
            });
        }
}

// Function to populate the region dropdown
function populateRegionDropdown(cities) 
{
    const regionList = document.getElementById('regionList');
    regionList.innerHTML = '';
    cities.forEach(city => {
        const listItem = document.createElement('div');
        listItem.className = 'dropdown-list_item';
        listItem.textContent = city;
        listItem.addEventListener('click', () => {
            document.getElementById('region').textContent = city;
        });
        regionList.appendChild(listItem);
    });
}


// Initial population of the country dropdown
document.addEventListener('DOMContentLoaded', () => {
    const countryList = document.getElementById('countryList');
    const regionList = document.getElementById('regionList');
    populateCountryDropdown(countryList);
    populateRegionDropdown([]); // Initially, region dropdown is empty
});



// Function to populate the country dropdown
function populateCountryDropdown(countryList) 
{
    countries.forEach(country => 
        {
            const listItem = document.createElement('div');
            listItem.className = 'dropdown-list_item';
            listItem.textContent = country.name;
            listItem.addEventListener('click', () => {
                document.getElementById('Country').textContent = country.name;
                populateRegionDropdown(country.cities);
        });
        countryList.appendChild(listItem);
    });
}


