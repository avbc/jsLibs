/*
  An O(n2) sorting algorithm which moves elements one at a time into the correct position. 
  The algorithm consists of inserting one element at a time into the previously sorted part of the array, 
  moving higher ranked elements up as necessary. 

  To start off, the first (or smallest, or any arbitrary) element of the unsorted array is considered to be the sorted part.
  Although insertion sort is an O(n2) algorithm, its simplicity, low overhead, good locality of reference and efficiency make 
  it a good choice in two cases:
    (i) small n,
    (ii) as the final finishing-off algorithm for O(n logn) algorithms such as >>> mergesort and quicksort <<<
*/

function insertion_sort(arr) {
  var n = arr.length, i, j, subj;
  for (i = 0; i < n; i++) {
    subj = arr[i];
    for(j = i; j > 0 && subj < arr[j-1]; j--)
      arr[j] = arr[j-1];
    arr[j] = subj;
  }
  return arr;
}
 
var unsorted = [4, 65, 2, -31, 0, 99, 83, 782, 1];
// var unsorted = [214,749,865,874,849,133,168,8,915,786,929,776,266,-37,451,664,-623,268,410,-49,402,86,-321,-228,147,804,145,609,-892,825,316,-232,-771,817,-263,392,898,-232,743,460,959,-162,835,581,-862,-2,85,-418,-481,615,-652,-203,-814,128,-780,598,226,-846,863,230,-466,-322,-274,-261,-744,-607,-802,791,237,-876,553,-374,803,-950,-191,130,-32,-278,297,-88,-958,755,861,-278,181,803,-339,725,-942,679,-986,496,-331,40,-434,791,-449,-484,-687,336,-558,-178,-203,997,-316,-943,-147,405,-585,693,-363,-830,-505,646,324,96,431,868,-13,-883,-516,999,-382,-212,-676,420,98,990,914,-968,737,-803,-713,-606,-525,328,-761,626,-964,400,517,-370,815,293,-52,-371,817,-157,-340,-407,895,768,13,-617,-239,947,762,117,349,-405,175,203,-363,482,156,854,-748,-742,261,-338,413,24,730,850,264,-928,-411,242,-819,-371,324,606,643,81,157,115,266,331,-309,943,-921,965,-46,842,-936,934,318,-839,-902,993,303,-912,32,-985,-178,43,-767,-383,706,-797,670,-417,80,951,745,913,412,437,-995,-636,-916,113,-468,379,-358,-675,208,720,25,520,79,391,-20,543,307,390,333,26,-263,912,951,-660,8,-748,-458,-679,533,52,785,-927,-577,989,-567,855,762,601,287,600,-951,471,33,50,-358,253,-13,-180,77,-996,245,-299,-119,360,-555,-965,736,-229,366,-546,-773,911,964,990,-480,401,776,864,-363,200,-643,-327,-110,-69,494,-371,728,-955,-685,216,263,311,-813,-764,592,433,985,148,54,-566,111,632,445,-916,323,567,-675,294,-339,433,-900,382,917,204,58,-67,-435,20,-800,762,-837,762,-428,103,202,710,-188,-898,-616,704,-820,852,230,-646,244,286,-46,749,561,-381,-350,800,403,693,288,-742,587,-978,295,-487,780,220,-470,-449,50,-342,-838,-597,-5,158,-107,-73,-611,709,-308,-646,137,519,737,631,689,50,-679,-162,159,680,-180,-57,-848,617,415,-959,-993,338,-578,-81,-900,937,-932,483,25,878,224,-882,683,657,996,969,-557,-339,-722,283,386,534,48,-95,-680,-375,925,-697,-190,421,169,770,562,409,-912,893,90,-157,53,438,-639,282,-932,349,187,781,-680,-216,-230,-350,981,-570,-312,836,-405,22,29,-435,-130,-61,217,470,567,-457,96,498,-201,-386,681,-251,-818,554,-970,427,-659,-761,-443,142,223,-594,-234,735,-4,-420,632,908,840,473,967,311,359,-746,-531,-721,578,-84,130,-699,-654,-76,958,494,388,-919,-337,-715,269,288,573,942,48,-818,-17,-169,218,-655,792,-478,588,-79,-746,-519,-916,-407,316,594,740,518,224,472,-536,15,-272,-719,-540,-710,-66,-246,-457,-887,-946,814,14,-674,161,490,-103,-789,-520,15,886,-45,606,-13,57,817,-923,-717,-700,236,28,-542,-143,-260,581,93,449,-250,-582,-551,-588,533,308,661,-20,-975,-582,-436,231,-742,24,316,334,-5,927,769,-5,116,720,-317,-163,125,-132,-383,95,-630,-761,-896,689,-472,512,-813,-482,-166,695,183,523,-333,-17,-221,-985,-479,248,827,-889,693,-448,353,264,987,531,-842,-527,761,-187,673,-852,-688,566,915,620,913,763,-327,46,405,585,-627,820,-40,-785,-480,-571,879,-279,759,-740,976,7,979,822,140,-278,-632,9,-579,402,834,341,-213,512,520,80,-472,901,96,-765,-813,739,-465,-159,439,-537,773,790,976,626,684,766,-958,-863,379,245,690,-776,557,330,207,743,781,-520,-518,708,-25,-324,-442,151,354,-658,-979,-455,-330,499,770,-140,852,-568,-385,-33,-497,-408,-297,-988,942,-950,-437,-988,-347,68,-52,725,-164,-67,-250,-394,982,110,945,188,-329,577,696,-682,-487,974,-723,284,-799,-301,-379,354,960,399,-604,220,957,72,484,380,273,-494,-86,-829,779,785,-525,308,-857,213,-338,957,56,931,723,50,-723,-709,-320,694,167,-469,-346,385,-548,4,833,-956,-603,-699,-864,370,-132,61,167,879,-583,-778,191,682,-900,-981,57,327,-529,153,-169,-432,-243,-606,-673,482,-166,219,409,108,-122,-744,843,721,-409,-586,-167,-342,781,481,217,937,-910,596,-374,251,524,-619,772,-65,950,479,-353,341,240,818,512,-775,-254,-860,-310,-682,246,3,791,-611,-160,516,-366,558,805,303,-536,526,675,618,-13,-862,-956,-973,-263,-998,466,512,103,-8,171,-73,-759,-816,-746,445,-372,365,551,894,-489,45,-703,-668,-321,-953,-183,-883,681,957,259,-208,-379,-269,-876,-935,718,961,-223,436,292,979,-402,625,734,193,-972,498,17,-295,-214,726,-698,-235,727,-204,-725,-517,270,-611,896,497,135,-107,425,-853,418,965,-558,-228,649,209,-745,-267,106,-171,611,-792,-557,570,-550,-889,636,698,322,710,-64,397,869,235,900,170,142,109,24,-197,594,-557,-74,492,-104,622,-519,490,39,-426,-978,286,-671,-824,719,-386,-726,-697,-790,-627,570,348,853,491,535,-1000,-909,737,-975,139,723,430,646,-756,-196,264,748,-39,-687,-484,-13,837,269,764,-989,374,794,560,490,-920,732,646,-731,3,-227,-186,161,-157,-244,650,-273,214,-529];
console.log(insertion_sort(unsorted));

