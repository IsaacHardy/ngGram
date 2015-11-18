let PicService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/pic';

  this.getAllPics = getAllPics;
  this.addPic = addPic;

  function Pic (picObj) {
    this.url = picObj.url;
    this.title = picObj.title;
    this.about = picObj.about;
  }

  function getAllPics () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addPic (picObj) {
    let p = new Pic(picObj);
    return $http.post(url, p, PARSE.CONFIG);
  }

};

PicService.$inject = ['$http', "PARSE"];

export default PicService;