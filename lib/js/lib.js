// 데이터 요청 함수
function requestData(url, param) {
	let deferred = $.Deferred();

	try {
		$.ajax({
			url: url,
			type: "post",
			data: param,
		}).done(function (result) {
			deferred.resolve(JSON.parse(result));
		});

	} catch (e) {
		deferred.reject(e);
	}

	return deferred.promise();
}

// 현재 시간을 구하는 함수 yyyy-mm-dd hh:mm:ss 형태로 (DB의 datetime형태랑 동일)
function getTimeStamp(date) {
	let d = new Date(date);
	let s =
		leadingZeros(d.getFullYear(), 4) + '-' +
		leadingZeros(d.getMonth() + 1, 2) + '-' +
		leadingZeros(d.getDate(), 2) + ' ' +

		leadingZeros(d.getHours(), 2) + ':' +
		leadingZeros(d.getMinutes(), 2) + ':' +
		leadingZeros(d.getSeconds(), 2);

	return s;
}