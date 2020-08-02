require('dotenv').config();
var express       = require("express"),
    app           = express(),
	bodyParser    = require("body-parser"),
	methodOverride= require('method-override'),
	mongoose      = require("mongoose"),
	passport 	  = require('passport'),
	LocalStrategy = require('passport-local'),
	flash		  = require('connect-flash'),
	Campground    = require("./models/campground"),
	Comment       = require('./models/comment'),
	User 		  =require('./models/user.js'),
	keys		  = require('./keys.js'),
	seedDB        = require('./seeds');
	
	//Requiring Routes
var campgroundRoutes = require('./routes/campgrounds'),
	commentRoutes    = require('./routes/comments'),
	indexRoutes		 = require('./routes/index');

// seedDB();   //Seed the database
	
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use(methodOverride('_method'));

//map global promise - to get rid of warning
mongoose.Promise =global.Promise;

//connect to mongoose
mongoose.connect(keys,{
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected..."))
.catch(err => console.log(err))
	 
//Passport Configuration 
app.use(require("express-session")({
	secret : "Once Again",
	resave : false,
	saveUninitialized : false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res, next){
	res.locals.currentUser = req.user;
	res.locals.error	   = req.flash('error');
	res.locals.success	   = req.flash('success');
	next();
});

app.use('/', indexRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);



var PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));