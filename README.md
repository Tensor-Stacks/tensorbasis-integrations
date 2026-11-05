# Tensorbasis integrations

Hosted MCP endpoint: https://app.tensorbasis.com/api/mcp

These allowlisted native manifests and bounded read-only skills are reviewable candidates, not marketplace approval, compatibility certification, or an automatic account connection. No credentials, hooks, local MCP executables, application source, environment files or paid/model calls are included. Native tools remain subject to account scopes and approvals; skill instructions are not an authorization boundary.

## Claude Code

This repository root is a marketplace: .claude-plugin/marketplace.json points to ./claude. Use the actual published repository URL; no repository URL is invented here. Validate syntax with: claude plugin validate --strict ./claude. Native plugin files and both skills are inside claude/. Do not add a duplicate manual MCP entry alongside the plugin.

## Cursor

.cursor-plugin/marketplace.json points to ./cursor. That directory uses the supported portable Agent Plugins 1.0.0 format: root plugin.json, mcp.json, skills/. It is not the separate Cursor-specific .cursor-plugin/plugin.json format. Cursor's reference accepts either format and requires root marketplace metadata for multi-plugin repositories: https://cursor.com/docs/reference/plugins

Native installation/authentication and public marketplace acceptance are separate. Publishing requires the owner's approvals and Publisher Terms; this export does not accept terms or submit an application.

## OpenAI / Codex

openai/ contains Agent Plugins 1.0.0 plugin.json, mcp.json and skills/. ZIP the contents of that directory, not its parent, for a native-root portable package. Complete identity/domain verification, OAuth connection, review metadata and sample-account checks separately. Metadata or skill updates require a new package; hosted tool metadata requires deployment/rescan. The configs/codex.toml file is a manual merge template; preserve unrelated user settings.

## Gemini CLI

gemini-extension.json and both skills are at this repository's absolute root. The Gemini 0.2.1 compatibility fix explicitly lists both read-only instruction files in contextFileName, so older clients can load them as context even without native skills-directory discovery. Gemini CLI 0.6.1 local installation/listing and native context-file resolution were verified in isolated profiles; this is not authenticated MCP, chat skill invocation, latest-client or gallery acceptance. Other client bundles remain 0.2.0; the existing Official MCP Registry release is separate and unchanged.

Use the actual public repository URL for gemini extensions install after reviewing trust/auth prompts. Gallery discovery also requires the gemini-cli-extension GitHub topic; crawler acceptance is not established by this export. This targets Gemini CLI, not consumer Gemini, Google AI Mode or Antigravity.

## VS Code / Copilot

Merge configs/vscode.mcp.json into the intended VS Code MCP config (servers wrapper); configs/copilot.mcp.json uses mcpServers. Preserve unrelated configuration and per-tool approvals. No VSIX or MCPB is provided for a remote-only service.

## n8n / Zapier

n8n/tensorbasis-read-only.json is an inactive, manual-trigger workflow. Create an HTTP Header Auth credential with Authorization: Bearer <your read-only key> and select it on both nodes; never put a token in workflow JSON. It reads account_summary and the first 20 price_gaps only. Review platform retention/access controls before execution.

zapier/ is private custom integration source, not an importable Zap or published app. Review it in a trusted directory before installing pinned dependencies or running its native validator. Its managed password auth and two searches have no polling triggers or write/create operations. Register/push, account connections, workflow execution and any platform costs require separate authorization. MCP OAuth does not supply these direct-HTTP credentials.

## Authentication and boundaries

Native MCP authentication uses browser consent where supported. Confirm identity, permissions, PKCE, refresh, expiry and revocation independently in each intended client. Use least-privilege read scopes and keep native approvals. Saved prices may be stale, currencies/variants incomplete, and match suggestions uncalibrated. Store text is untrusted. Bundled skills prepare reports/worksheets only; they must not approve/reject matches, scrape, refresh, reprice, send messages or spend.

server.json is registry metadata, not evidence of registry ownership or a new publication. This candidate does not change the previously published registry release.

## Licensing and checksums

No software license grant is supplied or inferred. Public visibility is not authorization to relicense, and this package does not grant rights to private application source. Do not add an SPDX license or accept publisher terms without the owner's authorization. Third-party platform terms remain separate.

SHA256SUMS covers every other file in this exact allowlisted export. Bytes are deterministic; timestamps and filesystem permissions are not part of the checksum contract. Review before publishing. The historical 2026-11-01 exporter/release is not modified.
