// ==UserScript==
// @name         FreeBitco.in AutoRoller - Premium User no Captcha
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Please use my Referal-Link https://freebitco.in/?r=40785151
// @author       https://github.com/Scarrty/FreeBitco.in
// @match        https://freebitco.in/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

  var timeout = setTimeout("location.reload(true);",3630000);
      function resetTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout("location.reload(true);",3630000);
                               }
          $(document).ready(function(){
          setInterval(function()
                      {
            //$('#free_play_form_button').trigger('click');
            if ($('#free_play_form_button').is(':visible'))
            {
                $('#free_play_form_button').trigger('click');
            }
                       },10000);
                                      }
                             );
