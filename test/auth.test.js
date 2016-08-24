require('./init.js');
var ds1 = getDataSource({
  url: 'mongodb://test:password@ds013956.mlab.com:13956/wwxtest'
});
var ds2 = getDataSource({
  host: 'ds013956.mlab.com',
  database: 'wwxtest',
  username: 'test',
  password: 'password',
  port: 13956
});

describe('mongodb connect with mongodb://test:password@ds013956.mlab.com:13956/wwxtest', function() {
  var Customer = ds1.createModel('customer', { seq: { type: Number, id: true },
    name: String, emails: [String], age: Number });

  before(function(done) {
    Customer.deleteAll(done);
  });

  it('should allow custom name for the id property for create', function(done) {
    Customer.create({
      seq: 1,
      name: 'John1',
      emails: ['john@x.com', 'john@y.com'],
      age: 30,
    }, function(err, customer) {
      customer.seq.should.equal(1);
      Customer.create({
        seq: 2,
        name: 'John2',
        emails: ['john2@x.com', 'john2@y.com'],
        age: 40,
      }, function(err, customer) {
        customer.seq.should.equal(2);
        done(err, customer);
      });
    });
  });
});

describe('mongodb connect with username,password', function() {
  var Customer = ds1.createModel('customer', { seq: { type: Number, id: true },
    name: String, emails: [String], age: Number });

  before(function(done) {
    Customer.deleteAll(done);
  });

  it('should allow custom name for the id property for create', function(done) {
    Customer.create({
      seq: 1,
      name: 'John1',
      emails: ['john@x.com', 'john@y.com'],
      age: 30,
    }, function(err, customer) {
      customer.seq.should.equal(1);
      Customer.create({
        seq: 2,
        name: 'John2',
        emails: ['john2@x.com', 'john2@y.com'],
        age: 40,
      }, function(err, customer) {
        customer.seq.should.equal(2);
        done(err, customer);
      });
    });
  });
});

