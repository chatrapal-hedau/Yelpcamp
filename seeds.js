var mongoose        = require('mongoose'),
    Campground      = require('./models/campground'),
    Comment         = require('./models/comment');

var data =[
        {   name: "Daisy Mountain",
            image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
            description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
        },
        {   name: "Nghtout camp",
            image: "https://images.unsplash.com/photo-1501724326152-7a82bf5eae72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60",
            description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
        },
        {   name: "Sunset Camp",
            image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
        }
]
function seedDB(){
         //Remove campgrounds
    Campground.remove({}, function(err){
        // if (err){
        //     console.log(err);
        // }
        // console.log('removed Campgrounds');

        //  //Add a few Campgrounds 
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if (err){
        //             console.log(err)
        //         }
        //         else{
        //             console.log("Added a campground");
        //             //Add a few Comments
        //             Comment.create(
        //                     {
        //                         text:"Its same For all Campgrounds don't worry about it",
        //                         author:"It's me"
        //                     },function(err, comment){
        //                         if (err){
        //                             console.log(err)
        //                         }
        //                         else{
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created a comment")
        //                         }
        //                 });
        //         }
        //     })
        // });
    });
}

 module.exports = seedDB;