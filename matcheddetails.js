var readytowear = [
    {
        name: "Sunset",
        searchname: "argishti",
        code: "argishti earcuff",
        photo: "imagegold/argishti.png",
        price: "10250",
        material: "Gold plated 925 silver",
        gif: "image/tutor.gif"

    },
    {
        name: "Sunset",
        searchname: "large",

        photo: "imagegold/argishti.png",
        price: "10250",
        material: "Gold plated 925 silver",
        gif: "image/tutor.gif"
    },
    {
        name: "Sunset",
        searchname: "medium",

        photo: "imagegold/argishti.png",
        price: "10250",
        material: "Gold plated 925 silver",
        gif: "image/tutor.gif"
    },

]


const showready = (readytowear) => {   //display ready to wear model model

    document.getElementById("readyToWearSect").innerHTML = `
     ${readytowear.map(function (search) {

        return `<div class="cellforready" data-search=${search.searchname} >
         <img data-price=${search.price} class="readtToWearImg"  src="${search.photo}"   >
         
         <div class="readybtnwrapper">
         <p class="price">${search.material}</p>
         <p id="styleindicator">${search.price} AMD</p>
         <button class="btn for ready item" data-itemcode=${search.code} >Buy</button>

         <p id="styleindicator">Or create your version.
         Choose details</p>
         <button  class="btn for ready item"  id="detailfilterbtn" data-search=${search.searchname} >Details</button>
         <p id="styleindicator">and compose on Canvas</p>
         <a href="newindex.html" class="calltodesign" id="calltodesignlink">Canvas</a>        
          </div>

         <img  class="tutorGif"  src="${search.gif}"   >
         
     </div>
     
     
     `
    }).join("")

        }`

}

showready(readytowear)









var styles = [
    {
        name: "Mannequins",
        searchname: "mannequin ear argishti",

        photo: "image/mannequinicon.png"

    },
    {
        name: "Earcuff earrings ",
        searchname: "chainearcuff argishti",

        photo: "image/earcuffchain.png"

    },


    {
        name: "Hoops",
        searchname: "hoop",


        photo: "image/hoopicon.png"

    },

    {
        name: "Climber earrings",
        searchname: "climber",
        photo: "image/climbericon.png"

    },

    {
        name: "Earcuffs",
        searchname: "earcuffs argishti",
        photo: "image/earcufficon.png"

    },

    {
        name: "Connectors",
        searchname: "connector",
        photo: "image/connecticon.png"

    },
    {
        name: "Drop earrings ",
        searchname: "drop",
        photo: "image/dropearringicon.png"

    },

    {
        name: "Small size",
        searchname: "small argishti",

        photo: "image/studicon.png"

    },
    {
        name: "Medium size ",
        searchname: "medium",

        photo: "image/mediumdetailicon2.png"

    },
    {
        name: "Large size",
        searchname: "large",

        photo: "image/largedetailicon.png"

    },
    {
        name: "Rings",
        searchname: "rings",
        photo: "image/ringsicon.png"

    },

    {
        name: "Connected rings",
        searchname: "rings",
        photo: "image/doubleringicon.png"

    },

    {
        name: "Sea",
        searchname: "sea",

        photo: "image/seaicon.png"

    },
    /* {
         name: "Letters",
         searchname: "letters",
 
         photo: "image/lettericon.png"
 
     },*/

    {
        name: "Butterflies",
        searchname: "butterflies",

        photo: "image/butterflyicon.png"

    },

    {
        name: "Pearls",
        searchname: "pearls",

        photo: "image/pearlicon.png"

    },



    {
        name: "Sky",
        searchname: "sky",

        photo: "image/skyicon.png"

    },


    {
        name: "Nature",
        searchname: "nature",

        photo: "image/flowericon.png"

    },
    {
        name: "Hearts",
        searchname: "hearts",

        photo: "image/hearticon.png"

    },

    /* {
         name: "Gems",
         searchname: "gems",
 
         photo: "image/gemicon.png"
 
     },*/



    {
        name: "Zodiac",
        searchname: "zodiac",

        photo: "image/zodiac.png"

    },



    {
        name: "Ring bracelets",
        searchname: "bracelet",
        photo: "image/ringbraceleticon.png"

    },
    /*{
        name: "Helix bracelets",
        searchname: "bracelet",
        photo: "image/helixbraceleticon.png"

    },*/
    {
        name: "Bracelets",
        searchname: "bracelet",
        photo: "image/bracelets.png"

    },

    {
        name: "Necklaces",
        searchname: "necklaces",
        photo: "image/necklaceicon.png"

    }



]


