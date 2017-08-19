export const handle = function handle(e) {
	if (Meteor.isClient){
		alert(e.message);        			
	}
	console.log (e.message);
	throw e;
}