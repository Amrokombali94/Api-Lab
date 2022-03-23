const button = document.querySelector('button')


const buttonClicked = () => {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets')
     .then((res) =>{
         let result = []
         for(let i=0; i < res.data.results.length; i++){
             result.push(res.data.results[i])
             console.log(result)
             axios.get(`https://swapi.dev/api/planets/?search=Alderaan/${result[i]}`)
              .then((res) =>{
                  let h2 =document.createElement("h2")
                  h2.textContent= `${res.data.result[i]}`
                  document.body.appendChild(h2)

              })
            }
     })
}




button.addEventListener('click', buttonClicked)


