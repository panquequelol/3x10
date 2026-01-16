import { useEffect, useRef } from "react";

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) {
      console.warn("WebGL 2.0 not supported");
      return;
    }

    // Vertex shader source
    const vertexShaderSource = `#version 300 es
precision mediump float;
layout(location = 0) in vec4 a_position;
void main() { gl_Position = a_position; }`;

    // Fragment shader source
    const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;

out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));
  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);

float getBayerValue(vec2 uv) {
  ivec2 pos = ivec2(mod(uv, 2.0));
  int index = pos.y * 2 + pos.x;
  return float(bayer2x2[index]) / 4.0;
}

void main() {
  float t = .5 * u_time;
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  
  // Pixelization
  float pxSize = 1.80 * u_pixelRatio;
  vec2 pxSizeUv = gl_FragCoord.xy;
  pxSizeUv -= .5 * u_resolution;
  pxSizeUv /= pxSize;
  uv = floor(pxSizeUv) * pxSize / u_resolution.xy + .5 - .5;
  
  // Pattern UV
  float r = 0.00 * PI / 180.;
  mat2 rot = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 shape_uv = uv + vec2(0.00, 0.00);
  shape_uv *= u_resolution.xy / u_pixelRatio / 1.25;
  shape_uv = rot * shape_uv + .5;
  vec2 ditheringNoise_uv = uv * u_resolution;
  
  // Simplex Noise
  shape_uv *= .001;
  float shape = 0.5 + 0.5 * getSimplexNoise(shape_uv, t);
  shape = smoothstep(0.3, 0.9, shape);
  
  float dithering = getBayerValue(pxSizeUv) - 0.5;
  float res = step(.5, shape + dithering);
  
  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  vec3 color = fgColor * res + bgColor * (1. - u_colorFront.a * res);
  float opacity = u_colorFront.a * res + u_colorBack.a * (1. - u_colorFront.a * res);
  
  fragColor = vec4(color, opacity);
}`;

    function compileShader(
      gl: WebGL2RenderingContext,
      type: number,
      source: string
    ) {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    function createProgram(
      gl: WebGL2RenderingContext,
      vertexShader: WebGLShader,
      fragmentShader: WebGLShader
    ) {
      const program = gl.createProgram();
      if (!program) return null;

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program linking error:", gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }

      return program;
    }

    // Compile shaders
    const vertexShader = compileShader(
      gl,
      gl.VERTEX_SHADER,
      vertexShaderSource
    );
    const fragmentShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    if (!vertexShader || !fragmentShader) {
      console.error("Failed to compile shaders");
      return;
    }

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) {
      console.error("Failed to create program");
      return;
    }

    // Create fullscreen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, "a_position");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const pixelRatioLocation = gl.getUniformLocation(program, "u_pixelRatio");
    const colorBackLocation = gl.getUniformLocation(program, "u_colorBack");
    const colorFrontLocation = gl.getUniformLocation(program, "u_colorFront");

    function resizeCanvas() {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }
    }

    function hexToRgba(hex: string, alpha = 1.0) {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;
      return [r, g, b, alpha];
    }

    // Colors: verde limón (#dfff5c) and dark green (#132318)
    const colorFront = hexToRgba("#dfff5c", 0.4);
    const colorBack = hexToRgba("#132318", 0.0);

    let startTime = Date.now();
    let animationFrameId: number;

    function render() {
      resizeCanvas();

      const currentTime = (Date.now() - startTime) / 1000.0;
      const pixelRatio = window.devicePixelRatio || 1;

      gl.useProgram(program);

      // Set up attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Set uniforms
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(pixelRatioLocation, pixelRatio);
      gl.uniform4fv(colorBackLocation, colorBack);
      gl.uniform4fv(colorFrontLocation, colorFront);

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    }

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="webgl-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
