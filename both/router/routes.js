FlowRouter.route('/register',{
    action: function () {
        FlowLayout.render('layout', {sidebar: '', main:'register', cart:''});
    }
});

FlowRouter.route('/signin',{
    action: function () {
        FlowLayout.render('layout', {sidebar: '', main:'signin', cart:''});
    }
});

FlowRouter.route('/signout',{
    action: function () {
        Meteor.logout(function (err) {
            if(!err){
                FlowRouter.go('signin');
            }
        });
    }
});

FlowRouter.route('/checkout',{
    action: function () {
        FlowLayout.render('layout', {sidebar: '', main:'checkout', cart:''});
    }
});

FlowRouter.route('/profile',{
    action: function () {
        FlowLayout.render('layout', {sidebar: 'sidebar', main:'profile', cart:'cart'});
    }
});

FlowRouter.route(['/', '/home'],{
    action: function () {
        console.log("Running action render templates into layouts.");
        FlowLayout.render('layout', {sidebar: 'sidebar', main:'home', cart:'cart'});
    }
});


FlowRouter.route('/category/:categoryName',{
    subcriptions:function(params){
        console.log("SUBSCRIBE", params);
        //make sure subscriptions exist
    },
    triggersEnter:function(params){
        console.log("ENTER", params);
        //check that user is logged in
    },
    triggersExit:function(params){
        console.log("EXIT", params);
        //check there is no unsaved data
    },
    action: function () {
        FlowLayout.render('layout', {sidebar: 'sidebar', main:'category', cart:'cart'})
    }
})