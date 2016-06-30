// My underscore re-implementation 
// R. Kent Moreland II - 2016
(function(){
	module.exports = _ = {};



	// *** Each ***
// _.each takes a collection and an iterator function and calls the iterator(value, key, collection) for each element of collection. It should accept both arrays and objects
_.each = function(collection, callback){
	if(Array.Array(collection)){
		for(var i = 0; i < collection.length; i++){
			callback(collection[i], i, collection);
		}else{
			for(var prop in collection){
				callback(collection[prop], prop, collection);
			}//endfor
		}//endfor
	}//endif
}//endeach



	// *** indexOf ***
// _.indexOf takes an array and a target value. It returns the index at which value can be found in the array, or -1 if value is not present in the array. Use _.each in your implementation
_.indexOf = function(collection, target){
	var result; 
	_.each(collection, function(item, index){
		if(item === target){
			result = item
		}else{
			result = -1
		}//endif
	})//endeach
	return result; 
}//endindexof

	// *** Filter ***
// _.filter takes a collection and a predicate function, also known as a truth test. Return an array of all elements of the collection that pass the truth test, ie return a truthy value from the predicate function. Consider reusing _.each here.

_.filter = function(collection, callback){
	results = [];
	each(collection, function(item){
		if(callback(item)){
			results.push(item);
		}//endif
	})//endeach
	return results; 
}//endfilter

// _.reject works similiarly to _.filter but returns an array of all elements that don't pass the truth test. Use _.filter in your implementation.
_.reject = function(collection, callback){
	results = [];
	_.filter(collection, function(item){
		if(!callback(item)){
			results.push(item);
		}//endif
		return results;
	})//endfilter
}

// _.uniq produces a duplicate free version of an array. Use _.filter and _.indexOf in your implementation.
_.uniq = function(collection, callback){
	results = [];
	_.filter(collection, function(item){
		if(_.indexOf(results, item) < 0){
			results.push(item);
		} 
		return results; 
	})//endfilter
	return results; 
}//enduniq

// _.map works a lot like _.each. It takes a collection and iterator, and calls the iterator on every element of the array. However, _.map returns an results array of the transformed values.
_.map = function(collection, callback){
	var results = []
	_.each(collection, function(item){
		results.push(callback(item));
	}//endeach
	return results; 
}//endmap

})();
