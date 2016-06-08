var express = require('express');

/* GET home page */
module.exports.home = function(req, res) {
  res.render('index', { 
    title: 'Welcome', 
    subTitle: 'Hyoshi - Natural Rhythm',
    jams: {
      title: 'Jam Listings',
      events: [
        {
          host: 'Nicholas',
          type: 'Songwriting',
          zip: '33637'
        },
        {
          host: 'Aaron',
          type: 'Practice',
          zip: '19525'
        }
      ]
    },
    map: 'Map of Jams',
    accountInfo: {
      picture: 'Picture Holder',
      name: 'Nicholas',
      info: 'Guitar'
    }
  });
};

/* GET about page */
module.exports.about = function(req, res) {
    res.render('about', {title: 'About', loremsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis lectus id justo elementum, eget volutpat magna varius. Etiam id semper nisi, eu consequat arcu. Proin vestibulum dolor risus, nec malesuada leo tincidunt ut. Aliquam vestibulum orci quis enim imperdiet pulvinar. Integer gravida augue at nisi elementum mollis. Maecenas at congue nisl. Nunc a purus vitae nisi sodales dapibus. Nulla ac tempus mauris. Praesent consequat egestas neque, eget volutpat mi varius nec. Donec malesuada, lacus quis varius varius, orci nunc euismod enim, vitae luctus elit felis ac tortor.'});
};