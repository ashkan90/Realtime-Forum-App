<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Home Page</title>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
</head>
<body>
	<div id="app">
		<v-app>
			<home></home>
		</v-app>
	</div>
	
</body>

<script src="{{ asset('js/app.js') }}"></script>
</html>