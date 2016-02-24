var bio = {
    name: 'N\'Mah Yilla',
    role: ' Arabic, Higher Education and Technology Specialist',
    contacts: {
        email: 'ms.yilla@gmail.com',
        mobile: "240-555-5555",
        twitter: '@ms.yilla',
        github: 'nyi11a',
        location: 'Abu Dhabi, UAE, and Laurel, MD USA'
    },
    welcomeMessage: '(!مرحبا الى صفحتي) Hello and welcome to my resume page!',
    skills: [
        ' Arabic ', ' HTML ', ' CSS ', ' Program Management', ' Curriculum Development '
    ],

    biopic: 'images/me.jpg'
};

bio.display = function displaybio() {
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
        $('#skills').append(formattedSkill);
        formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
        $('#skills').append(formattedSkill);
        formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
        $('#skills').append(formattedSkill);
        formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
        $('#skills').append(formattedSkill);
    }

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').prepend(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var HTMLcontacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
    $('#topContacts').append(HTMLcontacts);
    $('#footerContacts').append(HTMLcontacts);

    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedHTMLbioPic = HTMLbioPic.replace('%data%', bio.biopic);

    $('#header').prepend(formattedRole)
        .prepend(formattedName)
        .prepend(formattedHTMLbioPic);
};

bio.display();




var education = {
    schools: [{
        name: 'Wellesley College',
        location: 'Wellesley, Massachussetts',
        degree: 'BA',
        majors: ['Middle East Studies', 'Spanish'],
        dates: '2006',
        url: "http://www.wellesley.edu/"

    }, {
        name: 'University of Michigan, Ann Arbor',
        location: 'Ann Arbor, Michigan',
        degree: 'MA',
        majors: ['Middle East and North African Studies'],
        dates: '2008',
        url: 'http://umich.edu/'
    }, {
        name: 'University of Maryland, College Park',
        location: 'College Park, Maryland',
        degree: 'MPS',
        majors: ['Arabic'],
        dates: '2012',
        url: 'http://umd.edu/'
    }],
    onlineCourses: [{
            title: 'Introduction to Programming',
            school: 'Udacity',
            date: '2015',
            url: 'http://www.udacity.com/nanodegree'
        }

    ]
};

education.display = function displayEducation() {
    $('#education').append(HTMLschoolStart);

    for (var i = 0, len = education.schools.length; i < len; i++) {

        var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
        formattedschoolName = formattedschoolName.replace('#', education.schools[i].url);

        var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);

        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);

        var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);


        $('.education-entry:last').append(formattedschoolName)
            .append(formattedLocation)
            .append(formattedDegree)
            .append(formattedDates)
            .append(formattedMajor);

    }



    $('#education').append(HTMLonlineClasses);

    for (var index = 0, leng = education.onlineCourses.length; index < leng; index++) {

        $('#education').append(HTMLschoolStart);
        var formattedclassName = HTMLschoolName.replace('%data%', education.onlineCourses[index].title);

        var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[index].school);

        var formattedonlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[index].date);

        var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[index].url);
        formattedonlineURL = formattedonlineURL.replace('#', education.onlineCourses[index].url);

        $('.onlineClasses-entry:last').append(formattedclassName)
            .append(formattedonlineSchool)
            .append(formattedonlineDate)
            .append(formattedonlineURL);
    }
};

education.display();



