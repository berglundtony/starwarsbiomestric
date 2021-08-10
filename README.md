# starwarsbiomestric
Fetch functionality by getting information from a web API by Java script

Uppgift 1: Star Wars Biometrics
The Star Wars API innehåller mängder av data gällande karaktärer, arter, rymdskepp, planeter osv
från Star Wars-filmerna. Dokumentation: https://www.swapi.tech/documentation
Man kan till exempel lista alla arter genom att göra en GET-request:
https://www.swapi.tech/api/people
Man kan också göra en GET-request med en query string för att få en specifik karaktär:
https://www.swapi.tech/api/people/?name=chewbacca
Er uppgift är att bygga en sida där användaren skriver in namnet på en Star Wars-karaktär och får
tillbaka biometrisk data. Några exempelnamn är Luke Skywalker, R2-D2, Darth Vader, Leia Organa,
Chewbacca.
1. Skapa en textruta för att ta mot namnet. Använd <input></input> och ge den
attributen type=”text”.
2. Skapa en knapp med <button></button>.
3. Skapa en textruta för output med <textarea></textarea> och ge den minst 5 fem
rader med rows-attributet.
4. Skriv en funktion i js-filen som:
a. läser av värdet av input-textrutan och lägger till den till strängen
”https://www.swapi.tech/api/people/?name=” så vi får en fullständig URI,
b. använder URI:n som parameter till en fetch-request,
c. och skriver ut informationen till output-textrutan.
function getApi(){
/*Skriv din kod här*/
fetch(fullUri)
 .then(res => res.json())
 .then(data =>
 {
/*Och här*/
 })
 .catch(err => console.log(err))
 }
3
data är ett JSON-objekt som innehåller all hämtad information om karaktären. Kolla i
dokumentationen eller skriv ut med console.log för att se hur objektet är uppbyggt,
Plocka ut height, mass, gender och hair_color och använd dem för att bygga en sträng
med hjälp av template literals (bakåtvända fnuttar).
Exempel: let s = `Value 1: ${value1}, Value 2: ${value2}`
5. Lägg till en eventlistener som lyssnar på knappen och kör ovanstående funktion vid klick.