unsorted = [214,749,865,874,849,133,168,8,915,786,929,776,266,-37,451,664,-623,268,410,-49,402,86,-321,-228,147,804,145,609,-892,825,316,-232,-771,817,-263,392,898,-232,743,460,959,-162,835,581,-862,-2,85,-418,-481,615,-652,-203,-814,128,-780,598,226,-846,863,230,-466,-322,-274,-261,-744,-607,-802,791,237,-876,553,-374,803,-950,-191,130,-32,-278,297,-88,-958,755,861,-278,181,803,-339,725,-942,679,-986,496,-331,40,-434,791,-449,-484,-687,336,-558,-178,-203,997,-316,-943,-147,405,-585,693,-363,-830,-505,646,324,96,431,868,-13,-883,-516,999,-382,-212,-676,420,98,990,914,-968,737,-803,-713,-606,-525,328,-761,626,-964,400,517,-370,815,293,-52,-371,817,-157,-340,-407,895,768,13,-617,-239,947,762,117,349,-405,175,203,-363,482,156,854,-748,-742,261,-338,413,24,730,850,264,-928,-411,242,-819,-371,324,606,643,81,157,115,266,331,-309,943,-921,965,-46,842,-936,934,318,-839,-902,993,303,-912,32,-985,-178,43,-767,-383,706,-797,670,-417,80,951,745,913,412,437,-995,-636,-916,113,-468,379,-358,-675,208,720,25,520,79,391,-20,543,307,390,333,26,-263,912,951,-660,8,-748,-458,-679,533,52,785,-927,-577,989,-567,855,762,601,287,600,-951,471,33,50,-358,253,-13,-180,77,-996,245,-299,-119,360,-555,-965,736,-229,366,-546,-773,911,964,990,-480,401,776,864,-363,200,-643,-327,-110,-69,494,-371,728,-955,-685,216,263,311,-813,-764,592,433,985,148,54,-566,111,632,445,-916,323,567,-675,294,-339,433,-900,382,917,204,58,-67,-435,20,-800,762,-837,762,-428,103,202,710,-188,-898,-616,704,-820,852,230,-646,244,286,-46,749,561,-381,-350,800,403,693,288,-742,587,-978,295,-487,780,220,-470,-449,50,-342,-838,-597,-5,158,-107,-73,-611,709,-308,-646,137,519,737,631,689,50,-679,-162,159,680,-180,-57,-848,617,415,-959,-993,338,-578,-81,-900,937,-932,483,25,878,224,-882,683,657,996,969,-557,-339,-722,283,386,534,48,-95,-680,-375,925,-697,-190,421,169,770,562,409,-912,893,90,-157,53,438,-639,282,-932,349,187,781,-680,-216,-230,-350,981,-570,-312,836,-405,22,29,-435,-130,-61,217,470,567,-457,96,498,-201,-386,681,-251,-818,554,-970,427,-659,-761,-443,142,223,-594,-234,735,-4,-420,632,908,840,473,967,311,359,-746,-531,-721,578,-84,130,-699,-654,-76,958,494,388,-919,-337,-715,269,288,573,942,48,-818,-17,-169,218,-655,792,-478,588,-79,-746,-519,-916,-407,316,594,740,518,224,472,-536,15,-272,-719,-540,-710,-66,-246,-457,-887,-946,814,14,-674,161,490,-103,-789,-520,15,886,-45,606,-13,57,817,-923,-717,-700,236,28,-542,-143,-260,581,93,449,-250,-582,-551,-588,533,308,661,-20,-975,-582,-436,231,-742,24,316,334,-5,927,769,-5,116,720,-317,-163,125,-132,-383,95,-630,-761,-896,689,-472,512,-813,-482,-166,695,183,523,-333,-17,-221,-985,-479,248,827,-889,693,-448,353,264,987,531,-842,-527,761,-187,673,-852,-688,566,915,620,913,763,-327,46,405,585,-627,820,-40,-785,-480,-571,879,-279,759,-740,976,7,979,822,140,-278,-632,9,-579,402,834,341,-213,512,520,80,-472,901,96,-765,-813,739,-465,-159,439,-537,773,790,976,626,684,766,-958,-863,379,245,690,-776,557,330,207,743,781,-520,-518,708,-25,-324,-442,151,354,-658,-979,-455,-330,499,770,-140,852,-568,-385,-33,-497,-408,-297,-988,942,-950,-437,-988,-347,68,-52,725,-164,-67,-250,-394,982,110,945,188,-329,577,696,-682,-487,974,-723,284,-799,-301,-379,354,960,399,-604,220,957,72,484,380,273,-494,-86,-829,779,785,-525,308,-857,213,-338,957,56,931,723,50,-723,-709,-320,694,167,-469,-346,385,-548,4,833,-956,-603,-699,-864,370,-132,61,167,879,-583,-778,191,682,-900,-981,57,327,-529,153,-169,-432,-243,-606,-673,482,-166,219,409,108,-122,-744,843,721,-409,-586,-167,-342,781,481,217,937,-910,596,-374,251,524,-619,772,-65,950,479,-353,341,240,818,512,-775,-254,-860,-310,-682,246,3,791,-611,-160,516,-366,558,805,303,-536,526,675,618,-13,-862,-956,-973,-263,-998,466,512,103,-8,171,-73,-759,-816,-746,445,-372,365,551,894,-489,45,-703,-668,-321,-953,-183,-883,681,957,259,-208,-379,-269,-876,-935,718,961,-223,436,292,979,-402,625,734,193,-972,498,17,-295,-214,726,-698,-235,727,-204,-725,-517,270,-611,896,497,135,-107,425,-853,418,965,-558,-228,649,209,-745,-267,106,-171,611,-792,-557,570,-550,-889,636,698,322,710,-64,397,869,235,900,170,142,109,24,-197,594,-557,-74,492,-104,622,-519,490,39,-426,-978,286,-671,-824,719,-386,-726,-697,-790,-627,570,348,853,491,535,-1000,-909,737,-975,139,723,430,646,-756,-196,264,748,-39,-687,-484,-13,837,269,764,-989,374,794,560,490,-920,732,646,-731,3,-227,-186,161,-157,-244,650,-273,214,-529];
console.log(unsorted.sort());