var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");


var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"

});


connection.connect(function (error) {
    if (error) throw error;

    console.log("connected as id " + connection.threadId + "\n"); showProducts();
});

function purchase (product, quantity){
    connection.query("UPDATE products SET stock_quantity - ? where item_id = ?", [quantity, product.item_id], function(err, res) {
        console.log("You just purchased  ", product.product_name)
        showProducts()
    })
            }

function showProducts() {
    connection.query("SELECT * FROM products", function (error, res) {
        if (error) throw error;

        console.table(res);

        promptCustomer(res);
    })

}

function promptCustomer(item) {
    inquirer.prompt([
        {
            type: "input",
            name: "buy",
            message: "What is the ID of the product you would like to buy? (Or type Quit to exit)",

        },

    ])
        .then(function (answer) {
            console.log(answer)
            if (answer.buy.toLowerCase() === "quit") {
                console.log("Come back again soon!")
                process.exit(0)
            }

            var holdId = parseInt(answer.buy);
            var product = checkDb(holdId, item);

            if (product) {
                console.log("Thank you")

                inquirer.prompt([
                    {
                        type: "input",
                        name: "amount",
                        message: "How many of this product would you like to purchase?",
                    }])

                    .then(function (data) {
                        //                 quantity > product.stock_quantity? console.log("Not enough in stock!") ?showProducts():null: console.log("test") 
                        var quantity = data.amount;

                        if (quantity > product.stock_quantity) {
                            console.log("Not enough in stock!")

                            showProducts()

                        }
                        else {
                            purchase(product, quantity)
                        }
                    })

            }
            else {
                console.log("item not in stock")
            }
        })

        
    function checkDb(holdId, item) {
        for (let index = 0; index < item.length; index++) {

            if (item[index].item_id === holdId) {
                return item[index]
            }
        }
        return null;
    }

    
}