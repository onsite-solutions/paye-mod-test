# PAYE Modernisation Test

A scaled down version of the **PAYE Modernisation** application for use in connectivity testing.

## Configuration

A copy of the .p12 file provided by Revenue should be added to the **certs** directory.

The following parameters will also need to be changed in the _test.js_ file:

```JavaScript
var id = 999999999;
var epn = '1234567T';
var name = 'Fake Company';
var password = 'password';
```
