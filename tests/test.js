module.exports = {
  tags: ['google'],
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .windowMaximize()
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Google 信件')
      .pause(3000)
      .clearValue('input[type=text]')
      .pause(3000)
      .setValue('input[type=text]', 'Google翻譯')
      .moveToElement('input[type=button].lsb', 10, 10)
      .pause(6000)
      .assert.visible('div', 'Google翻譯')
      .waitForElementVisible('input[type=submit]', 2000)
      .click('div#sbse0')
      .pause(3000)
      .assert.containsText('ol#rso h3.r a', 'Google 翻譯')
      .getValue('input#lst-ib', function(result) {
            elementValue = result.value;
      })
      .perform(function(client, done) {
        console.log('all done!');
        console.log('elementValue', elementValue);
        // potentially other async stuff going on
        // on finished, call the done callback
        done();
      })
      .end();
  }
};