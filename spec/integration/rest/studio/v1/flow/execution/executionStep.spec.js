'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('ExecutionStep', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        flowSid: 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        executionSid: 'FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://studio.twilio.com/v1/Flows/<%= flowSid %>/Executions/<%= executionSid %>/Steps')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps?PageSize=50&Page=0',
              'page': 0,
              'first_page_url': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'steps'
          },
          'steps': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        flowSid: 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        executionSid: 'FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://studio.twilio.com/v1/Flows/<%= flowSid %>/Executions/<%= executionSid %>/Steps/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'execution_sid': 'FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'name': 'incomingRequest',
          'context': {},
          'transitioned_from': 'Trigger',
          'transitioned_to': 'Ended',
          'date_created': '2017-11-06T12:00:00Z',
          'date_updated': null,
          'url': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps/FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'step_context': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps/FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Context'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
