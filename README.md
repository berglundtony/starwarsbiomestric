# starwarsbiomestric
Fetch functionality by getting information from a web API by Java script

Övning 10: JavaScript och Webb API:er
Öva på att kalla på API:er och presentera data i DOM:en.
Teori
API står för Application Programming Interface. Ett webb api betår av en eller flera publika
endpoints. Oftast används http protokollet. Och då är en endpoint helt enkelt en uri (webbadressen)
till vart den data vi vill hämta ligger på servern.
Hela systemet bygger på request och response. Ett exempel vi skickar ett request till endpointen
https://api.github.com/users/Lexicon-NA21/repos. Vi får då tillbaks ett respons med alla repositories som är
upplagda för klassen. Olika apier stödjer olika data format json och xml är de vanligaste.
Om vi till exempel vill bygga en hemsida för väderprognoser så kan vi göra förfrågan (requests) till en
endpoint i MetaWeathers API istället för att samla data själva.
Det här möjliggör att vi kan använda oss av de resurser (data) som finns på apiet oberoende av vilket
programmeringsspråk vi utvecklar med och oberoende av vilket språk api:et är byggt med.
URI står för Uniform Resource Identifier och används för att göra förfrågan till API-bibliotek.
 https://example.com/api/people?name=Kalle#nose
 \___/ \_________/\_________/ \________/ \__/
 | | | | |
 schema authority sökväg fråga fragment
HTTP request methods även kallat HTTP-verb anger vilken action man vill utföra med sin förfrågan.
De fem vanligaste visas i tabellen nedan. Om vi till exempel vill hämta data så gör man ett GET
request.
Det enda ni behöver använda er av i den här övningen är GET!
HTTP-VERB CRUD
POST Create
GET Read
PUT Update/Replace (full update)
PATCH Update/Modify (partiell update)
DELETE Delete
Request/response body är datat som skickas, oftast i JSON format.
{
 "object": {
 "a": "b",
 "c": "d",
 "e": "f"
2
 },
 "array": [
 1,
 2
 ],
 "string": "Hello World"
}
Postman är ett program som kan användas till att anropa api:er när man utvecklar.
https://www.postman.com/downloads/
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
