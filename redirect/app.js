const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const jobid = urlParams.get("jobid");
setTimeout(() => {
	location = "https://soundreverser.netlify.app/result/?jobid=" + jobid;
}, 10000);
