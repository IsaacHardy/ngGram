let isaacImage = function($state) {
  
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
      </div>
    `,
    link: function (s, e, a) {
      e.on('click', function () {
        console.log('Yay!');
      });
    }
  };

};

isaacImage.$inject = ['$state'];

export default isaacImage;