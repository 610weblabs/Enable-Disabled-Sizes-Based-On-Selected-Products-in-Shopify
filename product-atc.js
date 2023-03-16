// on load disabled if product have only single option
jQuery('.wl610-product-atc[product-options-size="1"]').closest(".collection__page-product").find(".all-var input").each(function(){
  var optionvalclass = jQuery(this).attr("class");
  var optionvalariantcheck = jQuery(this).attr("ariantcheck");
  jQuery('.wl610-product-atc[product-options-size="1"]').closest(".collection__page-product").find(".single_option").each(function(){
      var optionval = jQuery(this).attr("optionval");
      if( optionval == optionvalclass){
        if( optionvalariantcheck == 'available' ){
        }else if( optionvalariantcheck == 'not-available' ){
            jQuery(this).addClass('inactive');
        }
      }
  });
});


// on mouseover image change on collection page
jQuery(document).on("mouseover", ".single_option", function(){
  if( jQuery(this).closest(".ProductSelect-option-outer").attr("data-label") == 'color' || jQuery(this).closest(".ProductSelect-option-outer").attr("data-label") == 'Color' || jQuery(this).closest(".ProductSelect-option-outer").attr("data-label") == 'Colour' || jQuery(this).closest(".ProductSelect-option-outer").attr("data-label") == 'colour' ){
    if( !jQuery(this).hasClass("inactive") ){
      jQuery(this).closest(".ProductSelect-option-outer").find(".single_option").removeClass("active");
      jQuery(this).addClass("active");
    }
    if( jQuery(this).find("input[background-image-src]").length == 1 && jQuery(this).find("input").attr("background-image-src") != jQuery(this).closest(".collection__page-product").find(".prod-container .prod-image img").attr("src") ){
      var backgroundImageSrc = jQuery(this).find("input").attr("background-image-src");
      jQuery(this).closest(".collection__page-product").find(".prod-container .prod-image img").attr({"src": backgroundImageSrc, "srcset": backgroundImageSrc });
    }
  }

  /******************************************** PRODUCT HOVER ***********************************/
  /******************************************** FOR  DISABLED ***********************************/
  if( jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer").length != 1 ){
    var MainOuterContainerEvent = jQuery(this);
    jQuery(".all-var input").prop("checked", false);
    jQuery(this).closest(".wl610-product-atc").find('.ProductSelect-option-outer .single_option').removeClass("inactive");
    // jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer[data-label=size] label").removeClass("unavailable available inactive")
    jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer").removeClass("outer-active");
    jQuery(this).closest(".ProductSelect-option-outer").find(".single_option").removeClass("active");
    jQuery(this).addClass("active");
    jQuery(this).closest(".ProductSelect-option-outer").addClass("outer-active");
    var dataLabel = jQuery(this).closest(".ProductSelect-option-outer").attr("data-label");
  }
  // if product have 2 options with some variants
  if( jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer").length == 2 ){
      // console.log("Product Select Option 2");
      if( jQuery("#ProductSelect-option-0").attr("data-label") == "size" || jQuery("#ProductSelect-option-0").attr("data-label") == "size" ){
        var ProductSelectOption0 = jQuery(this).closest(".wl610-product-atc-container").find("#ProductSelect-option-1").find(".single_option.active input").val();
        var ProductSelectOption1 = jQuery(this).closest(".wl610-product-atc-container").find("#ProductSelect-option-0").find(".single_option.active input").val();
        var combinationTargetClass = 'input[class="'+ProductSelectOption1+'-'+ProductSelectOption0+'"]';
        console.log(ProductSelectOption1 + ' / ' + ProductSelectOption0);
      }else{
        var ProductSelectOption0 = jQuery(this).closest(".wl610-product-atc-container").find("#ProductSelect-option-0").find(".single_option.active input").val();
        var ProductSelectOption1 = jQuery(this).closest(".wl610-product-atc-container").find("#ProductSelect-option-1").find(".single_option.active input").val();
        var combinationTargetClass = 'input[class="'+ProductSelectOption0+'-'+ProductSelectOption1+'"]';
        console.log(ProductSelectOption0 + ' / ' + ProductSelectOption1);
      }

      // trigger hidden main id element
        jQuery(combinationTargetClass).prop("checked", true);
      
      // console.log(combinationTargetClass);
      // var checkState = jQuery(this).closest('.collection__page-product').find(combinationTargetClass).attr('ariantcheck');
      var optionValue = jQuery(this).attr("optionval");
      // when clicked
      jQuery(".all-var").find("input[option1="+optionValue+"]").each(function(){
          // console.log( "for "+jQuery(this).attr("option1") +", "+ jQuery(this).attr("option2") +' is '+ jQuery(this).attr("ariantcheck") );
      // when clicked on color
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'color' ) {
          
            var option2 = jQuery(this).attr("option2");
              if( option2 != '' ){
                  // console.log( "for "+jQuery(this).attr("option1") +", "+ jQuery(this).attr("option2") +' is '+ jQuery(this).attr("ariantcheck") );
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="size"] .single_option[optionval="'+option2+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      // when clicked on size
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'size' ) {
          
            var option2 = jQuery(this).attr("option2");
              if( option2 != '' ){
                  // console.log( "for "+jQuery(this).attr("option1") +", "+ jQuery(this).attr("option2") +' is '+ jQuery(this).attr("ariantcheck") );
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="color"] .single_option[optionval="'+option2+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      });
      // when clicked  
      jQuery(".all-var").find("input[option2="+optionValue+"]").each(function(){
      // when clicked on size
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'size' ) {
          
            var option1 = jQuery(this).attr("option1");
              if( option1 != '' ){
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="color"] .single_option[optionval="'+option1+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      // when clicked on color
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'color' ) {
          
            var option1 = jQuery(this).attr("option1");
              if( option1 != '' ){
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="size"] .single_option[optionval="'+option1+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      });
  }
  /******************************************** FOR  DISABLED ***********************************/
  /******************************************** PRODUCT HOVER ***********************************/
});
  jQuery(document).on("mouseleave", ".single_option", function(){
    if( (jQuery(this).closest(".ProductSelect-option-outer").attr("data-label") == 'color' || jQuery(this).closest(".ProductSelect-option-outer").attr("data-label") == 'Color' || jQuery(this).closest(".ProductSelect-option-outer").attr("data-label") == 'Colour' || jQuery(this).closest(".ProductSelect-option-outer").attr("data-label") == 'colour') && !jQuery(this).closest(".ProductSelect-option-outer").hasClass("outer-active") ){
      jQuery(this).closest(".ProductSelect-option-outer").find(".single_option").removeClass("active");
    }
});

jQuery(document).on("click", ".single_option", function(){
  
  if( jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer").length != 1 ){
    var MainOuterContainerEvent = jQuery(this);
    jQuery(".all-var input").prop("checked", false);
    jQuery(this).closest(".wl610-product-atc").find('.ProductSelect-option-outer .single_option').removeClass("inactive");
    // jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer[data-label=size] label").removeClass("unavailable available inactive")
    jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer").removeClass("outer-active");
    jQuery(this).closest(".ProductSelect-option-outer").find(".single_option").removeClass("active");
    jQuery(this).addClass("active");
    jQuery(this).closest(".ProductSelect-option-outer").addClass("outer-active");
    var dataLabel = jQuery(this).closest(".ProductSelect-option-outer").attr("data-label");
  }
  // if product have 1 options with some variants
  if( jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer").length == 1 ){
    console.log("Product Select Option 1");

    let vid = jQuery(this).attr('data-id');

    let formData = {
       'items': [{
          'id': vid,
          'quantity': 1
        }]
    };
    
    fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        document.querySelector('.js-mini-cart-trigger').click();
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    
  }
  // if product have 2 options with some variants
  if( jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer").length == 2 ){
      // console.log("Product Select Option 2");
      if( jQuery("#ProductSelect-option-0").attr("data-label") == "size" || jQuery("#ProductSelect-option-0").attr("data-label") == "size" ){
        var ProductSelectOption0 = jQuery(this).closest(".wl610-product-atc-container").find("#ProductSelect-option-1").find(".single_option.active input").val();
        var ProductSelectOption1 = jQuery(this).closest(".wl610-product-atc-container").find("#ProductSelect-option-0").find(".single_option.active input").val();
        var combinationTargetClass = 'input[class*="'+ProductSelectOption1+'-'+ProductSelectOption0+'"]';
      // trigger hidden main id element
        console.log(ProductSelectOption1 + ' / ' + ProductSelectOption0);
      }else{
        var ProductSelectOption0 = jQuery(this).closest(".wl610-product-atc-container").find("#ProductSelect-option-0").find(".single_option.active input").val();
        var ProductSelectOption1 = jQuery(this).closest(".wl610-product-atc-container").find("#ProductSelect-option-1").find(".single_option.active input").val();
        var combinationTargetClass = 'input[class*="'+ProductSelectOption0+'-'+ProductSelectOption1+'"]';
      // trigger hidden main id element
        console.log(ProductSelectOption0 + ' / ' + ProductSelectOption1);
      }
//alert(combinationTargetClass);
        // jQuery(combinationTargetClass).prop("checked", true);
        jQuery(combinationTargetClass).click();
        console.log("combinationTargetClass ==> " + combinationTargetClass);
        // setTimeout(function(){
        //   jQuery(combinationTargetClass).trigger("click");
        // }, 100);
      
      // console.log(combinationTargetClass);
      // var checkState = jQuery(this).closest('.collection__page-product').find(combinationTargetClass).attr('ariantcheck');
      var optionValue = jQuery(this).attr("optionval");
      // when clicked on color
      jQuery(".all-var").find("input[option1="+optionValue+"]").each(function(){
          // console.log( "for "+jQuery(this).attr("option1") +", "+ jQuery(this).attr("option2") +' is '+ jQuery(this).attr("ariantcheck") );
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'color' ) {
          console.log( 'Color.' );
            var option2 = jQuery(this).attr("option2");
              if( option2 != '' ){
                  // console.log( "for "+jQuery(this).attr("option1") +", "+ jQuery(this).attr("option2") +' is '+ jQuery(this).attr("ariantcheck") );
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="size"] .single_option[optionval="'+option2+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      // when clicked on size
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'size' ) {
          
            var option2 = jQuery(this).attr("option2");
              if( option2 != '' ){
                  // console.log( "for "+jQuery(this).attr("option1") +", "+ jQuery(this).attr("option2") +' is '+ jQuery(this).attr("ariantcheck") );
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="color"] .single_option[optionval="'+option2+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      // when clicked on color
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'color' ) {
          
            var option1 = jQuery(this).attr("option1");
              if( option1 != '' ){
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="size"] .single_option[optionval="'+option1+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      });
      // when clicked on size
      jQuery(".all-var").find("input[option2="+optionValue+"]").each(function(){
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'size' ) {
          console.log( 'Size.' );
            var option1 = jQuery(this).attr("option1");
              if( option1 != '' ){
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="color"] .single_option[optionval="'+option1+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      // when clicked on size
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'size' ) {
          
            var option2 = jQuery(this).attr("option2");
              if( option2 != '' ){
                  // console.log( "for "+jQuery(this).attr("option1") +", "+ jQuery(this).attr("option2") +' is '+ jQuery(this).attr("ariantcheck") );
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="color"] .single_option[optionval="'+option2+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      // when clicked on color
          if( jQuery(this).attr("ariantcheck") == 'not-available' && MainOuterContainerEvent.closest(".ProductSelect-option-outer").attr('data-label') == 'color' ) {
          
            var option1 = jQuery(this).attr("option1");
              if( option1 != '' ){
                  var dynamicSelectorForOptionDisabled = '.ProductSelect-option-outer[data-label="size"] .single_option[optionval="'+option1+'"]';
                  jQuery(MainOuterContainerEvent).closest(".wl610-product-atc").find(dynamicSelectorForOptionDisabled).removeClass("active").addClass("inactive");
              }
           }
      });
  }
  // if product have 2 options with some variants
  if( jQuery(this).closest(".wl610-product-atc").find(".ProductSelect-option-outer").length == 3 ){
      console.log("Product Select Option 3");
      var ProductSelectOption0 = jQuery("#ProductSelect-option-0").find(".single_option.active input").val();
      var ProductSelectOption1 = jQuery("#ProductSelect-option-1").find(".single_option.active input").val();
      var ProductSelectOption3 = jQuery("#ProductSelect-option-3").find(".single_option.active input").val();
  }
});