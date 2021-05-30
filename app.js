const URL = document.querySelector(".url-input");
const submit = document.querySelector(".submit");

function check() {
	if (
		URL.value == "" ||
		URL.value == null ||
		!URL.value.toLowerCase().startsWith("https://www.youtube.com/watch?")
	) {
		submit.disabled = true;
	} else {
		submit.disabled = false;
	}
}
function handleSubmit() {
	console.log("123");
	const jobID = uuid();
	// location = "https://soundreverser.netlify.app/reverse?URL=" + URL.value + "&JID=" + jobID;
	location = "http://127.0.0.1:4000/reverse?URL=" + URL.value + "&JID=" + jobID;
}

function uuid() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
