$(function () {
  $('#btn').popover('show');
})

document.getElementById('character').onfocus = function() {HidePopover()};
function HidePopover(){
  $('#btn').popover('hide');
}
  const character = document.querySelector('#character'),
        output = document.querySelector('#output'),
        btn = document.querySelector('#btn');

   let repos = []; 
   let fullUri = 'https://www.swapi.tech/api/people/?name=';  

   const getInfo = async() => {
   fullUri += character.value;
   const res = await fetch(fullUri, {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
});

const data = await res.json()
repos = data.result;
console.log(repos[0].properties.name);

output.innerHTML = '';
output.value += 
         `          Name: ${repos[0].properties.name}.
          Description: ${repos[0].description}.
          Weight: ${repos[0].properties.mass} kilo, Lenght: ${repos[0].properties.height} cm.
          Haircolor: ${repos[0].properties.hair_color}, 
          Skincolor: ${repos[0].properties.skin_color}, 
          Eyecolor: ${repos[0].properties.eye_color}.`
};
btn.addEventListener('click', getInfo);






