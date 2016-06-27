// My underscore re-implementation 
// R. Kent Moreland II - 2016
(function(){
	exports = module.exports = _;
	exports._ = _;

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







})();
