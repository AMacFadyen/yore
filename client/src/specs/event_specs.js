var assert = require("assert")
var Event = require("../event.js")

describe( "Event", function(){

  var testEvent;

  beforeEach(function(){

    testEvent = new Event("Battle of Montgomery's Tavern");
  });

  it("should have a name", function(){
    assert.strictEqual(testEvent.name, "Battle of Montgomery's Tavern")
  });
  xit("should have a description");
  xit("should have a date");
  xit("should have a choices array")

 // function(){
 //    assert.strictEqual(recordStore.name, "Big Al's Records");
 //  });
});
