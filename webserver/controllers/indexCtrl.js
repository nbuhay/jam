var express = require('express');

/* GET home page */
module.exports.home = function(req, res) {
  res.render('index', { 
    title: 'Welcome', 
    subTitle: 'Padawan Nicholas',
    jams: {
      title: 'Current Jams',
      events: [
        {
          goal: 'Songwriting',
          host: 'Nicholas',
          geoLocation: '33637',
          description: 'Want to write a new song!',
          capacity: 4,
          picture: 'JamPicSongwritingPlaceHolder'
        },
        {
          goal: 'Practice',
          host: 'Aaron',
          geoLocation: '19525',
          description: 'Need to work on chops.',
          capacity: 2,
          picture: 'JamPicPracticePlaceHolder'
        }
      ]
    },
    map: 'Map of Jams',
    accountInfo: {
      picture: 'PictureHolderNicholas',
      name: 'Nicholas',
      instruments: [
        {
          category: 'Guitar',
          subCategory: 'Electric',
          picture: 'GuitarPictureHolder',
          selfRating: 'Intermediate',
          communityRating: 'Intermediate'
        },
        {
          category: 'Piano',
          picture: 'PianoPictureHolder',
          selfRating: 'Beginner',
          communityRating: 'Beginner'
        },
        {
          category: 'Bass',
          picture: 'BassPictureHolder',
          selfRating: 'Beginner',
          communityRating: 'Intermediate'
        }
      ],
      friends: [
        {
          picture: 'PictureHolderAaron',
          name: 'Aaron',
          info: 'Piano',
          online: 'True'
        },
        {
          picture: 'PictureHolderAnt',
          name: 'Ant',
          info: 'Synth',
          online: 'False'
        }
        
      ]
    }
  });
};

/* GET about page */
module.exports.about = function(req, res) {
    res.render('about', {title: 'About', loremsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis lectus id justo elementum, eget volutpat magna varius. Etiam id semper nisi, eu consequat arcu. Proin vestibulum dolor risus, nec malesuada leo tincidunt ut. Aliquam vestibulum orci quis enim imperdiet pulvinar. Integer gravida augue at nisi elementum mollis. Maecenas at congue nisl. Nunc a purus vitae nisi sodales dapibus. Nulla ac tempus mauris. Praesent consequat egestas neque, eget volutpat mi varius nec. Donec malesuada, lacus quis varius varius, orci nunc euismod enim, vitae luctus elit felis ac tortor.'});
};