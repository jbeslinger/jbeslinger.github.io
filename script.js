function Init() {
	var b = document.body;
	b.classList.add(localStorage.getItem("theme"));
	
	if (document.getElementById("avatar") != null) {
		if (b.classList.contains("dark"))
			document.getElementById("avatar").setAttribute("src", "images/av_nite.png")
		else
			document.getElementById("avatar").setAttribute("src", "images/av_day.png")
	}

	LoadNavbar();
	LoadContainers();
}

function LoadNavbar() {
	var ul = document.getElementById('navbar');
	ul.setAttribute('class', 'navbar');
	ul.innerHTML = `
		<li style="background-color: #302020;"><img src="images/favicon-big.png"></li>
		<li style="background-color: #302020;"><img src=""></li>
		<li><a href="index.html"><img src="images/home.png"></a></li>
		<li><a href="about.html"><img src="images/about.png"></a></li>
		<li><a href="skill.html"><img src="images/skills.png"></a></li>
		<li><a href="works.html"><img src="images/work.png"></a></li>
		<li><a href="cntct.html"><img src="images/contact.png"></a></li>
		<div class="right"></div>
	`;
}

function LoadContainers() {
	var divs = document.getElementsByClassName("container");
	for (var i = 0; i < divs.length; i++) {
		divs[i].innerHTML = `
			<div class="left"></div>
			<div class="right"></div>
			<div class="top"></div>
			<div class="bottom"></div>
			<div class="top-left"></div>
			<div class="top-right"></div>
			<div class="bottom-left"></div>
			<div class="bottom-right"></div>
			` + divs[i].innerHTML;
	}
}

function ToggleDarkMode() {
	var b = document.body;
	b.classList.toggle("dark");

	if (b.classList.contains("dark"))
	{
		if (document.getElementById("avatar") != null)
			document.getElementById("avatar").setAttribute("src", "images/av_nite.png")
		localStorage.setItem("theme", "dark");
	}
	else
	{
		if (document.getElementById("avatar") != null)
			document.getElementById("avatar").setAttribute("src", "images/av_day.png")
		localStorage.setItem("theme", "lite");
	}
}