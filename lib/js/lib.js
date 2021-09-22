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

// 현재 날짜와 비교하여 같은 날이면 시간 반환, 다른 날이면 날짜 반환(ex. 게시판 작성일)
function cmpTimeStamp(date) {
	let nowDate = getTodayDate();
	let dataDate = getDataDate(date);

	// 오늘 날짜와 데이터의 날짜가 같은 경우
	if (nowDate === dataDate) {
		return date.substr(11);
	}
	else {
		return date.substr(0, 10);
	}
}