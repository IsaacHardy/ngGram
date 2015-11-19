let isaacImage = function($state, $timeouts, PicService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      pic: '='
    },
    template: `
      <div class="imgContainer">
        <h5>{{ pic.title }}</h5>
        <img ng-src="{{ pic.url }}">
        <div class="hidden"><img ng-src="{{ pic.heart }}"><span>{{ pic.like }}</span></div>
      </div>
    `,
    link: function (s, e, a) {
      e.on('mouseover', function () {  
        e[0].childNodes[5].className = 'show';        
      });
      e.on('mouseleave', function () {  
        e[0].childNodes[5].className = 'hidden';         
      });
      e.on('click', function () {  
        PicService.addLike(s.pic).then( () => {
          s.pic.like = s.pic.like + 1;
        });
      });

    }
  };

};

isaacImage.$inject = ['$state', '$timeout', 'PicService'];

export default isaacImage;