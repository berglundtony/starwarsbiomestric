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

   const getInfo = () => {
      fullUri += character.value;
      fetch(fullUri).then(
        res => res.json()).then(
        data => {
       /* console.log(data);
          console.log(data.result[0]);
          console.log(data.result[0].properties);
          console.log(data.result[0].properties.mass); */
          repos = data.result;

          output.innerHTML = '';
          output.value += 
         `          Name: ${repos[0].properties.name}.
          Description: ${repos[0].description}.
          Weight: ${repos[0].properties.mass} kilo, Lenght: ${repos[0].properties.height} cm.
          Haircolor: ${repos[0].properties.hair_color}, 
          Skincolor: ${repos[0].properties.skin_color}, 
          Eyecolor: ${repos[0].properties.eye_color}.`
        })
        .catch(err => console.log(err));
   };
btn.addEventListener('click', getInfo);






