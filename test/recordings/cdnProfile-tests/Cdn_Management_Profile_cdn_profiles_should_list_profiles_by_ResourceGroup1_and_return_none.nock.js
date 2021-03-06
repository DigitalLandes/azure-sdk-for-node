// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '961de473-28b5-4486-b756-299f3bf3a07a',
  'x-ms-client-request-id': 'ceaf0a4b-a28d-4704-b169-d726b5c6da54',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'db314f6e-a1e0-4c9d-a5d5-6c7f18148c0b',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223954Z:db314f6e-a1e0-4c9d-a5d5-6c7f18148c0b',
  date: 'Wed, 11 May 2016 22:39:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '961de473-28b5-4486-b756-299f3bf3a07a',
  'x-ms-client-request-id': 'ceaf0a4b-a28d-4704-b169-d726b5c6da54',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'db314f6e-a1e0-4c9d-a5d5-6c7f18148c0b',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223954Z:db314f6e-a1e0-4c9d-a5d5-6c7f18148c0b',
  date: 'Wed, 11 May 2016 22:39:54 GMT',
  connection: 'close' });
 return result; }]];