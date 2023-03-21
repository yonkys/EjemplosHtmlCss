((d)=>{
    const   $form = d.querySelector(".contact-fomulario");
    const   $response = d.querySelector(".contact-form-response"); //article del modal de agradecimiento

    //console.log($form);
    $form.addEventListener("submit", e =>{
        e.preventDefault();
        //console.log(e.target);
        //$form.reset(); return;
        fetch("https://formsubmit.co/ajax/adrielpv.41@gmail.com", {
            method: "POST",
            body: new FormData(e.target)//la informacion que se va enviar, e.target: obj que origina el evento
        })  
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then((json) => {
                console.log(json);
                location.hash = "#gracias";
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let errMsg = err.statusText || "Ocurrio un error al enviar, intenta nuevamente"
                $response.querySelector("h3").innerHTML = `Error ${err.status} : ${errMsg}`;
            })
            .finally(()=>{
                setTimeout(() => {
                    location.hash =  "#close";
                }, 3000);
            });
    });
})(document);