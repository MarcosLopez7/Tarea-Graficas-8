// HelloPint2.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' + // attribute variable
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  gl_PointSize = 8.0;\n' +
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

function drawM(gl, a_Position, x){

    // Pass vertex position to attribute variable
    for (var i = 0.0; i < 0.4; i += 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.5, i, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    for (var i = 0.1; i > 0.0; i -= 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.5 + i, 0.4 - i, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    for (var i = 0.1; i > 0.0; i -= 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.3 - i, 0.4 - i, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }


    for (var i = 0.0; i < 0.4; i += 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.3, i, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    gl.vertexAttrib3f(a_Position, x - 0.27, 0.0, 0.0);
    gl.drawArrays(gl.POINTS, 0, 1);

}

function dramL(gl, a_Position, x){

    for (var i = 0.0; i < 0.4; i += 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.25, i, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    for (var i = 0.0; i < 0.15; i += 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.25 + i, 0.0, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    gl.vertexAttrib3f(a_Position, x - 0.07, 0.0, 0.0);
    gl.drawArrays(gl.POINTS, 0, 1);

}

function drawG(gl, a_Position, x){
    for (var i = 0.0; i < 0.4; i += 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.25, i, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    for (var i = 0.0; i < 0.2; i += 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.25 + i, 0.0, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
        gl.vertexAttrib3f(a_Position, x - 0.25 + i, 0.4, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    for (var i = 0.0; i < 0.2; i += 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.05, i, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    for (var i = 0.0; i < 0.1; i += 0.01){
        gl.vertexAttrib3f(a_Position, x - 0.15 + i, 0.2, 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

    gl.vertexAttrib3f(a_Position, x - 0.02, 0.0, 0.0);
    gl.drawArrays(gl.POINTS, 0, 1);

}

function main() {
    // Retrieve <canvas> element
    var canvas = document.getElementById('webgl');

    // Get the rendering context for WebGL
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    // Initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to intialize shaders.');
        return;
    }

    // Get the storage location of a_Position
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('Failed to get the storage location of a_Position');
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    drawM(gl, a_Position, 0.0);
    drawG(gl, a_Position, 0.025);
    dramL(gl, a_Position, 0.3);
    drawM(gl, a_Position, 0.8);
}