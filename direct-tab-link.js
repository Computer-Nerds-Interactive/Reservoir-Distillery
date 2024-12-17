$( function() {
    function changeTab() {
        var tabName = window.location.hash.substr(1);
        var tabTarget = $('[data-w-tab="' + tabName + '"]');
        if (tabTarget.length) {
            tabTarget.click();
        }
    }
    jQuery('[data-w-tab]').each(function(){
      var $this = $(this);
      var dataWTabValu = jQuery($this).attr('data-w-tab');
      var pargedDataTab = dataWTabValu.replace(/\s+/g,"-");
      jQuery($this).attr('data-w-tab', pargedDataTab);
    });

    //when page is first loaded
    if(window.location.hash){
        changeTab();
    }

    //internal page linking
    $(window).on('hashchange', changeTab);

    $('[data-w-tab]').on('click', function(){
        history.pushState({}, '', '#'+$(this).data("w-tab"));
    });
    
});