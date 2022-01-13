const userName = document.getElementById("userName");
const userPwd = document.getElementById("userPwd");
const userQrmm = document.getElementById("userQrmm");

function loginYz() {
	if (userName.value.length < 6) {
		alert("用户名不得小于6位");
		return false
	} else if (userPwd.value.length < 8) {
		alert("密码不得小于8位");
		return false
	} else {
		alert("登陆成功");
		return true;
	}
}
