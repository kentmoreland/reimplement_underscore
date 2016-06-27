// My underscore re-implementation 
// R. Kent Moreland II - 2016
(function(){
	exports = module.exports = _;
	exports._ = _;


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




})();
