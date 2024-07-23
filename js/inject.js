const blocklyDiv = document.getElementById('blocklyDiv');

blocklyDiv.style.width = document.body.offsetWidth + 'px';
blocklyDiv.style.height = document.body.offsetHeight * 0.8 + 'px';

function xml2String(xmlObject) {
    return (new XMLSerializer()).serializeToString(xmlObject);
}

$.get("./block/blocks.json", function (data, status) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
        let block = data[i];
        Blockly.Blocks[block.type] = {
            init: function () {
                this.jsonInit(block);
            }
        };
    }
    $.get("./block/toolbox.xml", function (data, status) {
        var workspace = Blockly.inject(blocklyDiv, {
            toolbox: xml2String(data),
            media: './media',
            renderer: 'zelos'
        });
        workspace.addChangeListener(updateCode);
        function updateCode(event) {
            const code = Blockly.mcc.workspaceToCode(workspace);
            document.getElementById('code').value = code;
        }
    });
});