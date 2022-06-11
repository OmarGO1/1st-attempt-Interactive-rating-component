window.addEventListener('load', () => {
    var selected;
    document.querySelectorAll('.btn').forEach(element => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.btn').forEach(element2 => {
                element2.classList.remove('btn_secondary');
            });

            element.classList.add('btn_secondary');
            selected = element.getAttribute("id");
        });
    });

    var btn_submit = document.querySelector('#btn_submit')

    btn_submit.addEventListener('click', () => {
        if (selected != undefined) {
            console.log(selected);
            location.replace('ty_pag.html');
            window.localStorage.setItem('rate', selected);
        } else {
            alert('You must select an option');
        }
    })
});

