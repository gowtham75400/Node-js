var log = {
    info: function(info){
        console.log('information : ' + info);
    },
    warning:function(warn){
        console.log('warning : ' + warn);
    },
    error:function(err){
        console.log('error : ' + err);
    }
}

module.exports = log