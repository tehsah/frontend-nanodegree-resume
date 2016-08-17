var bio = {
	"name": "Scott",
	"role": "Web Developer",
	"city": "San Francisco",
	"contacts": {
		"mobile": "925-322-2222",
		"email": "fake@gmail.com",
		"github": "https://github.com/tehsah"
	},
	"welcomeMessage": "Hi I'm Scott and I'm learning to code.",
	"skills": ["Javascript", "HTML", "CSS", "Analytics"],
	"bioPic": "images/fry.jpg"
}

var work = {
	"jobs": [{
		"title": "Director of Growth",
		"employer": "Breeze",
		"dates": "Mar 2015 - Present",
		"description": "Lead growth for the company by managing marketing, user-facing product, and analytics."
	}, {
		"title": "Senior Media Strategist",
		"employer": "Ampush",
		"dates": "Nov 2013 - Mar 2015",
		"description": "Run paid social campaigns for clients like Uber. Head analytics/product team designed to identify new ad platforms."
	}]
}

var projects = {
	"projects": [{
		"title": "Analytics and tracking",
		"dates": "Jun 2015 - Oct 2015",
		"description": "Integrated analytics systems and tracking for our onboarding funnel.",
		"images": ["https://blog.kissmetrics.com/wp-content/uploads/2015/01/2015-google-analytics-resources.jpg", "http://www.targetclick.com/wp-content/uploads/2015/08/bigstock_online_tracking_7601253.jpg"]
	}, {
		"title": "Marketing",
		"dates": "Jan 2015 - Jun 2015",
		"description": "Ran marketing campaigns for the company and put together marketing plans.",
		"images": ["http://www.couponsuck.com/wp-content/uploads/2015/10/Breeze-Car-Rental-Review-Bonus-credit-lease-Breeze-coupon-code.jpg"]
	}]
}

var education = {
	"schools": [{
		"name": "UCLA",
		"location": "Los Angeles",
		"degree": {
			"majors": ["Business Economics", "Statistics"],
			"minors": ["Accounting"]
		},
		"dates": "Sep 2006 - Jun 2010",
		"url": "http://www.ucla.edu/"
	}, {
		"name": "Amador Valley",
		"location": "Pleasanton",
		"degree": {
			"majors": ["General Education"],
			"minors": ["N/A"]
		},
		"dates": "Aug 2002 - Jun 2006",
		"url": "http://amador.pleasantonusd.net/"
	}],
	"onlineCourses": [{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": "May 2016 - Present",
		"url": "https://classroom.udacity.com/courses/ud804"
	}, {
		"title": "Intro to Statistics",
		"school": "Udacity",
		"dates": "May 2015 - May 2015",
		"url": "https://classroom.udacity.com/courses/ud804"
	}]
};

=if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HMTLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HMTLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HMTLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

var cameron = {};
cameron.job = "course dev";

var courses = 0;
while(cameron.job === "course dev") {
	makeCourse();
	courses = course + 1;
}