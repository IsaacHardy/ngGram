let isaacImage = function($state, $timeouts) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      pic: '='
    },
    template: `
      <div class="imgContainer">
        <h5>{{ pic.title }}</h5>
        <img src="{{ pic.url }}">
        <div class="hidden"><img src="{{ pic.heart }}"><span>{{ pic.like }}</span></div>
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
        s.pic.like = s.pic.like + 1;
      });

    }
  };

};

isaacImage.$inject = ['$state', '$timeout'];

export default isaacImage;