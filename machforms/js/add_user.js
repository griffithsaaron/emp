function highlight_permission_list(a){$("#li_"+a).removeClass("highlight_red highlight_green highlight_yellow");if($("#perm_editform_"+a).prop("checked")==true){$("#li_"+a).addClass("highlight_red")}else{if($("#perm_editentries_"+a).prop("checked")==true){$("#li_"+a).addClass("highlight_yellow")}else{if($("#perm_viewentries_"+a).prop("checked")==true){$("#li_"+a).addClass("highlight_green")}}}}function highlight_refresh_all(){$("#au_li_permissions > li").each(function(){var b=$(this).attr("id").split("_");var a=b[1];$("#li_"+a).removeClass("highlight_red highlight_green highlight_yellow");if($("#perm_editform_"+a).prop("checked")==true){$("#li_"+a).addClass("highlight_red")}else{if($("#perm_editentries_"+a).prop("checked")==true){$("#li_"+a).addClass("highlight_yellow")}else{if($("#perm_viewentries_"+a).prop("checked")==true){$("#li_"+a).addClass("highlight_green")}}}})}$(function(){$(".helpmsg").tooltip({position:"bottom center",offset:[10,20],effect:"fade",opacity:0.8,events:{def:"click,mouseout"}});$("#au_li_permissions .cb_editform,#au_li_permissions .cb_viewentries").bind("change",function(){var a=$(this).attr("id").split("_");highlight_permission_list(a[2])});$("#au_li_permissions .cb_editentries").bind("change",function(){var b=$(this).attr("id").split("_");var a=b[2];if($(this).prop("checked")===true){$("#perm_viewentries_"+a).prop("checked",true);$("#perm_viewentries_"+a).prop("disabled",true)}else{$("#perm_viewentries_"+a).prop("disabled",false)}highlight_permission_list(a)});$("#button_add_user").click(function(){if($("#button_add_user").text()!="Adding User..."){$("#button_add_user").prop("disabled",true);$("#button_add_user").text("Adding User...");$("#add_user_form").submit()}return false});$("#button_edit_user").click(function(){if($("#button_edit_user").text()!="Saving..."){$("#button_edit_user").prop("disabled",true);$("#button_edit_user").text("Saving...");$("#add_user_form").submit()}return false});$("#au_bulk_action").bind("change",function(){var a=$(this).val();if(a=="select_editform"){$("#au_li_permissions .cb_editform").prop("checked",true);$("#au_li_permissions > li").removeClass("highlight_red highlight_green highlight_yellow").addClass("highlight_red")}else{if(a=="select_editentries"){$("#au_li_permissions .cb_editentries").prop("checked",true);$("#au_li_permissions .cb_viewentries").prop("disabled",false).prop("checked",true).prop("disabled",true);highlight_refresh_all()}else{if(a=="select_viewentries"){$("#au_li_permissions .cb_viewentries").prop("checked",true);highlight_refresh_all()}else{if(a=="unselect_editform"){$("#au_li_permissions .cb_editform").prop("checked",false);highlight_refresh_all()}else{if(a=="unselect_editentries"){$("#au_li_permissions .cb_editentries").prop("checked",false);$("#au_li_permissions .cb_viewentries").prop("disabled",false);highlight_refresh_all()}else{if(a=="unselect_viewentries"){$("#au_li_permissions .cb_viewentries").not(":disabled").prop("checked",false);highlight_refresh_all()}}}}}}});$("#au_priv_administer").bind("change",function(){if($(this).prop("checked")==true){$("#au_priv_new_forms,#au_priv_new_themes").prop("checked",true);$("#au_priv_new_forms,#au_priv_new_themes").prop("disabled",true);$(".user_permissions_list").fadeOut()}else{$("#au_priv_new_forms,#au_priv_new_themes").prop("disabled",false);$(".user_permissions_list").fadeIn()}})});