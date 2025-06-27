// @ts-check

const codeElement = /** @type { HTMLDivElement } */ (document.querySelector("div#code"))


codeElement.innerText = ".."

let currentlyLoading = false

import { code } from "./calc.js"

const refreshCode = () => {
    if (currentlyLoading) return
    currentlyLoading = true
    codeElement.innerText = "..."
    codeElement.className = 'isloading'
    navigator.geolocation.getCurrentPosition(
        position => {
            currentlyLoading = false
            const [ x, y ] = [ position.coords.latitude, position.coords.longitude ]
            const [ xcode, ycode ] = code(x, y)
            //codeElement.innerText = `${x}:${y} - ${xcode}.${ycode}`
            codeElement.innerText = `${xcode}-${ycode}`
            codeElement.className ='isloading'
            codeElement.className = 'isloaded'
            try { navigator.vibrate([33, 9, 333]) } catch (err) {}
        },
        error => {
            currentlyLoading = false
            alert("Lütfən lokasiya xidmətinə icazə verin. \n\n\n" + error.code)
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 3000
        }
    );
    //return () => navigator.geolocation.clearWatch(watchId);
}

refreshCode()

codeElement.addEventListener("touchstart", () => {
    refreshCode()
})


// to compress;
//
// lr            l r       lr           ;
// llr          ll _r      llr          ;
// lrr          0l rr      0lrr         ;
// llrr         ll rr      llrr         ;
// lrrr        00l rrr     00lrrr       ;
// llrrr       0ll rrr     0llrrr       ;
// lllr        lll _0r     lll0r        ;
// lllrr       lll _rr     lllrr        ;
// lllrrr      lll rrr     lllrrr       ;
// lrrrr      000l rrrr    000lrrrr     ;
// llrrrr     00ll rrrr    00llrrrr     ;
// lllrrrr    0lll rrrr    0lllrrrr     ;
// llllr      llll _00r    llll00r      ;
// llllrr     llll _0rr    llll0rr      ;
// llllrrr    llll _rrr    llllrrr      ;
// llllrrrr   llll rrrr    llllrrrr     ;
//
//
//
//
//
//
// left = right 
// a.k => ak (even)
//
// left = right + 1 
// ab.k  => ab0k (odd)
//
// left = right + 2
// abc.k => ab0k (even) (0k can't be standalone so it's not left = right )
//
// left = right + 3
// abcd.k => abcd000k (even) (same logic with + 2)
//
// left + 1 = right
// a.bc => 0abc (odd)

