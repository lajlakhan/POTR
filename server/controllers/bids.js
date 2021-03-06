console.log('bids.js');


var mongoose = require('mongoose'),
	Item = require('../models/item.js'),
	Package = require('../models/package.js'),
	Category = require('../models/category.js'),
	Bid = require('../models/bid.js'),
	User = require('../models/user.js');


function BidsController(){

	this.index = function(req,res){
		console.log('BidsController index');
		Bid.find({}, function(err, bids) {
    		// This is the method that finds all of the bids from the database
	    	if(err) {
	      		console.log('something went wrong from database');
	    	}
	    	else { 
	      		console.log('successfully loaded bids!');
	      		console.log(bids); 
	      		        
	        	
	        	res.json(bids);
	        }
        })  // ends Bid.find
       
	}; // ends this.index
 
	
	
	this.new = function(req,res){
		// this would bring up the new bid form screen, (possibly unnecessary and will be handled by React)
		console.log('BidsController new');
	};

	this.create = function(req,res){
		console.log('BidsController create');
		
    
	    console.log(req.body);
	    Bid.create({amount: req.body.amount, _user: req.body.user, _package: req.body.package},  function(err, result){
	    	 

	      if(err){
	        console.log('bid create-err');
	      }
	      else{
	        res.json(result);
	      }
	    });
	};


	this.show = function(req,res){
		console.log('BidsController show');
		// this gets the single bid screen (if we want it and if not handled independently by React)
		Bid.findById(req.params.id, function(err, result){
			if(err){
	        console.log('bid show-err');
	      }
	      else{
	        res.json(result);
	      }
	    });
	}
  
}


module.exports = new BidsController(); 
