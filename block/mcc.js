var mccGenerator = new Blockly.Generator('mcc');

mccGenerator['tp'] = function (block) {
    var value_e = mccGenerator.valueToCode(block, 'e', mccGenerator.ORDER_ATOMIC);
    var value_p = mccGenerator.valueToCode(block, 'p', mccGenerator.ORDER_ATOMIC);
    var code = '/tp '+value_e+' '+value_p;
    return code;
};

mccGenerator['entity'] = function (block) {
    var dropdown_es = block.getFieldValue('es');
    var code = dropdown_es;
    return code;
};

mccGenerator['pos'] = function (block) {
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    var text_z = block.getFieldValue('z');
    var code = x+' '+y+' '+z;
    return code;
};

mccGenerator['player'] = function (block) {
    var text_name = block.getFieldValue('name');
    var code = text_name;
    return code;
};

mccGenerator['path'] = function (block) {
    var text_id = block.getFieldValue('id');
    var text_name = block.getFieldValue('name');
    var code = text_id+':'+text_name;
    return code;
};

mccGenerator['kill'] = function (block) {
    var value_e = mccGenerator.valueToCode(block, 'e', mccGenerator.ORDER_ATOMIC);
    var code = '...;\n';
    return code;
};

mccGenerator['execute'] = function (block) {
    var value_sub_command = mccGenerator.valueToCode(block, 'sub_command', mccGenerator.ORDER_ATOMIC);
    var statements_run_command = mccGenerator.statementToCode(block, 'run_command');
    var code = '...;\n';
    return code;
};

mccGenerator['time'] = function (block) {
    var dropdown_mode = block.getFieldValue('mode');
    var text_time = block.getFieldValue('time');
    var code = '...;\n';
    return code;
};

mccGenerator['sub_command'] = function (block) {
    var text_sub_command = block.getFieldValue('sub_command');
    var value_more = mccGenerator.valueToCode(block, 'more', mccGenerator.ORDER_ATOMIC);
    var code = '...';
    return code;
};

mccGenerator['selector'] = function (block) {
    var value_e = mccGenerator.valueToCode(block, 'e', mccGenerator.ORDER_ATOMIC);
    var text_selector = block.getFieldValue('selector');
    var code = '...';
    return code;
};