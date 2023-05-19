fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(json => {
        const random = json[Math.floor(Math.random() * json.length)];
        document.querySelector('.flagimg').src = random.flags.png;

        const input = document.querySelector(".inp");
        document.querySelector('.btn').addEventListener('click', function () {
            if (json.name == input.value) {
                Swal.fire({
                    title: 'Təbriklər, düzgün tapdınız...',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      left top
                      no-repeat
                    `
                })
            }
            else {
                swal.fire("Ölkə adı düzgün deyil!");
            }
        })
    });