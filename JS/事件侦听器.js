const EventUtils = {
    addEvent = function(element,type,handle){
        if(element.addEventListener){
            element.addEventListener(type,handle,false)
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handle)
        }else{
            element['on'+type] = handle
        }
    },
    removeEvent = function(element,type,handle){
        if(element.removeEventListener){
            element.removeEventListener(type,element,handle)
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handle)
        }else{
            element['on'+type] = null;
        }
    },
    getEvent:function(event){
        return event || window.event;
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation()
        }
        else{
            event.cancelBubble = true
        }
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false
        }
    }
}