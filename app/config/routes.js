module.exports = function (app,ical) {
	app.post("/getBirthdays", function (req, res){
		ical.fromURL(req.body.link, {}, function(err, data) {
			var birthdays = []
			for (var k in data){
				if (data.hasOwnProperty(k)) {
					var ev = data[k]
					var month = ev.start.slice(4,6)
					var day = ev.start.slice(6,8)
					var d = new Date(month+" "+day)
					var lastIndex = ev.summary.lastIndexOf("'");
					var name = ev.summary.substring(0,lastIndex)
					birthdays.push({
						name: name,
						birthday: d
					});
				}
			}
			res.json(birthdays)
		});
	})
}