var bio = {
	"name": "Scott Hanford",
	"role": "Web Developer",
	"contacts": {
		"mobile": "925-322-2222",
		"email": "hanford.scott@gmail.com",
		"github": "tehsah",
		"twitter": "@HanswerMe",
		"blog": "http://4everalpha.com",
		"location": "San Francisco, CA"
	},
	"welcomeMessage": "Hi, I'm Scott and I'm learning to code.",
	"skills": ["Javascript", "HTML", "CSS", "Tracking & Analytics", "Performance Marketing", "UI/UX Design", "SQL", "Excel", "Optimization & A/B Testing"],
	"bioPic": "images/Headshot_Scott_Hanford.jpg"
}

var work = {
	"jobs": [{
		"title": "Director of Growth",
		"employer": "Breeze",
		"location": "San Francisco, CA",
		"dates": "Mar 2015 - Present",
		"description": "Lead growth for the company by managing marketing, user-facing product, and analytics.",
		"url": "https://joinbreeze.com"
	}, {
		"title": "Senior Media Strategist",
		"location": "San Francisco, CA",
		"employer": "Ampush",
		"dates": "Nov 2013 - Mar 2015",
		"description": "Run paid social campaigns for clients like Uber. Head analytics/product team designed to identify new ad platforms.",
		"url": "http://www.ampush.com/"
	}, {
		"title": "Associate",
		"location": "Los Angeles, CA",
		"employer": "Ares Management",
		"dates": "Aug 2012 - Oct 2012",
		"description": "Analyzed investment opportunities for private equity. Managed portfolio companies and conduct strategic analysis for disposition opportunities.",
		"url": "http://aresmgmt.com/"
	}, {
		"title": "Analyst",
		"location": "Los Angeles, CA",
		"employer": "Jefferies & Co.",
		"dates": "Aug 2010 - Jun 2012",
		"description": "Completed multiple transactions in the Gaming & Leisure industries in acquisition financing, refinancing, and project financing.",
		"url": "http://www.jefferies.com/"
	}, {
		"title": "Analyst",
		"location": "New York, NY",
		"employer": "UBS",
		"dates": "Jun 2010 - Aug 2010",
		"description": "Completed UBS's Investment Banking Analyst training program in New York with Training the Street.",
		"url": "http://www.ubs.com/"
	}]
}

var projects = {
	"projects": [{
		"title": "Analytics and tracking",
		"dates": "Jun 2015 - Oct 2015",
		"description": "Integrated analytics systems and tracking for our onboarding funnel.",
		"images": ["http://blog.productcart.com/wp-content/uploads/2014/05/universal-analytics.png", "https://cdn.tutsplus.com/webdesign/uploads/legacy/tuts/363_ab/tutorial/images/goo.png"]
	}, {
		"title": "Performance Marketing",
		"dates": "Jan 2015 - Jun 2015",
		"description": "Ran marketing campaigns for the company and put together marketing plans. Developed an A/B testing and prioritization framework; disseminated learnings internally in a structured way.",
		"images": ["http://www.couponsuck.com/wp-content/uploads/2015/10/Breeze-Car-Rental-Review-Bonus-credit-lease-Breeze-coupon-code.jpg"]
	}]
}

var education = {
	"schools": [{
		"name": "UCLA",
		"location": "Los Angeles, CA",
		"degree": "Bachelors",
		"majors": ["Business Economics", "Statistics"],
		"minors": ["Accounting"],
		"dates": 2010,
		"url": "http://www.ucla.edu/"
	}, {
		"name": "Amador Valley",
		"location": "Pleasanton, CA",
		"degree": "General Education",
		"majors": ["N/A"],
		"minors": ["N/A"],
		"dates": 2006,
		"url": "http://amador.pleasantonusd.net/"
	}],
	"onlineCourses": [{
		"title": "Javascript Basics",
		"school": "Udacity",
		"date": 2016,
		"url": "https://classroom.udacity.com/courses/ud804"
	}, {
		"title": "Intro to Statistics",
		"school": "Udacity",
		"date": 2015,
		"url": "https://classroom.udacity.com/courses/ud804"
	}]
};

function displayTitle() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
}

displayTitle();

function displayContact() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(formattedBlog);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
}

displayContact();

function displayWelcome() {
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBiopic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);
}

displayWelcome();


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(val) {
		var formattedSkill = HTMLskills.replace("%data%", val);
		$("#skills").append(formattedSkill);
	});
}


function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();


function displaySchool() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedName = formattedName.replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if(education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}
	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);

		for(online in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			var formattedTitle = formattedTitle.replace("#", education.onlineCourses[online].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
			var formattedURL = formattedURL.replace("#", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedURL);
		}		
	}

}

displaySchool();


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


