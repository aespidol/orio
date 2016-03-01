orioApp.controller("orioController", function($location, orioFactory){
	var that = this

	that.birthdays = []

	that.getCalendar = function (){
		ical = {}
		ical.link = that.link.replace("webcal", "http")
		that.link = ""
		orioFactory.getBirthdays(ical, function(data){
			var calendar = [
				that.capricorn = [],
				that.aquarius =[],
				that.pisces = [],
				that.aries = [],
				that.taurus = [],
				that.gemini = [],
				that.cancer = [],
				that.leo = [],
				that.virgo = [],
				that.libra = [],
				that.scorpio = [],
				that.sagittarius = []
			]

			for (x in data){
				var d = new Date(data[x].birthday);
				if(d >= new Date("12 22")){
					that.capricorn.push(data[x])
				}
				else if(d <= new Date("01 19")){
					that.capricorn.push(data[x])
				}
				else if(d >= new Date("01 20") && d <= new Date("02 18")){
					that.aquarius.push(data[x])
				}
				else if(d >= new Date("02 19") && d <= new Date("03 20")){
					that.pisces.push(data[x])
				}
				else if(d >= new Date("03 21") && d <= new Date("04 19")){
					that.aries.push(data[x])
				}
				else if(d >= new Date("04 20") && d <= new Date("05 20")){
					that.taurus.push(data[x])
				}
				else if(d >= new Date("05 21") && d <= new Date("06 20")){
					that.gemini.push(data[x])
				}
				else if(d >= new Date("06 21") && d <= new Date("07 22")){
					that.cancer.push(data[x])
				}
				else if(d >= new Date("07 23") && d <= new Date("08 22")){
					that.leo.push(data[x])
				}
				else if(d >= new Date("08 23") && d <= new Date("09 22")){
					that.virgo.push(data[x])
				}
				else if(d >= new Date("09 23") && d <= new Date("10 22")){
					that.libra.push(data[x])
				}
				else if(d >= new Date("10 23") && d <= new Date("11 21")){
					that.scorpio.push(data[x])
				}
				else if(d >= new Date("11 22") && d <= new Date("12 21")){
					that.sagittarius.push(data[x])
				}
			}
			// that.data[0].pop()
			var total = 0
			for (y in calendar){
				that.data[0].push(calendar[y].length)
				total += calendar[y].length
			}
			console.log(total)
		})
	}
  that.labels = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', "Virgo", "Libra", "Scorpio", "Sagittarius"];
  that.series = ['Series A'];

  that.data = [
    []
  ];
  that.doughnut = that.data[0]
})