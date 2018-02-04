// 滑动切换JS内容
// function $(id){
// 	return typeof id==='string'?document.getElementById(id):id;
// }
// window.onload=function(){
// 	var titles=$('notice-tit').getElementsByTagName('li');

// 	var divs=$('notice-con').getElementsByTagName('div');
// 	if(titles.length!=divs.length){
// 		return;
// 	}
// 	for (var i = 0; i < titles.length; i++) {
// 		titles[i].id=i;
// 		titles[i].onclick=function(){
// 			for (var j = 0; j < titles.length; j++) {
// 				titles[j].className='';
// 				divs[j].style.display='none';
// 			}
// 			this.className='select';
// 			divs[this.id].style.display='block';
// 		}
// 	}
// }

// 延时切换JS内容
// function $(id){
// 	return typeof id==='string'?document.getElementById(id):id;
// }
// window.onload=function(){
// 	var index=0;
// 	var timer=null;

// 	var lis=$('notice-tit').getElementsByTagName('li');
// 	var divs=$('notice-con').getElementsByTagName('div');

// 	if(lis.length!=divs.length)  return;

// 	for (var i = 0; i < lis.length; i++) {
// 		lis[i].id=i;
// 		lis[i].onmouseover=function(){
// 			var that=this;
// 			if(timer){
// 				clearTimeout(timer);
// 				timer=null;
// 			}
			
// 			timer=window.setTimeout(function(){
// 				for (var i = 0; i < lis.length; i++) {
// 					lis[i].className='';
// 					divs[i].style.display='none';
// 				}
// 				that.className='select';
// 				divs[that.id].style.display='block';
// 			},500);
// 		}
// 	}
// }





function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=tab;

function tab(){
	var index=0;
	var timer=null;

	var lis=$('notice-tit').getElementsByTagName('li');
	var divs=$('notice-con').getElementsByTagName('div');

	for (var i = 0; i < lis.length; i++) {
		lis[i].id=i;
		lis[i].onmouseover=function(){
			clearInterval(timer);
			changeOption(this.id);
		}

		lis[i].onmouseout=function(){
		timer=setInterval(autoPlay,2000);
		}
	}

	if(timer){
		clearInterval(timer);
		timer=null;
	}


	timer=setInterval(autoPlay,2000);

	function autoPlay(){
		index++;
		if(index>=lis.length){
			index=0;
		}
		changeOption(index);
	}

	function changeOption(curIndex){
			console.log(curIndex);
			for(var j=0; j<lis.length; j++){
			lis[j].className='';
			divs[j].style.display='none';
		}
		// console.log(index);
		lis[curIndex].className='select';
		divs[curIndex].style.display='block';
		index=curIndex;
	}
}














