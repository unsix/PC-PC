

$(function(){
	//index  搜索
	$('#button-index').click(function(){
		alert('未找到该城市！')
	});
	//推荐
	$('#tab-1 li').click(function(){
		i = $(this).index(),
		$(this).addClass('tab-1').siblings().removeClass('tab-1');
	});
	//
	$('#tab-2 li  ').click(function(){
		t = $(this).index(),
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	//订购弹窗
	$('.reserve').click(function(){
		alert('正在跳转 拼命加载中！')
	})
	
	//ajax加载更多推荐旅游、、
	$('#ajax-1').click(function(){
		$.ajax({
			type:"get",
			url:"ajax-1.html",
			success : function(response,status,xhr){
				$('#box-1').html(response);
			}
		})
	});
		$(document).ajaxStart(function(){
		$('#ajax-1').show();
	}).ajaxStop(function(){
		$('#ajax-1').hide()
	});
	
	
	
	//表单操作 单程往返tab
		
		$('#form-1 li').click(function(){
			
			 a=$(this).index(),
			
			$("#con-form .con-form").eq(a).show().siblings().hide();
			$(this).addClass("mark").siblings().removeClass('mark ')
			
		});
		
	//机票城市tab
	$('#tab-city li').click(function(){
		
		b = $(this).index(),
		
		$('.new .con-table').eq(b).show().siblings().hide();
		$(this).addClass('active_1').siblings().removeClass('active_1')
		
	});
	
	//ajax 加载航班
		$('#ajax-2').click(function(){
		$.ajax({
			type:"get",
			url:"ajax-2.html",
			data:$('').serialize(),
			success : function(response,status,xhr){
				$('#dp-1').html(response);
			}
		})
	});
		$(document).ajaxStart(function(){
		$('#ajax-2').show();
	}).ajaxStop(function(){
		$('#ajax-2').hide()
	});
	
})