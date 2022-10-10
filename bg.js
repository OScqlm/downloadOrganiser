/**
* Author: Lucas Bustamante
* Edited: Otto Schultz
* Original extension: https://chrome.google.com/webstore/detail/organize-downloads-by-dat/ipjljbilkibpncgnagphiamkkdilbbki?hl=en
* My edited version on github: https://github.com/OScqlm?tab=repositories
*/

// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.downloads.onDeterminingFilename.addListener(function(item, __suggest) {

  function suggest(filename, conflictAction) {
    if(filename.split(".").pop().toLowerCase() != 'pcap') return
    __suggest({filename: filename,
               conflictAction: conflictAction,
               conflict_action: conflictAction});
    // conflict_action was renamed to conflictAction in
    // https://chromium.googlesource.com/chromium/src/+/f1d784d6938b8fe8e0d257e41b26341992c2552c
    // which was first picked up in branch 1580.
  }
  // create variable d and store the current date.
  let d = new Date();
  // store in  variable, the day, month and year. E.g. 31-5-2022
  let fileDT = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
  suggest(fileDT + '/' + item.filename, 'uniquify'); 
  return;
});


