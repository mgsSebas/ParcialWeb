const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_personaje")
    let valor = inputTexto.value
    peticionApi(valor)
    console.log(valor)
}

const peticionApi = (id) => {
    const baseURL = 'https://thronesapi.com'
    const endpoint = `/api/v2/Characters/${id}`
    const url = `${baseURL}${endpoint}`

    fetch(url)
        .then(response => response.json())
        .then(data  => printData(data))
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

const printData = (data) => {
    let respuesta = document.getElementById('show_info')
    respuesta.innerHTML = `
            <h2>${data.fullName}</h2>
            <p><b><i>Titulo:</i></b> ${data.title}</p>
            <p><b><i>Familia:</i></b> ${data.family}</p>
            <img src="${data.imageUrl}" alt="${data.fullName}" style="width: 200px">
    `
}
