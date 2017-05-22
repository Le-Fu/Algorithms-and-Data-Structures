		//判断一个数字是否为素数
var isPrime = function (num) {
	if (typeof num === 'number' && num > 1) {
		for (var i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
	return false;
}

var data = {
	"value": null,
	"left": {
		"value": null,
		"left": {
			"value": 1,
			"left": null,
			"right": null
		},
		"right": {
			"value": null,
			"left": {
				"value": 7,
				"left": null,
				"right": null
			},
			"right": {
				"value": 13,
				"left": null,
				"right": null
			}
		}
	},
	"right": {
		"value": null,
		"left": {
			"value": null,
			"left": {
				"value": 3,
				"left": null,
				"right": null
			},
			"right": {
				"value": 5,
				"left": null,
				"right": null
			}
		},
		"right": {
			"value": 3,
			"left": null,
			"right": null
		}
	}
};

var sumPrime = function (data) {
	data.value = (isPrime(data.left.value) ? data.left.value : 0) + (isPrime(data.right.value) ? data.right.value : 0);
};

// 改变data的内的value
var changeData = function fn(data) {
	if (data.left !== null && data.right !== null) {
	// if (!data.value) {
		fn(data.left);
		fn(data.right);
		// a 使所有非叶子节点的value等于值为非素数子节点的值之和（假如子节点的值为2和3,则和为5;假如子节点值为3和4，则和为3）
		sumPrime(data);
	}
	// 打印所有素数
	if (isPrime(data.value)) {
		console.log(data.value);
	}
};
changeData(data);


