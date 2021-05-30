const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const jobid = urlParams.get("jobid");
setTimeout(() => {
	location = "http://127.0.0.1:5500/result/?jobid=" + jobid;
}, 10000);
