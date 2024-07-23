Blockly.mcc = new Blockly.Generator('mcc');

Blockly.mcc['tp'] = function (block) {
    var value_e = Blockly.mcc.valueToCode(block, 'e', Blockly.mcc.ORDER_ATOMIC);
    var value_p = Blockly.mcc.valueToCode(block, 'p', Blockly.mcc.ORDER_ATOMIC);
    var code = '/tp '+value_e+' '+value_p;
    return code;
};

Blockly.mcc['entity'] = function (block) {
    var dropdown_es = block.getFieldValue('es');
    var code = dropdown_es;
    return code;
};

Blockly.mcc['pos'] = function (block) {
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    var text_z = block.getFieldValue('z');
    var code = x+' '+y+' '+z;
    return code;
};

Blockly.mcc['player'] = function (block) {
    var text_name = block.getFieldValue('name');
    var code = text_name;
    return code;
};

Blockly.mcc['path'] = function (block) {
    var text_id = block.getFieldValue('id');
    var text_name = block.getFieldValue('name');
    var code = text_id+':'+text_name;
    return code;
};

Blockly.mcc['kill'] = function (block) {
    var value_e = Blockly.mcc.valueToCode(block, 'e', Blockly.mcc.ORDER_ATOMIC);
    var code = '...;\n';
    return code;
};

Blockly.mcc['execute'] = function (block) {
    var value_sub_command = Blockly.mcc.valueToCode(block, 'sub_command', Blockly.mcc.ORDER_ATOMIC);
    var statements_run_command = Blockly.mcc.statementToCode(block, 'run_command');
    var code = '...;\n';
    return code;
};

Blockly.mcc['time'] = function (block) {
    var dropdown_mode = block.getFieldValue('mode');
    var text_time = block.getFieldValue('time');
    var code = '...;\n';
    return code;
};

Blockly.mcc['sub_command'] = function (block) {
    var text_sub_command = block.getFieldValue('sub_command');
    var value_more = Blockly.mcc.valueToCode(block, 'more', Blockly.mcc.ORDER_ATOMIC);
    var code = '...';
    return code;
};

Blockly.mcc['selector'] = function (block) {
    var value_e = Blockly.mcc.valueToCode(block, 'e', Blockly.mcc.ORDER_ATOMIC);
    var text_selector = block.getFieldValue('selector');
    var code = '...';
    return code;
};