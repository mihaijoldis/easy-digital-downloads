!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=65)}({0:function(e,t){e.exports=jQuery},65:function(e,t,n){(function(e,t){var n={init:function(){this.revoke_api_key(),this.regenerate_api_key(),this.create_api_key(),this.recount_stats()},revoke_api_key:function(){e(document.body).on("click",".edd-revoke-api-key",(function(e){return confirm(edd_vars.revoke_api_key)}))},regenerate_api_key:function(){e(document.body).on("click",".edd-regenerate-api-key",(function(e){return confirm(edd_vars.regenerate_api_key)}))},create_api_key:function(){e(document.body).on("submit","#api-key-generate-form",(function(t){var n=e('input[type="text"][name="user_id"]');n.css("border-color","#ddd");var r=n.val();if(r.length<1||0===r)return n.css("border-color","#ff0000"),!1}))},recount_stats:function(){e(document.body).on("change","#recount-stats-type",(function(){var t=e("#edd-tools-recount-form"),n=e("option:selected",this).data("type"),r=e("#recount-stats-submit"),o=e("#tools-product-dropdown");if(t.find(".notice-wrap").remove(),r.removeClass("button-disabled").attr("disabled",!1),o.hide(),e(".edd-recount-stats-descriptions span").hide(),"recount-download"===n)o.show(),o.find(".edd-select-chosen").css("width","auto");else if("reset-stats"===n){t.append('<div class="notice-wrap"></div>'),t.find(".notice-wrap").html('<div class="notice notice-warning"><p><input type="checkbox" id="confirm-reset" name="confirm_reset_store" value="1" /> <label for="confirm-reset">'+edd_vars.reset_stats_warn+"</label></p></div>"),e("#recount-stats-submit").addClass("button-disabled").attr("disabled","disabled")}else o.hide(),o.val(0);e("#"+n).show()})),e(document.body).on("change","#confirm-reset",(function(){e(this).is(":checked")?e("#recount-stats-submit").removeClass("button-disabled").removeAttr("disabled"):e("#recount-stats-submit").addClass("button-disabled").attr("disabled","disabled")})),e("#edd-tools-recount-form").submit((function(t){t.preventDefault();var n=e("#recount-stats-type").val(),r=e(this),o=e("option:selected",this).data("type");if("reset-stats"===o){if(e("#confirm-reset").is(":checked"))return!0;d=!0}r.find(".notice-wrap").remove(),r.append('<div class="notice-wrap"></div>');var i=r.find(".notice-wrap"),d=!1;(null!==n&&0!==n||(i.html('<div class="updated error"><p>'+edd_vars.batch_export_no_class+"</p></div>"),d=!0),"recount-download"===o)&&(0===e('select[name="download_id"]').val()&&(i.html('<div class="updated error"><p>'+edd_vars.batch_export_no_reqs+"</p></div>"),d=!0));if(d)return r.find(".button-disabled").removeClass("button-disabled"),!1}))}};t(document).ready((function(e){n.init()}))}).call(this,n(0),n(0))}});
//# sourceMappingURL=edd-admin-tools.js.map