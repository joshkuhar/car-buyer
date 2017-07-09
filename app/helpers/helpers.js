var difference = function(currentPrice, newPrice){
	var amountToBorrow = newPrice-currentPrice
	return amountToBorrow
}

export { difference }