var abstractPage = function() {

this.loadUrl = function() {
browser.get(this.url,8000);
return this.getLoaded();
}

this.getLoaded = function() :{
return browser.wait();
}
};

module.exports = new AbsractPage();