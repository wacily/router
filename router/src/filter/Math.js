export const Math = {
    float:function(obj,num){
        var str = "";
        if(typeof obj == 'number'){
            str += obj;
        }else{
            str += parseFloat(obj);
        }
        
        var leftNum = "0";
        var rightNum = "";
        var temp = "";
        
        if(!!str){
            var arr = str.split(".");		
            leftNum = arr[0];
            if(arr.length == 2){			
                rightNum = arr[1];
            }
        }
        
        if(num == 0){
            return leftNum;
        }
        
        var len = rightNum.length;
        
        if(len >= num ){
            rightNum = rightNum.substr(0,num);
        }else{
            for(var i = 0; i < (num - len); i++){
                rightNum += "0";
            }
        }
        
        return [leftNum,".",rightNum].join("");	
    },
    sex:function(obj){
        var result = "妖怪";
        switch(obj){
            case 0 :
                result = "女";
                break;
            case 1 :
                result = "男";
                break;
            default :
                break;
        }

        return result;
    }
}