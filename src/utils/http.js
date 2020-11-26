import queryString from 'querystring';
/**
 * get post
 */
export function httpGet(url){
    const result = fetch(url);
    return result;
}

export function httpPost(url,params){
    const result = fetch(url,{
        method: 'POST',
            headers:{
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json,text/plain,*/*'
            },
            body:queryString.stringify(params)
    })

    return result;
}

