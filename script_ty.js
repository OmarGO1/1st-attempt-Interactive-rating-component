var selected = window.localStorage.getItem('rate');
window.addEventListener('load', () => {
    document.querySelector('#rate').innerHTML = `
        You selected ${selected} out of 5
    `
})