

 function initMap() {
    const loc = { lat: 19.124720, lng: 77.293450 };
     const map=new google.maps.Map(document.querySelector('.map')
     , {
         zoom: 12,
         center: loc
     });

     const marker = new google.maps.Marker( { position: loc, map: map });
    }

    // smooth scrooling 
    $ ('#navbar a, .btn').on('click',function(event) {

        if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
         
        $('html, body').animate(

            {
                scrollTop: $(hash).offset().top -100
            },
            800
        );

    }

});
        
        
    