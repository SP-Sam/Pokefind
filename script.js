function buscar() {
    let cidade = document.getElementById('txtCidade')
    cidade = cidade.value
    let infos = document.getElementById('infos')

    const key = 'a44c0af919df0567d6ebdbfa94a2ae13'

    let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`

    fetch(weatherUrl)
    .then(function (response) {
        if (!response.ok) throw new Error('Erro ao efetuar a requisição', alert('Local Inválido, preencha com a cidade correta!'))
        return response.json()
    })
    .then(function (data) {
       console.log(data)

       let temperatura = data.main.temp - 273.15
       let temperatura2 = parseFloat(temperatura.toFixed(2))
       let tempo = data.weather[0].main

        if (tempo === 'Rain') {
            let pokemonUrl = 'https://pokeapi.co/api/v2/type/electric'

            fetch(pokemonUrl)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                for (let i = 0; i < data.pokemon.length; i++) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
                }

            infos.innerHTML = `
            Está <strong>chovendo</strong> em ${cidade}
            <br><br>
            Temperatura em <strong>${cidade}:</strong> ${temperatura2}°C
            <br><br>
            Em <strong>${cidade}</strong> você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
            <br><br>
            Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Elétrico</strong>
            <br><br>

            `
            })
            .catch(function (error) {
                console.error(error)
            })
        } else if (temperatura < 5) {
           let pokemonUrl = 'https://pokeapi.co/api/v2/type/ice'
            
           fetch(pokemonUrl)
           .then(function (response) {
               return response.json()
           })
           .then(function (data) {
            for (let i = 0; i < data.pokemon.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
            }
             
            infos.innerHTML = `
            <strong>Não está chovendo</strong> em ${cidade}
            <br><br>
            Temperatura em ${cidade}: <strong>${temperatura2}°C</strong>
            <br><br>
            Em ${cidade} você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
            <br><br>
            Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Gelo</strong>
            <br><br>
            `
           })
           .catch(function (error) {
            console.error(error)
           })

       } else if (temperatura >= 5 && temperatura < 10) {
           let pokemonUrl = 'https://pokeapi.co/api/v2/type/water'

           fetch(pokemonUrl)
           .then(function (response) {
               return response.json()
           })
           .then(function (data) {
            for (let i = 0; i < data.pokemon.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
            }
             
            infos.innerHTML = `
            <strong>Não está chovendo</strong> em ${cidade}
            <br><br>
            Temperatura em ${cidade}: <strong>${temperatura2}°C</strong>
            <br><br>
            Em ${cidade} você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
            <br><br>
            Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Gelo</strong>
            <br><br>
            `
           })
           .catch(function (error) {
            console.error(error)
           })

       } else if (temperatura >= 12 && temperatura < 15) {
           let pokemonUrl = 'https://pokeapi.co/api/v2/type/grass'

           fetch(pokemonUrl)
           .then(function (response) {
               return response.json()
           })
           .then(function (data) {
            for (let i = 0; i < data.pokemon.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
            }
             
            infos.innerHTML = `
            <strong>Não está chovendo</strong> em ${cidade}
            <br><br>
            Temperatura em ${cidade}: <strong>${temperatura2}°C</strong>
            <br><br>
            Em ${cidade} você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
            <br><br>
            Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Gelo</strong>
            <br><br>
            `
           })
           .catch(function (error) {
            console.error(error)
           })

       } else if (temperatura >= 15 && temperatura < 21) {
           let pokemonUrl = 'https://pokeapi.co/api/v2/type/ground'

           fetch(pokemonUrl)
           .then(function (response) {
               return response.json()
           })
           .then(function (data) {
            for (let i = 0; i < data.pokemon.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
            }
             
            infos.innerHTML = `
            <strong>Não está chovendo</strong> em ${cidade}
            <br><br>
            Temperatura em ${cidade}: <strong>${temperatura2}°C</strong>
            <br><br>
            Em ${cidade} você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
            <br><br>
            Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Gelo</strong>
            <br><br>
            `
           })
           .catch(function (error) {
            console.error(error)
           })
           
       } else if (temperatura >= 23 && temperatura < 27) {
           let pokemonUrl = 'https://pokeapi.co/api/v2/type/bug'

           fetch(pokemonUrl)
           .then(function (response) {
               return response.json()
           })
           .then(function (data) {
            for (let i = 0; i < data.pokemon.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
            }
             
            infos.innerHTML = `
            <strong>Não está chovendo</strong> em ${cidade}
            <br><br>
            Temperatura em ${cidade}: <strong>${temperatura2}°C</strong>
            <br><br>
            Em ${cidade} você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
            <br><br>
            Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Gelo</strong>
            <br><br>
            `
           })
           .catch(function (error) {
            console.error(error)
           })
           
       } else if (temperatura >= 27 && temperatura <= 33) {
           let pokemonUrl = 'https://pokeapi.co/api/v2/type/rock'

           fetch(pokemonUrl)
           .then(function (response) {
               return response.json()
           })
           .then(function (data) {
            for (let i = 0; i < data.pokemon.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
            }
             
            infos.innerHTML = `
            <strong>Não está chovendo</strong> em ${cidade}
            <br><br>
            Temperatura em ${cidade}: <strong>${temperatura2}°C</strong>
            <br><br>
            Em ${cidade} você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
            <br><br>
            Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Gelo</strong>
            <br><br>
            `
           })
           .catch(function (error) {
            console.error(error)
           })
           
       } else if (temperatura > 33) {
           let pokemonUrl = 'https://pokeapi.co/api/v2/type/fire'

           fetch(pokemonUrl)
           .then(function (response) {
               return response.json()
           })
           .then(function (data) {
            for (let i = 0; i < data.pokemon.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
            }
             
            infos.innerHTML = `
            <strong>Não está chovendo</strong> em ${cidade}
            <br><br>
            Temperatura em ${cidade}: <strong>${temperatura2}°C</strong>
            <br><br>
            Em ${cidade} você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
            <br><br>
            Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Gelo</strong>
            <br><br>
            `
           })
           .catch(function (error) {
            console.error(error)
           })
           
       } else if (temperatura > 21 && temperatura > 10) {
           let pokemonUrl = 'https://pokeapi.co/api/v2/type/normal'

           fetch(pokemonUrl)
           .then(function (response) {
               return response.json()
           })
           .then(function (data) {
               for (let i = 0; i < data.pokemon.length; i++) {
                   const j = Math.floor(Math.random() * (i + 1));
                   [data.pokemon[i], data.pokemon[j]] = [data.pokemon[j], data.pokemon[i]];
                }
                
                infos.innerHTML = `
                <strong>Não está chovendo</strong> em ${cidade}
                <br><br>
                Temperatura em ${cidade}: <strong>${temperatura2}°C</strong>
                <br><br>
                Em ${cidade} você pode encontrar um <strong>${data.pokemon[0].pokemon.name}</strong>
                <br><br>
                Nessas condições climáticas podemos encontrar pokémons do tipo <strong>Gelo</strong>
                <br><br>
                `
           })
           .catch(function (error) {
            console.error(error)
           })
       }

    })
    .catch(function (error) {
        console.error(error)
    })
    
}
