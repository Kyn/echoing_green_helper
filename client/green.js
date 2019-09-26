UI.registerHelper('session', function(name) {
    return Session.get(name);
});

Template.layout.rendered = function () {

  var date = new Date(Date.UTC(2019, 9, 16, 18, 0, 0 ));
  var now = new Date();
  var diff = (date.getTime()/1000) - (now.getTime()/1000);

  var clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
  console.log(date);
};

Template.layout.events({
  'keypress textarea, keyup textarea': function (event) {
    function count(){
    var val = $.trim($(event.target).val()), // Remove spaces from b/e of string
      chars = val.length,
      parent = $(event.target).parents('.form-group');
      limit = $(event.target).data('limit');
      parent.find('.help-block').html( chars +' / '+ limit);
      if (chars > limit) {
        parent.addClass('has-error');
      } else {
        parent.removeClass('has-error');
      }
    }
    count();
  },
  'blur textarea, blur input': function (event) {
    var id = event.target.id;
    var val = $(event.target).val();
    Session.setPersistent(id, val);
  },
  'click .js-partnerships': function (event) {
    $('.partnerships').toggle();
  }
});

