var timu;
//上传文件
{
fi=$('<input type="file" id="file">');
fi.prependTo($('body'));
}
//主程序
function main(){
	var ZuoTiNum=0;
	var text_ti=$('div.media-body.well.text-warning');
	number=text_ti.length;
	for(i=0;i<number;i++)
	{
		var answer,ans2;
		txt=$.trim(text_ti.eq(i).text());
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
//		sel(i,letter_number(ans2));
		console.log((i+1)+"."+ans2);
	}
	alert("一共"+number+"题，已做 "+ZuoTiNum+" 题。");
}
//导入题库,显示
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
//事件
$('#file').change(function(){
	daoti_zuo();
})