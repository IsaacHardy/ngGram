let HomeController = function(PARSE, PicService) {

  let vm = this;
  
  vm.title = 'Home Page';

  vm.getPics = getPics;

  vm.pics = [];

  getPics();

  function getPics (picObj) {
    PicService.getAllPics(picObj).then( (res) => {
      console.log(res);
      vm.pics = res.data.results;
    });
  }

};

HomeController.$inject = ['PARSE', "PicService"];

export default HomeController;