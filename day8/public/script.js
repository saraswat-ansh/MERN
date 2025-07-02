document.addEventListener('DOMContentLoaded', () => {
    alert("WELCOME FROM SCRIPT.JS")
})


axios.get('/ht/Customer')
    .then(function (response) {
        const userData = response.data;
        alert('got the data from EXPRESS:' + userData)
    })
    .catch(function (error) {
        console.error('Error fetching user data:', error);
    });