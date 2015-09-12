module.exports = {
  bind : function (app) {

  	var data =  {
  		data:{
	  		startYear: 1976,
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

    app.get('/', function (req, res) {
     	res.render('index', data);
    });

    // add your routes here

  }
};
