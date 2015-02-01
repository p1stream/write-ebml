var native = require('./build/Release/ebml.node');

exports = module.exports = native.writeEBML;

var tag = exports.tag = function(id, type) {
    var b = new Buffer(4);
    b.writeUInt32BE(id, 0);
    if (id <= 0xFF)
        b = b.slice(3, 4);
    else if (id <= 0xFFFF)
        b = b.slice(2, 4);
    else if (id <= 0xFFFFFF)
        b = b.slice(1, 4);
    else if (id > 0xFFFFFFFF)
        throw new Error('Invalid ID');

    return function(val, sizeUnknown) {
        return [b, type, val, sizeUnknown];
    };
};

exports.standardTags = {
    EBML: tag(0x1A45DFA3, 'm'),
    EBMLVersion: tag(0x4286, 'u'),
    EBMLReadVersion: tag(0x42F7, 'u'),
    EBMLMaxIDLength: tag(0x42F2, 'u'),
    EBMLMaxSizeLength: tag(0x42F3, 'u'),
    DocType: tag(0x4282, 's'),
    DocTypeVersion: tag(0x4287, 'u'),
    DocTypeReadVersion: tag(0x4285, 'u')
};
