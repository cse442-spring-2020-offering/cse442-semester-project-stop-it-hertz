import Vue from 'vue';
import  { mount } from '@vue/test-utils';
import App from '..src/App.vue';
import OrderForm from "../src/components/OrderForm";

//Tests Selling legal amount
var assert = require('assert');
App.btcAmount =10;
OrderForm.orderInfo = ["Sell", "Limit", 1, 10,null,"BTC","USD",0];
OrderForm.placeOrder();
assert.equal(App.checkLimitOrder(), true);
assert.equal(App.btcAmount, 0);

//Test Selling illegal amount
App.btcAmount =10;
OrderForm.orderInfo = ["Sell", "Limit", 1, 20,null,"BTC","USD",0];
OrderForm.placeOrder();
assert.equal(App.checkLimitOrder(), false);
assert.equal(App.btcAmount, 10);

//Test math
App.btcAmount =10;
OrderForm.orderInfo = ["Sell", "Limit", 1, 10,null,"BTC","USD",0];
OrderForm.placeOrder();
App.getPrice();
App.executeOrder();
var testAmount = OrderForm.orderInfo[2]-(OrderForm.orderInfo[2]*.005);
assert.equal(App.btcAmount, 0);
assert.equal(App.ordersArray[0],null);
assert.equal(App.usdAmount, testAmount*this.currentBTC);
