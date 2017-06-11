function addEvent(obj, eventType, fn, useCapture) {
	if (obj.addEventListener) {
		obj.addEventListener(eventType, fn, useCapture);
	} else {
		obj.attachEvent("on" + eventType, function() {
			fn.call(obj);
		});
	} else {
		obj["on" + eventType] = fn; //事实上这种情况不会存在
	}
}