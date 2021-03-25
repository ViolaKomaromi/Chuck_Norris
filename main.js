

document.querySelector('button').addEventListener('click', (e) => {



    fetch('https://api.chucknorris.io/jokes/random')

        .then(response => response.json())
       

        .then(data => {

            console.log(data);
            let value = data.value;


            document.querySelector('div.container').innerHTML = value;

          let  imgElem = document.querySelector('img');
             imgElem.src = data.icon_url;

        })
        .catch(err => {
            console.error(err);
        });


});

   













