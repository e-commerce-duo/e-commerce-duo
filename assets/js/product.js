$(document).ready(function() {
    $('.list').click(function() {
        var value = $(this).attr('data-filter');
        if (value == 'ess') {
            $('.itemBox').show('1000');
        } else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');

        }
    })


    $('list').click(function() {
        $(this).addClass('active')
    })
})

/* array CEREALS */

function Cereals(image, price) {

    this.image = image
    this.price = price

}


var cereals = []
const cereal1 = new Cereals("../assets/image/cereal1.jpg", "40 dt")
const cereal2 = new Cereals("../assets/image/cereal2.png", "20 dt")
const cereal3 = new Cereals("../assets/image/cereal3.jpg", "30 dt")


cereals.push(cereal1, cereal2, cereal3)


/*array seeds*/

function Seeds(image, price) {
    this.image = image
    this.price = price

}

var seeds = []
const seeds1 = new Seeds("../assets/image/seeds1.webp", "40 dt")
const seeds2 = new Seeds("../assets/image/seeds2.jpg", "40 dt")
const seeds3 = new Seeds("../assets/image/SEEDS3.jfif", "40 dt")


seeds.push(seeds1, seeds2, seeds3)



/* array essentials_oil */
function Oil(image, price) {

    this.image = image
    this.price = price

}

var oil = []
const oil1 = new Oil("../assets/image/oil1.jpg", "40 dt")
const oil2 = new Oil("../assets/image/oil2.jpg", "20 dt")
const oil3 = new Oil("../assets/image/oil3.jpg", "30 dt")

oil.push(oil1, oil2, oil3)



var products = []
products.push(oil, seeds, cereals)






/*function showTheListOfProducts() {
    var listOfProducts = '';
    products.flat().forEach((product) =>
        listOfProducts += ` <
        div class = "product" >
        <
        img src = $ { product.image }
        alt = "Denim Jeans"
        style = "width:100%" >
        <
        h1 > $ { product.price } < /h1> <
        p > < button onclick = "buyCereal(${product.title})"
        class = "btn btn-info" > < /p> <
        /div>

        `
    )
    $("#listOfProducts").append(listOfProducts)

}
showTheListOfProducts()*/