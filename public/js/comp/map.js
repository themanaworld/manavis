var map = function(){
  var map = {};
  var maps = {
    "0": "001-1",
    "1": "001-2",
    "2": "001-3",
    "3": "002-1",
    "4": "002-3",
    "5": "002-4",
    "6": "003-1",
    "7": "003-2",
    "8": "004-1",
    "9": "004-2",
    "10": "005-1",
    "11": "005-3",
    "12": "005-4",
    "13": "006-1",
    "14": "006-3",
    "15": "007-1",
    "16": "008-1",
    "17": "009-1",
    "18": "009-2",
    "19": "009-3",
    "20": "009-4",
    "21": "009-5",
    "22": "009-6",
    "23": "010-1",
    "24": "010-2",
    "25": "011-1",
    "26": "011-3",
    "27": "011-4",
    "28": "011-6",
    "29": "012-1",
    "30": "012-3",
    "31": "012-4",
    "32": "013-1",
    "33": "013-2",
    "34": "013-3",
    "35": "014-1",
    "36": "014-3",
    "37": "015-1",
    "38": "015-3",
    "39": "016-1",
    "40": "017-1",
    "41": "017-2",
    "42": "017-3",
    "43": "017-4",
    "44": "017-9",
    "45": "018-1",
    "46": "018-2",
    "47": "018-3",
    "48": "019-1",
    "49": "019-3",
    "50": "019-4",
    "51": "020-1",
    "52": "020-2",
    "53": "020-3",
    "54": "021-1",
    "55": "021-2",
    "56": "022-1",
    "57": "024-1",
    "58": "024-2",
    "59": "024-3",
    "60": "024-4",
    "61": "025-1",
    "62": "025-3",
    "63": "025-4",
    "64": "026-1",
    "65": "027-1",
    "66": "027-2",
    "67": "027-3",
    "68": "027-4",
    "69": "028-1",
    "70": "028-3",
    "71": "029-1",
    "72": "029-3",
    "73": "030-1",
    "74": "030-2",
    "75": "031-1",
    "76": "031-2",
    "77": "031-3",
    "78": "031-4",
    "79": "032-1",
    "80": "032-3",
    "81": "033-1",
    "82": "034-1",
    "83": "034-2",
    "84": "041-1",
    "85": "042-1",
    "86": "042-2",
    "87": "044-1",
    "88": "044-3",
    "89": "045-1",
    "90": "046-1",
    "91": "046-3",
    "92": "047-1",
    "93": "048-1",
    "94": "048-2",
    "95": "051-1",
    "96": "051-3",
    "97": "052-1",
    "98": "052-2",
    "99": "055-1",
    "100": "055-3",
    "101": "056-1",
    "102": "056-2",
    "103": "057-1",
    "104": "botcheck",
  };
  map.nameByServerID = function(serverID, date) {
    /* TODO: Merged output format suitable for converting records running under different data */
    return maps[serverID];
  }
  return map;
}();
