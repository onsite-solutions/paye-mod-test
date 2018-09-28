//@ts-check
'use strict';

var Cert = require('./cert');
var client = require('./client');
var Message = require('./message');
var options = require('./options');

// Config values

var hostName = 'softwaretest.ros.ie';
var basePath = '/paye-employers/v1/rest';
var year = 2018;
var softwareName = 'OSS-ROS-TEST';
var softwareVersion = '1.0.0';

// Add Cert properties here and copy the cert to the certs directory

var id = 999999999;
var epn = '1234567T';
var name = 'Fake Company';
var password = 'password';

var cert = new Cert(id, epn, name, password);

// Lookup Payroll by Period - Parameters
var startDate = '2018-05-01';
var endDate = '2018-05-31';

var endPoint = `${basePath}/returns_reconciliation/${epn}?periodStartDate=${startDate}&periodEndDate=${endDate}&softwareUsed=${softwareName}&softwareVersion=${softwareVersion}`;

//Build the message
var message = new Message(options.options('GET', hostName, endPoint), cert);

// Send the message

SendMessge(message);

/**
 * Send the message and log the response
 * @param {Message} message
 */
async function SendMessge(message) {
  await client
    .get(message)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}
