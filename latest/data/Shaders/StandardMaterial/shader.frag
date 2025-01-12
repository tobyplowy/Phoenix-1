#version 460

#extension GL_EXT_nonuniform_qualifier : enable

layout (set = 1, binding = 0) uniform sampler2D[32] textures;

layout(location = 0) in vec2 inUV;
layout(location = 1) flat in int inTextureID;

layout(location = 0) out vec4 outColor;


void main() 
{
	vec4 diffuseColor = texture(textures[inTextureID], inUV);

	outColor = diffuseColor;
}
