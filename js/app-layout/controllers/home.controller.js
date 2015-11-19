let HomeController = function(PARSE, PicService) {

  let vm = this;
  
  vm.title = 'ngGram';

  vm.getPics = getPics;
  vm.addLike = addLike;

  vm.pics = [];

  getPics();

  function getPics (picObj) {
    PicService.getAllPics(picObj).then( (res) => {
      vm.pics = res.data.results;
    });
  }

  function addLike (picObj) {
    // this.like = picObj.like;
    // PicService.addLike(picObj).then( (res) => {
    //   vm.pics = res.data.results;
    // });
  }

};

HomeController.$inject = ['PARSE', "PicService"];

export default HomeController;