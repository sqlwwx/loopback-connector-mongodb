require('./init.js');
var ds = getDataSource({
  url: 'mongodb://wwx:wwx@localhost:27017/abc'
});

describe('mongodb connect with mongodb://wwx:wwx@localhost:27017/abc', function() {
  var Customer = ds.createModel('customer', { seq: { type: Number, id: true },
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

