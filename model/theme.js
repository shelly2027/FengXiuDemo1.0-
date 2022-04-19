import {config} from "../config/config";
import {Http} from "../utils/http";

class Theme {
    static getHomeLocationA(callback){
        Http.request({
            url:'v1/theme/by/names',
            data:{
                names:'t-1'
            },
            callback:data=>{
                callback(data);
            }
        })
    }
}

export {
    Theme
}
