const button = document.querySelector('button')


const buttonClicked = () => {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets')
     .then((res) =>{
         let result = []
         for(let i=0; i < res.data.results.length; i++){
             result.push(res.data.results[i])
             let h2 =document.createElement("h2")
             h2.innerHTML= `${res.data.results[i].name}`
             document.body.appendChild(h2)
             console.log(result)
            }
     })
}




button.addEventListener('click', buttonClicked)


