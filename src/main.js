//user logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import pizzaCalc from './src/second.js';


$(document).ready(function() {
  $('form.orderForm').submit(function(event) {
    event.preventDefault();
    const sizesOptions = $("#sizes").find(":selected").text();
    const toppingsOptions = $("#toppings").find(":selected").text();
    const orderAmount = $("#amount").val()
    const newPizza = new Pizza (sizesOptions, toppingsOptions, orderAmount)

    const grandTotal = $("#totalCost").val()
    const currentAmount = Pizza.pizzaCalc()
  });
});