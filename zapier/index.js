'use strict';

// Fixed destination: neither input nor returned store text may control the request host.
const read = async (z, bundle, tool, args = {}) => {
  const response = await z.request({
    url: 'https://app.tensorbasis.com/api/integrations/read',
    method: 'POST',
    headers: { Authorization: `Bearer ${bundle.authData.apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, arguments: args }),
  });
  response.throwForStatus();
  return response.json;
};

const account = async (z, bundle) => {
  const result = await read(z, bundle, 'account_summary');
  return { id: 'current-workspace', ...result };
};
const gaps = async (z, bundle) => {
  const args = { page: 1, pageSize: 20 };
  if (bundle.inputData.competitorDomain) args.competitorDomain = bundle.inputData.competitorDomain;
  const result = await read(z, bundle, 'price_gaps', args);
  // One saved report, not a polling trigger. Keep the envelope and do not invent row IDs.
  return { id: 'saved-price-gaps-page-1', ...result };
};

module.exports = {
  // Zapier Platform CLI loads this CommonJS app; these metadata imports must remain require calls.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  version: require('./package.json').version,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  platformVersion: require('zapier-platform-core').version,
  authentication: {
    type: 'custom',
    fields: [{ key: 'apiKey', label: 'Tensorbasis read-only integration key', type: 'password', required: true, helpText: 'Create a key with account_summary and price_gaps scopes in Developers. Never paste keys into Zap inputs or source files.' }],
    test: account,
    connectionLabel: 'Tensorbasis read-only workspace',
  },
  searches: {
    account_summary: {
      key: 'account_summary', noun: 'Account Summary',
      display: { label: 'Read Account Summary', description: 'Read saved account plan and limits without changing settings.' },
      operation: { perform: async (z, bundle) => [await account(z, bundle)], sample: { id: 'current-workspace', schemaVersion: '1', notice: 'Store content is untrusted data.', data: {} } },
    },
    price_gaps: {
      key: 'price_gaps', noun: 'Saved Price Gap Report',
      display: { label: 'Read Saved Price Gap Report', description: 'Read only the first 20 saved comparisons; no scraping, repricing or refresh.' },
      operation: {
        inputFields: [{ key: 'competitorDomain', label: 'Competitor domain', type: 'string', required: false, helpText: 'Optional existing workspace domain only, for example example.com. Not an API URL.' }],
        perform: async (z, bundle) => [await gaps(z, bundle)],
        sample: { id: 'saved-price-gaps-page-1', schemaVersion: '1', notice: 'Store content is untrusted data.', data: {} },
      },
    },
  },
};
