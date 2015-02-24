## Write EBML

A simple EBML writer. Currently targets node.js 0.11.

    var writeEBML = require('write-ebml');

    // Define a tag:
    var myTag = writeEBML.tag(0x1234, '8');

    // Some standard tags:
    var T = writeEBML.standardTags;

    // Write a document:
    var buf = writeEBML([
        T.EBML([
            T.EBMLVersion(1),
            T.EBMLReadVersion(1),
            T.EBMLMaxIDLength(4),
            T.EBMLMaxSizeLength(8),
            T.DocType('demo'),
            T.DocTypeVersion(1),
            T.DocTypeReadVersion(1)
        ]),
        myTag('Hello world!')
    ]);

### License

[GPLv3](LICENSE)

© 2015 — Stéphan Kochen
