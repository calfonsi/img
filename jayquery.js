function $(param){
	var el;
	if (typeof param === "string" || param instanceof String) {
		el = document.querySelector(param);
	} else {
		el = param;
	}
	const self = {
		//element: document.querySelector(param),
		element: el,
		html: (value)=> {
			if(value == null){
				return self.element.innerHTML;
			} else {
				self.element.innerHTML = value;
			}
		},
		on: (event, callback)=> {
			document.addEventListener(event, callback);
		},
		each: (fn)=> {
			var elements = document.querySelectorAll(param);
			for (var i = 0; i < elements.length; i++){
				fn(elements[i], i);
			}
		},
		hide: ()=>{
			self.element.style.display = "none";
		},
		show: ()=>{
			self.element.style.display = "block";
		},
		toggle: ()=>{
			if(self.element.style.display == "none"){
				self.element.style.display = "block";
			} else {
				self.element.style.display = "none";
			}
		},
		attr: (name, value)=>{
			if(value == null){
				self.element.getAttribute(name);
			} else {
				self.element.setAttribute(name, value);
			}
		},
		is: (name)=>{
			var z = 'ix' + self.element.getAttribute('class').indexOf(name);
			if(z < 0){
				return false;
			} else {
				return true;
			}
		}
	}
	return self;
}

function isString(el, attr){
	if(typeof el === 'object'){
		var z = 'ix ' + el.getAttribute('class').indexOf(attr);
	} else {
		var z = 'ix ' + el.indexOf(attr);
	}
	if(z < 0){
		return false;
	} else {
		return true;
	}
}
var varJap = {
	"file": "page_food.html",
	"appendTo": ".dump",
	"action": "include"
	};
ajaxi(varJap);	
function ajaxi(obj){
	if (obj.length !== 0) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				ajaxi_fxn(obj, this.responseText);
			}
		};
		xmlhttp.open("GET", obj.file, true);
		xmlhttp.send();
	}
}
function ajaxi_fxn(obj, data){
	if (obj.length !== 0) {
		if(obj.action == 'include'){
			document.querySelector(obj.appendTo).innerHTML = data;
			$('img').each(function(x, i){
				x.src = x.src.replace('w3images', 'inc/w3');
			});
		} else if(obj.action == 'json'){
			
		}
	}
}

/** // Example of ON in jayquery
$('a').on('click', function(e){
	e.preventDefault();
	if(e.target.nodeName == "A"){
		if($(e.target).is('load-pages')){
			varJap.file = e.target.href;
			ajaxi(varJap);	
		}
	}
});
**/


