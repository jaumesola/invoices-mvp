
// returns an object with a subset of fields (properties) for the database
export const docFromObject = function docFromObject(object, fields) {
	var doc = {};
	fields.forEach( x => { doc[x] = object[x] });
	return doc;
}