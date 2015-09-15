module.exports = {
  bind : function (app) {

 	var moment = require('moment');

  	var data =  {
  		data:{
	  		startYear: 1948,
	    	endYear: 2015,
			timelines: [
		    	{
		    		id: 1,
					name: 'Tim',
		            dob: '1976-03-06'
				},
		    	{
		    		id: 2,
					name: 'Sally',
		            dob: '1977-11-17'
				},
		    	{
		    		id: 3,
					name: 'Shawn',
		            dob: '1952-5-27'
				},
		    	{
		    		id: 4,
					name: 'Trevor',
		            dob: '1948-12-12'
				}
			]
		}

	}

	function logJSON(obj) {
	    console.log(JSON.stringify(obj, null, 2));
	}

	function createPersonTimeline(born, died) {


		if (died == '') { 
			endDate = new moment();
		} else {
			endDate = moment(died);
		};

		var startYear 	= new Date(born).getFullYear();
		var endYear 	= new Date(endDate).getFullYear();


		var result = [];

		// Add birthdays
		var birthday = moment(born);
		for(i = 0; i <= endYear - startYear; i++){
			
			var event = "";
			if (i==0){
				event = "Born " + birthday.format('LL') + "."
			} else if (i==1){
				event = "1 year old."
			} else {
				event = i + " years old."
			}

			result.push({
				date: birthday.format(),
				event: event
			});

			birthday.add(1, 'year');
		}

		// Add death event if exists
		if (died != '') { 
			result.push({
				date: endDate.format(),
				event: "Died, " + endDate.format('LL') + "."
			});
		}

		return result;
	}

	var timeline1 = createPersonTimeline('1976-03-06', '2015-12-22');

	logJSON(timeline1);

    app.get('/', function (req, res) {
     	res.render('index', data);
    });

  }
};
