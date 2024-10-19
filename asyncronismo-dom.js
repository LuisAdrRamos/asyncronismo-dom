// Uso de API's

// Link de la coleccion de API's https://github.com/public-api-lists/public-api-lists.git

// link del github de la API https://github.com/shevabam/breaking-bad-quotes.git
// API en cuestion https://api.breakingbadquotes.xyz

// then y catch
fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then((request) => (request.json()))
    .then((data) => {console.log('Frase 1 de Breaking Bad:\n',data,'\n')})

    .catch((error) => {console.log(error)})


// async y await
const getBreakingBadAPI = async () => {
    try {
        let request = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        let data = await request.json()
        console.log('Frase 2 de Breaking Bad:\n',data,'\n');
    } catch (error) {
        console.log(error);
        
    }
}
getBreakingBadAPI()