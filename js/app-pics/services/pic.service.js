let PicService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/pic';

  this.getAllPics = getAllPics;
  this.addPic = addPic;
  this.addLike = addLike;

  function Pic (picObj) {
    this.url = picObj.url;
    this.title = picObj.title;
    this.about = picObj.about;
    this.heart = 'http://vignette3.wikia.nocookie.net/bindingofisaac/images/e/e3/Evil_heart.png/revision/latest?cb=20120701175625';
    this.like = 0;
  }

  function getAllPics () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addPic (picObj) {
    let p = new Pic(picObj);
    return $http.post(url, p, PARSE.CONFIG);
  }

  function addLike (picObj) {
    console.log(picObj);
    return $http.put(url + '/' + picObj.objectId, PARSE.CONFIG);
  }



};

PicService.$inject = ['$http', "PARSE"];

export default PicService;