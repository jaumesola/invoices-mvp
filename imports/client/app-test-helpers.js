export const logResult = function logResult(err, okMessage) {
    if (err) console.log('ERROR ' + err);
    else console.log( 'OK ' + okMessage);
}