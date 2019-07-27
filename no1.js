function data() {
return {
	"name": "Refia",
	"age" : 22,
	"address" : "Yogyakarta",
	"hobbies" : ["Browsing","Social Media","Youtube","Reading"],
	"is_married" : false,
	"list_school": [{
			"name" : "TK Pertiwi Kudus",
			"year_in" : 2001,
			"year_out":2002,
			"major" :null,
		  },
		  {
		  "name" : "SD Barongan 1 Kudus",
			"year_in" : 2002,
			"year_out":2008,
			"major" : null,
		  },
		  {
		  "name" : "SMP 1 Kudus",
			"year_in" : 2008,
			"year_out":2011,
			"major" : null,
		  },
		  {
		  "name" : "SMA 1 Kudus",
			"year_in" : 2011,
			"year_out":2014,
			"major" : "IPA",
		  },
		  {
		  "name" : "Universitas Sebelas Maret",
			"year_in" : 2014,
			"year_out":2017,
			"major" : "Informatics Engineering",
		  },
		  {
		  "name" : "Universitas AMIKOM Yogyakarta",
			"year_in" : 2018,
			"year_out": null,
			"major" : "Information Technology",
		  }],
	"skills" : [{
				"skill_name" : "java",
				"level" : "beginner"
				},
				{
				"skill_name" : "android",
				"level" : "beginner"
				},
				{"skill_name" : "php",
				"level" : "beginner"
				},
				{
				"skill_name" : "python",
				"level" : "beginner"
				},
				{
				"skill_name" : "mysql",
				"level" : "beginner"
				},
				{
				"skill_name" : "html&css",
				"level" : "beginner"
				}],
	"interest_in_coding" : true,
}
}
console.log(data());