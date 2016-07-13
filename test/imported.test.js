// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback-connector-mongodb
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

describe('mongodb imported features', function() {
  before(function() {
    require('./init.js');
  });

  require('loopback-datasource-jugglernext/test/common.batch.js');
  require('loopback-datasource-jugglernext/test/default-scope.test.js');
  require('loopback-datasource-jugglernext/test/include.test.js');
});
