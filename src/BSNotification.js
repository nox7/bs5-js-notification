class BSNotification {

	static TYPES = {
		INFO:0,
		ALERT:1,
		SUCCESS:2,
		ERROR:3
	};

	static notificationContainer;

	static{
		const container = document.createElement("div");
		container.classList.add("js-alert-notifications-container");
		document.body.append(container);

		BSNotification.notificationContainer = container;
	}

	alertType = BSNotification.TYPES.INFO;
	showTime;
	bsAlert;
	dom;
	content;

	constructor() {}

	BuildDOM(){
		const template = document.createElement("div");
		template.classList.add("js-alert-notification");
		template.classList.add("alert");
		template.classList.add("fade");
		template.innerHTML = this.content;

		if (this.alertType === BSNotification.TYPES.INFO){
			template.classList.add("alert-primary");
		}else if (this.alertType === BSNotification.TYPES.ALERT){
			template.classList.add("alert-warning");
		}else if (this.alertType === BSNotification.TYPES.ERROR){
			template.classList.add("alert-danger");
		}else if (this.alertType === BSNotification.TYPES.SUCCESS){
			template.classList.add("alert-success");
		}

		return template;
	}

	SetType(notifType){
		this.alertType = notifType;
	}

	SetContent(content){
		this.content = content;
	}

	SetShowTime(milliseconds){
		this.showTime = milliseconds;
	}

	Show(){
		this.dom = this.getDOM();
		this.bsAlert = new bootstrap.Alert(this.dom);
		BSNotification.notificationContainer.append(this.dom);
		this.dom.classList.add("show");
		setTimeout(() => {
			this.bsAlert.close();
		}, this.showTime);
	}

}

export default BSNotification;
