const addForm = document.querySelector('form');
const nameInput = document.querySelector('input');
const container = document.querySelector('section');


function putTheThingInTheView(res) {
    container.innerHTML = ''
    nameInput.value = ''

    res.data.forEach((stateName, index) => {
        container.innerHTML += `<p name=${index}>${stateName}</p>`
    })

    document.querySelectorAll('p').forEach(element => {
        const theIndexValue = element.getAttribute('name');

        element.addEventListener('click', () => {
            axios
                .delete(`/api/students/${theIndexValue}`)
                .then(res => {
                    putTheThingInTheView(res)
                })
        })
    })
}

function submitName (e) {
    EventTarget.preventDefault()

    axios.post('/api/country', {name:countryInput.value})
    .then(res => {
        putTheThingInTheView(res)
        .catch(err) => console.log(err)
    })
}