(function ( $ ) {

    $.flatjson = function(obj) {
		var result = {};
		$.flat('',obj,result);
		return result;
    };
	
	$.flat = function(flatkey,obj,result){
		
		if( obj == null ){ return; }
		$.each(obj, function(key, val) {
			
			var newflatkey = '';
			if(flatkey == '' ){
				newflatkey = key;
			}else {
				
				var isNormalArray = false;
				if (key === parseInt(key, 10)){
					isNormalArray = true;
				}
				
				if( isNormalArray == true  ){
					newflatkey = flatkey + '[' + key+']';
				}else{
					newflatkey = flatkey + '.' + key;
				}
				
			}
			
			if( typeof(val) === 'object'  ){
				$.flat(newflatkey,val,result);		
			}else{
				result[newflatkey] = val;
				return;
			}
		});
	};

})( jQuery );

