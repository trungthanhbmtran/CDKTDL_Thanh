import fetch from 'isomorphic-unfetch';

module.exports = {
    Send_Post_RestAPI: function(url,data){
        return new Promise((resove, reject)=>{
            const res = fetch(url,{
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Accept': 'application/json',
                },
                body: JSON.stringify(data)
              });
            //reject('error');
            resove(res);
        });
    },
    Send_Get_RestAPI: function(url){
      return new Promise((resove, reject)=>{
          const res = fetch(url,{
              method: 'GET',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              }
            });
          //reject('error');
          resove(res);
      });
  },
  fetchPromised: function (url)  {
    return new Promise((resolve, reject) => {
        Send_Get_RestAPI(url, resolve, reject)
    })
},
}