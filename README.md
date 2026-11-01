# Tensorbasis integrations

Connect your Tensorbasis account to compare competitor catalogs and prices. Hosted MCP endpoint: https://app.tensorbasis.com/api/mcp

These native manifests contain no credentials, local executables, hooks, or application source. OAuth-oriented configurations require deployed OAuth and native-client verification; publication is not a compatibility certification. Do not install a plugin and a duplicate manual server entry simultaneously.

## Claude Code

Add this public repository as a plugin marketplace using its actual published owner/repository URL, then install tensorbasis@tensorbasis-integrations. Local validation: claude plugin validate --strict ./claude. Marketplace entries resolve relative to this repository root.

## Gemini CLI

Install this public repository URL using gemini extensions install. The native gemini-extension.json is at the repository root. The repository must have topic gemini-cli-extension for gallery crawling. This targets Gemini CLI, not Antigravity.

## OpenAI / Codex

The openai directory contains canonical Agent Plugins 1.0.0 root plugin.json and mcp.json. For directory submission, ZIP the contents of openai, not its parent directory. Direct Codex connection: merge configs/codex.toml into your user config, preserve unrelated settings, then run codex mcp login tensorbasis.

## VS Code / Copilot

Merge configs/vscode.mcp.json into .vscode/mcp.json (servers wrapper). The portable configs/copilot.mcp.json uses mcpServers instead. Keep trust and per-tool approvals enabled. Do not replace your entire existing configuration.

## Authentication and verification

Authenticate using the native client's browser consent flow. Check account identity and granted permissions, initialize and list tools, then perform one safe account-scoped read. Never share tokens or administrator credentials. This package does not include a server, stdio bridge, MCPB, VSIX, or a license grant for the private Tensorbasis application.

Product and support entry: https://app.tensorbasis.com/connect

Format references: https://code.claude.com/docs/en/plugins-reference | https://developers.openai.com/plugins/build/plugins | https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/reference.md
