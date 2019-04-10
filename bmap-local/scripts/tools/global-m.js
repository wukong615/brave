/**
* 全局 JS
*
* @author ccq
**/

var url = location.href;
// cookie有效期
var ckObj = {ck1: 6*60, ck2: 12*60};

// 初始化内容
(function() {
	console.log('init')
})();

// 防止mui阻止A标签原链接跳转
mui("body").on("tap","a",function(){
	if(this.id != "sideMenuBtn" && this.id != "sideSearchBtn") {
		if(this.href&&this.href!="#")window.location.href=this.href;
		if(this.onclick){
			console.log(this.onclick);
			// 恢复执行
			return this.onclick();
		}
	}
});

/**
 * 重写trim方法
 * */
String.prototype.trim = function () {
	return this.replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
};

// 加载/关闭动画
function startLoadAnimate() {
	$(".zhezhao").fadeIn();
}
function endLoadAnimate() {
	$(".zhezhao").fadeOut();
}

/**
* 消息提示框
*
* @param msg 消息内容
* @param idKey 出发元素的ID
**/
function showTip(msg, bttn) {
	var notification = new NotificationFx({
		message : msg,
		layout : 'growl',
		effect : 'jelly',
		type : 'notice', // notice, warning, error or success
		onClose : function() {
			// bttn.disabled = false;
		}
	});

	// show the notification
	notification.show();
	endLoadAnimate();
}

/**
* 系统消息提示框
*
* @param txt 消息框文字[必须]
**/
function sysTipDialog(txt) {
	mui.toast(txt);
}

/**
* 系统警告消息框
*
* @param txt 消息框文字[必须]
* @param title 消息框标题[必须]
**/
function alertDialog(txt, title) {
	mui.alert(txt, title, function() {
		// console.log("close dialog");
		endLoadAnimate();
	});
}

/**
* 系统确认消息框
*
* @param txt 消息框文字[必须]
* @param title 消息框标题[必须]
* @param btnArr 按钮内容数组[必须]
* @param handle 处理函数[约定为删除函数]
* @约定: 第5个参数为当前dom对象
* @约定: 第6个参数为记录ID
**/
function confirmDialog(txt, title, btnArr, handle) {
	var args = arguments;
	mui.confirm(txt, title, btnArr, function(e) {
		if (e.index == 1) {
			if(handle && (typeof handle === "function")) {
				if(args.length == 5) {
					handle(args[4]);
				}else if(args.length == 6) {
					handle(args[4], args[5]);
				}else {
					handle();
				}
			}else {
				// console.log(handle);
			}
		} else {
			// console.log("choose cancle");
			if(typeof args[4] === "object") {
				(function($) {
					$.swipeoutClose(args[4]);
				})(mui);
			}
		}
	});
}