app.directive('func',function(){
	return {
		restrict: 'EA',
		templateUrl: 'app/view/func.html',
		controller: 'funcController',
		link: function(scope,ele,attr){
			//list是四个标题
			scope.list = ['火锅','附近商家','智能排序','筛选'];
			//flist 是 火锅下面的列表
			scope.flist = [
				{
					name: '全部',
					type: '全部'
				},
				{
					name: '甜点饮品',
					type: '甜点'
				},
				{
					name: '生日蛋糕',
					type: '生日蛋糕'
				},
				{
					name: '火锅',
					type: '火锅'
				},
				{
					name: '自助餐',
					type: '自助餐'
				},
				{
					name: '小吃快餐',
					type: '小吃快餐'
				}
			]
			//order 是 智能排序下面的列表
			scope.order = [
				{
					name: '智能排序',
					type: null
				},
				{
					name: '离我最近',
					type: null
				},
				{
					name: '好评优先',
					type: 'evaluate'
				},
				{
					name: '人气最高',
					type: 'popularity'
				}
			]
			var uli = document.getElementsByTagName('li'); //获取li
			var mark = document.getElementsByClassName('mark');//获取下拉页
			//点击标题时显示
			scope.fn = function(index){ 
				for(var j=0;j<mark.length;j++){
					mark[j].style.display = 'none';
				}
				mark[index].style.display = 'block';
			}
			//用来做筛选 或 排序
			scope.fn1 = function(str){
				//隐藏
				for(var j=0;j<mark.length;j++){
					mark[j].style.display = 'none';
				}
				if(str == undefined) return; //如果==undefined  就不做任何操作
				if(str.length>5){
					scope.orderB = str;  // 排序
				}else{
					scope.fliTer = str; //筛选
				}
			}
		}
	}
})