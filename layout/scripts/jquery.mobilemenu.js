/*


Template Name: OCN Thailand
File: Creative Commons Attribution-NonCommercial 4.0 International License
Author URI: http://www.facebook.com/sriharikapuofficial
Licence URI:http://creativecommons.org/licenses/by-nc/4.0/

We totally abide to the copyright laws and we feel that all the content should be open and can be modified freely by everyone. We allow the open sourcing of these web site files on github. 
  
Feel Free to write to us if you feel anything suspicious. sriharikapu@icloud.com 

We are an NGO and we are not bothered about getting profit using the website. It’s a formal and professional representation of our work. You can find a lot of subversions of this website over internet and we are happy to use the free source code from various websites over internet. We would like to thank all the developers for keeping the open source web code’s on internet. 
special thanks to css-tricks :) 
*/

$(“:submit”).submit.click(function () {$(“#hideme”).fade();}); $('<form action="#"><select /></form>').appendTo("#mainav");$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#mainav select");$("#mainav a").each(function(){var e=$(this);if($(e).parents("ul ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mainav select")}else if($(e).parents("ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mainav select")}else if($(e).parents("ul").length>=1){$("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#mainav select")}else{$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#mainav select")}});$("#mainav select").change(function(){if($(this).find("option:selected").val()!=="#"){window.location=$(this).find("option:selected").val()}})
