angular.module('myControllersContainer', [])
	.controller('skylabStudents', function ($scope) {
		console.log("MiController logic...");

		var students = [
		{
			name : 'Angel',
			email: 'angel.sannicolas@gmail.com',
			github: 'https://github.com/KaeserSan',
			image:  'img/angel.JPG'
		},
		{
			name : 'Arturo',
			email: 'arturo.rubio.89.8@gmail.com',
			github: 'https://github.com/mandril888',
			image:  'img/arturo.JPG'
		},
		{
			name : 'Carl',
			email: 'carl.45.cr@gmail.com',
			github: 'https://github.com/carl32cr',
			image:  'img/carl.JPG'
		},
		{
			name : 'Leo',
			email: 'leo@leovidal.es',
			github: 'https://github.com/leovidalgithub',
			image:  'img/leo.JPG'
		},
		{
			name : 'Núria',
			email: 'soriano.nuria@gmail.com',
			github: 'https://github.com/nuria-flia',
			image:  'img/nuria.JPG'
		},
		{
			name : 'Anna',
			email: 'avilatusell@gmail.com',
			github: 'https://github.com/avilatusell',
			image:  'img/anna.JPG'
		},
		{
			name : 'Ana',
			email: 'imaginarte3d@gmail.com',
			github: 'https://github.com/Tsuna-mi',
			image:  'img/ana.JPG'
		}
	]

	$scope.students = students;

	})

