//business logic
function pizzaCalc(toppings,sizes,cost){
  this.sizes= sizes
  this.toppings= toppings
  this.cost= cost
}

pizzaCalc.prototype.Pizzatime = function(){
  let cost=0
  if(this.sizes === 'Small'){
    cost += 2
  }
  if(this.sizes === 'Medium'){
    cost += 3
  }
  if(this.sizes === 'Large'){
    cost += 10
  }
  if(this.toppings ==='none'){
    cost += 0
  }
  if(this.toppings === 'Chicken'){
    cost += 1
  }
  if(this.toppings === 'Pepperoni'){
    cost += 1
  }
  if (this.toppings === 'Steak'){
    cost += 2
  }
  return cost
}