var work = {
    jobs: [{
            employer: 'NYU Abu Dhabi',
            title: 'Manager, Academic Enrichment',
            location: 'Abu Dhabi, UAE',
            dates: 'November 2013 - Present',
            description: 'Coordinate planning and execution of all aspects (application, selection, outreach, publicity, logistics) of academic fellow recruitment, hiring, on-boarding, orientation and off-boarding. Monitor budgets of individual program projects. Oversee development of program webpages maintenance and creation as well as other technology and design needs. Analyze findings from student and fellow survey and recruitment data to make recommendations for targeted recruitment and training strategies. Monitor and advise 40+ fellows. Design and teach survival Arabic course for university’s contract staff and counsel and guide students in university’s special college preparedness program through college admissions application process. Efforts result in successful run of program where over 500 students received academic support each year, directly aided development of adult education program where an additional 200+ contract staff receive professional development.'
        }, {
            employer: 'National Democratic Institute',
            title: 'Program Assistant',
            location: 'Washington, DC',
            dates: 'February 2013 - October 2013',
            description: 'Translated materials to and from Arabic and provided consecutive Arabic interpretation services. Monitored developments in Middle East Media. Backstopped USAID and internationally funded democracy development programs in the Middle East. Arranged travel and logistics for program staff and field consultants. Drafted and edited materials for grant proposals and reports. Efforts resulted in completion of 30+ translations of key documents, correspondence programmatic information, and successful execution of 15+ NDI workshops and events.'
        },

        {
            employer: 'Teaching Arabic as a Foreign Language Center',
            title: 'Curriculum Developer',
            location: 'Alexandria, Egypt',
            dates: 'October 2011 - May 2012',
            description: 'Applied new developments in foreign language instruction technique to evaluate existing Egyptian Arabic curricula and made recommendations for changes. Produced authentic curricula materials that reflect various cultural, grammatical and political issues in contemporary Egyptian society. Efforts resulted in creation of two, Egyptian Arabic curricula specifically for use with advanced Arabic students.'

        }, {
            employer: 'Wiltshire and Grannis LLP',
            title: 'Legal Assistant',
            location: 'Washington, DC',
            dates: 'September 2008 - September 2009',
            'description': 'Conducted legal research on issues ranging from telecommunications to non-profits while processing and reviewing documents for litigation support projects.  Completed administrative tasks including cite-checking memoranda and filings, documenting and submitting billable and lobbying hours of firm staff and organizing case binders and folders. Efforts supported W&G lawyers in providing quality legal services and the establishment of Friends of Telecom without Borders, an NGO providing phone service to refugee camps.'
        }, {
            employer: 'Harvard University Center for Middle East Studies Outreach Center',
            title: 'Assistant',
            location: 'Cambridge, MA',
            dates: 'August 2005 - August 2006',
            description: 'Supported Center programming by developing and editing K-12 curricula on the Middle East, reorganizing foreign artifacts section of library, providing day-of logistical support for workshops and cultural fairs and handling administrative tasks.  Efforts resulted in several didactic curricula kits used in K-12 schools country-wide and user-friendly item artifact classification, identification, and location system for center library.'
        }

    ]
};
work.display = function displayWork() {
    $('#workExperience').append(HTMLworkStart);

    for (var i = 0, len = work.jobs.length; i < len; i++) {

        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);


        $('.work-entry:last').append(formattedEmployerTitle)
            .append(formattedDates)
            .append(formattedLocation)
            .append(formattedDescription);
    }
};

work.display();



var projects = {
    'projects': [{
        title: 'Portfolio WebPage',
        dates: '2016',
        description: 'I replicated a design mockup in HTML and CSS and developed a responsive website that displays images, descriptions and links to each of the portfolio projects I am completing as part of Udacity the Front-End Web Developer Nanodegree.',
        images: ['http://placehold.it/350x150', 'http://placehold.it/350x150']

    }, {
        title: 'Resume Page',
        dates: '2016',
        description: 'I developed interactive resume application that reads your resume content from a JSON file and dynamically displays that content within a provided template. I used objects, functions, conditionals, and control structures to compose the content that displays on the resume.',
        'images': ['http://placehold.it/350x150', 'http://placehold.it/350x150']
    }],

    display: function displayProjects() {

        for (var i = 0, len = projects.projects.length; i < len; i++) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

            $('.project-entry:last').append(formattedTitle)
                .append(formattedDates)
                .append(formattedDescription);


            if (projects.projects[i].images.length > 0) {
                for (var index = 0; index < projects.projects.length; index++) {
                    var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[index]);
                    $('.project-entry:last').append(formattedImage);

                }
            }
        }
    }
};

projects.display();



function showmapdiv() {
    $('#mapDiv').append(googleMap);
}
showmapdiv();



$('#main').append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

inName(bio.name);