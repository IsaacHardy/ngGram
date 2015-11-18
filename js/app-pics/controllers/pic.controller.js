let PicController = function(PicService) {
  
  let vm = this;

  vm.addPic = addPic;

  function addPic (picObj) {
    PicService.addPic(picObj).then( (res) => {
      console.log(res);
    });
  }

};

PicController.$inject = ['PicService'];

export default PicController;