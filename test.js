var timu;
//上传文件
{
fi=$('<input type="file" id="file">');
fi.prependTo($('body'));
}
//事件
$(document.getElementById("file")).change(function(){
	daoti_zuo();
})
//导入题库,做题
function daoti_zuo(){
	var reader=new FileReader;
	var file=$('#file')[0].files[0];
	reader.readAsText(file);
	reader.onload=function(e){
		timu=this.result;
		main();
	//	console.log(timu.length);
	}
}
//主程序
function main(){
	var ZuoTiNum=0;
	var text_ti=$('div.media-body.well.text-warning');
	number=text_ti.length;
	for(i=0;i<number;i++)
	{
		var answer,ans2;
		txt=text_ti[i].innerText.replace(/(^\s*)|(\s*$)/g, "");
		var zuo_you=txt.split(/[（\(]\s*[）\)]/);
		var zheng=new RegExp(zuo_you[0]+"（\\s*([A-G]+)\\s*）"+zuo_you[1]);
		answer=timu.match(zheng)
		if(!answer){
			ans2="Z";
		}
		else{
			ans2=answer[1];
			ZuoTiNum++;
		}
		sel(i,letter_number(ans2));
	//	console.log(i+ans2);
	}
	alert("一共"+number+"题，已做 "+ZuoTiNum+" 题。");
}
//字母转数字	
function letter_number(a){
	var nu="";
    for(var i=0;i<a.length;i++){
		switch(a[i]){
			case "A":nu+="1"
			break;
			case "B":nu+="2"
			break;
			case "C":nu+="3"
			break;
			case "D":nu+="4"
			break;
			case "E":nu+="5"
			break;
			case "F":nu+="6"
			break;
			case "G":nu+="7"
			break;
			case "Z":return "0"
		}
	}
	return nu;
}
//根据答案自动答题
function sel(i,ans){
	var xuan=$('div.media-body.well.text-warning').next().next()[i].getElementsByTagName('input');
	for(var j=0;j<ans.length;j++){
		if(ans!="0"){
			xuan[ans[j]-1].click();
		}
	}
}
//清空答题记录
{
inp=$(':checked');
for(var i=0;i<inp.length;i++){
	inp[i].checked=false;
}
}
